import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stepsData = [
  {
    step: 1,
    title: 'LOGIN WITH YOUR UNIVERSITY ID',
    description: 'To get started, open the app and log in using your official REVA University email address. This ensures that all reports are securely tied to a member of our campus community.',
    note: 'Use your ...@reva.edu.in account.',
    image: '/images/step1.png',
    alt: 'App login screen on a mobile phone.',
  },
  {
    step: 2,
    title: 'CREATE A NEW REPORT',
    description: 'Once logged in, you\'ll see your dashboard. Tap on the "Create New Report" button to begin the process. It\'s designed to be quick and intuitive.',
    note: 'The dashboard shows your past reports.',
    image: '/images/step2.png',
    alt: 'Dashboard with a "Create New Report" button highlighted.',
  },
  {
    step: 3,
    title: 'UPLOAD A PHOTO',
    description: 'A picture is worth a thousand words. Upload a clear photo of the maintenance issue. Our AI will analyze the image to help categorize the problem automatically.',
    note: 'A clear, well-lit photo helps the AI work better.',
    image: '/images/step3.png',
    alt: 'Interface for uploading a photo of a maintenance issue.',
  },
  {
    step: 4,
    title: 'PINPOINT THE LOCATION',
    description: 'Use the interactive map to drop a pin at the exact location of the issue. This helps our maintenance teams find and resolve the problem without any delay.',
    note: 'GPS can help, but confirm the pin location.',
    image: '/images/step4.png',
    alt: 'Map interface showing a pin dropped on a location.',
  },
  {
    step: 5,
    title: 'ADD A BRIEF DESCRIPTION & SUBMIT',
    description: 'While the AI does most of the work, you can add a short note for any extra details. Once you\'re done, hit "Submit" and your report is sent.',
    note: 'Keep descriptions concise and to the point.',
    image: '/images/step5.png',
    alt: 'Final submission screen with description field and submit button.',
  },
  {
    step: 6,
    title: 'TICKET GENERATED!',
    description: 'That\'s it! A maintenance ticket is instantly generated, categorized, and assigned. You can track its status right from your dashboard.',
    note: 'You will receive notifications on status updates.',
    image: '/images/step6.png',
    alt: 'Success message confirming the maintenance ticket was generated.',
  },
];

const StepByStepGuide = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight font-headline">
            A Step-by-Step Visual Guide
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Follow these simple steps to report any issue on campus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stepsData.map((step) => (
            <Card key={step.step} className="bg-background/50 backdrop-blur-lg shadow-lg overflow-hidden border-0 flex flex-col">
              <CardHeader>
                <Badge variant="outline" className="text-md mb-2 w-fit-content">STEP {step.step}</Badge>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <CardDescription className="mb-4 text-base">{step.description}</CardDescription>
                  <Badge variant="secondary">{step.note}</Badge>
                </div>
                <div className="mt-6">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md shadow-md"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
