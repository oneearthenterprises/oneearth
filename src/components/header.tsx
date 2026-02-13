"use client";

import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
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

const aboutSubLinks: { title: string; href: string }[] = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Novo Group',
    href: '#',
  },
  {
    title: 'Leadership',
    href: '#',
  },
  {
    title: 'Responsibility',
    href: '#',
  },
  {
    title: 'Novo Nordisk Foundation',
    href: '#',
  },
];

const newsSubLinks: { title: string; href: string }[] = [
  {
    title: 'Press Releases',
    href: '#',
  },
  {
    title: 'Annual Reports',
    href: '#',
  },
  {
    title: 'Media Coverage',
    href: '#',
  },
];

const navLinks = [
  {
    label: 'About',
    href: '#about',
    subLinks: aboutSubLinks,
  },
  { href: "#founders-note", label: "Founder's Note" },
  { href: '#people-careers', label: 'People & Careers' },
  {
    href: '#news-reports',
    label: 'News & Reports',
    subLinks: newsSubLinks,
  },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              One Earth Enterprises
            </span>
          </Link>
        </div>
        <div className="hidden flex-1 items-center justify-end md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="container mx-auto grid w-full max-w-screen-2xl gap-y-6 px-4 py-12 sm:px-6 lg:px-8">
                    {aboutSubLinks.map((subLink) => (
                      <ListItem
                        key={subLink.title}
                        href={subLink.href}
                        title={subLink.title}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#founders-note" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Founder's Note
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#people-careers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    People & Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>News & Reports</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="container mx-auto grid w-full max-w-screen-2xl gap-y-6 px-4 py-12 sm:px-6 lg:px-8">
                    {newsSubLinks.map((subLink) => (
                       <ListItem
                        key={subLink.title}
                        href={subLink.href}
                        title={subLink.title}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none text-3xl leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary',
            className
          )}
          {...props}
        >
          {title}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';