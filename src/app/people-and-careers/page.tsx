
import { type Metadata } from 'next';

import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'People & Careers | One Earth Enterprises',
  description: 'Join the team at One Earth Enterprises. See our open roles.',
};

const openRoles = [
  {
    title: 'Backend Developer',
    type: 'Full Time',
    location: 'Zirakpur',
    description:
      'We are looking for a skilled Backend Developer to join our team. You will be responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end.',
  },
  {
    title: 'Senior Software Developer',
    type: 'Full Time',
    location: 'Zirakpur',
    description:
      'As a Senior Software Developer, you will lead our project teams to design, develop and maintain high-quality software solutions. You will be responsible for the full software development life cycle, from conception to deployment. You are expected to be a team player and a leader with a keen eye for detail and problem-solving skills.',
  },
  {
    title: 'Junior UI/UX Fullstack Designer',
    type: 'Full Time',
    location: 'Zirakpur',
    description:
      'We are seeking a talented Junior UI/UX Fullstack Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI/UX skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.',
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
                  href="mailto:jobs@theoneearthenterprises.com"
                  className="mt-2 block text-lg text-primary hover:underline"
                >
                  jobs@theoneearthenterprises.com
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <Accordion type="single" collapsible className="w-full">
                {openRoles.map((role) => (
                  <AccordionItem
                    key={role.title}
                    value={role.title}
                    className="border-b border-border last:border-b-0"
                  >
                    <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center">
                      <AccordionTrigger className="p-0 text-left hover:no-underline">
                        <div>
                          <h3 className="text-3xl font-bold text-foreground">
                            {role.title}
                          </h3>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <span>{role.type}</span>
                            <span className="text-muted-foreground/50">
                              &bull;
                            </span>
                            <span>{role.location}</span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <div className="w-full flex-shrink-0 md:ml-auto md:w-auto">
                        <Button asChild size="lg" className="w-full md:w-auto">
                          <a
                            href="https://wa.me/917009984070"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Submit Application
                          </a>
                        </Button>
                      </div>
                    </div>
                    <AccordionContent className="pb-6">
                      <p className="text-base text-muted-foreground">
                        {role.description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
