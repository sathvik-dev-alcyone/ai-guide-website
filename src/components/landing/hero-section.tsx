import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl font-headline">
          Report Maintenance Issues in Seconds
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Goodbye to slow forms. Our AI-powered system lets you report issues with just a photo, making campus maintenance faster and more efficient for everyone.
        </p>
        <div className="mt-10">
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

export default HeroSection;
