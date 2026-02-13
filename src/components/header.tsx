"use client";

import Link from 'next/link';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Logo } from '@/components/icons';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const aboutSubLinks: { title: string; href: string; description: string; }[] = [
  {
    title: 'About Us',
    href: '/aboutus',
    description: 'Learn more about the vision, mission, and values of One Earth Enterprises.',
  },
  {
    title: 'Core Values',
    href: '/core-values',
    description: 'Discover the principles that guide our long-term strategy and daily operations.',
  },
];

const newsSubLinks: { title: string; href: string; description: string; }[] = [
  {
    title: 'News',
    href: '/news',
    description: 'Stay updated with the latest announcements and press releases.',
  },
  {
    title: 'Blogs',
    href: '/blogs',
    description: 'Read insights and articles from our team on industry trends and topics.',
  },
];

const navLinks = [
  {
    label: 'About',
    href: '/aboutus',
    subLinks: aboutSubLinks.map(l => ({title: l.title, href: l.href})),
  },
  {
    label: 'News & Updates',
    href: '#',
    subLinks: newsSubLinks.map(l => ({title: l.title, href: l.href})),
  },
  { href: "/founders-note", label: "Founder's Note" },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              One Earth Enterprises
            </span>
          </Link>
        </div>
        <div className="hidden flex-1 items-center justify-center md:flex">
         {isClient && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="container mx-auto grid w-full grid-cols-2 gap-6 p-6" style={{height: '400px'}}>
                      {aboutSubLinks.map((subLink) => (
                        <ListItem
                          key={subLink.title}
                          href={subLink.href}
                          title={subLink.title}
                        >
                          {subLink.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>News & Updates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="container mx-auto grid w-full grid-cols-2 gap-6 p-6" style={{height: '400px'}}>
                      {newsSubLinks.map((subLink) => (
                          <ListItem
                          key={subLink.title}
                          href={subLink.href}
                          title={subLink.title}
                        >
                          {subLink.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/founders-note" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Founder's Note
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
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
                    className="mb-8 flex items-center space-x-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-bold">One Earth Enterprises</span>
                  </Link>
                  <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) =>
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
                          href={link.href}
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

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';