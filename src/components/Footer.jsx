import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="p-4 bg-card relative border-t border-border mt-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Arun G. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
