import DashboardLayout from "@/components/DashboardLayout";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Settings size={22} className="text-secondary" /> Settings
      </h2>
      <div className="max-w-2xl space-y-6">
        {/* Dark Mode */}
        <section className="bg-card rounded-lg shadow-sm border p-5">
          <h3 className="font-semibold mb-3">Appearance</h3>
          <label className="flex items-center justify-between">
            <span className="text-sm">Dark Mode</span>
            <div className="w-11 h-6 bg-muted rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-card rounded-full shadow absolute top-0.5 left-0.5" />
            </div>
          </label>
        </section>

        {/* Font Size */}
        <section className="bg-card rounded-lg shadow-sm border p-5">
          <h3 className="font-semibold mb-3">Font Size</h3>
          <div className="flex gap-3">
            {["Small", "Medium", "Large"].map((s, i) => (
              <button key={s} className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                i === 1 ? "bg-secondary text-secondary-foreground border-secondary" : "border-border text-muted-foreground hover:bg-muted"
              }`}>{s}</button>
            ))}
          </div>
        </section>

        {/* Language */}
        <section className="bg-card rounded-lg shadow-sm border p-5">
          <h3 className="font-semibold mb-3">Language</h3>
          <select className="text-sm border rounded-lg px-3 py-2 bg-card text-foreground w-48">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </section>

        {/* Accessibility */}
        <section className="bg-card rounded-lg shadow-sm border p-5">
          <h3 className="font-semibold mb-3">Accessibility</h3>
          <div className="space-y-3">
            {["High contrast mode", "Reduced visual clutter mode", "Simple layout mode"].map(opt => (
              <label key={opt} className="flex items-center justify-between">
                <span className="text-sm">{opt}</span>
                <div className="w-11 h-6 bg-muted rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-card rounded-full shadow absolute top-0.5 left-0.5" />
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-card rounded-lg shadow-sm border p-5">
          <h3 className="font-semibold mb-3">Notification Preferences</h3>
          <div className="space-y-3">
            {["Email reminders", "Dashboard reminders"].map(opt => (
              <label key={opt} className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-secondary rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-secondary rounded-sm" />
                </div>
                <span className="text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
