import { Wrench } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Wrench className="h-6 w-6 mr-2 text-primary" />
          <span className="text-lg font-bold">AI Maintenance Guide</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
