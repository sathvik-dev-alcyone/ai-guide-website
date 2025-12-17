import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, Shield } from 'lucide-react';

const audiences = [
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Students',
    description: 'Quickly report issues like broken furniture or flickering lights in your dorms and classrooms. Get back to your studies faster.',
  },
  {
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    title: 'Faculty',
    description: 'Ensure your teaching and research environments are safe and functional. Report equipment malfunctions or facility problems with ease.',
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: 'Administration',
    description: 'Gain a centralized, real-time overview of all campus maintenance issues. Streamline workflows and improve operational efficiency.',
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight font-headline">Who is this for?</h2>
          <p className="mt-2 text-lg text-muted-foreground">A unified system for the entire REVA University community.</p>
        </div>
        <div className="space-y-12">
          {audiences.map((audience, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-lg shadow-lg overflow-hidden border-0">
              <CardContent className="p-0">
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/3 flex justify-center p-8 bg-primary/5">
                    <div className="flex items-center justify-center h-24 w-24 rounded-full bg-background shadow-inner">
                      {audience.icon}
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-8 md:p-12">
                    <h3 className="text-2xl font-bold font-headline mb-4">{audience.title}</h3>
                    <p className="text-muted-foreground text-lg">{audience.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
