import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Calendar } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

const slots: Record<string, Record<string, string>> = {
  Monday: { "09:00": "HCI Lecture", "14:00": "DB Lab" },
  Tuesday: { "11:00": "Web Dev Lecture", "14:00": "SE Seminar" },
  Wednesday: { "09:00": "HCI Lecture", "11:00": "Web Dev Lab", "14:00": "SE Seminar" },
  Thursday: { "10:00": "DB Lecture", "13:00": "HCI Tutorial" },
  Friday: { "09:00": "SE Lecture", "11:00": "Web Dev Workshop" },
};

export default function Timetable() {
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Calendar size={22} className="text-secondary" /> Weekly Timetable
        </h2>
        <Link to="/calendar-sync" className="text-sm text-secondary border border-secondary rounded-lg px-4 py-2 hover:bg-secondary/10 transition-colors text-center">
          Sync with Google Calendar
        </Link>
      </div>
      <div className="bg-card rounded-lg shadow-sm border overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left text-xs text-muted-foreground font-medium w-20">Time</th>
              {days.map(d => (
                <th key={d} className="p-3 text-left text-xs text-muted-foreground font-medium">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map(t => (
              <tr key={t} className="border-b last:border-0">
                <td className="p-3 text-xs font-mono text-muted-foreground">{t}</td>
                {days.map(d => (
                  <td key={d} className="p-2">
                    {slots[d]?.[t] && (
                      <div className="bg-secondary/10 text-secondary text-xs font-medium rounded-md px-2 py-1.5">
                        {slots[d][t]}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
