import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle } from 'lucide-react';

const WhyThisSystemExists = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight font-headline">The Old Way vs. The AI Way</h2>
          <p className="mt-2 text-lg text-muted-foreground">Modernizing campus maintenance reporting for the digital age.</p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Card className="border-destructive/50 border-2 shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <XCircle className="h-10 w-10 text-destructive" />
              <CardTitle className="text-2xl font-headline">Traditional Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/80" />
                  <span>Time consuming manual forms that are easy to misplace.</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/80" />
                  <span>Confusion about where and how to report different issues.</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/80" />
                  <span>No easy way to track the status of your report.</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/80" />
                  <span>Delayed responses due to inefficient manual processing.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/50 border-2 shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <CardTitle className="text-2xl font-headline">AI Based Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-green-500" />
                  <span>Quick photo uploads from any device, anywhere on campus.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-green-500" />
                  <span>Automatic AI-powered issue detection and categorization.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-green-500" />
                  <span>A centralized dashboard for administration to manage all tickets.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-green-500" />
                  <span>Instant ticket generation for faster resolution times.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyThisSystemExists;
