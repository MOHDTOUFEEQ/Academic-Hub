import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { ArrowLeft, Accessibility, Eye, Type, Minus, Monitor, BookOpen } from "lucide-react";

export default function AccessibilitySettings() {
  return (
    <DashboardLayout>
      <Link to="/settings" className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Settings
      </Link>

      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Accessibility size={22} className="text-secondary" /> Accessibility Settings
        </h2>
        <p className="text-sm text-muted-foreground mb-6">Customise the display to suit your needs. All changes are visual only in this prototype.</p>

        {/* Font Size */}
        <section className="bg-card rounded-lg shadow-sm border p-5 mb-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Type size={16} className="text-secondary" /> Font Size</h3>
          <div className="flex gap-3">
            {[
              { label: "Small", size: "text-xs" },
              { label: "Medium", size: "text-sm" },
              { label: "Large", size: "text-base" },
            ].map((s, i) => (
              <button key={s.label} className={`px-5 py-2.5 rounded-lg border transition-colors ${
                i === 1 ? "bg-secondary text-secondary-foreground border-secondary" : "border-border text-muted-foreground hover:bg-muted"
              }`}>
                <span className={s.size}>{s.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Toggles */}
        <section className="bg-card rounded-lg shadow-sm border p-5 mb-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Eye size={16} className="text-secondary" /> Display Options</h3>
          <div className="space-y-4">
            {[
              { label: "High Contrast Mode", desc: "Increase contrast between text and background for better readability.", icon: Monitor },
              { label: "Reduced Visual Clutter", desc: "Hide decorative elements and simplify the interface.", icon: Minus },
              { label: "Simple Layout Mode", desc: "Use a single-column layout with larger text.", icon: BookOpen },
              { label: "Reading Focus Mode", desc: "Highlight the main content area and dim surrounding elements.", icon: Eye },
              { label: "Reduce Animations", desc: "Minimise motion and transitions throughout the interface.", icon: Minus },
            ].map((opt) => (
              <label key={opt.label} className="flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <opt.icon size={18} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{opt.label}</p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </div>
                <div className="w-11 h-6 bg-muted rounded-full relative cursor-pointer shrink-0 mt-0.5">
                  <div className="w-5 h-5 bg-card rounded-full shadow absolute top-0.5 left-0.5" />
                </div>
              </label>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
