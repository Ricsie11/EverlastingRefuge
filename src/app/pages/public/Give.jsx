import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Landmark,
  Smartphone,
  Globe,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

const Give = () => {
  const methods = [
    {
      title: "Local Giving",
      provider: "Paystack",
      url: "#",
      description: "Safe and secure local transfers.",
    },
    {
      title: "International",
      provider: "Flutterwave",
      url: "#",
      description: "For our members across the globe.",
    },
    {
      title: "Bank Transfer",
      provider: "GTBank",
      url: "#",
      description: "RCCG - Everlasting Refuge | 0012345678",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-50/50 rounded-full blur-3xl opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-serif font-bold text-slate-900 mb-8"
          >
            Tithes <span className="text-gold">&</span> Offerings
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            "Honor the Lord with your wealth and with the firstfruits of all
            your produce." – Proverbs 3:9
          </p>
        </div>
      </section>

      {/* Giving Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[40px] border border-slate-100 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-gold transition-colors duration-500">
                {i === 0 ? (
                  <Smartphone className="text-primary group-hover:text-white" />
                ) : i === 1 ? (
                  <Globe className="text-primary group-hover:text-white" />
                ) : (
                  <Landmark className="text-primary group-hover:text-white" />
                )}
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                {method.title}
              </h3>
              <p className="text-slate-500 font-light mb-8">
                {method.description}
              </p>
              <button className="w-full py-4 cursor-pointer rounded-xl border border-slate-100 font-bold text-sm text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                Give via {method.provider}{" "}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5" />
          <div className="relative z-10">
            <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
              Secure Giving
            </h2>
            <p className="text-blue-100/60 text-lg md:text-xl font-light leading-relaxed mb-12">
              Your contributions help us support our missions, outreach
              programs, and the maintenance of God's house. All transactions are
              encrypted and processed by our trusted partners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
