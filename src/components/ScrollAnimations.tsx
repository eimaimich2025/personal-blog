'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((el) => {
        // Reset the animation state
        el.classList.remove('visible');
        observer.observe(el);
      });
    };

    // Initial observation
    observeElements();

    // Re-observe when pathname changes (navigation)
    const timeoutId = setTimeout(() => {
      observeElements();
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
