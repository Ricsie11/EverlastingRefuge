import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Calendar, BookOpen, ArrowRight } from "lucide-react";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: "Worship Together",
      description:
        "Join us in celebrating faith and community through meaningful worship.",
    },
    {
      icon: Users,
      title: "Connect with Others",
      description:
        "Build lasting relationships in small groups and ministry teams.",
    },
    {
      icon: Calendar,
      title: "Weekly Events",
      description:
        "Participate in services, Bible studies, and community outreach.",
    },
    {
      icon: BookOpen,
      title: "Grow in Faith",
      description:
        "Deepen your understanding through teaching and discipleship.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Church Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl text-white md:text-6xl font-bold mb-6">
            Welcome to Everlasting Refuge Parish
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white">
            A place of worship, growth, and spiritual transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white flex items-center gap-2 p-3 rounded-lg">
                Join our Community <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="bg-white text-blue-600 cursor-pointer hover:bg-gray-300 p-3 rounded-lg"
              >
                Service Times
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-gray-900 dark:text-gray-100 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover how Everlasting Refuge Church can help you grow in your
              faith journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join a small group, participate in our events, and become part of
            our church family.
          </p>
          <Link to="/login">
            <div className="flex justify-center">
              <Button className="bg-white text-blue-600 cursor-pointer hover:bg-gray-100 flex items-center gap-2 p-3 rounded-lg">
                Login to Join a Group <ArrowRight size={18} />
              </Button>
            </div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
