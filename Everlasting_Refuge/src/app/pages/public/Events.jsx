import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Card from "../../components/ui/Card";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Service",
      date: "January 26, 2026",
      time: "7:30 AM – 11:00 AM",
      location: "Ground Floor, Left Wing, Hillside Plaza, PLOT 1901 Yakubu Gowon Crescent, A.Y.A, Asokoro, Abuja, Nigeria.",
      type: "Worship",
      description:
        "Join us for our weekly Sunday Service with worship, prayer, and teaching.",
    },
    {
      id: 2,
      title: "Digging Deep",
      date: "January 28, 2026",
      time: "6:00 PM",
      location: "Ground Floor, Left Wing, Hillside Plaza, PLOT 1901 Yakubu Gowon Crescent, A.Y.A, Asokoro, Abuja, Nigeria.",
      type: "Bible Study",
      description:
        "A powerful midweek Bible study session focused on spiritual growth.",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Christmas Celebration",
      date: "December 25, 2025",
      time: "10:00 AM",
      location: "Ground Floor, Left Wing, Hillside Plaza, PLOT 1901 Yakubu Gowon Crescent, A.Y.A, Asokoro, Abuja, Nigeria.",
      type: "Celebration",
      description:
        "Christmas program with carols, fellowship, and sermon.",
    },
    {
      id: 4,
      title: "New Year Prayer",
      date: "January 1, 2026",
      time: "6:00 AM",
      location: "Ground Floor, Left Wing, Hillside Plaza, PLOT 1901 Yakubu Gowon Crescent, A.Y.A, Asokoro, Abuja, Nigeria.",
      type: "Prayer",
      description:
        "Special New Year prayer meeting to welcome the new year.",
    },
  ];

  const typeStyles = {
    Worship: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Bible Study":
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    Celebration:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Prayer: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderEvents = (events) =>
    events.map((event, index) => (
      <motion.div
        key={event.id}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: index * 0.2 }}
      >
        <Card className="p-6 hover:shadow-lg transition-shadow">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {event.title}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${typeStyles[event.type]}`}
            >
              {event.type}
            </span>
          </div>

          {/* Meta */}
          <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {event.description}
          </p>
        </Card>
      </motion.div>
    ));

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Church Events
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Stay updated with our upcoming programs and past gatherings.
        </p>
      </div>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Upcoming Events
        </h2>
        <div className="space-y-6">{renderEvents(upcomingEvents)}</div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Past Events
        </h2>
        <div className="space-y-6">{renderEvents(pastEvents)}</div>
      </section>
    </div>
  );
};

export default Events;