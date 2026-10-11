import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  ArrowRight,
  Target,
  Users,
  Mail,
  TrendingUp,
  Zap,
  BarChart3,
} from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroAtmosphere from '@/components/HeroAtmosphere';
import { MarqueeStrip } from '@/components/MarqueeStrip';

const serviceMarquee = [
  'Paid Ads',
  'Lead Generation',
  'Email / SMS Marketing',
  'CRO & Website Development',
  'Content Creation',
  'Digital Strategy',
];

const industryMarquee = [
  'E-commerce',
  'Lead-Based Businesses',
  'Local Businesses',
  'SaaS Businesses',
  'Startups',
  'Coaching / Info Product',
];

const Home = () => {
  return (
    <PageLayout>
      {/* —— Hero (InsightX-style) —— */}
      <section className="relative min-h-[92dvh] flex flex-col justify-center overflow-hidden pt-28 pb-16 md:pb-24">
        <AnimatedBackground />
        <HeroAtmosphere />
        <div className="absolute inset-0 z-[6] pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100vw,680px)] h-[380px] bg-gradient-to-b from-white/[0.035] to-transparent blur-3xl" />
          <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
            <div className="h-px w-8 md:w-14 bg-gradient-to-r from-transparent to-white/35" />
            <div className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.03] rounded-sm">
              <span className="naz-signal-dot scale-90" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                System Online
              </span>
            </div>
            <div className="h-px w-8 md:w-14 bg-gradient-to-l from-transparent to-white/35" />
          </div>

          <h1 className="font-display text-[clamp(1.65rem,5vw,3.75rem)] md:text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold leading-[1.12] tracking-tight text-foreground max-w-5xl mx-auto mb-6 md:mb-8 px-2">
            <span className="block">Digital Marketing Dominance —</span>
            <span className="block mt-2 md:mt-3 text-muted-foreground font-bold text-[0.88em] md:text-[0.82em]">
              Reserved for brands that want to disrupt, not compete.
            </span>
          </h1>

          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground mb-3">
            We manage digital assets for
          </p>
          <p className="text-xs md:text-sm text-muted-foreground/90 mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed">
            E-commerce · Lead-based businesses · Startups · Brands scaling with precision
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="font-display text-sm md:text-base px-10 md:px-14 py-6 md:py-7 font-bold uppercase tracking-[0.2em] rounded-sm bg-primary text-primary-foreground hover:bg-white relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Let&apos;s Work</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* —— About us / Who We Are —— */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6">
            About us
          </h2>
          <h3 className="font-display text-center text-2xl md:text-3xl font-bold text-muted-foreground mb-14 md:mb-20">
            Who We Are
          </h3>

          <p className="text-center text-lg md:text-xl text-muted-foreground mb-12 md:mb-16">
            Our Results:
          </p>

          <div className="grid md:grid-cols-3 gap-10 md:gap-14 max-w-4xl mx-auto mb-20 md:mb-28">
            {[
              { label: 'Client Revenue / Year', value: '$1.2M+' },
              { label: 'Ad Spending / Year', value: '$35K+' },
              { label: 'Team Members', value: '6+' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-2 md:mb-3 tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 md:mb-10 inline-block border-b border-white/20 pb-2">
              What We Do
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-left md:text-center">
              At NAZ XMedia, we build and execute full-stack growth systems that don&apos;t just scale
              brands — they establish market control. Our core offering combines high-performance paid
              advertising, retention-focused email &amp; SMS, precision-built conversion rate
              optimization, and content creation designed to convert, not just impress.
            </p>
            <p className="text-base md:text-lg font-semibold text-foreground">
              This isn&apos;t agency work. It&apos;s the infrastructure behind brands that are built to
              lead.
            </p>
          </div>

          <p className="text-center font-display text-lg md:text-xl font-bold uppercase tracking-[0.12em] text-[hsl(var(--naz-green))]">
            Trusted by brands across North America
          </p>
        </div>
      </section>

      {/* —— Testimonials —— */}
      <section className="py-20 md:py-28 border-t border-white/[0.06] bg-surface/40">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-center text-3xl md:text-4xl font-extrabold mb-3">
            Testimonials
          </h2>
          <h3 className="font-display text-center text-xl md:text-2xl text-muted-foreground mb-14 md:mb-20">
            What Our Clients Say
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              {
                quote:
                  'Since working with NAZ XMedia, our sales have jumped in two months. They built a system that works and keep improving it every week.',
                name: 'Sohail Naushad',
                co: 'Multi-franchise',
              },
              {
                quote:
                  "Our phone hasn't stopped ringing with qualified leads. It feels like having an in-house growth team.",
                name: 'Avneet A.',
                co: 'Landscaping',
              },
              {
                quote:
                  'We went from inconsistent sales to $45K/month. The difference was finally having real acquisition infrastructure.',
                name: 'Abaan G.',
                co: 'Ecommerce brand',
              },
              {
                quote:
                  'NAZ XMedia completely transformed my brand presence. They took the stress out of marketing so I could focus on the business.',
                name: 'Samantha Lee',
                co: 'Beauty brand',
              },
              {
                quote:
                  'Month after month the results continue to get bigger and better. If you want serious execution, it is with NAZ XMedia.',
                name: 'Sarah Chen',
                co: 'Tech platform',
              },
              {
                quote:
                  'Partnering with NAZ XMedia changed how we get leads. Working with their team was one of the best decisions we made.',
                name: 'Marcus R.',
                co: 'E-commerce',
              },
            ].map((t, i) => (
              <Card
                key={i}
                className="p-6 md:p-8 border border-white/[0.08] bg-background/60 backdrop-blur-sm hover:border-white/15 transition-colors duration-300 flex flex-col"
              >
                <p className="text-sm md:text-base leading-relaxed text-foreground/90 flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-display font-bold text-sm uppercase tracking-wide">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{t.co}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* —— Dominate CTA band —— */}
      <section className="py-24 md:py-32 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-naz-green-muted/[0.07] via-background to-background" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-10 md:mb-12">
            Dominate The Market.
          </h2>
          <Link to="/contact">
            <Button
              size="lg"
              className="font-display text-base md:text-lg px-12 md:px-16 py-7 md:py-8 font-bold uppercase tracking-[0.18em] rounded-sm"
            >
              Work With Us
            </Button>
          </Link>
        </div>
      </section>

      {/* —— Services —— */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-center text-3xl md:text-4xl font-extrabold mb-4">
            Services
          </h2>
          <h3 className="font-display text-center text-2xl md:text-3xl text-muted-foreground mb-10 md:mb-14">
            Our Digital Marketing
          </h3>

          <p className="max-w-4xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed mb-14 md:mb-20">
            No guesswork. No generic roadmaps. At NAZ XMedia, every growth strategy is tailored from
            the ground up — engineered around your goals, your product, and the market you&apos;re
            trying to own. Whether you&apos;re launching or scaling, we don&apos;t just solve
            problems. We position you to win.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Paid Ads',
                desc: 'We don’t run ads to be seen. We run ads to dominate feeds, control conversions, and push competitors out of view.',
              },
              {
                icon: Users,
                title: 'Lead Generation',
                desc: 'We build systems that bring qualified buyers to you daily and make your brand the only option that makes sense.',
              },
              {
                icon: Mail,
                title: 'Email / SMS Marketing',
                desc: 'Our systems command attention, drive action, and turn one-time buyers into long-term revenue assets.',
              },
              {
                icon: TrendingUp,
                title: 'CRO & Website Development',
                desc: 'We build profit engines. Every element is built to convert faster and extract higher value.',
              },
              {
                icon: Zap,
                title: 'Content Creation',
                desc: 'Our content builds power, creates demand, and sells on sight — crafted to outperform your competition.',
              },
              {
                icon: BarChart3,
                title: 'Digital Strategy',
                desc: 'Data-driven strategies tailored to your business goals. We position you to win.',
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="p-6 md:p-8 border border-white/[0.08] bg-surface/50 hover:border-[hsl(var(--naz-green)/0.35)] transition-all duration-300 group"
              >
                <item.icon className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-foreground group-hover:text-[hsl(var(--naz-green))] transition-colors" />
                <h4 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4">{item.title}</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="uppercase tracking-widest text-xs border-white/20">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MarqueeStrip items={serviceMarquee} />

      {/* —— Industry —— */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-center text-3xl md:text-4xl font-extrabold mb-2">
            Industry
          </h2>
          <h3 className="font-display text-center text-2xl md:text-3xl text-muted-foreground mb-10 md:mb-14">
            specific solutions
          </h3>

          <p className="max-w-4xl mx-auto text-center text-base md:text-lg text-muted-foreground leading-relaxed mb-14 md:mb-20">
            We partner with ambitious brands across every space — from high-growth eCommerce and info
            products to local service providers, physical businesses, SaaS, and more. It&apos;s not
            about the industry. It&apos;s about the ambition behind it. Whatever you sell, wherever you
            play — we know how to make it move.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'E-commerce',
                desc: 'From thumb-stopping ads to ruthless CRO, we build ecosystems that convert on sight.',
              },
              {
                title: 'Lead-Based Businesses',
                desc: 'Structured funnels that fill your pipeline and position you as the authority in your space.',
              },
              {
                title: 'Local Businesses',
                desc: 'High-impact positioning and systems that turn attention into bookings and long-term relevance.',
              },
              {
                title: 'SaaS Businesses',
                desc: 'Full-stack growth that turns cold traffic into high-LTV users and compresses CAC.',
              },
              {
                title: 'Startups',
                desc: 'Launch and scale with channels and messaging built to prove traction fast.',
              },
              {
                title: 'Coaching / info product',
                desc: 'Turn expertise into authority, content into conversions, and offers into movements.',
              },
            ].map((ind) => (
              <Card
                key={ind.title}
                className="p-6 md:p-8 border border-white/[0.08] bg-surface/50 hover:bg-surface/80 transition-colors"
              >
                <h4 className="font-display text-xl font-bold mb-3">{ind.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip items={industryMarquee} reverse />

      {/* —— Partners + CTA —— */}
      <section className="py-20 md:py-28 border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-6">
          <h3 className="font-display text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-10 md:mb-14 leading-snug">
            Partnered with the world&apos;s top growth platforms
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">
            We work across the ad platforms, analytics stacks, and commerce tools your brand already
            runs on — so execution stays fast and integrated.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-14 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground/80">
            {['Meta', 'Google', 'TikTok', 'Shopify', 'Klaviyo', 'HubSpot'].map((p) => (
              <span key={p} className="px-4 py-2 border border-white/10 rounded-sm bg-white/[0.02]">
                {p}
              </span>
            ))}
          </div>
          <Link to="/contact">
            <Button
              size="lg"
              className="font-display uppercase tracking-[0.2em] px-10 py-6 font-bold rounded-sm"
            >
              Let&apos;s Work
            </Button>
          </Link>
        </div>
      </section>

      {/* —— Newsletter (InsightX-style) —— */}
      <section className="py-16 md:py-20 border-t border-white/[0.06] bg-surface/30">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h3 className="font-display text-lg md:text-xl font-bold mb-3">Join our mailing list</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Subscribe for updates, promotions, and insider offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3" aria-describedby="newsletter-status">
            <Input
              type="email"
              placeholder="Email address"
              disabled
              aria-disabled="true"
              className="bg-background/80 border-white/15 h-12"
            />
            <Button
              type="button"
              disabled
              aria-disabled="true"
              className="h-12 px-8 uppercase tracking-widest text-xs shrink-0"
            >
              Subscribe
            </Button>
          </div>
          <p id="newsletter-status" className="text-sm text-foreground mt-4">
            Newsletter signup coming soon.
          </p>
          <p className="text-[10px] text-muted-foreground mt-2">NAZ XMedia — Toronto, Canada.</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
