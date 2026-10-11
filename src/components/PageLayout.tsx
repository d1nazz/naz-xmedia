import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import GlobalMotionBackground from './GlobalMotionBackground';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
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
