"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector =
  ".page-intro, .content-section, .case-section, .directory-section, .channel-hero, .project-preview, .content-card";

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    elements.forEach((element) => {
      element.dataset.reveal = "";
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
        element.classList.add("is-visible");
      }
    });

    document.documentElement.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
