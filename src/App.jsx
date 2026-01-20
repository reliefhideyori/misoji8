import React, { useState, useEffect } from 'react';
import { Instagram, MapPin, Calendar, Gift, Users, Heart, ChevronDown, Star, Sparkles, Megaphone } from 'lucide-react';

const App = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [typedMessage, setTypedMessage] = useState("");
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

    // Typing Effect
    useEffect(() => {
        if (scrollY > 2200) {
            let i = 0;
            const typingTimer = setInterval(() => {
                setTypedMessage(fullMessage.slice(0, i));
                i++;
                if (i > fullMessage.length) clearInterval(typingTimer);
            }, 60);
            return () => clearInterval(typingTimer);
        }
    }, [scrollY > 2200]);



    const guests = [
        { name: "呂布カルマ", sub: "SPECIAL GUEST", color: "bg-pink-500", image: "/ryoff-karma.png" },
        { name: "Legal nerd boyz", sub: "シラフ / TOKYO 世界 / SKINNY YMT", color: "bg-cyan-500", image: "/legal-nerd-boyz.png" }
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
            <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-4">
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

                    <div className="bg-white border-4 border-black p-4 md:p-6 rounded-[30px] shadow-[8px_8px_0px_#000] rotate-[1deg] inline-block mb-10">
                        <div className="flex gap-4 md:gap-6 justify-center">
                            {[
                                { label: 'DAYS', value: timeLeft.days },
                                { label: 'HRS', value: timeLeft.hours },
                                { label: 'MINS', value: timeLeft.minutes },
                                { label: 'SECS', value: timeLeft.seconds }
                            ].map((item, idx) => (
                                <div key={idx} className="text-center min-w-[60px]">
                                    <div className="text-3xl md:text-5xl font-black leading-none">{String(item.value).padStart(2, '0')}</div>
                                    <div className="text-[10px] font-bold mt-1 opacity-60">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-4 mb-8">
                        <div className="bg-black text-white px-6 py-3 rounded-full font-black text-lg flex items-center gap-2 shadow-lg">
                            <Calendar size={20} /> 2026.3.22 (SUN)
                        </div>
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
            <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
                <div className="bg-white border-8 border-black p-8 md:p-16 rounded-[60px] shadow-[20px_20px_0px_#FF00FF]">
                    <h2 className="text-5xl md:text-7xl font-black italic mb-12 flex items-center gap-4">
                        <Sparkles className="text-pink-500" /> GUESTS
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {guests.map((guest, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute inset-0 bg-black rounded-3xl translate-x-3 translate-y-3" />
                                <div className={`relative ${guest.color} border-4 border-black rounded-3xl p-8 hover:-translate-y-2 transition-transform h-full`}>
                                    <p className="text-white font-black text-sm tracking-widest mb-2">{guest.sub}</p>
                                    <h3 className="text-4xl md:text-6xl font-black italic text-white leading-tight drop-shadow-lg">
                                        {guest.name}
                                    </h3>
                                    <div className="mt-8 aspect-square bg-white/20 rounded-2xl border-4 border-black flex items-center justify-center overflow-hidden">
                                        <img
                                            src={guest.image}
                                            alt={guest.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prizes Section */}
            <section className="py-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="animate-float inline-block">
                        <div className="bg-cyan-400 border-4 border-black p-8 rounded-full shadow-[10px_10px_0px_#000] rotate-[-5deg]">
                            <Gift size={64} className="mx-auto mb-4" />
                            <h3 className="text-4xl font-black italic">豪華景品抽選会</h3>
                            <p className="text-xl font-bold mt-2">NINTENDO SWITCH ほか 多数！</p>
                        </div>
                    </div>
                    <div className="mt-12 text-2xl font-black flex justify-center gap-8">
                        <div className="bg-white border-4 border-black p-4 rotate-2">入場無料</div>
                        <div className="bg-pink-500 text-white border-4 border-black p-4 rotate-[-3deg]">誰でも入場可能</div>
                    </div>
                </div>
            </section>

            {/* Message Section */}
            <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-32 border-t-8 border-black">
                <div className="max-w-3xl w-full text-center">
                    <div className="min-h-[200px] text-3xl md:text-5xl font-black leading-snug text-black">
                        {typedMessage}
                        <span className="inline-block w-2 h-10 md:h-16 bg-pink-500 ml-2 animate-pulse" />
                    </div>
                </div>

                <div className={`mt-24 transition-all duration-1000 ${typedMessage.length >= fullMessage.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <a
                            href="https://www.instagram.com/_tajimi_misoji/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 bg-[#FFF500] border-4 border-black text-black px-12 py-6 rounded-full font-black text-2xl hover:scale-110 transition-all shadow-[10px_10px_0px_#000]"
                        >
                            <Instagram size={32} />
                            Follow on Instagram
                        </a>
                        <div className="bg-white border-4 border-black p-4 rounded-2xl shadow-[8px_8px_0px_#000]">
                            <img
                                src="/instagram-qr.png"
                                alt="Instagram QR Code"
                                className="w-48 h-auto"
                            />
                        </div>
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
