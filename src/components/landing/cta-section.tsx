import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline">
          System Access
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Join the rest of the campus community in making REVA University a better, safer place.
        </p>
        <div className="mt-8">
          <a href="https://ai-maintainance-reporter.onrender.com/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform duration-200 hover:scale-105 rounded-full">
              Report an Issue Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
