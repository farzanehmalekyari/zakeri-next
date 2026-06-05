"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
const MIN_VISIBLE_RATIO = 0.24;

type Rect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

function getViewportRect(): Rect {
  return {
    bottom: window.innerHeight,
    height: window.innerHeight,
    left: 0,
    right: window.innerWidth,
    top: 0,
    width: window.innerWidth,
  };
}

function toRect(rect: DOMRect): Rect {
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width,
  };
}

function intersectRect(a: Rect, b: Rect): Rect | null {
  const left = Math.max(a.left, b.left);
  const right = Math.min(a.right, b.right);
  const top = Math.max(a.top, b.top);
  const bottom = Math.min(a.bottom, b.bottom);
  const width = right - left;
  const height = bottom - top;

  if (width <= 0 || height <= 0) return null;

  return { bottom, height, left, right, top, width };
}

function getVisibleRatio(rect: Rect, clip: Rect) {
  const visible = intersectRect(rect, clip);
  if (!visible) return 0;

  return (visible.width * visible.height) / Math.max(rect.width * rect.height, 1);
}

function syncGroup(group: HTMLElement) {
  const cards = Array.from(group.querySelectorAll<HTMLElement>("[data-mobile-hover]")).filter(
    (card) => card.closest("[data-mobile-hover-group]") === group,
  );

  if (cards.length === 0) return;

  const viewport = getViewportRect();
  const groupRect = toRect(group.getBoundingClientRect());
  const clip = intersectRect(viewport, groupRect) ?? viewport;
  const axis = group.dataset.mobileHoverAxis === "x" ? "x" : "y";
  const clipCenter = axis === "x" ? clip.left + clip.width / 2 : clip.top + clip.height / 2;
  const clipSize = Math.max(axis === "x" ? clip.width : clip.height, 1);

  let activeCard: HTMLElement | null = null;
  let activeScore = 0;

  for (const card of cards) {
    const rect = toRect(card.getBoundingClientRect());
    const visibleRatio = getVisibleRatio(rect, clip);
    const cardCenter = axis === "x" ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
    const distance = Math.min(Math.abs(cardCenter - clipCenter) / (clipSize / 2), 1);
    const score = visibleRatio * 1.4 + (1 - distance) * 0.6;

    if (visibleRatio >= MIN_VISIBLE_RATIO && score > activeScore) {
      activeCard = card;
      activeScore = score;
    }
  }

  for (const card of cards) {
    if (card === activeCard) {
      card.dataset.mobileActive = "true";
    } else {
      delete card.dataset.mobileActive;
    }
  }
}

function clearActiveCards() {
  document.querySelectorAll<HTMLElement>("[data-mobile-active]").forEach((card) => {
    delete card.dataset.mobileActive;
  });
}

export function MobileHoverActivator() {
  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    let frame = 0;

    const sync = () => {
      frame = 0;

      if (!media.matches) {
        clearActiveCards();
        return;
      }

      document.querySelectorAll<HTMLElement>("[data-mobile-hover-group]").forEach(syncGroup);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(sync);
    };

    const observer = new MutationObserver(schedule);
    const scrollOptions: AddEventListenerOptions = { capture: true, passive: true };

    window.addEventListener("scroll", schedule, scrollOptions);
    window.addEventListener("resize", schedule, { passive: true });
    media.addEventListener("change", schedule);
    observer.observe(document.body, { childList: true, subtree: true });

    schedule();
    const initialSync = window.setTimeout(schedule, 250);

    return () => {
      window.clearTimeout(initialSync);
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
      observer.disconnect();
      clearActiveCards();
    };
  }, []);

  return null;
}
