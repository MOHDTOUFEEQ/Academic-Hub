import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { CalendarClock, Clock, AlertTriangle } from "lucide-react";

const deadlines = [
  { module: "Human Computer Interaction", title: "HCI Coursework", due: "20 May 2026", status: "priority", slug: "human-computer-interaction", id: 0 },
  { module: "Web Development", title: "Portfolio Website", due: "28 May 2026", status: "upcoming", slug: "web-development", id: 0 },
  { module: "Software Engineering", title: "Group Project Report", due: "5 June 2026", status: "upcoming", slug: "software-engineering", id: 0 },
  { module: "Database Systems", title: "SQL Assessment", due: "10 June 2026", status: "upcoming", slug: "database-systems", id: 0 },
  { module: "Web Development", title: "Reflection Essay", due: "15 June 2026", status: "submitted", slug: "web-development", id: 1 },
];

const statusStyles: Record<string, string> = {
  priority: "bg-destructive/10 text-destructive",
  upcoming: "bg-secondary/15 text-secondary",
  submitted: "bg-success/15 text-success",
};

export default function Deadlines() {
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <CalendarClock size={22} className="text-secondary" /> Deadlines
        </h2>
        <select className="text-sm border rounded-lg px-3 py-2 bg-card text-foreground w-full sm:w-auto">
          <option>All deadlines</option>
          <option>This week</option>
          <option>Next week</option>
        </select>
      </div>
      <div className="space-y-4">
        {deadlines.map((d, i) => (
          <Link key={i} to={`/assignment/${d.slug}/${d.id}`} className="bg-card rounded-lg shadow-sm border p-4 flex items-center justify-between hover:shadow-md transition-shadow block">
            <div>
              <p className="text-xs text-muted-foreground mb-1">{d.module}</p>
              <h4 className="font-semibold text-sm flex items-center gap-2">
                {d.title}
                {d.status === "priority" && <AlertTriangle size={14} className="text-destructive" />}
              </h4>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Clock size={12} /> Due: {d.due}
              </p>
            </div>
            <span className={`text-[11px] uppercase font-bold px-3 py-1 rounded-full shrink-0 ${statusStyles[d.status]}`}>
              {d.status}
            </span>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
}
