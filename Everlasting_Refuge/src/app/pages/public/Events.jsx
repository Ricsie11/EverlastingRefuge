import React from "react";
import { Calendar, Clock } from "lucide-react"; // Lucide icons
import { motion } from "framer-motion"; // Framer Motion

const Events = () => {
  const upcomingEvents = [
    { id: 1, title: "Sunday Service", date: "2026-01-26", description: "Weekly Sunday Service" },
    { id: 2, title: "Counseling Session", date: "2026-01-28", description: "Counseling on Tuesday 10AM" },
  ];

  const pastEvents = [
    { id: 1, title: "Christmas Celebration", date: "2025-12-25", description: "Christmas program" },
    { id: 2, title: "New Year Prayer", date: "2026-01-01", description: "New Year prayer meeting" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-12 space-y-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Events & Programs</h1>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-600" /> {event.title}
              </h3>
              <p className="text-gray-600 flex items-center gap-2">
                <Clock className="w-4 h-4" /> {event.date}
              </p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 mt-8">Past Events</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pastEvents.map((event) => (
            <motion.div
              key={event.id}
              className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-600" /> {event.title}
              </h3>
              <p className="text-gray-600 flex items-center gap-2">
                <Clock className="w-4 h-4" /> {event.date}
              </p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;