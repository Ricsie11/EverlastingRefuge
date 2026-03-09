import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Calendar,
  Users,
  Youtube,
  ExternalLink,
  Radio,
} from "lucide-react";

const Live = () => {
  const previousServices = [
    {
      id: 1,
      title: "Thanksgiving Service",
      date: "Sunday, March 1, 2026",
      thumbnail:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800",
    },
    {
      id: 3,
      title: "Digging Deep",
      date: "Tuesday, Feb 25, 2026",
      thumbnail:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Live Stream Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[50px] overflow-hidden shadow-2xl relative">
            <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                Live Stream
              </span>
            </div>

            <div className="aspect-video w-full bg-slate-800 flex items-center justify-center relative">
              <div className="text-center p-12">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Radio className="w-10 h-10 text-gold animate-bounce" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                  No Active Stream
                </h2>
                <p className="text-blue-100/60 max-w-md mx-auto">
                  Our next broadcast starts Sunday at 7:30 AM. Join us then for
                  a powerful encounter with God.
                </p>
              </div>

              {/* Controls Mockup */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                  <div className="w-32 h-2 rounded-full bg-white/20 my-auto" />
                </div>
                <Youtube className="text-white/40 w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catch Up Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Catch Up
            </h2>
            <p className="text-slate-500 max-w-xl font-light">
              Missed a service? Re-watch our recent gatherings and be blessed by
              the word.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@rccgtheeverlastingrefuge"
            target="_blank"
            className="flex items-center gap-2 text-primary font-bold underline hover:text-gold transition-colors uppercase tracking-widest text-xs"
          >
            Visit YouTube Channel <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {previousServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-[30px] overflow-hidden bg-white border border-slate-100 shadow-xl shadow-blue-900/5 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={service.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
                    {service.date}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Live;
