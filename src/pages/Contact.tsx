import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', businessName: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageLayout>
      {/* Main wrapper */}
      <div className="w-full px-6 py-20 bg-background">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-up max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 scan-line tech-glow">
            <span className="hidden sm:inline">Begin Your Growth Journey</span>
            <span className="sm:hidden">Start Growing</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="hidden sm:inline">
              Submit your details below — our team will reach out within 24 hours to design the
              growth system that puts your brand ahead of the curve.
            </span>
            <span className="sm:hidden">Submit details — we'll reach out within 24 hours.</span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 lg:px-12 items-start">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-surface border-border/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-surface border-border/50"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="businessName"
                  className="block text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Business Name *
                </label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="bg-surface border-border/50"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2"
                >
                  Tell Us About Your Goals *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-surface border-border/50"
                  placeholder="What are your main business objectives? What challenges are you facing? What kind of results are you looking for?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-base font-bold uppercase tracking-wider py-6 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Send Message</span>
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-6 sm:p-8 surface-elevated border-border/50 hover-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative z-10 animated-underline">
                Get In Touch
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 relative z-10">
                <span className="hidden sm:inline">
                  Whether you&apos;re looking to scale your existing business or launch something
                  new, we&apos;re here to help you build the systems that establish market control.
                </span>
                <span className="sm:hidden">
                  Scale your business with systems built for market control.
                </span>
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start group">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a
                      href="mailto:nazxmedia@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      nazxmedia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a
                      href="tel:+12265010816"
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      +1 (226) 501-0816
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <p className="text-muted-foreground">
                      Toronto, ON
                      <br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 surface-elevated border-border/50 hover-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-2xl" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 relative z-10 animated-underline">
                What Happens Next?
              </h3>
              <div className="space-y-3 sm:space-y-4 relative z-10">
                <div>
                  <div className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                    1. Consultation
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <span className="hidden sm:inline">
                      We&apos;ll schedule a call to discuss your business, goals, and challenges in
                      detail.
                    </span>
                    <span className="sm:hidden">Discuss your business and goals.</span>
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">2. Strategy</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <span className="hidden sm:inline">
                      We&apos;ll analyze your situation and present a tailored growth strategy.
                    </span>
                    <span className="sm:hidden">Tailored growth strategy.</span>
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">3. Dominate</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <span className="hidden sm:inline">
                      Once aligned, we&apos;ll implement the systems that position you to lead your
                      market.
                    </span>
                    <span className="sm:hidden">Implement and lead.</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
