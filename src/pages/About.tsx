import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Trophy, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-up max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 scan-line tech-glow">
            Who We Are
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
            <span className="hidden sm:inline">
              A lab, not an agency—built to test, scale, and Dominate the digital market.
            </span>
            <span className="sm:hidden">Built to test, scale, and dominate.</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto mb-20 sm:mb-32 px-4">
          {[
            {
              label: 'Client Revenue',
              labelFull: 'Client Revenue Generated',
              value: '$1.2M+',
              icon: Trophy,
            },
            { label: 'Ad Spend', labelFull: 'Ad Spend Managed', value: '$35k+', icon: Target },
            { label: 'Team', labelFull: 'Expert Team Members', value: '6+', icon: Users },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <stat.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 tech-glow">
                {stat.value}
              </div>
              <div className="text-muted-foreground uppercase tracking-wide text-xs sm:text-sm">
                <span className="hidden sm:inline">{stat.labelFull}</span>
                <span className="sm:hidden">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-32 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-center scan-line tech-glow">
            Our Mission
          </h2>
          <Card className="p-6 sm:p-8 md:p-12 surface-elevated border-border/50 hover-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-3xl" />
            {/* Desktop content */}
            <div className="hidden md:block space-y-6 relative z-10">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At NAZXMEDIA, our mission is simple: to engineer growth. We design custom digital
                systems that align with each brand&apos;s vision, amplify visibility, ignite
                engagement, and convert ambition into measurable results. Every strategy we build is
                tailored, data-driven, and designed to push businesses beyond their limits.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                By leveraging our expertise in SMS marketing, email campaigns, local marketing, Meta
                Ads, Google Ads, paid social, and full-scale SMMA strategies, we engineer digital
                systems built for impact. From precision targeting to creative execution, our
                campaigns are designed to capture attention, build connections, and drive measurable
                business growth across every channel.
              </p>
            </div>
            {/* Mobile/Tablet condensed content */}
            <div className="md:hidden space-y-4 relative z-10">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We engineer growth through custom digital systems. Data-driven strategies that
                amplify visibility and convert ambition into results.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                From Meta Ads to email campaigns, our systems capture attention and drive business
                growth across every channel.
              </p>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 sm:mt-8 relative z-10">
              This isn&apos;t agency work.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mt-2 relative z-10">
              It&apos;s the infrastructure behind brands that are built to lead.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20 sm:mb-32 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 sm:mb-12 md:mb-16 text-center scan-line tech-glow">
            What Sets Us Apart
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Results-Driven',
                titleFull: 'Results-Driven Approach',
                description:
                  "We don't chase vanity metrics. Every campaign, every strategy, every piece of content is engineered to drive real business results — revenue, leads, and market dominance.",
                descriptionMobile:
                  'Every campaign engineered for real results — revenue, leads, dominance.',
              },
              {
                icon: Target,
                title: 'Full-Stack',
                titleFull: 'Full-Stack Expertise',
                description:
                  'From paid ads to email marketing, from CRO to content creation — we handle every aspect of your digital presence so you can focus on running your business and we focus on scaling it.',
                descriptionMobile:
                  'We handle your entire digital presence while you focus on your business.',
              },
              {
                icon: Users,
                title: 'Partnership',
                titleFull: 'Partnership Philosophy',
                description:
                  "Partnering with over 16 companies and independent realtors, we've elevated their digital presence, strengthened brand awareness, and engineered marketing systems built for growth—The next success story starts with you.",
                descriptionMobile:
                  '16+ partnerships. Elevated presence, strengthened brands, engineered growth.',
              },
              {
                icon: Trophy,
                title: 'Proven Results',
                titleFull: 'Proven Track Record',
                description:
                  "With over $1.2M in client revenue generated and $35k+ in ad spend managed in the last 6 months, we've proven our systems work across industries and business models.",
                descriptionMobile: '$1.2M+ revenue, $35k+ ad spend in 6 months. Systems that work.',
              },
            ].map((value, i) => (
              <Card
                key={i}
                className="p-6 sm:p-8 surface-elevated border-border/50 hover-glow card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <value.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 relative z-10 animated-underline">
                  <span className="hidden sm:inline">{value.titleFull}</span>
                  <span className="sm:hidden">{value.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">
                  <span className="hidden sm:inline">{value.description}</span>
                  <span className="sm:hidden">{value.descriptionMobile}</span>
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 sm:py-16 md:py-20 surface-elevated rounded-lg border border-border/50 pulse-glow relative overflow-hidden mx-4">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 uppercase tech-glow relative z-10 px-4">
            <span className="hidden sm:inline">Ready to Lead Your Market?</span>
            <span className="sm:hidden">Ready to Lead?</span>
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto relative z-10 px-4">
            Let&apos;s build the infrastructure your brand needs to dominate.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="text-base font-bold uppercase tracking-wider px-10 py-6 group relative z-10 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Work With Us</span>
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
