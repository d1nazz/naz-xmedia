import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, ShoppingCart, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: ShoppingCart,
      industry: 'E-commerce',
      client: 'Fein - Clothing Brand',
      challenge: 'Struggling with low conversion rates and high customer acquisition costs',
      result: '185% Revenue Increase',
      metrics: [
        'ROAS increased from 1.2x to 8.3x',
        'Conversion rate improved by 220%',
        'Customer LTV increased by 80%',
      ],
      timeline: '6 months',
    },
    {
      icon: Users,
      industry: 'Lead - Based Business',
      client: 'S Scape Solutions - Landscaping Company',
      challenge: 'Inconsistent lead flow and poor lead quality affecting sales pipeline',
      result: '375% More Qualified Leads',
      metrics: [
        'Lead volume increased by 375%',
        'Cost per lead reduced by 57%',
        'Sales close rate improved by 70%',
      ],
      timeline: '5 months',
    },
    {
      icon: TrendingUp,
      industry: 'Local Business',
      client: 'Multi-Location Service Provider',
      challenge: 'Limited online visibility and difficulty competing with larger franchises',
      result: '120% Booking Increase',
      metrics: [
        'Local search visibility up 230%',
        'Monthly bookings increased 200%',
        'Market share doubled in target area',
      ],
      timeline: '8 months',
    },
    {
      icon: Zap,
      industry: 'SaaS Startup',
      client: 'Tech Platform',
      challenge: 'High CAC and low trial-to-paid conversion preventing profitable growth',
      result: '$500k ARR Growth',
      metrics: [
        'CAC reduced by 58%',
        'Trial-to-paid conversion up 189%',
        'MRR growth rate increased to 34%',
      ],
      timeline: '7 months',
    },
    {
      icon: Users,
      industry: 'Coaching / Info Product',
      client: 'Personal Trainer course',
      challenge: 'Inconsistent revenue and dependence on live launches',
      result: 'Automated $80K/Month',
      metrics: [
        'Built evergreen funnel generating $80K/mo',
        'Email list grew by 300%',
        'Course completion rate up 67%',
      ],
      timeline: '5 months',
    },
    {
      icon: ShoppingCart,
      industry: 'E-commerce',
      client: 'WorstWork',
      challenge: 'High refund rates and poor customer retention affecting profitability',
      result: '256% LTV Increase',
      metrics: [
        'Refund rate decreased by 73%',
        'Repeat purchase rate up 189%',
        'Average order value increased 94%',
      ],
      timeline: '4 months',
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-6xl font-black mb-8">Case Studies</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real brands. Real results. See how we've scaled businesses across industries transform
            their digital presence and establish market dominance.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="p-8 surface-elevated border-border/50 hover:border-foreground/20 transition-smooth"
            >
              <div className="flex items-start justify-between mb-6">
                <study.icon className="w-12 h-12" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {study.timeline}
                </span>
              </div>

              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
                {study.industry}
              </div>
              <h3 className="text-2xl font-bold mb-4">{study.client}</h3>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold">Challenge:</span> {study.challenge}
                </p>
              </div>

              <div className="bg-background/50 p-6 rounded-lg mb-6">
                <div className="text-4xl font-black mb-2">{study.result}</div>
              </div>

              <div className="space-y-2">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-black mb-16 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  'Since working with NazXmedia, our sales have jumped in just two months. They built a system that works, kept improving it, and finally made me feel like our marketing is in the right hands.',
                author: 'Sohail Naushad',
                company: 'Multi Franchise Owner',
              },
              {
                quote:
                  "NazXmedia completely changed the way we get leads. This season, our phone hasn't stopped ringing with new clients from the ads they set up. Choosing to work with their team was one of the best business decisions we've made—we'll definitely be sticking with them",
                author: 'Avneet A.',
                company: 'Landscaping',
              },
              {
                quote:
                  "For over six months, our clothing brand struggled with barely any sales. Partnering with NAZXMEDIA changed everything. In just three months, we scaled past $45k per month. Their strategies gave us momentum, clarity, and growth we'd been chasing. We're finally on the path to lasting success.",
                author: 'Abaan G.',
                company: 'E-com',
              },
              {
                quote:
                  "NAZ XMedia completely transformed my brand presence. They've taken the stress out of marketing, giving me so many more ideas and allowing me to focus on growing my business.",
                author: 'Samantha Lee',
                company: 'Luxe Beauty Co',
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 surface-elevated border-border/50 flex flex-col">
                <p className="text-lg mb-6 leading-relaxed flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-auto pt-6 border-t border-border/30">
                  <div className="font-bold uppercase tracking-wide text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-20 surface-elevated rounded-lg border border-border/50">
          <h2 className="text-5xl font-black mb-6 uppercase">Ready For Your Success Story?</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Let's build your case study. Schedule a consultation to discuss your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base font-bold uppercase tracking-wider px-10 py-6">
              Let's Work <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
