import React, { useState, useEffect, useRef } from 'react';
import { Instagram, MapPin, Calendar, Gift, Users, Heart, ChevronDown, Star, Sparkles, Megaphone, Clock, DoorOpen, Ticket, Mic, Music, Trophy, Flag, Gamepad2, Wind, Armchair, UtensilsCrossed, Wheat } from 'lucide-react';

// Custom Icons based on user image
const SwitchIcon = ({ size = 64, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 12C4 9 4 8 6 6C7.5 4.5 9 5 12 5C15 5 16.5 4.5 18 6C20 8 20 9 20 12C20 15 19 16.5 17 18C16 19 15 19 14 17C13 16 11 16 10 17C9 19 8 19 7 18C5 16.5 4 15 4 12Z" fill="black" />
        <path d="M7 9V11" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 10H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="9" r="1.2" fill="white" />
        <circle cx="15.5" cy="10.5" r="1.2" fill="white" />
        <circle cx="18.5" cy="10.5" r="1.2" fill="white" />
        <circle cx="17" cy="12" r="1.2" fill="white" />
    </svg>
);

const DryerIcon = ({ size = 64, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M19 11L14 11V7C14 5.5 13 4 11 4H6C4 4 3 5 3 7V10C3 12 4 13 6 13L11 13V22H14V13L19 13C20 13 21 12 21 12C21 12 20 11 19 11Z" fill="black" />
        <path d="M4 7V10" stroke="#FF00FF" strokeWidth="2" />
        <path d="M11 7V9" stroke="#FF00FF" strokeWidth="2" />
    </svg>
);

const YogiboIcon = ({ size = 64, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M5 14C5 9 8 5 13 5C18 5 21 8 21 13C21 17 18 20 13 20C8 20 5 18 5 14Z" fill="black" />
        <path d="M9 10C11 12 14 12 16 10" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const TicketIcon = ({ size = 64, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M21 10C20.4 10 20 9.6 20 9V7C20 6.4 19.6 6 19 6H5C4.4 6 4 6.4 4 7V9C4 9.6 3.6 10 3 10C2.4 10 2 10.4 2 11V13C2 13.6 2.4 14 3 14C3.6 14 4 14.4 4 15V17C4 17.6 4.4 18 5 18H19C19.6 18 20 17.6 20 17V15C20 14.4 20.4 14 21 14C21.6 14 22 13.6 22 13V11C22 10.4 21.6 10 21 10Z" fill="black" />
        <path d="M9 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 8L7 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 8L11 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <rect x="14" y="8" width="2" height="8" rx="1" fill="white" />
        <line x1="12.5" y1="7" x2="12.5" y2="17" stroke="white" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
);

const RiceIcon = ({ size = 64, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M7 6C7 4 8 3 9 3H15C16 3 17 4 17 6V18C17 20 16 21 15 21H9C8 21 7 20 7 18V6Z" fill="black" />
        <path d="M6 6L7 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 6L17 8" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" fill="white" />
        <path d="M12 9C12 9 10 11 10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11 12 9 12 9Z" fill="black" />
    </svg>
);

const App = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [typedMessage, setTypedMessage] = useState("");
    const [startTyping, setStartTyping] = useState(false);
    const messageSectionRef = useRef(null);
    const fullMessage = "30歳。それは、かつての夢を現実に変え、新しい自分に出会う場所。多治見の空の下で、僕らはまた一歩、大人になる。共に祝おう、この特別な節目を。";

    // Countdown Logic
    useEffect(() => {
        const targetDate = new Date('2026-03-22T11:00:00');
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(timer);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Scroll Tracking
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typing Effect with Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTyping(true);
                }
            },
            { threshold: 0.3 }
        );

        if (messageSectionRef.current) {
            observer.observe(messageSectionRef.current);
        }

        return () => {
            if (messageSectionRef.current) {
                observer.unobserve(messageSectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (startTyping) {
            let i = 0;
            const typingTimer = setInterval(() => {
                setTypedMessage(fullMessage.slice(0, i));
                i++;
                if (i > fullMessage.length) clearInterval(typingTimer);
            }, 60);
            return () => clearInterval(typingTimer);
        }
    }, [startTyping]);



    const guests = [
        { name: "呂布カルマ", sub: "SPECIAL GUEST", color: "bg-pink-500", image: "/ryoff-karma.png", url: "https://www.instagram.com/ryoff000karma/" },
        { name: "Legal nerd boyz", sub: "シラフ / TOKYO 世界 / SKINNY YMT", color: "bg-cyan-500", image: "/legal-nerd-boyz.png", url: "https://www.instagram.com/legalnerdboyz/" }
    ];

    return (
        <div className="min-h-screen bg-[#FFF500] text-black font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">

            {/* CSS Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .animate-slow-pulse {
          animation: slow-pulse 4s ease-in-out infinite;
        }
        .text-outline {
          -webkit-text-stroke: 2px black;
          color: white;
        }
        .y2k-shadow {
          filter: drop-shadow(4px 4px 0px #FF00FF);
        }
      `}} />

            {/* Ticker Banner */}
            <div className="fixed top-0 left-0 w-full bg-black text-[#FFF500] py-2 z-[100] font-black italic overflow-hidden whitespace-nowrap border-b-4 border-pink-500">
                <div className="animate-marquee">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="mx-8 flex items-center gap-2 text-xl">
                            <Megaphone size={20} /> 入場無料 誰でも入場可能 豪華景品が当たる！ 虎渓用水広場 2026.3.22 開催決定！
                        </span>
                    ))}
                </div>
            </div>

            {/* Sparkle Particles */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(15)].map((_, i) => (
                    <Star
                        key={i}
                        className="absolute text-pink-500 opacity-30 animate-slow-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `scale(${Math.random() * 1.5}) rotate(${Math.random() * 360}deg)`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                        size={Math.random() * 20 + 10}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4">
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                <div className="z-10 text-center relative w-full max-w-6xl flex flex-col items-center">
                    <div className="inline-block bg-black text-white font-black text-lg px-6 py-2 rotate-[-1deg] mb-1 shadow-[4px_4px_0px_#FF00FF]">
                        ENTRY FREE / NO BORDER
                    </div>

                    <h1 className="mb-2">
                        <img
                            src="/logo.png"
                            alt="令和８年 多治見市三十路式"
                            className="w-full max-w-2xl mx-auto drop-shadow-[8px_8px_0px_#000]"
                        />
                    </h1>

                    <div className="bg-white border-4 border-black p-4 md:p-6 rounded-[30px] shadow-[8px_8px_0px_#000] inline-block mb-6">
                        <div className="text-center mb-4 font-black">
                            <p className="text-3xl md:text-5xl mb-2">2026.3.22 <span className="text-pink-500">(SUN)</span></p>
                            <p className="text-sm md:text-base text-gray-600">開催まで...</p>
                        </div>
                        <div className="flex gap-8 md:gap-12 justify-center items-end">
                            {[
                                { label: 'DAYS', value: timeLeft.days },
                                { label: 'HOURS', value: timeLeft.hours },
                                { label: 'MINUTES', value: timeLeft.minutes },
                                { label: 'SECONDS', value: timeLeft.seconds }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="text-5xl md:text-7xl font-black font-mono leading-none tracking-tighter mb-1">
                                        {String(item.value).padStart(2, '0')}
                                    </div>
                                    <div className="text-xs md:text-sm font-bold tracking-widest text-gray-500">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-4 mb-8">
                        {/* Date moved to above countdown */}
                        <div className="bg-white border-4 border-black px-6 py-3 rounded-full font-black text-lg flex items-center gap-2 shadow-lg">
                            <MapPin className="text-pink-500" size={20} /> 虎渓用水広場
                        </div>
                    </div>
                </div>

                {/* Adjusted Scroll Arrow Position */}
                <div className="absolute bottom-6 animate-bounce z-20">
                    <ChevronDown size={40} className="text-black" />
                </div>
            </section>



            {/* Guest Section */}
            <section className="pt-12 pb-24 px-4 max-w-6xl mx-auto relative z-10">
                <div className="bg-white border-8 border-black p-8 md:p-16 rounded-[60px] shadow-[20px_20px_0px_#FF00FF]">
                    <h2 className="text-5xl md:text-7xl font-black italic mb-12 flex items-center gap-4">
                        <Sparkles className="text-pink-500" /> GUESTS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {guests.map((guest, idx) => (
                            <div key={idx} className="relative group cursor-pointer h-full">
                                <a href={guest.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <div className="absolute inset-0 bg-black rounded-3xl translate-x-3 translate-y-3" />
                                    <div className={`relative ${guest.color} border-4 border-black rounded-3xl p-8 hover:-translate-y-2 transition-transform h-full flex flex-col`}>
                                        <div>
                                            <p className="text-white font-black text-sm tracking-widest mb-2">{guest.sub}</p>
                                            <h3 className={`${guest.name.length > 10 ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'} font-black italic text-white leading-tight drop-shadow-lg`}>
                                                {guest.name}
                                            </h3>
                                        </div>
                                        <div className="mt-auto aspect-square bg-white/20 rounded-2xl border-4 border-black flex items-center justify-center overflow-hidden">
                                            <img
                                                src={guest.image}
                                                alt={guest.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Time Table & Prizes Section */}
            <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">

                {/* Time Table */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl md:text-8xl font-black text-[#FF00FF] tracking-tighter drop-shadow-[4px_4px_0px_#000]" style={{ WebkitTextStroke: '2px black' }}>TIME TABLE</h2>

                        <div className="mt-8 text-xl font-black flex flex-wrap justify-center gap-4">
                            <div className="bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0px_#000]">入場無料</div>
                            <div className="bg-pink-500 text-white border-4 border-black px-6 py-2 shadow-[4px_4px_0px_#000]">誰でも入場可能</div>
                        </div>
                    </div>

                    <div className="relative grid md:grid-cols-2 gap-x-12 gap-y-0 max-w-5xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-black -translate-x-1/2 rounded-full"></div>

                        {/* 11:00 Open */}
                        <div className="md:contents">
                            <div className="relative md:text-right md:pr-12 pb-12">
                                <div className="hidden md:block absolute right-[-6px] top-8 w-6 h-6 bg-[#FF00FF] border-4 border-black rounded-full z-20 translate-x-[50%]"></div>
                                <div className="flex flex-col md:items-end items-center -space-y-6">
                                    <div className="bg-[#FF00FF] border-4 border-black text-white font-black text-5xl px-8 py-2 rounded-full shadow-[6px_6px_0px_#000] rotate-[-2deg] z-10 relative">
                                        11:00
                                    </div>
                                    <div className="bg-white border-4 border-black px-8 py-4 pt-8 rounded-full flex items-center justify-between gap-4 shadow-[8px_8px_0px_#000] min-w-[200px] md:min-w-[280px]">
                                        <span className="font-black text-2xl">開場</span>
                                        <DoorOpen size={32} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-start-2"></div>
                        </div>

                        {/* 13:00 Ticket Distribution */}
                        <div className="md:contents">
                            <div className="md:col-start-1"></div>
                            <div className="relative md:pl-12 pb-12">
                                <div className="hidden md:block absolute left-[-6px] top-8 w-6 h-6 bg-[#FF00FF] border-4 border-black rounded-full z-20 translate-x-[-50%]"></div>
                                <div className="flex flex-col md:items-start items-center -space-y-6">
                                    <div className="bg-[#FF00FF] border-4 border-black text-white font-black text-5xl px-8 py-2 rounded-full shadow-[6px_6px_0px_#000] rotate-[2deg] z-10 relative">
                                        13:00
                                    </div>
                                    <div className="bg-white border-4 border-black px-8 py-4 pt-8 rounded-full flex items-center justify-between gap-4 shadow-[8px_8px_0px_#000] min-w-[200px] md:min-w-[320px]">
                                        <span className="font-black text-2xl">抽選券配布開始</span>
                                        <Ticket size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 13:45 Mayor Greeting */}
                        <div className="md:contents">
                            <div className="relative md:text-right md:pr-12 pb-12">
                                <div className="hidden md:block absolute right-[-6px] top-8 w-6 h-6 bg-[#FF00FF] border-4 border-black rounded-full z-20 translate-x-[50%]"></div>
                                <div className="flex flex-col md:items-end items-center -space-y-6">
                                    <div className="bg-[#FF00FF] border-4 border-black text-white font-black text-5xl px-8 py-2 rounded-full shadow-[6px_6px_0px_#000] rotate-[-2deg] z-10 relative">
                                        13:45
                                    </div>
                                    <div className="bg-white border-4 border-black px-8 py-4 pt-8 rounded-full flex items-center justify-between gap-4 shadow-[8px_8px_0px_#000] min-w-[200px] md:min-w-[300px]">
                                        <span className="font-black text-2xl">多治見市長挨拶</span>
                                        <Mic size={32} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-start-2"></div>
                        </div>

                        {/* 14:00 Live Performance */}
                        <div className="md:contents">
                            <div className="md:col-start-1"></div>
                            <div className="relative md:pl-12 pb-12">
                                <div className="hidden md:block absolute left-[-6px] top-8 w-6 h-6 bg-[#FF00FF] border-4 border-black rounded-full z-20 translate-x-[-50%]"></div>
                                <div className="flex flex-col md:items-start items-center -space-y-6">
                                    <div className="bg-[#FF00FF] border-4 border-black text-white font-black text-5xl px-8 py-2 rounded-full shadow-[6px_6px_0px_#000] rotate-[2deg] z-10 relative">
                                        14:00
                                    </div>
                                    <div className="bg-white border-4 border-black px-8 py-4 pt-8 rounded-full flex items-center justify-between gap-4 shadow-[8px_8px_0px_#000] min-w-[200px] md:min-w-[320px]">
                                        <span className="font-black text-2xl">ライブパフォーマンス</span>
                                        <Music size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 15:00 Lottery Results */}
                        <div className="md:contents">
                            <div className="relative md:text-right md:pr-12 pb-12">
                                <div className="hidden md:block absolute right-[-6px] top-8 w-6 h-6 bg-[#FF00FF] border-4 border-black rounded-full z-20 translate-x-[50%]"></div>
                                <div className="flex flex-col md:items-end items-center -space-y-6">
                                    <div className="bg-[#FF00FF] border-4 border-black text-white font-black text-5xl px-8 py-2 rounded-full shadow-[6px_6px_0px_#000] rotate-[-2deg] z-10 relative">
                                        15:00
                                    </div>
                                    <div className="bg-white border-4 border-black px-8 py-4 pt-8 rounded-full flex items-center justify-between gap-4 shadow-[8px_8px_0px_#000] min-w-[200px] md:min-w-[280px]">
                                        <span className="font-black text-2xl">抽選結果発表</span>
                                        <Trophy size={32} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-start-2"></div>
                        </div>

                        {/* 16:00 Close */}
                        <div className="md:contents">
                            <div className="md:col-start-1"></div>
                            <div className="relative md:pl-12">
                                <div className="hidden md:block absolute left-[-6px] top-8 w-6 h-6 bg-[#FF00FF] border-4 border-black rounded-full z-20 translate-x-[-50%]"></div>
                                <div className="flex flex-col md:items-start items-center -space-y-6">
                                    <div className="bg-[#FF00FF] border-4 border-black text-white font-black text-5xl px-8 py-2 rounded-full shadow-[6px_6px_0px_#000] rotate-[2deg] z-10 relative">
                                        16:00
                                    </div>
                                    <div className="bg-white border-4 border-black px-8 py-4 pt-8 rounded-full flex items-center justify-between gap-4 shadow-[8px_8px_0px_#000] min-w-[200px] md:min-w-[250px]">
                                        <span className="font-black text-2xl">クローズ</span>
                                        <Flag size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Raffle Prizes */}
                <div className="text-center">
                    <div className="mb-12">
                        <h2 className="text-5xl md:text-7xl font-black text-[#FF00FF] tracking-tighter drop-shadow-[4px_4px_0px_#000] mb-2" style={{ WebkitTextStroke: '2px black' }}>抽選会景品</h2>
                        <p className="font-bold text-lg text-black">※画像はイメージです</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
                        {[
                            { name: "Switch2", icon: SwitchIcon, rotate: "rotate-[-3deg]" },
                            { name: "Refa", icon: DryerIcon, rotate: "rotate-[2deg]" },
                            { name: "Yogibo", icon: YogiboIcon, rotate: "rotate-[-2deg]" },
                            { name: "焼肉安福食事券", icon: TicketIcon, rotate: "rotate-[3deg]" },
                            { name: "国産米", icon: RiceIcon, rotate: "rotate-[-1deg]" }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex flex-col items-center gap-4 ${item.rotate} animate-float`} style={{ animationDelay: `${idx * 0.5}s` }}>
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[8px_8px_0px_#FF00FF] hover:scale-110 transition-transform">
                                    <item.icon size={80} className="" />
                                </div>
                                <div className="bg-white border-4 border-black px-6 py-2 rounded-full font-black text-lg shadow-[4px_4px_0px_#000]">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Message Section */}
            <section ref={messageSectionRef} className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-32 border-t-8 border-black">
                <div className="max-w-3xl w-full text-center">
                    <div className="min-h-[200px] text-3xl md:text-5xl font-black leading-snug text-black">
                        {typedMessage}
                        <span className="inline-block w-2 h-10 md:h-16 bg-pink-500 ml-2 animate-pulse" />
                    </div>
                </div>

                <div className={`mt-24 transition-all duration-1000 ${typedMessage.length >= fullMessage.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex justify-center">
                        <a
                            href="https://www.instagram.com/_tajimi_misoji/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-4 bg-[#FFF500] border-4 border-black text-black px-12 py-6 rounded-full font-black text-2xl hover:scale-110 transition-all shadow-[10px_10px_0px_#000]"
                        >
                            <Instagram size={32} className="relative -left-1" />
                            Follow on Instagram
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#FFF500] py-20 border-t-8 border-black px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-black italic mb-6">令和８年 多治見市 三十路式</h2>
                        <div className="space-y-3 font-bold text-lg">
                            <p className="flex items-center gap-2">主催：令和7年度多治見市三十路式実行委員会</p>
                            <p>共催：多治見市</p>
                            <p>お問合せ：多治見市役所 くらし人権課</p>
                            <p className="bg-black text-white inline-block px-2">TEL：0572-22-1134</p>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t-4 border-black">
                        <p className="font-black text-sm">© 令和8年多治見市三十路式実行委員会</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default App;
