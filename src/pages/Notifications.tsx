import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Bell, CalendarClock, Megaphone, Calendar, CheckCircle2, ArrowLeft } from "lucide-react";

const notifications = [
  { icon: CalendarClock, title: "Deadline Reminder", desc: "HCI Coursework is due in 5 days (20 May 2026).", time: "2 hours ago", type: "urgent", read: false },
  { icon: Megaphone, title: "Announcement Update", desc: "HCI lecture on 16 April moved online — check your email for the Teams link.", time: "5 hours ago", type: "important", read: false },
  { icon: Calendar, title: "Timetable Change", desc: "Web Dev Lab on Thursday moved to Room B4.", time: "1 day ago", type: "", read: false },
  { icon: CalendarClock, title: "Deadline Approaching", desc: "Portfolio Website due in 13 days (28 May 2026).", time: "1 day ago", type: "", read: true },
  { icon: CheckCircle2, title: "Submission Confirmed", desc: "Your Reflection Essay has been submitted successfully.", time: "3 days ago", type: "", read: true },
  { icon: Megaphone, title: "Feedback Available", desc: "Web Development portfolio feedback is now available on the portal.", time: "3 days ago", type: "new", read: true },
  { icon: Calendar, title: "Event Reminder", desc: "Career Networking Event on 15 May — don't forget your CV.", time: "5 days ago", type: "", read: true },
];

const tagStyles: Record<string, string> = {
  urgent: "bg-destructive/10 text-destructive",
  important: "bg-warning/15 text-warning",
  new: "bg-success/15 text-success",
};

export default function Notifications() {
  return (
    <DashboardLayout>
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Dashboard
      </Link>

      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Bell size={22} className="text-secondary" /> Notifications
        <span className="ml-2 text-xs font-bold bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full">3 new</span>
      </h2>

      <div className="max-w-3xl space-y-3">
        {notifications.map((n, i) => (
          <div key={i} className={`bg-card rounded-lg shadow-sm border p-4 flex items-start gap-3 transition-colors ${!n.read ? "border-secondary/30 bg-secondary/5" : ""}`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${!n.read ? "bg-secondary/10" : "bg-muted"}`}>
              <n.icon size={18} className={!n.read ? "text-secondary" : "text-muted-foreground"} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="text-sm font-semibold">{n.title}</h4>
                {n.type && <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${tagStyles[n.type] || ""}`}>{n.type}</span>}
                {!n.read && <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />}
              </div>
              <p className="text-sm text-foreground/80">{n.desc}</p>
              <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
