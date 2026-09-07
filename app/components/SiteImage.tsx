import Image from 'next/image';
import { assetPath } from '../site';

type SiteImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

/**
 * One predictable image primitive for all locally hosted editorial assets.
 * Keep paths relative to /public in content.ts; this component preserves the
 * GitHub Pages base path and prevents layout shifts with Next's fill mode.
 */
export default function SiteImage({ src, alt, sizes, priority = false }: SiteImageProps) {
  return <Image src={assetPath(src)} alt={alt} fill sizes={sizes} priority={priority} />;
}
