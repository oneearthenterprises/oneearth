import React from "react";
import { type Metadata } from 'next';
import Image from "next/image";
import { Phone, MapPin, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact Us | One Earth Enterprises | Get in Touch',
  description: 'Contact One Earth Enterprises for partnerships, projects, inquiries, and support across IT, real estate, and e-commerce.',
  alternates: {
    canonical: 'https://www.theoneearthenterprises.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'contact One Earth',
    'business inquiries',
    'partnerships',
    'get in touch',
    'contact form',
    'customer support',
    'business opportunities',
  ],
};

const page = () => {
  const phoneNumber = "+91 700 998 4070";
  const whatsappNumber = "+91 700 998 4070";
  const email = "info@theoneearthenterprises.com";
  const mapsQuery = encodeURIComponent(
    "SCO 67, Old Ambala Rd, Guru Nanak Enclave, Dhakoli, Zirakpur, Punjab 140603"
  );
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const addressLine1 = "SCO 67, Old Ambala Rd, Guru Nanak Enclave, Dhakoli";
  const addressLine2 = "Zirakpur, Punjab 140603";
  const hours = [
    { days: "Mon–Fri", time: "9:00 AM – 6:00 PM" },
    { days: "Sat", time: "10:00 AM – 2:00 PM" },
  ];
  const contactPerson = { name: "Karan Sharma", role: "General Inquiries" };

  return (
    <div className="w-full">
      {/* Hero section for contact page */}
      <section className="relative bg-secondary text-secondary-foreground mx-5 mb-5 rounded-[20px]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.5),transparent_35%)]" />
        <div className="relative container mx-auto md:py-12 py-4 px-4 text-left sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black">Contact Support</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s make your next move easy.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
              Reach out to One Earth Enterprises for partnerships, projects, or support. Our team is ready to help with real estate, IT, e-commerce, and growth strategies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
              >
                Call {phoneNumber}
              </a>
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-600 bg-white px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto md:py-12 py-4 px-4 text-left sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <div className="rounded-xl border bg-white shadow-sm md:p-6 p-2">
              <h2 className="text-2xl font-semibold">We&apos;re here to help</h2>
              <p className="mt-2 text-muted-foreground">Choose a quick action below — we typically reply within one business day.</p>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  aria-label={`Call ${phoneNumber}`}
                  className="w-full flex flex-col gap-3 rounded-md border px-4 py-3 hover:shadow-md sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                >
                  <div className="min-w-0 flex items-center gap-3">
                    <div className="rounded-full bg-green-50 p-2">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Call us</div>
                      <div className="text-sm text-muted-foreground">{phoneNumber}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Tap to call</div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="w-full flex flex-col gap-3 rounded-md border px-4 py-3 hover:shadow-md sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                >
                  <div className="min-w-0 flex items-center gap-3">
                    <div className="rounded-full bg-emerald-50 p-2">
                      <Image
                        src="/assets/images/whatsapp-color-svgrepo-com.svg"
                        alt="WhatsApp icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">{whatsappNumber}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Message us</div>
                </a>

                <a
                  href={`mailto:${email}`}
                  aria-label={`Email ${email}`}
                  className="w-full flex flex-col gap-3 rounded-md border px-4 py-3 hover:shadow-md sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
                >
                  <div className="min-w-0 flex items-center gap-3">
                    <div className="rounded-full bg-slate-50 p-2">
                      <Image
                        src="/assets/images/email-8-svgrepo-com.svg"
                        alt="Email icon"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground break-words">{email}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">Open mail app</div>
                </a>
              </div>
            </div>
          </section>
          <aside className="space-y-6">
            <div className="rounded-xl border bg-white shadow-sm md:p-6 p-2">
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-muted-foreground">Reach us via phone, email, WhatsApp, or visit our office.</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-teal-600 mt-1" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-sm text-muted-foreground">{addressLine1}</div>
                    <div className="text-sm text-muted-foreground">{addressLine2}</div>
                    <div className="mt-2">
                      <a href={mapsLink} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:underline">Get directions</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <div className="font-medium">Opening hours</div>
                    <div className="text-sm text-muted-foreground">
                      {hours.map((h, i) => (
                        <div key={i}>{h.days}: {h.time}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <div className="font-medium">Contact</div>
                    <div className="text-sm text-muted-foreground">{contactPerson.name} — {contactPerson.role}</div>
                    <div className="mt-1">
                      <a href={`mailto:${email}`} className="text-sm hover:underline">{email}</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="container mx-auto md:py-12 py-4 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border bg-white shadow-sm p-6">
          <h2 className="text-3xl font-semibold">Still need help?</h2>
          <p className="mt-2 text-muted-foreground">
            If you'd like a simple summary, use the details below to reach us directly.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">Phone</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">{phoneNumber}</p>
              <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="mt-4 inline-block text-sm font-medium text-teal-600 hover:underline">
                Call now
              </a>
            </div>
            <div className="rounded-3xl border bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">Email</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">{email}</p>
              <a href={`mailto:${email}`} className="mt-4 inline-block text-sm font-medium text-teal-600 hover:underline">
                Send email
              </a>
            </div>
            <div className="rounded-3xl border bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">Office</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">{addressLine1}</p>
              <p className="text-sm text-slate-600">{addressLine2}</p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-medium text-teal-600 hover:underline">
                Find us on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;