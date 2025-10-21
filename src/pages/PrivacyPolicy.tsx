import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 glow-text">Privacy Policy</h1>

          <Card className="p-12 surface-elevated border-border/50 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-6xl mb-8">🔒</div>
              <h2 className="text-2xl font-bold text-foreground">Policy in Development</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our comprehensive privacy policy is currently being prepared to ensure we provide
                you with complete transparency regarding how we protect and handle your information.
              </p>
              <p className="text-muted-foreground">
                This page will be updated shortly with detailed information.
              </p>
              <div className="pt-8 text-sm text-muted-foreground/60">— NAZ X Media</div>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
