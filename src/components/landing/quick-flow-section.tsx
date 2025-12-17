import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, FilePlus, Camera, Ticket } from 'lucide-react';

const steps = [
  {
    icon: <LogIn className="h-8 w-8 text-primary" />,
    title: 'Login with REVA Email',
    description: 'Use your official university credentials for secure access.',
  },
  {
    icon: <FilePlus className="h-8 w-8 text-primary" />,
    title: 'Create New Report',
    description: 'Start a new report with a single click from the dashboard.',
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: 'Upload Photo & Location',
    description: 'Snap a picture and the app intelligently finds the location.',
  },
  {
    icon: <Ticket className="h-8 w-8 text-primary" />,
    title: 'Ticket Generated Instantly',
    description: 'Your report is automatically categorized and a ticket is created.',
  },
];

const QuickFlowSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-headline">The Four-Step Flow</h2>
          <p className="mt-2 text-md md:text-lg text-muted-foreground">A simple and efficient process from start to finish.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFlowSection;
