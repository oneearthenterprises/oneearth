"use client";

import Link from 'next/link';
import * as React from 'react';
import { Menu } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
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
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuTrigger, 
    NavigationMenuContent, 
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const aboutSubLinks: { title: string; href: string, description: string }[] = [
  { title: 'About', href: '/aboutus', description: 'Learn more about the vision, mission, and values of novo holdings.' },
  { title: 'Novo Group', href: '#', description: 'Explore the companies and partnerships within our portfolio.' },
  { title: 'Leadership', href: '/founders-note', description: 'A message from the founder of novo holdings.' },
  { title: 'Responsibility', href: '/core-values', description: 'Discover the principles that guide our long-term strategy.' },
  { title: 'Novo Nordisk Foundation', href: '#', description: 'The holding and investment company of the Novo Nordisk Foundation.' },
];


const mainNavLinks: { title: string; href: string }[] = [
    { title: 'Investments', href: '#' },
    { title: 'People & Careers', href: '#' },
    { title: 'News & Reports', href: '/news' },
];

const mobileNavLinks = [
    {
        label: 'About',
        subLinks: aboutSubLinks,
    },
    ...mainNavLinks.map(l => ({label: l.title, href: l.href})),
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
        
        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="h-[400px] w-auto bg-white">
                      <div className="container mx-auto flex h-full items-center">
                          <ul className="grid w-full grid-cols-2 gap-6 p-6 md:grid-cols-3">
                              {aboutSubLinks.map((link) => (
                                  <ListItem
                                      key={link.title}
                                      title={link.title}
                                      href={link.href}
                                  >
                                      {link.description}
                                  </ListItem>
                              ))}
                          </ul>
                      </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {mainNavLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
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
          <div className="text-lg font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';