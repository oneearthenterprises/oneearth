"use client";

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';


const aboutMenuItems: { title: string; href: string }[] = [
    { title: 'About', href: '/aboutus' },
    { title: 'Core Value', href: '/core-values' },
];

const mainNavLinks: { title: string; href: string }[] = [
    { title: "Founder's Note", href: '/founders-note' },
    { title: 'People & Careers', href: '/people-and-careers' },
];

const newsAndUpdatesLinks = [
  { title: 'News', href: '/news' },
  { title: 'Blogs', href: '/blogs' },
];

const mobileNavLinks :MobileNavLink[]= [
    {
        label: 'About',
        subLinks: aboutMenuItems.map(item => ({title: item.title, href: item.href})),
    },
    ...mainNavLinks.map(l => ({label: l.title, href: l.href})),
    {
        label: 'News & Updates',
        subLinks: newsAndUpdatesLinks
    },
];
type MobileNavLink = {
  label: string;
  href?: string;
  subLinks?: { title: string; href: string }[];
};

export function Header() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();


  const isAboutActive = aboutMenuItems.some((item) => pathname.startsWith(item.href));
  const isNewsActive = newsAndUpdatesLinks.some((item) => pathname.startsWith(item.href));

 const [isScrolled, setIsScrolled] = React.useState(false);
 React.useEffect (()=>{

  const handleScroll =()=>{
    if(window.scrollY > 0){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
 },[])
  return (
<header
  className={`
    w-full bg-white border-b border-border/40
    transition-all duration-300 z-50 flex
    ${isScrolled ? "fixed top-0 left-0 md:h-[95px] h-[75px]" : "relative h-auto"}
  `}
>
 <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">

<Link
  href="/"
  className={cn(
    "flex items-center justify-center transition-all duration-300 overflow-hidden",
    isScrolled ? "md:h-[95px] h-[75px]" : "h-[130px]"
  )}
>
  <Image
  src={isScrolled ? `/assets/images/the one earth.svg` : `/assets/images/oneearth logo.jpg`}
    alt="One Earth Logo"
    width={180}
    height={100}
    priority
    className={cn( 
      "object-contain transition-all duration-300  relative w-auto",
      isScrolled ? "md:h-[80px] h-[70px] relative  w-auto" : "md:h-[150px] h-[110px] w-auto"
     
    )}
  />
</Link>

        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
              <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("text-lg font-medium bg-transparent hover:bg-transparent focus:bg-transparent hover:underline focus:underline data-[state=open]:underline data-[state=open]:bg-secondary", isAboutActive && "bg-secondary")}>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <div className="w-screen min-h-[400px] px-12 py-10 flex flex-col gap-6">
                      <Link href="/aboutus" className="text-xl font-medium tracking-tight text-foreground sm:text-4xl">
                                  About
                              </Link>
                              <Link href="/core-values" className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                                  Core Values
                              </Link>
                      </div>
                  </NavigationMenuContent>
              </NavigationMenuItem>

              {mainNavLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                      <NavigationMenuLink asChild active={pathname.startsWith(link.href)}>
                          <Link href={link.href} className={cn("hover:underline focus:underline", "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary data-[state=open]:bg-secondary")}>
                              {link.title}
                          </Link>
                      </NavigationMenuLink>
                  </NavigationMenuItem>
              ))}
           
              <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("text-lg font-medium bg-transparent hover:bg-transparent focus:bg-transparent hover:underline focus:underline data-[state=open]:underline data-[state=open]:bg-secondary", isNewsActive && "bg-secondary")}>News & Updates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <div className=" w-screen flex flex-col gap-x-8 p-12 h-[400px] gap-6">
                      <Link href="/news" className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                                  News
                              </Link>
                              <Link href="/blogs" className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                                  Blogs
                              </Link>
                      </div>
                  </NavigationMenuContent>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link
                  href="/"
                  className="mb-8 flex items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image
                    src="/assets/images/oneearth logo.jpg"
                    alt="One Earth Logo"
                    width={140}
                    height={40}
                  />
                </Link>
                <nav className="flex flex-col space-y-2">
                  {mobileNavLinks.map((link) =>
                    link.subLinks ? (
                      <Accordion
                        type="single"
                        collapsible
                        key={link.label}
                        className="w-full"
                      >
                        <AccordionItem
                          value={link.label}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="py-2 text-lg hover:no-underline">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pl-4">
                            <div className="flex flex-col space-y-2">
                              {link.subLinks.map((subLink) => (
                                <Link
                                  key={subLink.title}
                                  href={subLink.href}
                                  className="text-base text-muted-foreground"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {subLink.title}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href!}
                        className="py-2 text-lg"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
