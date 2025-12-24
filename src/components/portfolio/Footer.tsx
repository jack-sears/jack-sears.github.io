const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="font-heading text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. Built with passion for the beautiful game.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
