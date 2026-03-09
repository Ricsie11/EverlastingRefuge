import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2000')] bg-cover bg-center" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Get in <span className="text-gold">Touch</span>
          </motion.h1>
          <p className="text-blue-100/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have a prayer request or
            want to learn more about us, don't hesitate to reach out.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Info Side */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-12">
              Contact Information
            </h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-xl shadow-blue-900/5 flex items-center justify-center shrink-0 border border-slate-50">
                  <MapPin className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Our Location
                  </h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Plot 1901 Yakubu Gowon Crescent, Hillside Plaza, Beside
                    NITEL, Asokoro, Abuja.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-xl shadow-blue-900/5 flex items-center justify-center shrink-0 border border-slate-50">
                  <Phone className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Phone
                  </h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    +234 (0) 1 234 5678, +234 (0) 801 234 5678
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-xl shadow-blue-900/5 flex items-center justify-center shrink-0 border border-slate-50">
                  <Mail className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    Email
                  </h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    info@everlastingrefuge.org, prayers@everlastingrefuge.org
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-8">
                Follow Our Journey
              </h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-gold hover:text-white hover:border-gold transition-all"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-[50px] p-10 md:p-16 shadow-2xl shadow-blue-900/5 border border-slate-50 relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 bg-gold rounded-3xl flex items-center justify-center shadow-2xl shadow-gold/30">
                <Send className="text-white w-8 h-8 -rotate-12" />
              </div>

              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-10">
                Send a Message
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 transition-all text-sm appearance-none">
                    <option>Prayer Request</option>
                    <option>General Inquiry</option>
                    <option>Counseling Request</option>
                    <option>Testimony</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:bg-slate-900 shadow-xl shadow-blue-900/20 transition-all mt-4">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
