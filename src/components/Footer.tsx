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

  return (
    <footer className="border-t border-border/30 backdrop-blur-xl bg-background/95 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Policy Links */}
          <div className="flex flex-col gap-2">
            <Link
              to="/fulfillment-policy"
              className="text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground transition-smooth text-center"
            >
              Fulfillment Policy
            </Link>
            <Link
              to="/privacy-policy"
              className="text-xs uppercase tracking-wide text-muted-foreground hover:text-foreground transition-smooth text-center"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            © 2026 NAZ X Media, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
