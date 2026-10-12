'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** The wall quote "writes itself" word by word as it crosses the viewport. */
export default function QuoteFill({ text, id }: { text: string; id?: string }) {
  const root = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!root.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(root.current.querySelectorAll('.qw'), { opacity: 0.22 }, {
      opacity: 1,
      stagger: 0.08,
      ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top 82%', end: 'bottom 45%', scrub: 0.4 },
    });
  }, { scope: root });

  return (
    <p ref={root} id={id}>
      <span className="visually-hidden">{text}</span>
      {text.split(' ').map((word, index) => <span className="qw" aria-hidden="true" key={index}>{word} </span>)}
    </p>
  );
}
