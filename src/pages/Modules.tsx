import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { BookOpen, FileText, Megaphone, FolderOpen, ClipboardList } from "lucide-react";

const modules = [
  { name: "Human Computer Interaction", lecturer: "Dr. Sarah Williams", code: "HCI301" },
  { name: "Web Development", lecturer: "Prof. James Chen", code: "WEB202" },
  { name: "Software Engineering", lecturer: "Dr. Emily Parker", code: "SE401" },
  { name: "Database Systems", lecturer: "Dr. Michael Brown", code: "DB301" },
];

export default function Modules() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen size={22} className="text-secondary" /> Modules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m, i) => (
          <div key={i} className="bg-card rounded-lg shadow-sm border p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{m.name}</h3>
              <span className="text-xs text-muted-foreground">{m.code}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{m.lecturer}</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Assignments", icon: ClipboardList, to: "/deadlines" },
                { label: "Announcements", icon: Megaphone, to: "/announcements" },
                { label: "Materials", icon: FolderOpen, to: "/modules" },
                { label: "Module Brief", icon: FileText, to: "/modules" },
              ].map((link, j) => (
                <Link key={j} to={link.to} className="flex items-center gap-1.5 text-xs text-secondary hover:underline">
                  <link.icon size={13} /> {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
