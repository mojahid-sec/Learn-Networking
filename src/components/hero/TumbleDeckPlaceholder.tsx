import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { 
  Compass, 
  Terminal, 
  Server, 
  Cpu, 
  Settings2, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface TumbleCardItem {
  id: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  descEn: string;
  descBn: string;
  icon: React.ElementType;
  accentColor: string;
  link: string;
  stats: string;
  badge: string;
}

const TUMBLE_DECK_CARDS: TumbleCardItem[] = [
  {
    id: 'roadmap',
    titleEn: 'Networking Roadmap',
    titleBn: 'নেটওয়ার্কিং রোডম্যাপ',
    categoryEn: 'Curriculum Path',
    categoryBn: 'লার্নিং পাথ',
    descEn: 'Structured progression from foundational bits and cabling to enterprise routing, switching, and protocol troubleshooting.',
    descBn: 'ফিজিক্যাল ক্যাবলিং থেকে শুরু করে এন্টারপ্রাইজ রাউটিং, সুইচিং এবং প্রোটোকল ট্রাবলশুটিংয়ের সুসংগঠিত লার্নিং পাথ।',
    icon: Compass,
    accentColor: 'from-cyan-500 to-blue-600',
    link: '/roadmap',
    stats: '12 Levels • 150+ Topics',
    badge: 'Core Track'
  },
  {
    id: 'labs',
    titleEn: 'Practical Labs',
    titleBn: 'প্র্যাকটিক্যাল ল্যাবস',
    categoryEn: 'Hands-on Practice',
    categoryBn: 'হাতে-কলমে অনুশীলন',
    descEn: 'Interactive simulations for switch MAC learning, CIDR subnet calculators, packet flows, and real networking commands.',
    descBn: 'সুইচ ম্যাক লার্নিং, সাবনেট ক্যালকুলেটর, প্যাকেট ফ্লো এবং বাস্তব নেটওয়ার্কিং কমান্ডের ইন্টারেক্টিভ সিমুলেশন।',
    icon: Terminal,
    accentColor: 'from-emerald-500 to-teal-600',
    link: '/labs',
    stats: '6 Practical Labs',
    badge: 'Interactive'
  },
  {
    id: 'devices',
    titleEn: 'Network Devices',
    titleBn: 'নেটওয়ার্ক ডিভাইসেস',
    categoryEn: 'Hardware & Architecture',
    categoryBn: 'হার্ডওয়্যার ও আর্কিটেকচার',
    descEn: 'Deep dive into Routers, Managed Switches, Firewalls, Hubs, Access Points, and NIC architecture with working flow diagrams.',
    descBn: 'রাউটার, ম্যানেজড সুইচ, ফায়ারওয়াল, হাব, এক্সেস পয়েন্ট ও এনআইসি-র অভ্যন্তরীণ কাজের প্রক্রিয়া ও প্রবাহ চিত্র।',
    icon: Server,
    accentColor: 'from-indigo-500 to-purple-600',
    link: '/diagrams',
    stats: 'Hardware Deconstructed',
    badge: 'Visual Engine'
  },
  {
    id: 'protocols',
    titleEn: 'Networking Protocols',
    titleBn: 'নেটওয়ার্কিং প্রোটোকল',
    categoryEn: 'Communication Rules',
    categoryBn: 'যোগাযোগের নিয়মনীতি',
    descEn: 'Visual explanations for TCP/UDP, DNS resolution chain, DHCP DORA process, ICMP ping mechanism, and ARP tables.',
    descBn: 'টিসিপি/ইউডিপি, ডিএনএস রেজোলিউশন, ডিএইচসিপি DORA প্রক্রিয়া, পিং মেকানিজম এবং এআরপি টেবিলের পুঙ্খানুপুঙ্খ ব্যাখ্যা।',
    icon: Cpu,
    accentColor: 'from-amber-500 to-orange-600',
    link: '/lessons',
    stats: '18+ Protocols Covered',
    badge: 'Standards'
  },
  {
    id: 'configuration',
    titleEn: 'Network Configuration',
    titleBn: 'নেটওয়ার্ক কনফিগারেশন',
    categoryEn: 'Implementation & CLI',
    categoryBn: 'ইমপ্লিমেন্টেশন ও সিএলআই',
    descEn: 'Step-by-step guides for IP planning, VLAN segmentation, Default Gateways, NAT translation, and diagnostic CLI commands.',
    descBn: 'আইপি প্ল্যানিং, ভি-ল্যান সেগমেন্টেশন, ডিফল্ট গেটওয়ে, ন্যাট এবং ডায়াগনস্টিক সিএলআই কমান্ডের ধাপে ধাপে গাইড।',
    icon: Settings2,
    accentColor: 'from-pink-500 to-rose-600',
    link: '/practice',
    stats: 'Enterprise Ready',
    badge: 'Real World'
  }
];

export const TumbleDeckPlaceholder: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartXRef = useRef<number | null>(null);
  const { t } = useLanguage();

  // Optimized animation duration: 0.38s (24% faster than 0.5s) for snappy, responsive 3D transitions
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animDuration = prefersReducedMotion ? 0.05 : 0.38;

  // GSAP 3D Deck animation effect
  useEffect(() => {
    if (!containerRef.current) return;

    const isSmall = window.innerWidth < 640;
    const isMedium = window.innerWidth < 1024;
    const stepX = isSmall ? 35 : isMedium ? 90 : 140;
    const farX = isSmall ? 65 : isMedium ? 160 : 230;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const offset = (index - activeIndex + TUMBLE_DECK_CARDS.length) % TUMBLE_DECK_CARDS.length;
      
      // Calculate 3D stacking positions with enhanced responsiveness
      if (offset === 0) {
        // Active Center Card
        gsap.to(card, {
          x: 0,
          y: 0,
          scale: 1,
          zIndex: 30,
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          duration: animDuration,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else if (offset === 1) {
        // Right Card
        gsap.to(card, {
          x: stepX,
          y: 10,
          scale: isSmall ? 0.8 : 0.9,
          zIndex: 20,
          opacity: isSmall ? 0.35 : 0.75,
          rotateY: -15,
          rotateX: 0,
          duration: animDuration,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else if (offset === 2) {
        // Far Right Card
        gsap.to(card, {
          x: farX,
          y: 20,
          scale: isSmall ? 0.7 : 0.8,
          zIndex: 10,
          opacity: isSmall ? 0 : 0.35,
          rotateY: -25,
          rotateX: 0,
          duration: animDuration,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else if (offset === TUMBLE_DECK_CARDS.length - 1) {
        // Left Card
        gsap.to(card, {
          x: -stepX,
          y: 10,
          scale: isSmall ? 0.8 : 0.9,
          zIndex: 20,
          opacity: isSmall ? 0.35 : 0.75,
          rotateY: 15,
          rotateX: 0,
          duration: animDuration,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        // Far Left / Behind
        gsap.to(card, {
          x: -farX,
          y: 20,
          scale: isSmall ? 0.7 : 0.8,
          zIndex: 10,
          opacity: isSmall ? 0 : 0.35,
          rotateY: 25,
          rotateX: 0,
          duration: animDuration,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) gsap.killTweensOf(card);
      });
    };
  }, [activeIndex, animDuration]);

  // Subtle, responsive 3D mouse-following tilt on active card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const activeCard = cardsRef.current[activeIndex];
    if (!activeCard) return;

    const rect = activeCard.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    // Limit subtle tilt angles to ±7 deg for natural, premium feel
    const clampedX = Math.max(-1, Math.min(1, normX));
    const clampedY = Math.max(-1, Math.min(1, normY));

    gsap.to(activeCard, {
      rotateY: clampedX * 7,
      rotateX: -clampedY * 6,
      duration: 0.16,
      ease: 'power1.out',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    const activeCard = cardsRef.current[activeIndex];
    if (!activeCard || prefersReducedMotion) return;

    gsap.to(activeCard, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.28,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TUMBLE_DECK_CARDS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TUMBLE_DECK_CARDS.length) % TUMBLE_DECK_CARDS.length);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
    touchStartXRef.current = null;
  };

  return (
    <div 
      id="tumble-deck-showcase-container" 
      className="relative w-full max-w-5xl mx-auto py-6 overflow-hidden px-2 sm:px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Component Slot Banner */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-900/40 text-xs backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-cyan-300">
            {t('Curriculum & Lab Showcase', 'কারিকুলাম ও ল্যাব শোকেস')}
          </span>
          <span className="hidden sm:inline-block text-slate-500">•</span>
          <span className="hidden sm:inline-block text-slate-400">
            {t('5 Interactive 3D Showcase Cards', '৫টি ইন্টারেক্টিভ ৩ডি শোকেস কার্ড')}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span>{activeIndex + 1} / {TUMBLE_DECK_CARDS.length}</span>
        </div>
      </div>

      {/* 3D Perspective Card Stage */}
      <div 
        ref={containerRef}
        className="relative h-[380px] sm:h-[400px] w-full flex items-center justify-center [perspective:1200px]"
      >
        {TUMBLE_DECK_CARDS.map((card, idx) => {
          const Icon = card.icon;
          const isActive = idx === activeIndex;

          return (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              onClick={() => setActiveIndex(idx)}
              className={`absolute top-4 w-[280px] sm:w-[340px] md:w-[380px] h-[340px] sm:h-[360px] cursor-pointer rounded-2xl border p-6 shadow-2xl transition-colors duration-200 select-none flex flex-col justify-between ${
                isActive 
                  ? 'border-cyan-500/60 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 shadow-cyan-500/20 ring-1 ring-cyan-500/30' 
                  : 'border-slate-800/80 bg-slate-900/90 hover:border-slate-700'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${card.accentColor} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-800/90 border border-slate-700 px-2.5 py-1 text-[11px] font-semibold text-cyan-300">
                    {card.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono-code font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                  {t(card.categoryEn, card.categoryBn)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {t(card.titleEn, card.titleBn)}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {t(card.descEn, card.descBn)}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 font-mono-code">
                  {card.stats}
                </span>

                <Link
                  to={card.link}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 px-3 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30 hover:text-white transition-all"
                >
                  <span>{t('Explore', 'অন্বেষণ করুন')}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deck Navigation Controls */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all focus:outline-none"
          aria-label="Previous showcase card"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {TUMBLE_DECK_CARDS.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all focus:outline-none ${
                idx === activeIndex
                  ? 'w-8 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                  : 'w-2.5 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Jump to card ${idx + 1}: ${card.titleEn}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all focus:outline-none"
          aria-label="Next showcase card"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
