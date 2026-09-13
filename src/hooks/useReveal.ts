import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to any element with `reveal`, `reveal-scale`,
 * `reveal-left`, or `reveal-right` classes when it scrolls into view.
 * Returns a ref to attach to a container; observes all `.reveal*` descendants.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const elements = root.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
