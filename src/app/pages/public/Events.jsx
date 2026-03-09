import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Search, Filter, Play } from "lucide-react";

const STORAGE_KEY = "church_events";

const Events = () => {
  const [dynamicEvents, setDynamicEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setDynamicEvents(stored);
  }, []);

  const hardcodedUpcoming = [
    {
      id: 101,
      title: "Sunday Service",
      date: "Sunday, March 8, 2026",
      time: "7:30 AM",
      location: "Hillside Plaza, Abuja",
      type: "Worship",
      description: "Our first service of the day packed with glory and grace.",
    },
    {
      id: 102,
      title: "Women of Destiny",
      date: "Saturday, March 21, 2026",
      time: "10:00 AM",
      location: "Hillside Plaza, Abuja",
      type: "Fellowship",
      description:
        "A special gathering for women to discover their divine destiny.",
    },
  ];

  const hardcodedPast = [
    {
      id: 201,
      title: "New Year Crossover",
      date: "Dec 31, 2025",
      time: "9:00 PM",
      location: "Hillside Plaza, Abuja",
      type: "Celebration",
      description: "Walking into the year of Divine Repositioning.",
    },
  ];

  useEffect(() => {
    setUpcomingEvents([...hardcodedUpcoming, ...dynamicEvents]);
    setPastEvents(hardcodedPast);
  }, [dynamicEvents]);

  const typeStyles = {
    Worship: "bg-blue-50 text-blue-600 border-blue-100",
    Fellowship: "bg-amber-50 text-amber-600 border-amber-100",
    Celebration: "bg-purple-50 text-purple-600 border-purple-100",
    "Bible Study": "bg-slate-50 text-slate-600 border-slate-100",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="relative py-32 bg-slate-900 border-b border-gold/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Church <span className="text-gold">Events</span>
          </h1>
          <p className="text-blue-100/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Stay plugged into our community through our various programs and
            gatherings.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 bg-white p-6 rounded-[30px] shadow-xl shadow-blue-950/5 border border-slate-100">
          <div className="flex bg-slate-50 p-1.5 rounded-full overflow-hidden border border-slate-100">
            {["All", "Worship", "Fellowship", "Study"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${filter === f ? "bg-white text-primary shadow-md" : "text-slate-500 hover:text-slate-800"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-12 pr-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 transition-all text-sm"
            />
          </div>
        </div>

        {/* Upcoming Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-gold rounded-full" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Upcoming Gatherings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {upcomingEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full bg-white rounded-[40px] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group-hover:-translate-y-2">
                    <div className="h-56 bg-slate-200 relative overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={event.title}
                      />
                      <div className="absolute top-6 left-6">
                        <span
                          className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-slate-900 shadow-xl`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Calendar className="w-4 h-4 text-gold" />
                        {event.date}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-1">
                        {event.title}
                      </h3>
                      <p className="text-slate-500 font-light mb-8 line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-6 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium italic">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium italic">
                          <MapPin className="w-3.5 h-3.5 text-red-400" />
                          Abuja
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Past Events */}
        <section className="bg-slate-900 rounded-[50px] p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12">
              Recent Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {pastEvents.map((event) => (
                <div key={event.id} className="flex gap-8 group cursor-pointer">
                  <div className="w-32 h-32 aspect-square bg-slate-800 rounded-3xl overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Recap</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Events;
