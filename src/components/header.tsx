"use client";

import Link from 'next/link';
import * as React from 'react';
import { Menu, ChevronDown } from 'lucide-react';
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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

const aboutMenuItems: { title: string; href: string }[] = [
  { title: 'About', href: '/aboutus' },
  { title: 'Core Value', href: '/core-values' },
];

const mainNavLinks: { title: string; href: string }[] = [
    { title: 'Investments', href: '#' },
    { title: 'People & Careers', href: '#' },
];

const newsAndUpdatesLinks = [
  { title: 'News', href: '/news' },
  { title: 'Blogs', href: '/blogs' },
];

const mobileNavLinks = [
    {
        label: 'About',
        subLinks: aboutMenuItems,
    },
    ...mainNavLinks.map(l => ({label: l.title, href: l.href})),
    {
        label: 'News & Updates',
        subLinks: newsAndUpdatesLinks
    },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold text-foreground">novo</span>
          <span className="text-2xl font-medium text-foreground">holdings</span>
        </Link>
        
        <div className="flex flex-1 justify-end items-center">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:underline hover:underline focus:underline">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
                    <ul className="space-y-4">
                      {aboutMenuItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="text-4xl font-light text-foreground hover:text-primary focus:text-primary focus:outline-none"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {mainNavLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent hover:underline focus:underline")}>
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent hover:underline focus:underline data-[state=open]:underline flex items-center gap-1 px-4 py-2 h-10">
                      News & Updates
                      <ChevronDown className="h-4 w-4 relative top-px" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[200px]">
                    {newsAndUpdatesLinks.map((link) => (
                        <DropdownMenuItem key={link.title} asChild>
                            <Link href={link.href}>
                                {link.title}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
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
                    <span className="text-2xl font-bold text-foreground">novo</span>
                    <span className="text-2xl font-medium text-foreground">holdings</span>
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
      </div>
    </header>
  );
}
