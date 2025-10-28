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
      <section className="relative overflow-hidden py-20 min-h-[90vh] flex items-center justify-center">
        <AnimatedBackground />

        {/* Dimensional lighting layers */}
        <div className="absolute inset-0 z-[5]">
          {/* Top light beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-white/[0.02] to-transparent blur-3xl" />
          {/* Center depth shadow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-transparent via-black/30 to-transparent blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* System identifier - tech label */}
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-10">
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-white/40" />
              <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 border border-white/10 bg-white/[0.02]">
                <div className="w-1.5 h-1.5 rounded-full blink-green" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-white/50 font-medium">
                  System Online
                </span>
              </div>
              <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-white/40" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-10 leading-[1.1] font-grotesk relative px-4 md:px-8">
              {/* Multiple shadow layers for dimensional depth */}
              <span
                className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-b from-white/10 to-transparent"
                style={{ transform: 'translateY(10px)' }}
              >
                <span className="hidden sm:inline">Digital Marketing Dominance — </span>
                <span className="sm:hidden">Marketing Dominance — </span>
                <span className="text-muted-foreground">
                  <span className="hidden sm:inline">Engineered for Brands Built to</span>
                  <span className="sm:hidden">Built to</span>
                </span>{' '}
                <span className="underline"> Lead, Not Follow.</span>
              </span>
              <span
                className="absolute inset-0 blur-md opacity-30"
                style={{ transform: 'translateY(5px)' }}
              >
                <span className="hidden sm:inline">Digital Marketing Dominance — </span>
                <span className="sm:hidden">Marketing Dominance — </span>
                <span className="text-muted-foreground">
                  <span className="hidden sm:inline">Engineered for Brands Built to</span>
                  <span className="sm:hidden">Built to</span>
                </span>{' '}
                <span className="underline"> Lead, Not Follow.</span>
              </span>
              <span className="relative drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <span className="hidden sm:inline">Digital Marketing Dominance — </span>
                <span className="sm:hidden">Marketing Dominance — </span>
                <span className="text-muted-foreground">
                  <span className="hidden sm:inline">Engineered for Brands Built to</span>
                  <span className="sm:hidden">Built to</span>
                </span>{' '}
                <span className="underline decoration-white/40"> Lead, Not Follow.</span>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-14 max-w-2xl mx-auto leading-relaxed px-4">
              <span className="hidden sm:inline">
                We manage digital assets for E-commerce, Lead-Based businesses, Startups, and brands
                ready to dominate their market.
              </span>
              <span className="sm:hidden">Digital assets for brands ready to dominate.</span>
            </p>

            {/* CTA with engineered frame */}
            <div className="flex items-center justify-center gap-4 md:gap-8 px-4">
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-white/20" />
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-sm md:text-base lg:text-lg px-6 md:px-10 lg:px-12 py-5 md:py-6 lg:py-7 font-bold uppercase tracking-wider relative group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    Let's Work
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>

            {/* Bottom tech accent */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="w-1 h-1 bg-white/60 rounded-full" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-white/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-[8]" />
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 scan-line tech-glow">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Our Results:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {[
              { label: 'Client Revenue / Year', value: '$1.2M+' },
              { label: 'Ad Spend / Year', value: '$35K+' },
              { label: 'Team Members', value: '6+' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-3 tech-glow group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-muted-foreground uppercase tracking-wide text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 max-w-3xl mx-auto text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 animated-underline inline-block">
              What We Do
            </h3>
            {/* Desktop content */}
            <div className="hidden md:block space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                NAZ XMedia was founded by Usman in late 2024 with one mission — to change how
                businesses are built. Not through shortcuts, but through engineered systems that
                empower entrepreneurs to rise beyond failure and reach the top.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We exist to reprogram growth — turning complexity into clarity, and ambition into
                execution. Business isn't handled here. It's architected.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                What began as a vision has evolved into a full-scale digital lab, trusted by brands
                across eCommerce, SaaS, and emerging industries. In just six months, our systems
                have driven over $1M in client revenue — no investors, no gimmicks, just precision
                and performance.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Today, NAZ XMedia operates as a unified force of strategists, creatives, and
                operators who've built and scaled brands themselves. We don't just manage campaigns
                — we engineer growth.
              </p>
            </div>
            {/* Mobile/Tablet condensed content */}
            <div className="md:hidden space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Founded in 2024, NAZ XMedia engineers growth systems that turn ambition into
                execution. We don't do shortcuts—we build infrastructure.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                In 6 months: $1M+ in client revenue. Our team of strategists and operators engineer
                growth, not just campaigns.
              </p>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 md:mt-8">
              This isn't an agency.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mt-2">
              It's a team built for business mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 scan-line tech-glow">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Month after month the results continue to get bigger and better. If you want the best of the best, it's with NAZ XMedia.",
                author: 'Sarah Chen',
                company: 'Tech Platform',
              },
              {
                quote:
                  "Partnering with NAZ XMedia has completely transformed my brand presence. They've taken the stress out of marketing.",
                author: 'Marcus R.',
                company: 'E-com',
              },
              {
                quote:
                  'NazXMedia completely changed how we get leads. This season, our phones haven’t stopped ringing with new clients from their ads. Working with their team was easily one of the best decisions we’ve made.',
                author: 'Avneet A.',
                company: 'landscaping',
              },
            ].map((testimonial, i) => (
              <Card
                key={i}
                className="p-6 md:p-8 surface-elevated border-border/50 flex flex-col hover-glow card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-auto pt-4 md:pt-6 border-t border-border/30 relative z-10">
                  <div className="font-bold uppercase tracking-wide text-xs md:text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-xs md:text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 scan-line tech-glow">
              Our Digital Marketing
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="hidden sm:inline">
                No guesswork. No generic roadmaps. At NAZ XMedia, every growth strategy is tailored
                from the ground up — engineered around your goals, your product, and the market
                you&apos;re trying to own.
              </span>
              <span className="sm:hidden">Custom growth strategies engineered for your brand.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Paid Ads',
                descFull:
                  "We don't run ads to be seen. We run ads to dominate feeds, control conversions, and push competitors out of view.",
                descMobile: 'Ads that dominate feeds and drive conversions.',
              },
              {
                icon: Users,
                title: 'Lead Generation',
                descFull:
                  'We build systems that bring qualified buyers to you daily and make your brand the only option that makes sense.',
                descMobile: 'Systems that bring qualified buyers daily.',
              },
              {
                icon: Mail,
                title: 'Email / SMS Marketing',
                descFull:
                  'Our systems are built to command attention, drive action, and turn one-time buyers into long-term revenue assets.',
                descMobile: 'Turn buyers into long-term assets.',
              },
              {
                icon: TrendingUp,
                title: 'CRO & Website Development',
                descFull:
                  'We build profit engines. Every element is built to convert faster and extract higher value.',
                descMobile: 'Profit engines built to convert faster.',
              },
              {
                icon: Zap,
                title: 'Content Creation',
                descFull:
                  'Our content builds power, creates demand, and sells on sight. Crafted to outperform your competition.',
                descMobile: 'Content that builds demand and sells.',
              },
              {
                icon: BarChart3,
                title: 'Digital Strategy',
                descFull:
                  'Data-driven strategies tailored to your business goals. We position you to win.',
                descMobile: 'Data-driven strategies to win.',
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="p-5 sm:p-6 md:p-8 surface-elevated border-border/50 hover-glow card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4 md:mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 relative z-10 animated-underline">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                  <span className="hidden sm:inline">{service.descFull}</span>
                  <span className="sm:hidden">{service.descMobile}</span>
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="text-sm md:text-base font-semibold uppercase group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 uppercase tech-glow-strong">
            Dominate The Market.
          </h2>
          <Link to="/contact">
            <Button
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 lg:px-12 py-6 md:py-7 lg:py-8 font-bold uppercase tracking-wider group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Work With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
