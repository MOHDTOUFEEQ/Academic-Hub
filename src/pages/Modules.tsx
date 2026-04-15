import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { BookOpen, FileText, Megaphone, FolderOpen, ClipboardList } from "lucide-react";

const modules = [
  { name: "Human Computer Interaction", lecturer: "Dr. Sarah Williams", code: "HCI301", slug: "human-computer-interaction" },
  { name: "Web Development", lecturer: "Prof. James Chen", code: "WEB202", slug: "web-development" },
  { name: "Software Engineering", lecturer: "Dr. Emily Parker", code: "SE401", slug: "software-engineering" },
  { name: "Database Systems", lecturer: "Dr. Michael Brown", code: "DB301", slug: "database-systems" },
];

export default function Modules() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen size={22} className="text-secondary" /> Modules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m, i) => (
          <Link key={i} to={`/module/${m.slug}`} className="bg-card rounded-lg shadow-sm border p-5 hover:shadow-md transition-shadow block">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{m.name}</h3>
              <span className="text-xs text-muted-foreground">{m.code}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{m.lecturer}</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Assignments", icon: ClipboardList },
                { label: "Announcements", icon: Megaphone },
                { label: "Materials", icon: FolderOpen },
                { label: "Module Brief", icon: FileText },
              ].map((link, j) => (
                <span key={j} className="flex items-center gap-1.5 text-xs text-secondary">
                  <link.icon size={13} /> {link.label}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
}
