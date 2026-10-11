import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/nazxmedia/', label: 'Instagram' },
    { icon: Twitter, url: 'https://x.com/nazxmedia', label: 'X' },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61576719817891',
      label: 'Facebook',
    },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/naz-xmedia/', label: 'LinkedIn' },
  ];

  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-surface/40 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none naz-hero-atmo-scan" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,640px)] h-px bg-gradient-to-r from-transparent via-[hsl(var(--naz-green)/0.25)] to-transparent" />

      <div className="container mx-auto px-6 py-12 md:py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start">
          <div>
            <div className="font-display text-lg font-extrabold tracking-wider uppercase mb-4">
              NAZ <span className="text-[hsl(var(--naz-green))]">X</span>MEDIA
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Growth infrastructure—web, paid media, and systems—for operators who expect precision.
            </p>
          </div>

          <div>
            <div className="naz-section-label mb-4 !text-[0.6rem]">Navigate</div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-muted-foreground hover:text-[hsl(var(--naz-green))] transition-colors duration-300 w-fit"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="naz-section-label mb-4 !text-[0.6rem]">Connect</div>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md border border-white/[0.08] bg-white/[0.02] text-muted-foreground hover:text-[hsl(var(--naz-green))] hover:border-[hsl(var(--naz-green)/0.25)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-xs uppercase tracking-wider">
              <Link
                to="/fulfillment-policy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Fulfillment Policy
              </Link>
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} NAZ XMedia. All rights reserved.</span>
          <span className="flex items-center gap-2 naz-section-label !text-[0.55rem] !tracking-[0.2em]">
            <span className="naz-signal-dot scale-75" />
            Systems online
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
