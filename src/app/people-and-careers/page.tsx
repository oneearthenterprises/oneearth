
import { type Metadata } from 'next';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'People & Careers | One Earth Enterprises',
  description: 'Join the team at One Earth Enterprises. See our open roles.',
};

const openRoles = [
  {
    title: 'Senior Inventory Specialist',
    type: 'Full Time',
    salary: '$100K – $150K',
    location: 'Zirakpur',
  },
  {
    title: 'Senior Software Developer',
    type: 'Full Time',
    salary: '$120K – $180K',
    location: 'Zirakpur',
  },
  {
    title: 'Junior UI/UX Fullstack Designer',
    type: 'Full Time',
    salary: '$80K – $110K',
    location: 'Zirakpur',
  },
];

export default function PeopleAndCareersPage() {
  const pageLinks = [
    { href: '/aboutus', title: 'About' },
    { href: '/news', title: 'News' },
    { href: '/blogs', title: 'Blogs' },
  ];

  return (
    <>
      <PageHero
        title="People & Careers"
        bannerImageId="people-careers-banner"
        links={pageLinks}
      />
      <div id="people-and-careers-content" className="bg-white">
        <div className="container mx-auto max-w-screen-xl py-24 px-4 sm:px-6 lg:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-5xl font-bold tracking-tight text-foreground">
                Our Open Roles
              </h2>
              <div className="mt-12">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  OR CONTACT US WITH
                </p>
                <a
                  href="mailto:careers@oneearthent.com"
                  className="mt-2 block text-lg text-primary hover:underline"
                >
                  careers@oneearthent.com
                </a>
              </div>
            </div>

            <div className="space-y-8 md:col-span-2">
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="border-b border-border pb-8 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Open Roles
                  </p>
                  <div className="mt-4 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-foreground">
                        {role.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span>{role.type}</span>
                        <span className="text-muted-foreground/50">&bull;</span>
                        <span>{role.salary}</span>
                        <span className="text-muted-foreground/50">&bull;</span>
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full"
                      >
                        <ChevronDown className="h-5 w-5" />
                        <span className="sr-only">More info</span>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                      >
                        <a href="https://wa.me/917009984070" target="_blank" rel="noopener noreferrer">
                          Submit Application
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
