const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground space-y-2">
        <p>This guide website was created as part of the outreach and adoption planning for the AI Maintenance Reporter project.</p>
        <p>A project dedicated to improving operations and safety at REVA University.</p>
        <p>&copy; {new Date().getFullYear()} AI Maintenance Reporter. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
