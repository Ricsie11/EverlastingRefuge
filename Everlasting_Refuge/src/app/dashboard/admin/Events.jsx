import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events/")
      .then(res => setEvents(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-4">
      {events.map(e => (
        <div key={e.id} className="border p-4 rounded-lg">
          <h3 className="font-semibold">{e.title}</h3>
          <p className="text-sm">{e.description}</p>
          <p className="text-xs text-muted">
            {e.is_past ? "Past Program" : "Upcoming Program"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Events;