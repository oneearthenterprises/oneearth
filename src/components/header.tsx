"use client";

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

const mobileNavLinks = [
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

export function Header() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const isAboutActive = aboutMenuItems.some((item) => pathname.startsWith(item.href));
  const isNewsActive = newsAndUpdatesLinks.some((item) => pathname.startsWith(item.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold text-foreground">One</span>
          <span className="text-2xl font-medium text-foreground">Earth</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
              <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent hover:underline focus:underline data-[state=open]:underline data-[state=open]:bg-secondary", isAboutActive && "bg-secondary")}>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <div className="grid w-screen grid-cols-2 gap-x-8 p-12 h-[400px]">
                          <NavigationMenuLink asChild>
                              <Link href="/aboutus" className="flex h-full w-full select-none items-center justify-center rounded-md p-6 text-2xl font-semibold no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                  About
                              </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                              <Link href="/core-values" className="flex h-full w-full select-none items-center justify-center rounded-md p-6 text-2xl font-semibold no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                  Core Value
                              </Link>
                          </NavigationMenuLink>
                      </div>
                  </NavigationMenuContent>
              </NavigationMenuItem>

              {mainNavLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                      <NavigationMenuLink asChild active={pathname.startsWith(link.href)}>
                          <Link href={link.href} className={cn("hover:underline focus:underline", "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-secondary data-[state=open]:bg-secondary")}>
                              {link.title}
                          </Link>
                      </NavigationMenuLink>
                  </NavigationMenuItem>
              ))}
          
              <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn("text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent hover:underline focus:underline data-[state=open]:underline data-[state=open]:bg-secondary", isNewsActive && "bg-secondary")}>News & Updates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <div className="grid w-screen grid-cols-2 gap-x-8 p-12 h-[400px]">
                          <NavigationMenuLink asChild>
                              <Link href="/news" className="flex h-full w-full select-none items-center justify-center rounded-md p-6 text-2xl font-semibold no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                  News
                              </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                              <Link href="/blogs" className="flex h-full w-full select-none items-center justify-center rounded-md p-6 text-2xl font-semibold no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                  Blogs
                              </Link>
                          </NavigationMenuLink>
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
                  className="mb-8 flex items-baseline space-x-1"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-2xl font-bold text-foreground">One</span>
                  <span className="text-2xl font-medium text-foreground">Earth</span>
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
