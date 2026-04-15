import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarClock,
  Calendar,
  Megaphone,
  Briefcase,
  Sparkles,
  Settings,
  Bell,
  Search,
  User,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Modules", icon: BookOpen, path: "/modules" },
  { label: "Deadlines", icon: CalendarClock, path: "/deadlines" },
  { label: "Timetable", icon: Calendar, path: "/timetable" },
  { label: "Announcements", icon: Megaphone, path: "/announcements" },
  { label: "Opportunities", icon: Briefcase, path: "/opportunities" },
  { label: "AI Suggestions", icon: Sparkles, path: "/ai-suggestions" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="px-5 py-5 border-b border-sidebar-border">
          <h1 className="text-lg font-bold tracking-tight text-sidebar-primary-foreground">
            Smart Academic<br />Dashboard
          </h1>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-3">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-5 py-4 border-t border-sidebar-border text-xs text-sidebar-foreground/50">
          © 2026 Smart Academic Dashboard
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-card border-b flex items-center justify-between px-6">
          <div className="relative w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, deadlines, announcements…"
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-muted text-sm text-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </button>
            <Link to="/settings" className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Settings size={20} className="text-foreground" />
            </Link>
            <Link to="/profile" className="p-2 rounded-lg hover:bg-muted transition-colors">
              <User size={20} className="text-foreground" />
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
