import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import logo from '@/assets/nazxmedia-logo.jpg';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 backdrop-blur-xl bg-background/95">
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Main Links */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-semibold uppercase tracking-wider relative group',
                  location.pathname === link.path ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {link.name}
                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                {/* Active indicator */}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Logo + Name (Desktop) */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-xl font-bold tracking-wider uppercase tech-glow group-hover:tech-glow-strong transition-all">
              NAZ <span className="font-black">X</span>MEDIA
            </span>
            <img
              src={logo}
              alt="NAZ XMedia Logo"
              className="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-full sm:w-[320px] bg-black/95 backdrop-blur-2xl border-border/30"
            >
              <nav className="flex flex-col space-y-6 mt-16">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-lg font-semibold uppercase tracking-wide py-3 px-4 rounded-md transition-all duration-200 relative group',
                      location.pathname === link.path
                        ? 'text-white bg-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-full" />
                    )}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-base sm:text-lg font-bold tracking-wider uppercase tech-glow group-hover:tech-glow-strong transition-all">
              NAZ <span className="font-black">X</span>MEDIA
            </span>
            <img
              src={logo}
              alt="NAZ XMedia Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
