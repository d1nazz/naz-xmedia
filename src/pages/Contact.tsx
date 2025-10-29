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
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: data,
    })
      .then(() => {
        toast({
          title: 'Message Sent!',
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', businessName: '', message: '' });
      })
      .catch(() => {
        toast({
          title: 'Submission Failed',
          description: 'Please try again or email us directly.',
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageLayout>
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-20 bg-background overflow-x-hidden flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-up max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 scan-line tech-glow leading-tight">
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
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="flex justify-center">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-6 bg-surface p-8 rounded-2xl border border-border/40 shadow-md"
            >
              <input type="hidden" name="form-name" value="contact" />

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
                  className="bg-surface border-border/50 h-12 text-base"
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
                  className="bg-surface border-border/50 h-12 text-base"
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
                  className="bg-surface border-border/50 h-12 text-base"
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
                  className="bg-surface border-border/50 text-base"
                  placeholder="What are your main business objectives? What challenges are you facing? What kind of results are you looking for?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-sm sm:text-base font-bold uppercase tracking-wider py-4 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Send Message</span>
              </Button>
            </form>
          </div>

          {/* Contact Info + What Happens Next */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Get In Touch */}
            <Card className="p-8 surface-elevated border-border/50 hover-glow">
              <h3 className="text-2xl font-bold mb-6 animated-underline">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <Mail className="w-6 h-6 mr-4 mt-1 group-hover:scale-110 transition-transform" />
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
                  <Phone className="w-6 h-6 mr-4 mt-1 group-hover:scale-110 transition-transform" />
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
                  <MapPin className="w-6 h-6 mr-4 mt-1 group-hover:scale-110 transition-transform" />
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

            {/* What Happens Next */}
            <Card className="p-8 surface-elevated border-border/50 hover-glow">
              <h3 className="text-2xl font-bold mb-6 animated-underline">What Happens Next?</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2 text-sm sm:text-base">1. Consultation</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    We’ll schedule a call to discuss your business, goals, and challenges in detail.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-sm sm:text-base">2. Strategy</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    We’ll analyze your situation and present a tailored growth strategy.
                  </p>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-sm sm:text-base">3. Dominate</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Once aligned, we’ll implement systems that position you to lead your market.
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
