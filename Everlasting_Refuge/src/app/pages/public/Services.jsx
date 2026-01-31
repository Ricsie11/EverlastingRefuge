import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, BookOpen } from "lucide-react";

function Services() {
  const services = [
    {
      title: "Sunday Service",
      time: "7:30 AM",
      day: "Every Sunday",
      description:
        "Join us for uplifting worship, powerful teaching, and fellowship.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Counselling",
      time: "10:00 AM",
      day: "Every Tuesday",
      description:
        "Personal counselling sessions available for guidance, prayer, and support.",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Service Times
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            We'd love to worship with you. Everyone is welcome.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-3">
                {service.icon}
                {service.title}
              </h3>

              {/* Meta */}
              <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{service.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{service.day}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Church Location
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Ground Floor, Left Wing, Hillside Plaza, PLOT 1901 Yakubu Gowon
                Cresent, A.Y.A, Asokoro, Abuja, Nigeria.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Free parking available on site
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
