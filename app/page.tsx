"use client"
import { useState } from "react";
import BubbleMenu from "./components/BubbleMenu"

import { Hero } from "./components/hero";
import { StudentGrid } from "./components/student-grid";
import { About } from "./components/about";
import {
  Bell,
  CalendarDays,
  GraduationCap,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const productFeatures = [
  {
    icon: Bell,
    title: "Campus feed",
    copy: "Announcements, student posts, club updates, and opportunities stay in one place instead of disappearing in group chats.",
    accent: "#003554",
  },
  {
    icon: CalendarDays,
    title: "Events that students actually find",
    copy: "Filter by university, interest, and date, then RSVP before the lecture hall, pitch night, or hangout fills up.",
    accent: "#C99700",
  },
  {
    icon: GraduationCap,
    title: "Study groups by course",
    copy: "Discover course circles, join group activity, and meet classmates who are revising the same topics this week.",
    accent: "#1F8A70",
  },
  {
    icon: MessageCircle,
    title: "Real conversations",
    copy: "Direct and group chats keep campus connections active after a post, RSVP, or group request.",
    accent: "#7C3AED",
  },
  {
    icon: MapPin,
    title: "Nearby discovery",
    copy: "Students can discover nearby peers and campus resources with privacy controls, incognito mode, and sharing choices.",
    accent: "#E4572E",
  },
  {
    icon: Search,
    title: "Student search",
    copy: "Find people by courses, interests, university, clubs, and shared goals without needing a mutual contact first.",
    accent: "#0B6E99",
  },
];

const feedItems = [
  {
    label: "Announcement",
    title: "Data Structures quiz moved to Friday",
    meta: "Computer Science Department",
  },
  {
    label: "Event",
    title: "Open mic night at the SRC forecourt",
    meta: "142 students going",
  },
  {
    label: "Study group",
    title: "Economics 202 revision circle",
    meta: "8 seats left",
  },
];

const studentWins = [
  "Meet classmates before the semester feels crowded",
  "Stop missing events hidden inside old WhatsApp threads",
  "Turn campus interests into real friendships and study crews",
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
  {
    label: 'home',
    href: '#home',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#003554', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#1F8A70', textColor: '#ffffff' }
  },
  {
    label: 'features',
    href: '#features',
    ariaLabel: 'Features',
    rotation: 8,
    hoverStyles: { bgColor: '#C99700', textColor: '#111111' }
  },
  {
    label: 'events',
    href: '#campus-life',
    ariaLabel: 'Events',
    rotation: 8,
    hoverStyles: { bgColor: '#E4572E', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#download',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#7C3AED', textColor: '#ffffff' }
  }
];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FBFD] text-[#081F2D]">
      <BubbleMenu
        logo={<span style={{ fontWeight: 800, fontFamily: "Puddles", fontSize: "2rem", color: "#003554" }}>uniCLIQ</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#003554"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        onMenuClick={setIsMenuOpen}
        className=""
        style={{}}
      />
      <div className={`site-content ${isMenuOpen ? "nav-open" : ""}`}>
        <Hero />
        <StudentGrid />
        <section id="features" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFE8A3] px-4 py-2 text-sm font-bold text-[#4F3900]">
                  <Sparkles size={16} />
                  Built for actual campus life
                </p>
                <h2 className="text-3xl font-black leading-tight text-[#003554] md:text-5xl">
                  One student hub for the things that usually get scattered.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#425466] md:text-lg">
                uniCLIQ brings posts, announcements, events, study circles, search, profiles,
                messaging, and location-aware discovery into one campus-first experience.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="rounded-[2rem] border border-[#D7E5EC] bg-[#FBFEFF] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                      style={{ backgroundColor: feature.accent }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-black text-[#081F2D]">{feature.title}</h3>
                    <p className="leading-7 text-[#526675]">{feature.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="campus-life" className="bg-[#003554] py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F7C948]">
                From feed to friendship
              </p>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Students should know what is happening before it becomes old news.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
                The product experience is social first: a feed that feels familiar, campus
                context that feels useful, and quick actions that help students join in.
              </p>
              <div className="mt-8 grid gap-3">
                {studentWins.map((win) => (
                  <div key={win} className="flex items-center gap-3 text-white/90">
                    <ShieldCheck className="shrink-0 text-[#F7C948]" size={20} />
                    <span>{win}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white p-4 text-[#081F2D] shadow-2xl md:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[#D7E5EC] pb-4">
                <div>
                  <p className="text-sm font-bold text-[#0B6E99]">Today on campus</p>
                  <h3 className="text-2xl font-black">University of Ghana</h3>
                </div>
                <div className="rounded-full bg-[#E8F7F1] px-3 py-1 text-sm font-bold text-[#1F8A70]">
                  Live
                </div>
              </div>
              <div className="space-y-3">
                {feedItems.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-[#D7E5EC] bg-[#F7FBFD] p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#FFE8A3] px-3 py-1 text-xs font-black text-[#4F3900]">
                        {item.label}
                      </span>
                      <span className="text-xs font-bold text-[#66788A]">{item.meta}</span>
                    </div>
                    <h4 className="text-lg font-black">{item.title}</h4>
                  </article>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["Create", "Post"],
                  ["Join", "Group"],
                  ["RSVP", "Event"],
                ].map(([verb, noun]) => (
                  <a
                    key={verb}
                    href={verb === "Create" ? "#features" : verb === "Join" ? "#about" : "#download"}
                    className="rounded-3xl border border-[#D7E5EC] bg-white px-3 py-4 text-sm font-black text-[#003554] transition hover:border-[#F7C948] hover:bg-[#FFF8DB]"
                  >
                    <span className="block">{verb}</span>
                    <span className="block text-[#66788A]">{noun}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <About />

        <section id="download" className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.25rem] bg-[#F7FBFD] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E8F7F1] px-4 py-2 text-sm font-bold text-[#1F8A70]">
                <Users size={16} />
                Ready for student communities
              </p>
              <h2 className="text-3xl font-black text-[#003554] md:text-5xl">
                Make campus feel smaller, louder, and easier to join.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#425466]">
                uniCLIQ is the place for profiles, events, study groups, messages,
                announcements, and nearby discovery, all shaped around university life.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a href="mailto:hello@unicliq.app?subject=Join%20the%20uniCLIQ%20waitlist" className="rounded-full bg-[#003554] px-8 py-4 text-center font-black text-white shadow-lg transition hover:bg-[#002D69]">
                Join the waitlist
              </a>
              <a href="mailto:hello@unicliq.app?subject=Partner%20with%20uniCLIQ" className="rounded-full border-2 border-[#003554] px-8 py-4 text-center font-black text-[#003554] transition hover:bg-[#FFF8DB]">
                Partner with us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
