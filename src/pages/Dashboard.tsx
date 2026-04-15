import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Sparkles,
  CalendarClock,
  Clock,
  Megaphone,
  Briefcase,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Smartphone,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Welcome */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Hello, Student 👋</h2>
        <p className="text-muted-foreground text-sm">Today's overview — Wednesday, 15 April 2026</p>
        <div className="mt-4 bg-secondary/10 border border-secondary/30 rounded-lg p-4 flex items-start gap-3">
          <Sparkles size={20} className="text-secondary mt-0.5 shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">AI Recommendation:</span> You have 2 upcoming deadlines this week. Focus on your HCI Coursework first — it's due soonest.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Deadlines */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <CalendarClock size={18} className="text-secondary" /> Upcoming Deadlines
              </h3>
              <Link to="/deadlines" className="text-sm text-secondary hover:underline">View all</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { module: "Human Computer Interaction", title: "HCI Coursework", due: "20 May 2026", priority: true, status: "In Progress" },
                { module: "Web Development", title: "Portfolio Website", due: "28 May 2026", priority: false, status: "Not Started" },
                { module: "Software Engineering", title: "Group Project Report", due: "5 June 2026", priority: false, status: "In Progress" },
                { module: "Database Systems", title: "SQL Assessment", due: "10 June 2026", priority: false, status: "Upcoming" },
              ].map((d, i) => (
                <div key={i} className="bg-card rounded-lg shadow-sm border p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">{d.module}</span>
                    {d.priority && (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">
                        <AlertTriangle size={10} /> Priority
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-sm">{d.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock size={12} /> Due: {d.due}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      d.status === "In Progress" ? "bg-warning/15 text-warning" :
                      d.status === "Not Started" ? "bg-muted text-muted-foreground" :
                      "bg-secondary/15 text-secondary"
                    }`}>{d.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timetable Overview */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock size={18} className="text-secondary" /> Today's Schedule
              </h3>
              <Link to="/timetable" className="text-sm text-secondary hover:underline">Full timetable</Link>
            </div>
            <div className="bg-card rounded-lg shadow-sm border divide-y">
              {[
                { time: "09:00 – 10:00", title: "HCI Lecture", room: "Room 301" },
                { time: "11:00 – 12:30", title: "Web Dev Lab", room: "Lab B2" },
                { time: "14:00 – 15:00", title: "Software Eng Seminar", room: "Room 204" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-3">
                  <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">{s.time}</span>
                  <div>
                    <p className="text-sm font-medium">{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.room}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-3 flex items-center gap-2 text-sm text-secondary hover:underline">
              <Smartphone size={14} /> Connect to phone calendar
            </button>
          </section>

          {/* Announcements */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Megaphone size={18} className="text-secondary" /> Latest Announcements
              </h3>
              <Link to="/announcements" className="text-sm text-secondary hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {[
                { title: "Lecture Moved Online", date: "14 Apr 2026", desc: "HCI lecture on 16 April will be held online via Teams.", tag: "important" },
                { title: "Assignment Feedback Released", date: "12 Apr 2026", desc: "Web Development portfolio feedback is now available on the portal.", tag: "new" },
              ].map((a, i) => (
                <div key={i} className="bg-card rounded-lg shadow-sm border p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold">{a.title}</h4>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                      a.tag === "important" ? "bg-destructive/10 text-destructive" : "bg-success/15 text-success"
                    }`}>{a.tag}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{a.date}</p>
                  <p className="text-sm text-foreground/80">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Progress */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-success" /> Coursework Progress
            </h3>
            {[
              { label: "HCI Coursework", pct: 65 },
              { label: "Web Dev Portfolio", pct: 30 },
              { label: "SE Group Report", pct: 45 },
            ].map((p, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <div className="flex justify-between text-xs mb-1">
                  <span>{p.label}</span>
                  <span className="text-muted-foreground">{p.pct}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </section>

          {/* Opportunities */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Briefcase size={16} className="text-secondary" /> Opportunities
            </h3>
            {[
              { title: "Software Internship 2026", type: "Internship" },
              { title: "CV Workshop", type: "Workshop" },
              { title: "Career Fair", type: "Event" },
            ].map((o, i) => (
              <Link key={i} to="/opportunities" className="block mb-2 last:mb-0 p-2 rounded-md hover:bg-muted transition-colors">
                <p className="text-sm font-medium">{o.title}</p>
                <p className="text-xs text-muted-foreground">{o.type}</p>
              </Link>
            ))}
          </section>

          {/* AI Suggestions */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-secondary" /> AI Suggestions
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-success mt-0.5 shrink-0" /> You have 2 deadlines this week.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-success mt-0.5 shrink-0" /> Consider reviewing lecture notes for HCI.</li>
              <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-success mt-0.5 shrink-0" /> Suggested study focus: Database Systems.</li>
            </ul>
          </section>

          {/* Quick Module Access */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-secondary" /> Quick Module Access
            </h3>
            {["Human Computer Interaction", "Web Development", "Software Engineering", "Database Systems"].map((m, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <p className="text-sm font-medium mb-1">{m}</p>
                <div className="flex gap-2 flex-wrap">
                  <Link to="/modules" className="text-[11px] text-secondary hover:underline">Brief</Link>
                  <Link to="/deadlines" className="text-[11px] text-secondary hover:underline">Deadline</Link>
                  <Link to="/modules" className="text-[11px] text-secondary hover:underline">Materials</Link>
                </div>
              </div>
            ))}
          </section>

          {/* Recent Activity */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Viewed: HCI Lecture Notes</li>
              <li>Viewed: Web Dev Assignment Brief</li>
              <li>Read: Lecture Moved Online</li>
            </ul>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
