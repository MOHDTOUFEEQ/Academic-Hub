import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { ArrowLeft, Calendar, Smartphone, Download, CheckCircle2 } from "lucide-react";

export default function CalendarSync() {
  return (
    <DashboardLayout>
      <Link to="/timetable" className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Timetable
      </Link>

      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Calendar size={22} className="text-secondary" /> Calendar Integration
        </h2>
        <p className="text-sm text-muted-foreground mb-6">Connect your timetable to your mobile calendar to stay on top of your schedule.</p>

        <div className="space-y-4">
          {[
            { label: "Connect Google Calendar", icon: Calendar, desc: "Sync your timetable with Google Calendar for automatic updates on all devices.", color: "bg-secondary" },
            { label: "Connect Apple Calendar", icon: Smartphone, desc: "Add your schedule to Apple Calendar on iPhone, iPad, and Mac.", color: "bg-primary" },
            { label: "Download Timetable (.ics)", icon: Download, desc: "Download your timetable as an .ics file to import into any calendar app.", color: "bg-success" },
          ].map((option, i) => (
            <div key={i} className="bg-card rounded-lg shadow-sm border p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg ${option.color}/10 flex items-center justify-center`}>
                <option.icon size={24} className="text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{option.label}</h3>
                <p className="text-xs text-muted-foreground">{option.desc}</p>
              </div>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg hover:opacity-90 transition-opacity">
                Connect
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-secondary/5 border border-secondary/20 rounded-lg p-5">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><CheckCircle2 size={16} className="text-success" /> How it works</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>1. Choose your preferred calendar service above.</li>
            <li>2. Authorise access to add events to your calendar.</li>
            <li>3. Your timetable will sync automatically and update when changes are made.</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
