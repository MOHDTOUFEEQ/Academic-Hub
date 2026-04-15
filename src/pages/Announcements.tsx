import DashboardLayout from "@/components/DashboardLayout";
import { Megaphone } from "lucide-react";

const tabs = ["All", "Important", "Module Specific"];
const announcements = [
  { title: "Lecture Moved Online", date: "14 Apr 2026", desc: "HCI lecture on 16 April will be held online via Teams.", tag: "important" },
  { title: "Assignment Feedback Released", date: "12 Apr 2026", desc: "Web Development portfolio feedback is now available.", tag: "new" },
  { title: "Library Hours Extended", date: "10 Apr 2026", desc: "Library will remain open until 10 PM during revision period.", tag: "" },
  { title: "Guest Lecture: UX in Industry", date: "8 Apr 2026", desc: "A guest speaker from Google will present on UX careers.", tag: "important" },
  { title: "Module Evaluation Open", date: "5 Apr 2026", desc: "Please complete your module evaluations by 20 April.", tag: "" },
];

export default function Announcements() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Megaphone size={22} className="text-secondary" /> Announcements
      </h2>
      <div className="flex gap-2 mb-6">
        {tabs.map((t, i) => (
          <button key={t} className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
            i === 0 ? "bg-secondary text-secondary-foreground border-secondary" : "border-border text-muted-foreground hover:bg-muted"
          }`}>{t}</button>
        ))}
      </div>
      <div className="space-y-4">
        {announcements.map((a, i) => (
          <article key={i} className="bg-card rounded-lg shadow-sm border p-4">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-sm">{a.title}</h4>
              {a.tag && (
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                  a.tag === "important" ? "bg-destructive/10 text-destructive" : "bg-success/15 text-success"
                }`}>{a.tag}</span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mb-1">{a.date}</p>
            <p className="text-sm text-foreground/80">{a.desc}</p>
          </article>
        ))}
      </div>
    </DashboardLayout>
  );
}
