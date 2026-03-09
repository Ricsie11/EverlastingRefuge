import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Calendar,
  BookOpen,
  ArrowRight,
  Play,
  MapPin,
  Clock,
  Send,
  Mail,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("church_events")) || [];
    // Combine with some featured ones if empty
    const featured = [
      {
        id: "feat-1",
        title: "Sunday Worship Service",
        tag: "Worship",
        date: "Every Sunday",
        day: "Sunday",
        description:
          "Join us for a powerful time in God's presence as we worship and grow together.",
        youtubeUrl: "#",
        image:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
      },
      {
        id: "feat-2",
        title: "Youth Impact Conference",
        tag: "Conference",
        date: "March 25-27, 2026",
        day: "Wed-Fri",
        description:
          "Empowering the next generation to lead with faith and excellence.",
        youtubeUrl: "#",
        image:
          "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800",
      },
    ];
    setEvents([...featured, ...storedEvents].slice(0, 3));
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      const messages =
        JSON.parse(localStorage.getItem("contact_messages")) || [];
      const newMessage = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString(),
        status: "unread",
      };
      localStorage.setItem(
        "contact_messages",
        JSON.stringify([newMessage, ...messages]),
      );

      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const services = [
    { title: "First Service", time: "7:30 AM", type: "Sunday Worship" },
    { title: "Second Service", time: "9:30 AM", type: "Sunday Worship" },
    { title: "Mid-Week Service", time: "6:00 PM", type: "Wednesday Communion" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Worship Together",
      description:
        "Experience the presence of God in our spirit-filled worship services.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Find your place in our diverse family of believers.",
    },
    {
      icon: Calendar,
      title: "Events",
      description:
        "Stay updated with our fellowships, conferences, and outreaches.",
    },
    {
      icon: BookOpen,
      title: "Discipleship",
      description:
        "Grow deeper in your walk with Christ through our teaching ministries.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/home_hero.png"
            alt="Everlasting Refuge Sanctuary"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-400/30 via-primary/60 to-primary/90 backdrop-blur-[2px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-white leading-[1.1] tracking-tight">
            Welcome to{" "}
            <span className="text-gold italic">
              Everlasting Refuge Mega Parish
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-50/90 font-light leading-relaxed">
            A place of worship, community, and transformation. Join us as we
            grow together in faith, hope, and love.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/live">
              <button className="bg-gold text-primary hover:bg-gold-dark px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-gold transition-all hover:scale-105">
                <Play className="h-5 w-5 fill-current" />
                Join Live Service
              </button>
            </Link>
            <Link to="/about">
              <button className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                Explore Our Vision
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                Rooted in Faith, <br />
                <span className="text-gold">Driven by Purpose</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                Everlasting Refuge Parish is more than a church — it's a family.
                We've been a beacon of hope in our community, welcoming everyone
                with open arms and hearts full of love. Our mission is to
                inspire, uplift, and transform lives through the power of faith
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h4 className="font-bold text-primary">Connected</h4>
                  <p className="text-sm text-slate-500 font-light">
                    Digital sanctuary for a global family.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-gold-dark" />
                  </div>
                  <h4 className="font-bold text-primary">Focused</h4>
                  <p className="text-sm text-slate-500 font-light">
                    Committed to holiness and truth.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-gold transition-colors group"
              >
                Learn More About Us{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden rotate-3 relative z-10 shadow-2xl">
                <img
                  src="/src/assets/church_interior.png"
                  className="w-full h-full object-cover"
                  alt="Church"
                />
              </div>
              <div className="absolute inset-0 bg-gold rounded-[60px] -rotate-3 z-0 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Services (Service Times) */}
      <section className="py-32 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            Join Our Services
          </h2>
          <p className="text-slate-500 font-light">
            Experience the presence of God in any of our weekly meetings.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all group"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                <Clock className="w-7 h-7 text-gold-dark group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gold font-bold text-sm uppercase tracking-widest mb-6">
                {service.time}
              </p>
              <p className="text-slate-500 font-light">{service.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              A Home for <span className="text-gold">Everyone</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Discover a community where faith meets excellence, and where you
              can grow in your unique purpose and calling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white p-10 rounded-3xl border border-slate-100 hover:border-gold/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Upcoming Events
              </h2>
              <p className="text-slate-500 font-light">
                Stay plugged into our vibrant community programs.
              </p>
            </div>
            <Link
              to="/events"
              className="hidden sm:flex items-center gap-2 text-primary font-bold hover:text-gold transition-all"
            >
              View All Events <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                  <div className="h-56 bg-slate-200 relative overflow-hidden">
                    <img
                      src={event.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                      alt={event.title}
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-primary shadow-lg border border-slate-100">
                        {event.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-widest mb-4">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 font-light text-sm line-clamp-2 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    {event.youtubeUrl !== "#" && (
                      <div className="flex items-center gap-2 text-xs text-primary font-bold bg-gold/10 w-fit px-4 py-2 rounded-full">
                        <Play className="w-3 h-3 fill-primary" />
                        Watch Highlights
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto bg-primary rounded-[60px] p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Get in Touch
            </h2>
            <p className="text-blue-100/70 text-lg font-light leading-relaxed mb-12">
              Have a question or a prayer request? Our team is here for you. We
              would love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold border border-white/10">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                    Our Location
                  </h4>
                  <p className="text-blue-100/60 text-sm">
                    Plot 1901 Yakubu Gowon Crescent, Asokoro, Abuja
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold border border-white/10">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                    Email Us
                  </h4>
                  <p className="text-blue-100/60 text-sm">
                    info@everlastingrefuge.org
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative z-10">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 font-light mb-8">
                    Thank you for reaching out. Our team will get back to you
                    soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your Name"
                      className="w-full h-14 bg-slate-50 border-none rounded-2xl px-6 text-slate-900 focus:ring-2 focus:ring-gold/20 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="How can we help you?"
                      className="w-full bg-slate-50 border-none rounded-2xl p-6 text-slate-900 focus:ring-2 focus:ring-gold/20 transition-all font-medium resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-16 bg-gold text-primary hover:bg-gold-dark rounded-2xl font-bold shadow-gold transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
