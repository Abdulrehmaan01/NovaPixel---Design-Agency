
import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Star, 
  Zap, 
  Smartphone, 
  Briefcase, 
  XCircle, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  Layout,
  Globe,
  Search,
  Settings,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/1234567890" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg animate-pulse-neon transition-transform hover:scale-110 active:scale-95"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle size={32} className="text-white" fill="white" />
  </a>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/5 h-20 flex items-center">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#39FF14] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.5)]">
          <Layout className="text-black" size={24} />
        </div>
        <span className="font-orbitron font-bold text-xl tracking-tighter neon-text select-none">NOVAPIXEL</span>
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href="tel:+1234567890" 
          className="hidden lg:flex items-center gap-2 border border-white/20 px-5 py-2 rounded-full hover:bg-white/5 transition-colors text-sm font-semibold"
        >
          <Phone size={16} /> Call Now
        </a>
        <a 
          href="https://wa.me/1234567890" 
          className="bg-[#39FF14] text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-105 transition-all flex items-center gap-2"
        >
          <MessageCircle size={18} fill="black" /> WhatsApp Now
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center text-center overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: Math.random() * 1000, x: Math.random() * 2000, opacity: 0 }}
          animate={{ 
            y: [null, -100], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: Math.random() * 15 + 10, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-[#39FF14] rounded-full blur-[1px]"
        />
      ))}
    </div>

    <div className="container mx-auto px-6 relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block glass px-4 py-1.5 rounded-full border border-[#39FF14]/30 mb-8">
            <span className="text-[#39FF14] font-orbitron text-[10px] md:text-xs tracking-[0.3em] font-bold">PREMIUM WEB DESIGN SOLUTIONS</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 neon-text leading-[1.1] tracking-tight">
          Websites That Turn <br />
          <span className="text-white">Visitors Into Leads</span> 💡
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Premium web design for service businesses built for maximum conversion. 
          <span className="text-white font-semibold"> One-time cost 💵. No monthly contracts 🚫.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <a href="https://wa.me/1234567890" className="w-full sm:w-auto bg-[#39FF14] text-black px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
            <MessageCircle size={24} fill="black" /> Message Us on WhatsApp
          </a>
          <button className="w-full sm:w-auto border-2 border-[#39FF14] text-[#39FF14] px-12 py-5 rounded-2xl font-bold text-lg hover:bg-[#39FF14]/10 active:scale-95 transition-all flex items-center justify-center gap-3">
            View Demo Website <ArrowRight size={20} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2"><Star size={14} className="text-[#39FF14]" /> Trusted by Small Biz</span>
          <span className="flex items-center gap-2"><Zap size={14} className="text-[#39FF14]" /> Fast Delivery</span>
          <span className="flex items-center gap-2"><Globe size={14} className="text-[#39FF14]" /> Remote Service</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="relative z-20 -mt-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Conversion Focused", icon: <Star className="text-[#39FF14]" size={24} /> },
          { label: "Mobile-First Layout", icon: <Smartphone className="text-[#39FF14]" size={24} /> },
          { label: "3–5 Day Delivery", icon: <Zap className="text-[#39FF14]" size={24} /> },
          { label: "For Service Businesses", icon: <Briefcase className="text-[#39FF14]" size={24} /> },
        ].map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="glass neon-border p-6 rounded-2xl flex items-center justify-center gap-4 transition-all hover:bg-[#39FF14]/5 group"
          >
            <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-200">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-32 bg-[#080808]">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 neon-text leading-tight">Why Most Business <br/>Websites Fail ❌</h2>
        <p className="text-gray-400 text-lg">Traditional web design focuses on aesthetics alone. We focus on results.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Unclear Messaging", text: "Visitors leave within 5 seconds because they don't understand what you do.", icon: <XCircle size={48} className="text-red-500 mb-6" /> },
          { title: "Outdated Design", text: "A 2015-style website kills your trust and perceived value instantly.", icon: <XCircle size={48} className="text-red-500 mb-6" /> },
          { title: "No Strong CTA", text: "Lack of clear 'Contact' triggers means potential leads just vanish.", icon: <XCircle size={48} className="text-red-500 mb-6" /> },
          { title: "Traffic ≠ Leads", text: "Having visitors is useless if they don't pick up the phone or message you.", icon: <XCircle size={48} className="text-red-500 mb-6" /> },
        ].map((item, idx) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={idx} 
            className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-[#39FF14]/30 transition-all flex flex-col items-center text-center group"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-[#39FF14] transition-colors">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] relative overflow-hidden">
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 neon-text leading-tight">How We Help You <br/>Get More Leads 📈</h2>
        <p className="text-gray-400 text-lg leading-relaxed">We leverage high-end design and conversion optimization to turn clicks into clients.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {[
          { num: "01", title: "Web3 Visual Style", desc: "A clean, modern, and futuristic design that builds instant brand authority.", icon: <Globe className="text-[#39FF14]" /> },
          { num: "02", title: "Conversion First", desc: "Strategic UI placement that guides every visitor toward the 'Lead' button.", icon: <CheckCircle className="text-[#39FF14]" /> },
          { num: "03", title: "Direct Contact", desc: "One-tap WhatsApp and Call features to make communication effortless.", icon: <MessageCircle className="text-[#39FF14]" /> },
        ].map((step, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            key={idx} 
            className="glass p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group text-left"
          >
            <div className="absolute top-10 right-10 text-[6rem] font-black text-white/5 leading-none select-none group-hover:text-[#39FF14]/5 transition-colors">
              {step.num}
            </div>
            <div className="w-14 h-14 bg-[#39FF14]/10 rounded-2xl flex items-center justify-center mb-8 text-[#39FF14]">
              {React.cloneElement(step.icon as React.ReactElement, { size: 28 })}
            </div>
            <h3 className="text-2xl font-bold mb-5">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed text-base">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative inline-block group">
        <div className="absolute -inset-1 bg-[#39FF14] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <p className="relative text-2xl font-bold neon-text bg-black py-5 px-10 rounded-full border border-[#39FF14]/30">
          You control your leads 🔑. No platforms 🚫. No commissions 🚫
        </p>
      </div>
    </div>
  </section>
);

const FeaturesGrid = () => (
  <section className="py-32 bg-[#0a0a0a]">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">What’s Included 🎁</h2>
        <p className="text-gray-400">Everything you need to launch a high-performing website in under a week.</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          {[
            { title: "5-page custom website 📄", desc: "Home, Services, About, Portfolio, and Contact Page." },
            { title: "Mobile & tablet optimized 📱", desc: "Designed to look and work flawlessly on smartphones." },
            { title: "WhatsApp & Call buttons 💬📞", desc: "Floating triggers to ensure you never miss a lead." },
            { title: "Clear service pages 🧩", desc: "Dedicated layouts that showcase exactly what you offer." },
            { title: "Strong CTA sections 🔥", desc: "High-contrast sections designed to prompt immediate action." },
          ].map((item, idx) => (
            <motion.div 
              whileInView={{ x: [ -20, 0 ], opacity: [ 0, 1 ] }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="flex gap-6 p-8 glass rounded-3xl border-l-[6px] border-l-[#39FF14] hover:bg-white/5 transition-all"
            >
              <div className="bg-[#39FF14]/10 p-3 rounded-xl h-fit">
                <CheckCircle className="text-[#39FF14]" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          {[
            { icon: <Zap size={32} />, title: "Fast Loading", desc: "Optimized performance to keep bounce rates low." },
            { icon: <Globe size={32} />, title: "Premium Design", desc: "Aesthetic visuals that reflect high service quality." },
            { icon: <Search size={32} />, title: "Basic SEO", desc: "Built with SEO best practices for search engines." },
            { icon: <Settings size={32} />, title: "Easy Updates", desc: "Manage your content easily without coding skills." },
          ].map((item, idx) => (
            <motion.div 
              whileInView={{ scale: [ 0.95, 1 ], opacity: [ 0, 1 ] }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              key={idx} 
              className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-[#39FF14]/40 transition-all flex flex-col items-center text-center justify-center group"
            >
              <div className="mb-6 p-5 bg-white/5 rounded-2xl text-[#39FF14] group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 bg-gradient-to-t from-[#080808] to-[#0a0a0a]">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 neon-text">Simple One-Time Pricing 💵</h2>
        <p className="text-gray-400 text-lg">Invest once. Own forever. Grow indefinitely.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Standard */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass p-12 rounded-[4rem] border border-white/5 relative flex flex-col items-center group"
        >
          <div className="bg-[#39FF14]/10 text-[#39FF14] text-[10px] tracking-[0.3em] font-black px-6 py-2 rounded-full mb-8 border border-[#39FF14]/30 uppercase">MOST POPULAR ⭐</div>
          <h3 className="font-orbitron text-2xl font-bold mb-4 tracking-tighter">STANDARD PACKAGE</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-6xl font-black">$499</span>
            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">one-time</span>
          </div>
          <p className="text-[#39FF14] font-black mb-10 text-lg">🚀 5 days delivery</p>
          <ul className="space-y-5 mb-12 text-gray-300 text-base text-left w-full border-t border-white/5 pt-10">
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> 5 High-Conversion Pages</li>
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> Responsive Mobile Layout</li>
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> WhatsApp/Call Direct Connect</li>
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> Free Setup & Launch</li>
          </ul>
          <a href="https://wa.me/1234567890" className="w-full bg-[#39FF14] text-black py-5 rounded-2xl font-bold text-xl shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] hover:scale-105 active:scale-95 transition-all">
            Start on WhatsApp
          </a>
        </motion.div>

        {/* Express */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass p-12 rounded-[4rem] border-2 border-[#39FF14]/50 relative flex flex-col items-center bg-[#39FF14]/5 group shadow-[0_0_50px_rgba(57,255,20,0.05)]"
        >
          <div className="bg-[#39FF14] text-black text-[10px] tracking-[0.3em] font-black px-6 py-2 rounded-full mb-8 border border-white/20 uppercase">Priority Launch ⚡</div>
          <h3 className="font-orbitron text-2xl font-bold mb-4 tracking-tighter">EXPRESS PACKAGE</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-6xl font-black">$599</span>
            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">one-time</span>
          </div>
          <p className="text-[#39FF14] font-black mb-10 text-lg">⚡ 3 days delivery</p>
          <ul className="space-y-5 mb-12 text-gray-300 text-base text-left w-full border-t border-white/10 pt-10">
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> Everything in Standard</li>
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> Priority Support Lane</li>
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> 48-Hour Response Time</li>
            <li className="flex items-center gap-4"><CheckCircle size={20} className="text-[#39FF14]" /> VIP Project Management</li>
          </ul>
          <a href="https://wa.me/1234567890" className="w-full border-2 border-[#39FF14] text-[#39FF14] py-5 rounded-2xl font-bold text-xl hover:bg-[#39FF14] hover:text-black hover:scale-105 active:scale-95 transition-all">
            Get Express Delivery
          </a>
        </motion.div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
        <span>No Monthly Fees 🚫</span>
        <span>No Contracts 🚫</span>
        <span>Secured Payments 💵</span>
      </div>
    </div>
  </section>
);

const DemoGallery = () => (
  <section className="py-32 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">See a Sample Website 👀</h2>
        <p className="text-gray-400 text-lg">Take a peek at the level of quality we deliver for every single client.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {[
          { label: "Modern Homepage", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=1000" },
          { label: "Conversion Funnel", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=1000" },
          { label: "Mobile Experience", img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800&h=1000" },
        ].map((demo, idx) => (
          <motion.div 
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="group relative overflow-hidden rounded-[3rem] border-4 border-white/5 hover:border-[#39FF14]/50 transition-all cursor-pointer shadow-2xl"
          >
            <img src={demo.img} alt={demo.label} className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full text-left">
              <span className="text-2xl font-black text-white uppercase tracking-tighter neon-text">{demo.label}</span>
              <div className="w-12 h-1 bg-[#39FF14] mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="relative group bg-white text-black px-16 py-6 rounded-2xl font-black text-xl hover:bg-[#39FF14] hover:text-black hover:scale-105 active:scale-95 transition-all shadow-2xl">
        <span className="relative z-10">👀 View Live Demo Website</span>
      </button>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-32 bg-[#080808]">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 neon-text">How We Start. Simple & Fast ⚡</h2>
        <p className="text-gray-400 text-lg">We've removed the bureaucracy. Just speed and quality.</p>
      </div>
      
      <div className="max-w-4xl mx-auto relative px-4 md:px-0">
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#39FF14] via-[#39FF14]/50 to-transparent"></div>
        
        {[
          { step: "01", title: "Message us on WhatsApp 💬", desc: "Just say 'Hi' or describe your project. No boring forms or waiting for an email response.", align: "left" },
          { step: "02", title: "Confirm Requirements 📋", desc: "We discuss your brand, pages, and specific needs in a quick 10-minute chat.", align: "right" },
          { step: "03", title: "Secure Payment 🔐", desc: "Pay the upfront one-time fee via our encrypted secure checkout portal.", align: "left" },
          { step: "04", title: "Site Launch 🚀", desc: "We build, refine, and launch your lead-generating website in 3–5 business days.", align: "right" },
        ].map((item, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center mb-24 last:mb-0 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            {/* Step Number Circle */}
            <div className="absolute left-0 md:left-1/2 -translate-x-[40px] md:-translate-x-1/2 w-20 h-20 rounded-full glass border-2 border-[#39FF14] flex items-center justify-center font-orbitron text-3xl font-black text-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.3)] z-10 bg-[#080808]">
              {item.step}
            </div>
            
            {/* Content Card */}
            <motion.div 
              whileInView={{ x: item.align === 'left' ? [-30, 0] : [30, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              className={`w-full md:w-[42%] ml-16 md:ml-0 glass p-10 rounded-[3rem] border border-white/5 hover:bg-[#39FF14]/5 transition-all text-left ${item.align === 'right' ? 'md:text-right' : ''}`}
            >
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">{item.desc}</p>
            </motion.div>
            
            {/* Spacer for MD screens */}
            <div className="hidden md:block w-[42%]"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <div className="glass px-10 py-5 rounded-[2rem] border border-[#39FF14]/20 flex flex-col md:flex-row gap-6 items-center justify-center text-gray-300 font-black tracking-widest uppercase text-xs md:text-sm">
          <span className="flex items-center gap-3"><XCircle size={18} className="text-red-500" /> No Calls Required</span>
          <span className="hidden md:block w-[1px] h-6 bg-white/10"></span>
          <span className="text-[#39FF14] flex items-center gap-3"><MessageCircle size={18} /> Everything Handled on WhatsApp</span>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 glass rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-8 text-left transition-colors ${isOpen ? 'bg-[#39FF14]/5' : 'hover:bg-white/5'}`}
      >
        <span className="text-lg md:text-xl font-black flex items-center gap-6 pr-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isOpen ? 'bg-[#39FF14] text-black' : 'bg-[#39FF14]/10 text-[#39FF14]'}`}>
            <CheckCircle size={22} />
          </div>
          {question}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           {isOpen ? <ChevronUp className="text-[#39FF14]" size={28} /> : <ChevronDown className="text-gray-500" size={28} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-24 pb-10 text-gray-400 text-base leading-relaxed font-medium"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section className="py-32 bg-[#0a0a0a]">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Frequently Asked ❓</h2>
        <p className="text-gray-400 text-lg">Common questions from service business owners just like you.</p>
      </div>
      <FAQItem 
        question="Do I need technical knowledge?" 
        answer="Zero. We handle everything from domains and hosting to the design and technical SEO. We deliver a finished product that you just need to share with your customers. It's truly a 'done-for-you' service."
      />
      <FAQItem 
        question="Will this help me get more leads?" 
        answer="Absolutely. Our designs aren't just pretty—they are built using conversion optimization principles. We prioritize WhatsApp and Call triggers which typically convert at a 3x higher rate than static contact forms."
      />
      <FAQItem 
        question="Is there any monthly fee?" 
        answer="No. Unlike Wix, Shopify, or other monthly subscription builders, we charge once. You'll only ever pay for your own domain and hosting provider directly (usually $10-$15/month), which you own 100%."
      />
      <FAQItem 
        question="Can I update the website later?" 
        answer="Yes. We build on user-friendly editors that allow you to swap text and images in seconds. We provide a custom video tutorial after handover so you feel confident making small changes yourself."
      />
      <FAQItem 
        question="How do customers contact me?" 
        answer="The primary contact path is through high-visibility WhatsApp and Phone Call buttons. We can also integrate email forms, but our focus is on immediate, real-time lead generation via chat."
      />
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-40 relative overflow-hidden bg-black text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#39FF14]/10 via-transparent to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-8xl font-black mb-12 neon-text tracking-tighter leading-[1] max-w-5xl mx-auto">
        Ready to Get More Leads from Your Website? 🚀
      </h2>
      <p className="text-gray-400 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
        Let us build a website that actually converts. Start your project today and see the transformation in just a few days.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <a href="https://wa.me/1234567890" className="w-full md:w-auto bg-[#39FF14] text-black px-16 py-6 rounded-2xl font-black text-2xl shadow-[0_0_50px_rgba(57,255,20,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4">
          <MessageCircle size={32} fill="black" /> Message Us on WhatsApp
        </a>
        <button className="w-full md:w-auto border-2 border-[#39FF14] text-[#39FF14] px-16 py-6 rounded-2xl font-black text-2xl hover:bg-[#39FF14]/10 active:scale-95 transition-all">
          View Demo Website
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 bg-[#050505] border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#39FF14] rounded-lg flex items-center justify-center">
              <Layout className="text-black" size={24} />
            </div>
            <span className="font-orbitron font-bold text-2xl tracking-tighter neon-text">NOVAPIXEL</span>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Ultra-premium web agency dedicated to helping service businesses scale through high-conversion design and frictionless communication.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-[0.3em] text-xs text-[#39FF14]">Quick Nav</h5>
            <ul className="text-base text-gray-500 space-y-3 font-bold">
              <li className="hover:text-[#39FF14] cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-[#39FF14] cursor-pointer transition-colors">Process</li>
              <li className="hover:text-[#39FF14] cursor-pointer transition-colors">Demos</li>
              <li className="hover:text-[#39FF14] cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase tracking-[0.3em] text-xs text-[#39FF14]">Connect</h5>
            <ul className="text-base text-gray-500 space-y-3 font-bold">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><MessageCircle size={18} /> WhatsApp</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><Phone size={18} /> Call Us</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><Globe size={18} /> LinkedIn</li>
            </ul>
          </div>
          <div className="space-y-6 col-span-2 sm:col-span-1">
            <h5 className="font-black uppercase tracking-[0.3em] text-xs text-[#39FF14]">Legal</h5>
            <ul className="text-base text-gray-500 space-y-3 font-bold">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between pt-12 border-t border-white/5 items-center gap-8 text-center md:text-left">
        <div className="space-y-2">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">© 2024 NovaPixel Agency. All rights reserved.</p>
            <p className="text-xs text-gray-700 italic">Built for results, not just clicks. 🚀</p>
        </div>
        <div className="glass px-6 py-2 rounded-full border border-white/5">
            <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.2em]">Sample websites shown for presentation purposes only 👀</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#39FF14] selection:text-black">
      <Header />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <Pricing />
      <DemoGallery />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
