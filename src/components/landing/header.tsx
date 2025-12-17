import { Wrench } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Wrench className="h-6 w-6 mr-2 text-primary" />
          <span className="text-lg font-bold">AI Maintenance Guide</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
