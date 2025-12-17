import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
          How to Report a Maintenance Issue in 30 Seconds
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          Say goodbye to slow, manual forms. Our AI-powered system lets you report issues with just a photo, making campus maintenance faster and more efficient for everyone.
        </p>
        <div className="mt-10">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform duration-200 hover:scale-105">
            Report an Issue Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
