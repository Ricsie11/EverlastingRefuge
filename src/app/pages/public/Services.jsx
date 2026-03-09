import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  MapPin,
  BookOpen,
  Play,
  ShieldCheck,
  Stars,
} from "lucide-react";

function Services() {
  const services = [
    {
      title: "Sunday Service",
      time: "7:30 AM",
      day: "Every Sunday",
      description:
        "Start your week in God's presence with a spirit-filled time of praise and powerful teaching.",
      icon: <Stars className="w-5 h-5" />,
      tag: "Main Worship",
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: "Digging Deep",
      time: "6:00 PM",
      day: "Every Tuesday",
      description:
        "Dive deep into the scriptures during our mid-week Bible study session.",
      icon: <BookOpen className="w-5 h-5" />,
      tag: "Bible Study",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      title: "Counselling",
      time: "10:00 AM",
      day: "Every Tuesday",
      description:
        "Get guidance and spiritual support through our dedicated counselling sessions.",
      icon: <ShieldCheck className="w-5 h-5" />,
      tag: "Support",
      color: "bg-slate-50  text-slate-600 border-slate-100",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold rounded-full blur-3xl animate-pulse" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-4 block">
            Worship With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Service Times
          </h1>
          <p className="text-blue-100/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Discover our weekly opportunities to encounter God's love and grow
            in His grace.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${service.color}`}
                >
                  {service.tag}
                </span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8 mt-2">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="text-slate-600 font-medium">
                    {service.time}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="text-slate-600 font-medium">
                    {service.day}
                  </span>
                </div>
              </div>

              <p className="text-slate-500 leading-relaxed font-light text-lg">
                {service.description}
              </p>

              <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                <button className="flex items-center gap-2 text-primary font-bold hover:text-gold transition-colors group/btn">
                  Join Service{" "}
                  <Play className="w-4 h-4 fill-current group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[50px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] -translate-y-1/2 translate-x-1/2 rounded-full" />

            <div className="relative z-10 md:w-1/2">
              <div className="inline-block p-4 bg-gold/20 rounded-[30px] mb-8">
                <MapPin className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Our Location
              </h2>
              <p className="text-blue-100/60 text-lg md:text-xl font-light leading-relaxed mb-10">
                Plot 1901 Yakubu Gowon Crescent, Hillside Plaza, Beside NITEL,
                Asokoro, Abuja.
              </p>
              <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-gold-50 transition-all shadow-xl">
                Get Directions
              </button>
            </div>

            <div className="md:w-1/2 w-full h-[400px] bg-slate-800 rounded-[40px] border border-slate-700 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d7.50!3d9.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMDAuMCJOIDfCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
