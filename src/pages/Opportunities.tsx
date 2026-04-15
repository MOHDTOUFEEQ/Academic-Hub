import DashboardLayout from "@/components/DashboardLayout";
import { Briefcase, Bookmark } from "lucide-react";

const opportunities = [
  { title: "Software Internship 2026", type: "Internship", desc: "12-week paid internship at a leading tech firm. Apply by June." },
  { title: "Career Networking Event", type: "Event", desc: "Meet industry professionals and explore career paths. May 15." },
  { title: "CV Workshop", type: "Workshop", desc: "Get expert feedback on your CV. Limited spaces available." },
  { title: "Hackathon 2026", type: "Event", desc: "48-hour hackathon with prizes. Teams of 3–5." },
  { title: "Research Assistant Position", type: "Internship", desc: "Assist with HCI research over summer. Contact Dr. Williams." },
];

export default function Opportunities() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Briefcase size={22} className="text-secondary" /> Opportunities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {opportunities.map((o, i) => (
          <div key={i} className="bg-card rounded-lg shadow-sm border p-5 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">{o.type}</span>
              <button className="text-muted-foreground hover:text-secondary transition-colors">
                <Bookmark size={16} />
              </button>
            </div>
            <h4 className="font-semibold text-sm mb-1">{o.title}</h4>
            <p className="text-xs text-muted-foreground flex-1">{o.desc}</p>
            <button className="mt-3 text-xs text-secondary hover:underline text-left">Learn more →</button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
