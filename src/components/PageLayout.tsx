import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="pt-32 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
