import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20 min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          {/* Glitchy 404 effect */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-black tech-glow-strong animate-pulse">404</h1>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black opacity-20 blur-sm animate-pulse" style={{ animationDelay: '0.1s' }}>
              404
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 scan-line">System Error</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist in our digital infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button
                size="lg"
                className="text-base px-8 py-6 font-bold uppercase tracking-wider group"
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Return Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="text-base px-8 py-6 font-bold uppercase tracking-wider group border-border/50"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          {/* Tech decoration */}
          <div className="mt-12 flex items-center justify-center gap-2 opacity-30">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="w-1 h-1 bg-white rounded-full" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-white to-transparent" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
