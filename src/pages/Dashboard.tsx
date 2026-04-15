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
  TrendingUp,
  Pin,
  Lightbulb,
  Bell,
} from "lucide-react";

export default function Dashboard() {
  const todayOverviewLabel = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <DashboardLayout>
      {/* Welcome */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-1">Hello, Amritveer 👋</h2>
        <p className="text-muted-foreground text-sm">Today&apos;s overview — {todayOverviewLabel}</p>
        <div className="mt-4 bg-secondary/10 border border-secondary/30 rounded-lg p-4 flex items-start gap-3">
          <Sparkles size={20} className="text-secondary mt-0.5 shrink-0" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">AI Recommendation:</span> You have 2 upcoming deadlines this week. Focus on your HCI Coursework first — it's due soonest.
          </p>
        </div>
      </section>

      {/* Reminder cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 flex items-center gap-3">
          <Bell size={18} className="text-destructive shrink-0" />
          <div>
            <p className="text-sm font-semibold text-destructive">Deadline Approaching</p>
            <p className="text-xs text-muted-foreground">HCI Coursework due in 5 days</p>
          </div>
        </div>
        <div className="bg-warning/5 border border-warning/20 rounded-lg p-3 flex items-center gap-3">
          <Clock size={18} className="text-warning shrink-0" />
          <div>
            <p className="text-sm font-semibold text-warning">Class Starting Soon</p>
            <p className="text-xs text-muted-foreground">HCI Lecture at 09:00 — Room 301</p>
          </div>
        </div>
        <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-3 flex items-center gap-3">
          <Lightbulb size={18} className="text-secondary shrink-0" />
          <div>
            <p className="text-sm font-semibold">Study Tip</p>
            <p className="text-xs text-muted-foreground">Review notes weekly for better retention</p>
          </div>
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
                { module: "Human Computer Interaction", title: "HCI Coursework", due: "20 May 2026", priority: true, status: "In Progress", slug: "human-computer-interaction", id: 0 },
                { module: "Web Development", title: "Portfolio Website", due: "28 May 2026", priority: false, status: "Not Started", slug: "web-development", id: 0 },
                { module: "Software Engineering", title: "Group Project Report", due: "5 June 2026", priority: false, status: "In Progress", slug: "software-engineering", id: 0 },
                { module: "Database Systems", title: "SQL Assessment", due: "10 June 2026", priority: false, status: "Upcoming", slug: "database-systems", id: 0 },
              ].map((d, i) => (
                <Link key={i} to={`/assignment/${d.slug}/${d.id}`} className="bg-card rounded-lg shadow-sm border p-4 flex flex-col gap-2 hover:shadow-md transition-shadow">
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
                </Link>
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
                  <span className="text-xs font-mono text-muted-foreground w-24 sm:w-28 shrink-0">{s.time}</span>
                  <div>
                    <p className="text-sm font-medium">{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.room}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/calendar-sync" className="mt-3 flex items-center gap-2 text-sm text-secondary hover:underline">
              Connect to phone calendar
            </Link>
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
                { title: "Lecture Moved Online", date: "14 Apr 2026", desc: "HCI lecture on 16 April will be held online via Teams.", tag: "important", id: 0 },
                { title: "Assignment Feedback Released", date: "12 Apr 2026", desc: "Web Development portfolio feedback is now available on the portal.", tag: "new", id: 1 },
              ].map((a, i) => (
                <Link key={i} to={`/announcement/${a.id}`} className="block">
                  <div className="bg-card rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold">{a.title}</h4>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        a.tag === "important" ? "bg-destructive/10 text-destructive" : "bg-success/15 text-success"
                      }`}>{a.tag}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{a.date}</p>
                    <p className="text-sm text-foreground/80">{a.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Pinned Items */}
          <section>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <Pin size={18} className="text-secondary" /> Pinned Items
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/module/human-computer-interaction" className="bg-card rounded-lg shadow-sm border p-3 flex items-center gap-3 hover:shadow-md transition-shadow">
                <BookOpen size={16} className="text-secondary shrink-0" />
                <div>
                  <p className="text-sm font-medium">Human Computer Interaction</p>
                  <p className="text-xs text-muted-foreground">Module</p>
                </div>
              </Link>
              <Link to="/announcement/0" className="bg-card rounded-lg shadow-sm border p-3 flex items-center gap-3 hover:shadow-md transition-shadow">
                <Megaphone size={16} className="text-secondary shrink-0" />
                <div>
                  <p className="text-sm font-medium">Lecture Moved Online</p>
                  <p className="text-xs text-muted-foreground">Announcement</p>
                </div>
              </Link>
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
              { title: "Software Internship 2026", type: "Internship", id: 0 },
              { title: "CV Workshop", type: "Workshop", id: 2 },
              { title: "Career Fair", type: "Event", id: 1 },
            ].map((o, i) => (
              <Link key={i} to={`/opportunity/${o.id}`} className="block mb-2 last:mb-0 p-2 rounded-md hover:bg-muted transition-colors">
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
            <Link to="/ai-suggestions" className="block mt-3 text-xs text-secondary hover:underline">View all suggestions →</Link>
          </section>

          {/* Quick Module Access */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-secondary" /> Quick Module Access
            </h3>
            {[
              { name: "Human Computer Interaction", slug: "human-computer-interaction" },
              { name: "Web Development", slug: "web-development" },
              { name: "Software Engineering", slug: "software-engineering" },
              { name: "Database Systems", slug: "database-systems" },
            ].map((m, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <Link to={`/module/${m.slug}`} className="text-sm font-medium hover:text-secondary transition-colors">{m.name}</Link>
                <div className="flex gap-2 flex-wrap mt-1">
                  <Link to={`/assignment/${m.slug}/0`} className="text-[11px] text-secondary hover:underline">Brief</Link>
                  <Link to={`/assignment/${m.slug}/0`} className="text-[11px] text-secondary hover:underline">Deadline</Link>
                  <Link to={`/module/${m.slug}`} className="text-[11px] text-secondary hover:underline">Materials</Link>
                </div>
              </div>
            ))}
          </section>

          {/* Study Tips */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Lightbulb size={16} className="text-warning" /> Study Tips
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>📖 Review notes weekly for better retention.</li>
              <li>📝 Plan assignments early to avoid last-minute stress.</li>
              <li>⏱️ Use the Pomodoro technique for focused study.</li>
            </ul>
          </section>

          {/* Recent Activity */}
          <section className="bg-card rounded-lg shadow-sm border p-4">
            <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/module/human-computer-interaction" className="hover:text-secondary">Viewed: HCI Lecture Notes</Link></li>
              <li><Link to="/assignment/web-development/0" className="hover:text-secondary">Viewed: Web Dev Assignment Brief</Link></li>
              <li><Link to="/announcement/0" className="hover:text-secondary">Read: Lecture Moved Online</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
