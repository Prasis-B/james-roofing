
import React from 'react';
import Layout from './components/Layout';
import { 
  SERVICES, 
  TESTIMONIALS, 
  BLOG_POSTS, 
  GALLERY_ITEMS, 
  FAQS 
} from './constants';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Plus, 
  Minus 
} from 'lucide-react';

// Sub-components for better organization
const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://picsum.photos/id/1029/1920/1080" 
        alt="Quality roofing" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/40 to-transparent"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-2xl">
        <span className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-md text-blue-200 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-400/30 mb-6">
          Serving Skyline City Since 1998
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Quality You Can <span className="text-blue-400">Stand Under</span>
        </h1>
        <p className="text-xl text-blue-50 mb-10 leading-relaxed">
          The highest standard in residential and commercial roofing. From emergency repairs to complete roof replacements, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#quote" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-blue-700 transition shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2">
            Get Free Estimate <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-white/20 transition">
            Explore Services
          </a>
        </div>
        
        <div className="mt-12 flex items-center gap-8 text-white/80">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">25+</span>
            <span className="text-sm">Years Experience</span>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">5000+</span>
            <span className="text-sm">Roofs Completed</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/id/1024/800/800" alt="Roofing team" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-2xl shadow-xl text-white hidden md:block">
            <p className="text-5xl font-extrabold mb-1">99%</p>
            <p className="text-sm font-medium text-blue-100 uppercase tracking-widest">Customer Satisfaction</p>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-0"></div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">About James Roofing</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Roofing Solutions With A Personal Touch</h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Founded by James Miller in 1998, our company was built on the values of integrity, craftsmanship, and unwavering commitment to customer service. What started as a small local repair crew has grown into the region's most trusted roofing provider.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {['Certified Master Contractors', '24/7 Emergency Support', 'Full Insurance Assistance', 'Quality Materials Guaranteed'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Meet the Team <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Roofing Solutions</h3>
        <p className="text-lg text-slate-600">From the smallest repair to major commercial installations, we provide the expertise needed to protect your investment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden">
            <div className="mb-6 inline-block p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-600 mb-6">{service.description}</p>
            <a href="#quote" className="text-blue-600 font-bold flex items-center gap-2">
              Learn More <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Projects</h2>
          <h3 className="text-4xl font-bold text-slate-900">Showcasing Our Craftsmanship</h3>
        </div>
        <div className="flex gap-4">
          {['All', 'Residential', 'Commercial'].map((cat) => (
            <button key={cat} className={`px-6 py-2 rounded-full text-sm font-bold transition ${cat === 'All' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square shadow-lg">
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
              <h4 className="text-white font-bold">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 p-20 opacity-10">
      <Star className="w-64 h-64 text-white" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Customer Success</h2>
        <h3 className="text-4xl font-bold">What Our Clients Are Saying</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />)}
            </div>
            <p className="text-lg italic text-blue-50 mb-8">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                {t.name.charAt(0)}
              </div>
              <div>
                <h5 className="font-bold">{t.name}</h5>
                <p className="text-blue-300 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Blog = () => (
  <section id="blog" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Roofing Insights</h2>
        <h3 className="text-4xl font-bold text-slate-900">Latest From Our Blog</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col md:flex-row h-full">
            <div className="md:w-2/5 shrink-0">
              <img src={post.image} alt={post.title} className="w-full h-64 md:h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold uppercase">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition cursor-pointer">{post.title}</h4>
                <p className="text-slate-600 mb-6">{post.excerpt}</p>
              </div>
              <a href="#" className="font-bold text-blue-600 flex items-center gap-2">Read Article <ArrowRight className="w-4 h-4" /></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Common Questions</h2>
          <h3 className="text-4xl font-bold text-slate-900">Your Roofing FAQs Answered</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
              >
                <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                {openIdx === i ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteForm = () => {
  const [files, setFiles] = React.useState<FileList | null>(null);

  return (
    <section id="quote" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-blue-700 p-12 text-white relative">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-8">Get Your Free Professional Estimate</h3>
              <p className="text-blue-100 text-lg mb-12">Submit your details and we'll get back to you within 24 hours with a detailed, transparent quote.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">No Hidden Fees</h5>
                    <p className="text-blue-200 text-sm">Transparent pricing, always.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Fast Response</h5>
                    <p className="text-blue-200 text-sm">Most quotes sent in under 24h.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/50 rounded-full -ml-24 -mb-24"></div>
          </div>
          
          <div className="lg:w-3/5 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="(555) 000-0000" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none appearance-none">
                  <option>Residential Roof Replacement</option>
                  <option>Commercial Roofing</option>
                  <option>Leak Repair</option>
                  <option>Inspection</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Property Address</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="123 Street Ave, City, ST" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Upload Photos (Optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-xl hover:bg-slate-50 transition cursor-pointer relative">
                  <div className="space-y-1 text-center">
                    <Plus className="mx-auto h-12 w-12 text-slate-400" />
                    <div className="flex text-sm text-slate-600">
                      <label className="relative cursor-pointer bg-transparent rounded-md font-bold text-blue-600 hover:text-blue-500">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" multiple onChange={(e) => setFiles(e.target.files)} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">PNG, JPG up to 10MB</p>
                    {files && files.length > 0 && <p className="text-xs text-green-600 font-bold">{files.length} files selected</p>}
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform active:scale-95">
                Request My Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-8">We're Here to Help</h3>
          <p className="text-lg text-slate-600 mb-12">Whether you need a quick repair or a complete overhaul, our team is ready to provide the best service in the industry.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-slate-900">Phone</h5>
                <p className="text-slate-600">(555) 766-3669</p>
                <p className="text-slate-500 text-sm">Mon-Fri, 8am-6pm</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-slate-900">Email</h5>
                <p className="text-slate-600">info@jamesroofing.com</p>
                <p className="text-slate-500 text-sm">We respond within 24h</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-xl text-slate-900">Office</h5>
                <p className="text-slate-600">123 Roofer Way, Skyline City, ST 54321</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-2xl relative">
          {/* Mock Google Map - In real app use iframe or Map components */}
          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
            <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl max-w-sm">
              <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Visit Our Showroom</h4>
              <p className="text-slate-600 text-sm mb-4">Our design center is open for material selections and consultations.</p>
              <a href="https://maps.google.com" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold block">Open in Maps</a>
            </div>
          </div>
          <img src="https://picsum.photos/id/1047/1000/1000" alt="Map area" className="w-full h-full object-cover opacity-50 grayscale" />
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Blog />
      <FAQSection />
      <QuoteForm />
      <Contact />
    </Layout>
  );
};

export default App;
