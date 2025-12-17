import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline">
          Ready to Streamline Campus Maintenance?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Join the rest of the campus community in making REVA University a better, safer place.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform duration-200 hover:scale-105">
            Report an Issue Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
