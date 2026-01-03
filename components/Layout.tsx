
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Send, MessageCircle } from 'lucide-react';
import { getChatResponse } from '../services/gemini';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              JAMES ROOFING
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-700' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#quote"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Free Estimate
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-4 text-base font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="w-full bg-blue-600 text-white block px-3 py-4 text-center font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">JAMES ROOFING</h3>
        <p className="text-slate-400">Trusted residential and commercial roofing experts since 1998. Quality you can stand under.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><Facebook /></a>
          <a href="#" className="hover:text-blue-400"><Twitter /></a>
          <a href="#" className="hover:text-blue-400"><Instagram /></a>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-bold mb-6 text-blue-400">Quick Links</h4>
        <ul className="space-y-4 text-slate-400">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-white transition">About Us</a></li>
          <li><a href="#services" className="hover:text-white transition">Services</a></li>
          <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
          <li><a href="#quote" className="hover:text-white transition">Free Estimate</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-blue-400">Services</h4>
        <ul className="space-y-4 text-slate-400">
          <li>Residential Roofing</li>
          <li>Commercial Roofing</li>
          <li>Repair & Maintenance</li>
          <li>Emergency Services</li>
          <li>Inspections</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-blue-400">Contact Us</h4>
        <ul className="space-y-4 text-slate-400">
          <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-blue-500" /> (555) 766-3669</li>
          <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-500" /> info@jamesroofing.com</li>
          <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-500" /> 123 Roofer Way, Skyline City, ST</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
      &copy; {new Date().getFullYear()} James Roofing. All rights reserved. | Licensed & Insured.
    </div>
  </footer>
);

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{role: string, text: string}[]>([
    { role: 'bot', text: 'Hi! I\'m James, your virtual assistant. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim()) return;

    const userMsg = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await getChatResponse(userMsg, []);
    setChat(prev => [...prev, { role: 'bot', text: response || "Something went wrong." }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center font-bold">J</div>
              <div>
                <h4 className="font-bold text-sm">James Chat</h4>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl text-sm italic text-slate-400">James is typing...</div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 flex items-center gap-2"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-bold hidden sm:inline">Questions? Chat with us</span>
        </button>
      )}
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Layout;
