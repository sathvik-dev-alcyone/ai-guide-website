import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline">
          Access the System
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Use your official @reva.edu.in email ID to log in and report a maintenance issue.
        </p>
        <div className="mt-8">
          <a href="https://ai-maintainance-reporter.onrender.com/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform duration-200 hover:scale-105 rounded-full">
              Go to Reporting System
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
