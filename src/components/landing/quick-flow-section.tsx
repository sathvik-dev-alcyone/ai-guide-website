import { LogIn, FilePlus, Camera, Ticket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <LogIn className="h-8 w-8 text-primary-foreground" />,
    title: 'Login with REVA Email',
    description: 'Use your official university credentials for secure access.',
  },
  {
    icon: <FilePlus className="h-8 w-8 text-primary-foreground" />,
    title: 'Create New Report',
    description: 'Start a new report with a single click from the dashboard.',
  },
  {
    icon: <Camera className="h-8 w-8 text-primary-foreground" />,
    title: 'Upload Photo & Location',
    description: 'Snap a picture and the app intelligently finds the location.',
  },
  {
    icon: <Ticket className="h-8 w-8 text-primary-foreground" />,
    title: 'Ticket Generated Instantly',
    description: 'Your report is automatically categorized and a ticket is created.',
  },
];

const QuickFlowSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">The Four-Step Flow</h2>
          <p className="mt-2 text-md md:text-lg text-muted-foreground">A simple and efficient process from start to finish.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center p-4">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary border-2 border-primary-foreground shadow-lg mb-4 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <>
                    <ArrowRight className="hidden md:block absolute top-1/2 right-0 h-8 w-8 text-muted-foreground translate-x-1/2 -translate-y-1/2" style={{ right: '-1rem' }} />
                    <ArrowRight className="block md:hidden absolute bottom-0 right-1/2 h-8 w-8 text-muted-foreground translate-x-1/2 translate-y-full rotate-90" style={{bottom: '-1.5rem'}} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFlowSection;
