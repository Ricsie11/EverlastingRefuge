import React from "react";
import Card from "../../components/ui/Card";

const About = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto p-6 mt-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          About Everlasting Refuge Parish
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400">
          Welcome to Everlasting Refuge Church. Our mission is to glorify God
          and spread love, hope, and compassion to all. Here you will find our
          vision and mission—the foundation of what we believe and live by.
        </p>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-100 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision Card */}
          <Card className="border border-gray-200 dark:border-gray-700 p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl underline font-bold text-gray-900 dark:text-gray-100 mb-6">
              Vision
            </h2>
            <ul className="list-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <li>To make heaven.</li>
              <li>To take as many people with us.</li>
              <li>
                To have a member of the Redeemed Christian Church of God in
                every family of all nations.
              </li>
              <li>Holiness will be our lifestyle.</li>
              <li>
                To plant churches within a short distance in every city and town
                so that every nation is reached for the Lord Jesus Christ.
              </li>
            </ul>
          </Card>

          {/* Mission Card */}
          <Card className="border border-gray-200 dark:border-gray-700 p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl underline font-bold text-gray-900 dark:text-gray-100 mb-6">
              Mission
            </h2>
            <ul className="list-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
              <li>
                To reach every nation of the world for the Lord Jesus Christ.
              </li>
              <li>To spread the gospel through evangelism and discipleship.</li>
              <li>To uphold holiness as a way of life.</li>
              <li>To plant churches and build strong Christian communities.</li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
};

export default About;