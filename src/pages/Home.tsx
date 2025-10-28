import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Target, TrendingUp, Users, Zap, Mail, BarChart3 } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-24 sm:pt-32">
        <AnimatedBackground />

        {/* Lighting layers */}
        <div className="absolute inset-0 z-[5]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[300px] sm:h-[400px] bg-gradient-to-b from-white/[0.02] to-transparent blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-r from-transparent via-black/30 to-transparent blur-[100px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* System label */}
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white/40" />
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-white/10 bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full blink-green" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
                  System Online
                </span>
              </div>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white/40" />
            </div>

            {/* Hero Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-10 leading-[1.1] font-grotesk">
              <span className="block text-muted-foreground">
                <span className="hidden sm:inline">Digital Marketing Dominance — </span>
                <span className="sm:hidden">Marketing Dominance — </span>
                Built to <span className="underline decoration-white/40">Lead, Not Follow.</span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-10 sm:mb-14 max-w-2xl mx-auto leading-relaxed">
              <span className="hidden sm:inline">
                We manage digital assets for E-commerce, Lead-Based businesses, Startups, and brands
                ready to dominate their market.
              </span>
              <span className="sm:hidden">Digital assets for brands ready to dominate.</span>
            </p>

            {/* CTA */}
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-white/20" />
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 font-bold uppercase tracking-wider relative group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    Let&apos;s Work
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <div className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </div>
        </div>

        {/* Fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-[8]" />
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border/30 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 scan-line tech-glow">Who We Are</h2>
          <p className="text-lg text-muted-foreground mb-12">Our Results:</p>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Client Revenue / Year', value: '$1.2M+' },
              { label: 'Ad Spend / Year', value: '$35K+' },
              { label: 'Team Members', value: '6+' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl sm:text-5xl font-black mb-2 tech-glow group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 border-t border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 uppercase tech-glow-strong">
            Dominate The Market.
          </h2>
          <Link to="/contact">
            <Button
              size="lg"
              className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 font-bold uppercase tracking-wider group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Work With Us
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
