'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SiteImage from '../SiteImage';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The site's one authored moment: scrolling "walks you in". The fuchsia frame
 * (the pink-lacquered wardrobe of the shop) opens until the boutique fills
 * the screen, then the address and opening status appear.
 * Without JS or with reduced motion the section is simply the final state.
 */
export default function BoutiqueEntrance({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = root.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    section.classList.add('is-scrubbed');
    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: () => `top ${document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0}px`,
        end: 'bottom bottom',
        scrub: 0.6,
        invalidateOnRefresh: true,
        // Address and buttons stay out of reach (keyboard, screen readers) until they appear.
        onUpdate: (self) => section.classList.toggle('is-revealed', self.progress > 0.6),
      },
    });
    // Only CSS custom properties on the section are tweened: React can re-render
    // the children (live opening status) without losing the animation state.
    timeline
      .fromTo(section, { '--open': 0, '--zoom': 1.28 }, { '--open': 1, '--zoom': 1, duration: 0.62, ease: 'power1.inOut' }, 0)
      .fromTo(section, { '--hint': 1 }, { '--hint': 0, duration: 0.1 }, 0.02)
      .fromTo(section, { '--scrim': 0 }, { '--scrim': 1, duration: 0.22 }, 0.5)
      .fromTo(section, { '--reveal': 0 }, { '--reveal': 1, duration: 0.24, ease: 'power2.out' }, 0.64)
      .to({}, { duration: 0.12 });
    return () => section.classList.remove('is-scrubbed', 'is-revealed');
  }, { scope: root });

  return (
    <section ref={root} className="entrance" aria-labelledby="entrance-title">
      <div className="entrance-sticky">
        <div className="entrance-frame" aria-hidden="true" />
        <div className="entrance-photo">
          <SiteImage src="/images/boutique/interno-consolle-rosa.webp" alt="L’interno della boutique: manichini vestiti, stender e la consolle barocca rosa" sizes="100vw" />
        </div>
        <div className="entrance-scrim" aria-hidden="true" />
        <p className="entrance-hint" aria-hidden="true">Scorri ed entra</p>
        <div className="entrance-copy">{children}</div>
      </div>
    </section>
  );
}
