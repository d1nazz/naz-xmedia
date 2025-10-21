import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Mail,
  TrendingUp,
  Zap,
  BarChart3,
  ShoppingCart,
  Building,
  Briefcase,
  Rocket,
  GraduationCap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Paid Ads',
      descriptionFull:
        "We don't run ads to be seen. We run ads to take over. Every dollar is deployed to dominate feeds, control conversions, and push competitors out of your customer's view.",
      descriptionMobile:
        'Ads that dominate feeds and drive conversions. Every dollar deployed strategically.',
    },
    {
      icon: Users,
      title: 'Lead Generation',
      descriptionFull:
        "We don't chase leads. We build systems that bring qualified buyers to you daily, filter out the noise, and make your brand the only option that makes sense.",
      descriptionMobile:
        'Systems that deliver qualified buyers daily. Your brand becomes the only option.',
    },
    {
      icon: Mail,
      title: 'Email / SMS Marketing',
      descriptionFull:
        'We lock customers in. Our email and SMS systems are built to command attention, drive action, and turn one-time buyers into long-term revenue assets.',
      descriptionMobile: 'Command attention and turn buyers into revenue assets.',
    },
    {
      icon: TrendingUp,
      title: 'CRO & Website Development',
      descriptionFull:
        "We don't design websites. We build profit engines. Every element is built to convert faster, extract higher value, and keep control of your traffic from entry to checkout.",
      descriptionMobile: 'Build profit engines that convert faster and extract higher value.',
    },
    {
      icon: Zap,
      title: 'Content Creation',
      descriptionFull:
        "Our content doesn't just look good. It builds power, creates demand, and sells on sight. Every word, hook, and visual is crafted to outperform and outposition your competition.",
      descriptionMobile: 'Content that builds demand and outperforms competition.',
    },
    {
      icon: BarChart3,
      title: 'Digital Strategy',
      descriptionFull:
        'Data-driven growth strategies tailored from the ground up. We analyze, plan, and execute to position you to win in your market.',
      descriptionMobile: 'Data-driven strategies to position you to win.',
    },
  ];

  const industries = [
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description:
        "We don't optimize stores — we eliminate hesitation. From thumb-stopping ads to ruthless CRO, we build ecosystems that dominate feeds, crush objections, and convert on sight.",
    },
    {
      icon: Users,
      title: 'Lead-Based Businesses',
      description:
        'We turn attention into appointments with precision. No fluff, no unqualified noise — just structured funnels that fill your pipeline and reposition you as the authority in your space.',
    },
    {
      icon: Building,
      title: 'Local Businesses',
      description:
        'We build local brands that dominate their city. Using high-impact positioning, omnipresent ad strategy, and systems that turn attention into bookings, buzz, and long-term relevance.',
    },
    {
      icon: Briefcase,
      title: 'SAAS Businesses',
      description:
        'We build full-stack SaaS growth systems that turn cold traffic into high-LTV users, compress CAC, and scale revenue with precision for companies built to dominate, not experiment.',
    },
    {
      icon: Rocket,
      title: 'Startups',
      description:
        'We scale startups by turning vision into velocity. From product-market fit to scaling campaigns, we build the systems that turn early traction into market dominance.',
    },
    {
      icon: GraduationCap,
      title: 'Coaching / Info Product',
      description:
        'We scale coaching brands by turning expertise into authority, content into conversions, and offers into movements built to lead and command attention.',
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-up max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 scan-line tech-glow">
            Our Digital Marketing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="hidden sm:inline">
              Your brand deserves more than plug-and-play marketing. We design future-ready systems
              that adapt, accelerate, and amplify — so you&apos;re not just growing, you&apos;re
              evolving ahead of everyone else.
            </span>
            <span className="sm:hidden">
              Future-ready systems that adapt, accelerate, and amplify your growth.
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32 px-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 surface-elevated border-border/50 hover-glow card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 relative z-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 relative z-10 animated-underline">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">
                <span className="hidden sm:inline">{service.descriptionFull}</span>
                <span className="sm:hidden">{service.descriptionMobile}</span>
              </p>
            </Card>
          ))}
        </div>

        {/* Industry Solutions */}
        <div className="mb-20 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 scan-line tech-glow">
              Industry Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="hidden sm:inline">
                We don&apos;t pick industries. We pick ambition. From eCommerce to SaaS, local to
                global, we collaborate with brands built to scale — and leaders ready to dominate
                their markets.
              </span>
              <span className="sm:hidden">We work with brands built to scale and dominate.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 surface-elevated border-border/50 hover-glow card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <industry.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 relative z-10 animated-underline">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed relative z-10">
                  {industry.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-12 sm:py-16 md:py-20 surface-elevated rounded-lg border border-border/50 pulse-glow relative overflow-hidden mx-4">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 uppercase tech-glow relative z-10 px-4">
            Ready to Dominate?
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto relative z-10 px-4">
            Let&apos;s discuss which services are right for your business goals.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="text-base font-bold uppercase tracking-wider px-10 py-6 group relative z-10 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">Let&apos;s Work</span>
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
