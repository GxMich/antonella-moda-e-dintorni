'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ComponentProps, MouseEvent } from 'react';

let pending: (() => void) | null = null;

/** Called by MotionRoot once the new route has rendered. */
export function resolvePendingTransition() {
  if (!pending) return;
  const resolve = pending;
  pending = null;
  // Not requestAnimationFrame: rendering is paused while a view transition waits
  // for its DOM update, so a rAF callback would never run (deadlock until timeout).
  resolve();
}

type Props = ComponentProps<typeof Link> & { href: string };

/**
 * A Link that wraps client navigation in the View Transitions API, so a product
 * photo can morph from its card into the product page. Browsers without the API,
 * modified clicks and reduced-motion users get an ordinary navigation.
 */
export default function TransitionLink({ href, onClick, ...props }: Props) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!('startViewTransition' in document) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const current = window.location.pathname.replace(/\/$/, '');
    if (current.endsWith(href.replace(/\/$/, '')) && href !== '/') return;
    event.preventDefault();
    const transition = document.startViewTransition(() => new Promise<void>((resolve) => {
      pending = resolve;
      router.push(href);
      // Never leave the page frozen if the route takes too long.
      window.setTimeout(() => { if (pending === resolve) { pending = null; resolve(); } }, 1200);
    }));
    // A skipped or interrupted transition is not an error for the visitor.
    transition.ready.catch(() => {});
    transition.finished.catch(() => {});
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
