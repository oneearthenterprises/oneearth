import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mx-5 mb-5 rounded-[20px]">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:col-span-2">
           <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/oneearth logo.svg"
              alt="One Earth Logo"
              width={140}
              height={40}
            />
          </Link>
          <p className="max-w-md text-sm text-foreground">
            Building a sustainable future, one enterprise at a time.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/aboutus" className="text-sm text-foreground hover:text-primary">About</Link></li>
            <li><Link href="/people-and-careers" className="text-sm text-foreground hover:text-primary">People & Careers</Link></li>
            <li><Link href="/news" className="text-sm text-foreground hover:text-primary">News</Link></li>
            <li><Link href="/blogs" className="text-sm text-foreground hover:text-primary">Blogs</Link></li>
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
