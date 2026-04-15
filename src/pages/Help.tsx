import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { HelpCircle, CalendarClock, Calendar, Megaphone, BookOpen, Sparkles, ArrowLeft, ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do I track my deadlines?", a: "Navigate to the Deadlines page from the sidebar. You can view all upcoming assignments, filter by date range, and see priority indicators. Urgent deadlines are highlighted in red.", icon: CalendarClock },
  { q: "How do I check my timetable?", a: "Click on Timetable in the sidebar to view your weekly schedule. You can also sync it with Google Calendar or Apple Calendar from the Calendar Integration page.", icon: Calendar },
  { q: "How do I find announcements?", a: "Go to the Announcements page to see all university and module-specific announcements. Use the filter tabs to view only important or module-specific announcements.", icon: Megaphone },
  { q: "How do I access module materials?", a: "Click on any module card in the Modules page to view its details, including links to assignment briefs, lecture materials, and module-specific announcements.", icon: BookOpen },
  { q: "What are AI Suggestions?", a: "The AI Suggestions feature provides personalised recommendations based on your academic activity, including priority tasks, study reminders, and time management tips. These are conceptual features for demonstration purposes.", icon: Sparkles },
  { q: "How do I change accessibility settings?", a: "Go to Settings from the sidebar, then click on the accessibility section. You can adjust font size, enable high contrast mode, reduce visual clutter, and more.", icon: HelpCircle },
];

export default function Help() {
  return (
    <DashboardLayout>
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Dashboard
      </Link>

      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <HelpCircle size={22} className="text-secondary" /> Help Centre
      </h2>
      <p className="text-sm text-muted-foreground mb-6">Find answers to frequently asked questions about using the Smart Academic Dashboard.</p>

      <div className="max-w-3xl space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-card rounded-lg shadow-sm border group">
            <summary className="flex items-center gap-3 p-4 cursor-pointer list-none">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <faq.icon size={18} className="text-secondary" />
              </div>
              <span className="flex-1 text-sm font-semibold">{faq.q}</span>
              <ChevronDown size={16} className="text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 pl-16">
              <p className="text-sm text-foreground/80 leading-relaxed">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="max-w-3xl mt-8 bg-secondary/5 border border-secondary/20 rounded-lg p-5">
        <h3 className="font-semibold text-sm mb-2">Still need help?</h3>
        <p className="text-sm text-foreground/80 mb-3">If you can't find what you're looking for, contact the IT support team.</p>
        <button className="px-5 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg hover:opacity-90 transition-opacity">
          Contact Support
        </button>
      </div>
    </DashboardLayout>
  );
}
