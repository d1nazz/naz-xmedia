import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import GlobalMotionBackground from './GlobalMotionBackground';

interface PageLayoutProps {
  children: ReactNode;
}

const SITE_ORIGIN = 'https://nazxmedia.com';

const INDEXABLE_CANONICALS: Record<string, string> = {
  '/': `${SITE_ORIGIN}/`,
  '/services': `${SITE_ORIGIN}/services`,
  '/case-studies': `${SITE_ORIGIN}/case-studies`,
  '/about': `${SITE_ORIGIN}/about`,
  '/contact': `${SITE_ORIGIN}/contact`,
};

const NOINDEX_ROUTES = new Set(['/privacy-policy', '/fulfillment-policy']);

function syncDocumentSeo(pathname: string) {
  const canonical = document.querySelector('link[rel="canonical"]');
  const robots = document.querySelector('meta[name="robots"]');
  const canonicalHref = INDEXABLE_CANONICALS[pathname];

  if (canonicalHref) {
    const link = (canonical as HTMLLinkElement | null) ?? document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalHref);
    if (!link.parentNode) document.head.appendChild(link);
    robots?.remove();
    return;
  }

  canonical?.remove();

  if (NOINDEX_ROUTES.has(pathname)) {
    const meta = (robots as HTMLMetaElement | null) ?? document.createElement('meta');
    meta.setAttribute('name', 'robots');
    meta.setAttribute('content', 'noindex, follow');
    if (!meta.parentNode) document.head.appendChild(meta);
    return;
  }

  robots?.remove();
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    syncDocumentSeo(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative bg-transparent">
      <GlobalMotionBackground />
      <div className="relative z-[1] flex flex-col flex-1 min-h-screen">
        <ScrollToTop />
        <Navigation />
        <main className="pt-32 flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
