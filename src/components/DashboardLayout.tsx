import { useState } from "react";
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
  HelpCircle,
  Menu,
  X,
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
  { label: "Help", icon: HelpCircle, path: "/help" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:sticky top-0 left-0 z-50 md:z-auto w-60 shrink-0 h-screen bg-sidebar text-sidebar-foreground flex flex-col transition-transform duration-200 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div className="px-5 py-5 border-b border-sidebar-border flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-3 min-w-0 text-left" onClick={() => setSidebarOpen(false)}>
            <img src="/logo.svg" alt="" width={40} height={40} className="shrink-0 rounded-[10px]" />
            <h1 className="text-lg font-bold tracking-tight text-sidebar-primary-foreground leading-tight">
              Academic Hub
            </h1>
          </Link>
          <button className="md:hidden text-sidebar-foreground p-1" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-3 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
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
          © 2026 Academic Hub
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 md:h-16 bg-card border-b flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3 flex-1">
            <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} className="text-foreground" />
            </button>
            <div className="relative w-full max-w-xs sm:max-w-sm md:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search…"
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-muted text-sm text-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/notifications" className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/settings" className="p-2 rounded-lg hover:bg-muted transition-colors hidden sm:block">
              <Settings size={20} className="text-foreground" />
            </Link>
            <Link to="/profile" className="p-2 rounded-lg hover:bg-muted transition-colors">
              <User size={20} className="text-foreground" />
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
