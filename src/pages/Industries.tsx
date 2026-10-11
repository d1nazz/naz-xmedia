import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      title: 'Ecommerce Brands',
      label: 'Ecommerce',
      description:
        'We design growth systems around contribution margin, inventory reality, and repeat purchase behavior so paid and lifecycle channels support the health of the business—not just front‑end ROAS.',
      focus: [
        'Balancing acquisition, retention, and cash flow.',
        'Improving AOV and LTV across key cohorts.',
        'Aligning offers, funnels, and ad strategy with margin.',
      ],
    },
    {
      title: 'Local & Lead‑Based Services',
      label: 'Local Services',
      description:
        'We connect qualified local demand with the capacity of your team by tuning lead quality, routing, and follow‑up—not just lead volume.',
      focus: [
        'Lead qualification and routing logic.',
        'Improving show‑up and close rates.',
        'Aligning booking flows with real‑world operations.',
      ],
    },
    {
      title: 'Creators & Personal Brands',
      label: 'Creators',
      description:
        'We turn attention into structured revenue by building offers, funnels, and campaigns that respect your brand while creating repeatable outcomes.',
      focus: [
        'Turning followers into customers across multiple products.',
        'Designing evergreen and launch‑ready funnels.',
        'Using paid selectively to amplify what already converts.',
      ],
    },
    {
      title: 'SaaS & Productized Software',
      label: 'SaaS',
      description:
        'We architect acquisition and onboarding flows that balance CAC, payback, and retention across self‑serve and sales‑assisted journeys.',
      focus: [
        'Improving trial‑to‑paid and demo‑to‑customer conversion.',
        'Clarifying pricing and packaging for growth.',
        'Building measurement that connects campaigns to ARR.',
      ],
    },
    {
      title: 'Startups & Emerging Brands',
      label: 'Startups',
      description:
        'We help early‑stage teams validate channels, offers, and messaging before building heavier infrastructure around what works.',
      focus: [
        'Identifying channels that can actually scale.',
        'Creating feedback loops between product and growth.',
        'Avoiding over‑engineering before there is signal.',
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 scan-line tech-glow">
            Growth Systems for Modern Revenue Models.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Different industries, shared objective: predictable, compounding revenue. We adapt the
            same growth infrastructure principles to the economics, capacity, and customer behavior
            of each model.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-20 sm:mb-24">
          {industries.map((industry) => (
            <Card
              key={industry.title}
              className="p-6 sm:p-8 surface-elevated border-border/50 hover-glow card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl" />
              <div className="relative z-10 space-y-4">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {industry.label}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">{industry.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">
                    What we focus on
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    {industry.focus.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Closing note */}
        <div className="max-w-3xl mx-auto text-center text-sm sm:text-base md:text-lg text-muted-foreground px-4">
          However your business makes money today, our job is the same: build a growth stack that
          respects your constraints, compounds your strengths, and gives you reliable control over
          acquisition and retention.
        </div>
      </div>
    </PageLayout>
  );
};

export default Industries;

