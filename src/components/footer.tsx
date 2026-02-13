import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mx-5 mb-5 rounded-[20px]">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:col-span-2">
           <Link href="/" className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-foreground">novo</span>
            <span className="text-2xl font-medium text-foreground">holdings</span>
          </Link>
          <p className="max-w-md text-sm text-foreground">
            The holding and investment company of the Novo Nordisk Foundation.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/aboutus" className="text-sm text-foreground hover:text-primary">About</Link></li>
            <li><Link href="#" className="text-sm text-foreground hover:text-primary">Investments</Link></li>
            <li><Link href="#" className="text-sm text-foreground hover:text-primary">People & Careers</Link></li>
            <li><Link href="/news" className="text-sm text-foreground hover:text-primary">News & Reports</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-sm text-foreground">
            © {new Date().getFullYear()} novo holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
