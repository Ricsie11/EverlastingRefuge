import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Plus,
  Trash2,
  Image as ImageIcon,
  Youtube,
  LayoutGrid,
  List,
  X,
  FileUp,
  ChevronRight,
  Search,
} from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";

const STORAGE_KEY = "church_events";

const PRESET_FLYERS = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800",
  "https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=800",
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800",
];

export default function EventManager() {
  const { user } = useAuth();
  const canCreate = user?.role === "ADMIN" || user?.role === "SUPERUSER";

  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "Asokoro Mega Parish",
    description: "",
    youtube: "",
    flyer: PRESET_FLYERS[0],
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setEvents(stored);
  }, []);

  const saveEvents = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setEvents(data);
  };

  const createEvent = (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;

    const newEvent = {
      id: Date.now(),
      ...form,
    };

    saveEvents([newEvent, ...events]);
    setForm({
      title: "",
      date: "",
      time: "",
      location: "Asokoro Mega Parish",
      description: "",
      youtube: "",
      flyer: PRESET_FLYERS[0],
    });
    setShowForm(false);
  };

  const deleteEvent = (id) => {
    if (window.confirm("Are you sure you want to remove this event?")) {
      saveEvents(events.filter((e) => e.id !== id));
    }
  };

  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
              Administration
            </span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900">
            Events Manager
          </h1>
          <p className="text-slate-500 font-light mt-1">
            Design and publish parish events to the public portal.
          </p>
        </div>

        {canCreate && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-blue-900/10 hover:bg-primary transition-all"
          >
            <Plus className="w-5 h-5" />
            Post New Event
          </motion.button>
        )}
      </div>

      {/* Controls Bar */}
      <div className="bg-white rounded-[32px] p-4 border border-slate-100 shadow-xl shadow-blue-900/5 flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 bg-slate-50 border-none rounded-2xl pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-2xl">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-xl transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-slate-900" : "text-slate-400"}`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-xl transition-all ${viewMode === "list" ? "bg-white shadow-sm text-slate-900" : "text-slate-400"}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Events Display */}
      {filteredEvents.length === 0 ? (
        <div className="py-20 text-center">
          <div className="w-20 h-20 bg-slate-50 rounded-[30px] flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-slate-200" />
          </div>
          <p className="text-slate-400 font-light italic">
            No events found. Start by creating your first masterpiece.
          </p>
        </div>
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-4"
          }
        >
          <AnimatePresence>
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-xl shadow-blue-900/5 group relative`}
              >
                {/* Image Flyer */}
                <div
                  className={
                    viewMode === "grid"
                      ? "h-48 relative overflow-hidden"
                      : "hidden"
                  }
                >
                  <img
                    src={event.flyer}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight pr-4">
                      {event.title}
                    </h3>
                    <button
                      onClick={() => deleteEvent(event.id)}
                      className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <Calendar className="w-4 h-4 text-gold" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <Clock className="w-4 h-4 text-gold" />
                      {event.time || "TBA"}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <MapPin className="w-4 h-4 text-gold" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2 mb-6">
                    {event.description}
                  </p>

                  {event.youtube && (
                    <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                      <Youtube className="w-4 h-4" />
                      Live Link Attached
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Creation Modal */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[50px] shadow-2xl p-8 md:p-12"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-slate-900">
                  New Event Flyer
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <form
                onSubmit={createEvent}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Event Title
                    </label>
                    <input
                      required
                      placeholder="e.g. Grace & Power Night"
                      className="w-full h-14 bg-slate-50 border-none rounded-2xl px-5 text-slate-900 focus:ring-2 focus:ring-gold/20 transition-all"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full h-14 bg-slate-50 border-none rounded-2xl px-5 text-slate-900 focus:ring-2 focus:ring-gold/20 transition-all"
                        value={form.date}
                        onChange={(e) =>
                          setForm({ ...form, date: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                        Time
                      </label>
                      <input
                        placeholder="e.g., 6:00 PM"
                        className="w-full h-14 bg-slate-50 border-none rounded-2xl px-5 text-slate-900 focus:ring-2 focus:ring-gold/20 transition-all"
                        value={form.time}
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Location
                    </label>
                    <input
                      className="w-full h-14 bg-slate-50 border-none rounded-2xl px-5 text-slate-900 focus:ring-2 focus:ring-gold/20 transition-all"
                      value={form.location}
                      onChange={(e) =>
                        setForm({ ...form, location: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell the congregation more about this gather..."
                      className="w-full bg-slate-50 border-none rounded-3xl p-5 text-slate-900 focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 block mb-4">
                      Choose Event Flyer
                    </label>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {PRESET_FLYERS.map((url, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setForm({ ...form, flyer: url })}
                          className={`aspect-video rounded-2xl overflow-hidden border-4 transition-all ${form.flyer === url ? "border-gold" : "border-transparent"}`}
                        >
                          <img
                            src={url}
                            className="w-full h-full object-cover"
                            alt=""
                          />
                        </button>
                      ))}
                    </div>
                    <div className="p-6 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center cursor-not-allowed">
                      <FileUp className="w-8 h-8 text-slate-300 mb-2" />
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                        Upload Custom Flyer
                      </p>
                      <p className="text-[10px] text-slate-300 mt-1">
                        (Premium Feature - Mock Only)
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      YouTube Link (Optional)
                    </label>
                    <div className="relative">
                      <Youtube className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                      <input
                        placeholder="https://youtube.com/live/..."
                        className="w-full h-14 bg-slate-50 border-none rounded-2xl pl-14 pr-5 text-slate-900 focus:ring-2 focus:ring-red-100 transition-all"
                        value={form.youtube}
                        onChange={(e) =>
                          setForm({ ...form, youtube: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-16 bg-slate-900 text-white rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl shadow-blue-900/10"
                  >
                    Publish to Church Portal
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
