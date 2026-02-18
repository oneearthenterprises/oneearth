"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground mx-5 mb-5 rounded-[20px]">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col items-start gap-4">
           <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/TH ONE EARTH.png"
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
        <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Location</h3>
            <p className="text-sm text-foreground">
            One Earth Enterprises, SCO-67, First Floor, Guru Nanak Enclave, Old Ambala Road, Zirakpur, Punjab 140603
            </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="  flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 w-full">
          <p className="text-sm text-foreground  text-center w-full">
            © {year} One Earth Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
