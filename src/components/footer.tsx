import Link from "next/link";
import { Logo } from "@/components/icons";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">One Earth Enterprises</span>
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            A diversified enterprise leading in technology, commerce, and real estate, committed to fostering innovation and sustainable growth for a better future.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#overview" className="text-sm text-muted-foreground hover:text-primary">Overview</Link></li>
            <li><Link href="#verticals" className="text-sm text-muted-foreground hover:text-primary">Business Verticals</Link></li>
            <li><Link href="#values" className="text-sm text-muted-foreground hover:text-primary">Why One Earth</Link></li>
            <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">123 Green Valley, Earth, 98765</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">contact@oneearth.enterprises</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} One Earth Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
