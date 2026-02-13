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
import Image from 'next/image';

const aboutSubLinks: { title: string; href: string; description: string }[] = [
  {
    title: 'About',
    href: '#about',
    description: 'Learn more about our vision, mission, and values.',
  },
  {
    title: 'Leadership',
    href: '#',
    description: 'Meet the experienced team guiding our strategic direction.',
  },
  {
    title: 'Responsibility',
    href: '#',
    description: 'Our commitment to sustainable and ethical business practices.',
  },
];

const navLinks = [
  {
    label: 'About',
    href: '#about',
    subLinks: aboutSubLinks,
  },
  { href: '#investments', label: 'Investments' },
  { href: '#people-careers', label: 'People & Careers' },
  { href: '#news-reports', label: 'News & Reports' },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              One Earth Enterprises
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-1 text-sm font-medium md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="container mx-auto grid max-w-screen-2xl gap-3 p-4 md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                             <div className="relative h-32 w-full">
                              <Image
                                src="https://images.unsplash.com/photo-1571475549372-7e8ee93796dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxuYXR1cmUlMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzcwODExMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="One Earth Enterprises"
                                fill
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div className="mb-2 mt-4 text-lg font-medium">
                              One Earth Enterprises
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Our vision, mission, and values.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
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
                  <Link href="#investments" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Investments
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
                  <Link href="#news-reports" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      News & Reports
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="md:hidden">
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
