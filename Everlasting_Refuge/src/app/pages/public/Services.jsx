import { Clock } from "lucide-react";

function Services() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Sunday Services</h3>
          <p>Every Sunday – 7:30 AM </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-semibold flex items-center gap-2">
            <Clock size={18} /> Counselling
          </h3>
          <p>Tuesdays only – 10:00 AM</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
