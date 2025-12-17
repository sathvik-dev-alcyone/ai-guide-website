const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>A project dedicated to improving operations and safety at REVA University.</p>
        <p>&copy; {new Date().getFullYear()} AI Maintenance Reporter. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
