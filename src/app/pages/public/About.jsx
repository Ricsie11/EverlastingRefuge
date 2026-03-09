import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Landmark, Shell } from "lucide-react";
import Card from "../../components/ui/Card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Landmark className="absolute -bottom-20 -right-20 w-[600px] h-[600px] text-gold" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            About Everlasting <span className="text-gold">Refuge</span>
            <span className="block text-2xl md:text-4xl uppercase tracking-[0.2em] font-sans font-bold opacity-70 mt-4">
              Mega Parish
            </span>
          </motion.h1>
          <p className="text-blue-100/70 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Discover our journey, our faith, and our unwavering commitment to
            excellence and the glory of God.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-3 bg-gold-50 rounded-2xl mb-8">
            <Shell className="w-8 h-8 text-gold" />
          </div>
          <p className="text-2xl font-serif text-slate-800 leading-relaxed italic">
            "Where the love of God reigns, where dreams come true, where Legends
            are born, and tomorrow's history is experienced today."
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 px-4 bg-white border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-gold/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary rounded-xl text-white">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">
                Our Vision
              </h2>
            </div>
            <ul className="space-y-6 text-slate-600 font-light leading-relaxed">
              <li className="flex gap-4">
                <span className="text-gold font-serif text-xl">01</span>
                <span>To make heaven and take as many people with us.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-serif text-xl">02</span>
                <span>
                  To have a member of the Redeemed Christian Church of God in
                  every family of all nations.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-serif text-xl">03</span>
                <span>Holiness will be our lifestyle.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-serif text-xl">04</span>
                <span>
                  To plant churches within a short distance in every city and
                  town so that every nation is reached for the Lord Jesus
                  Christ.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-primary/5 rounded-[40px] border border-blue-100 hover:border-gold/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gold rounded-xl text-white">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">
                Our Mission
              </h2>
            </div>
            <ul className="space-y-6 text-slate-600 font-light leading-relaxed">
              <li className="flex gap-4">
                <span className="text-primary font-serif text-xl">•</span>
                <span>
                  To reach every nation of the world for the Lord Jesus Christ.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-serif text-xl">•</span>
                <span>
                  To spread the gospel through evangelism and discipleship.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-serif text-xl">•</span>
                <span>
                  To uphold holiness as a way of life in all our dealings.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-serif text-xl">•</span>
                <span>
                  To plant vibrant churches and build strong, Christ-centered
                  communities worldwide.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-16 text-slate-900">
          Rooted in <span className="text-gold">Excellence</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {["Faith", "Holiness", "Love", "Excellence"].map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <span className="text-gold font-serif italic text-lg mb-2 block">
                — {String(i + 1).padStart(2, "0")} —
              </span>
              <h3 className="text-xl font-bold text-primary uppercase tracking-widest">
                {value}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
