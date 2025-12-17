import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, Shield } from 'lucide-react';

const audiences = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Students',
    description: 'Quickly report issues like broken furniture or flickering lights in your dorms and classrooms. Get back to your studies faster.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Faculty',
    description: 'Ensure your teaching and research environments are safe and functional. Report equipment malfunctions or facility problems with ease.',
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Administration',
    description: 'Gain a centralized, real-time overview of all campus maintenance issues. Streamline workflows and improve operational efficiency.',
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight font-headline">Who is this for?</h2>
          <p className="mt-2 text-lg text-muted-foreground">A unified system for the entire REVA University community.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {audience.icon}
                </div>
                <CardTitle className="text-2xl font-headline">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
