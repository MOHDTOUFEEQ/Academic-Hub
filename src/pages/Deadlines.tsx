import DashboardLayout from "@/components/DashboardLayout";
import { CalendarClock, Clock, AlertTriangle } from "lucide-react";

const deadlines = [
  { module: "Human Computer Interaction", title: "HCI Coursework", due: "20 May 2026", status: "priority" },
  { module: "Web Development", title: "Portfolio Website", due: "28 May 2026", status: "upcoming" },
  { module: "Software Engineering", title: "Group Project Report", due: "5 June 2026", status: "upcoming" },
  { module: "Database Systems", title: "SQL Assessment", due: "10 June 2026", status: "upcoming" },
  { module: "Web Development", title: "Reflection Essay", due: "15 June 2026", status: "submitted" },
];

const statusStyles: Record<string, string> = {
  priority: "bg-destructive/10 text-destructive",
  upcoming: "bg-secondary/15 text-secondary",
  submitted: "bg-success/15 text-success",
};

export default function Deadlines() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <CalendarClock size={22} className="text-secondary" /> Deadlines
        </h2>
        <select className="text-sm border rounded-lg px-3 py-2 bg-card text-foreground">
          <option>All deadlines</option>
          <option>This week</option>
          <option>Next week</option>
        </select>
      </div>
      <div className="space-y-4">
        {deadlines.map((d, i) => (
          <div key={i} className="bg-card rounded-lg shadow-sm border p-4 flex items-center justify-between">
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
            <span className={`text-[11px] uppercase font-bold px-3 py-1 rounded-full ${statusStyles[d.status]}`}>
              {d.status}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
