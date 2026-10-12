'use client';

import { Children, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * "Visti in boutique" as a clothing rack: a rail with hangers. On desktop the
 * section pins and vertical scroll slides the rack sideways; on every device
 * the pieces swing on their hooks with scroll speed, then settle.
 */
export default function Rack({ children, label }: { children: React.ReactNode; label: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rack = root.current;
    if (!rack || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const track = rack.querySelector<HTMLElement>('.rack-track')!;
    const items = gsap.utils.toArray<HTMLElement>('.rack-item', rack);
    const swingTo = items.map((item) => gsap.quickTo(item, 'rotation', { duration: 0.5, ease: 'power3.out' }));
    let settle: gsap.core.Tween | null = null;

    const swing = (velocity: number) => {
      const angle = gsap.utils.clamp(-7, 7, velocity / -260);
      settle?.kill();
      swingTo.forEach((to, index) => to(angle * (0.75 + (index % 3) * 0.15)));
      settle = gsap.to(items, { rotation: 0, duration: 1.6, ease: 'elastic.out(1, 0.32)', delay: 0.18, overwrite: 'auto' });
    };

    const media = gsap.matchMedia();
    media.add('(min-width: 900px)', () => {
      rack.classList.add('is-pinned');
      const distance = () => Math.max(0, track.scrollWidth - rack.clientWidth);
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: rack.closest('section') ?? rack,
          start: () => `top ${document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0}px`,
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (self) => { if (Math.abs(self.getVelocity()) > 40) swing(self.getVelocity()); },
        },
      });
      return () => rack.classList.remove('is-pinned');
    });
    media.add('(max-width: 899px)', () => {
      let last = track.scrollLeft;
      let lastTime = performance.now();
      const onScroll = () => {
        const now = performance.now();
        const velocity = ((track.scrollLeft - last) / Math.max(16, now - lastTime)) * 1000;
        last = track.scrollLeft; lastTime = now;
        if (Math.abs(velocity) > 60) swing(velocity * 0.6);
      };
      track.addEventListener('scroll', onScroll, { passive: true });
      return () => track.removeEventListener('scroll', onScroll);
    });
    return () => media.revert();
  }, { scope: root });

  return (
    <div ref={root} className="rack">
      <div className="rack-rail" aria-hidden="true" />
      <div className="rack-track" tabIndex={0} role="region" aria-label={label}>
        {Children.map(children, (child) => (
          <div className="rack-item">
            <svg className="rack-hook" viewBox="0 0 40 46" aria-hidden="true"><path d="M20 44V30M20 30c-6 0-9-4-9-8.5S14.6 13 20 13s8.5 3.6 8.5 7.6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><path d="M5 44h30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
