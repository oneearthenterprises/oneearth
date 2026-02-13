import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mx-5 mb-5 rounded-[20px]">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">One Earth Enterprises</span>
          </Link>
          <p className="max-w-md text-sm text-foreground">
            A diversified enterprise leading in technology, commerce, and real estate, committed to fostering innovation and sustainable growth for a better future.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/aboutus" className="text-sm text-foreground hover:text-primary">About</Link></li>
            <li><Link href="/founders-note" className="text-sm text-foreground hover:text-primary">Founder's Note</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} One Earth Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
