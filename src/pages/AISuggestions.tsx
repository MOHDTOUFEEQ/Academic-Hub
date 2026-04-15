import DashboardLayout from "@/components/DashboardLayout";
import { Sparkles, BookOpen, CalendarClock, Brain, Target } from "lucide-react";

const suggestions = [
  { icon: CalendarClock, title: "Deadline Priority", text: "HCI Coursework is due in 5 days. Prioritise this over other tasks." },
  { icon: BookOpen, title: "Study Focus", text: "You haven't reviewed Database Systems notes in 10 days. Consider a revision session." },
  { icon: Brain, title: "Revision Insight", text: "Students who revise in short bursts (25 min) tend to retain more. Try the Pomodoro technique." },
  { icon: Target, title: "Task Suggestion", text: "Start drafting your Software Engineering group report introduction this week." },
];

export default function AISuggestions() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <Sparkles size={22} className="text-secondary" /> AI Suggestions
      </h2>
      <p className="text-sm text-muted-foreground mb-6">Personalised recommendations based on your academic activity.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {suggestions.map((s, i) => (
          <div key={i} className="bg-card rounded-lg shadow-sm border p-5 flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
              <s.icon size={20} className="text-secondary" />
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">{s.title}</h4>
              <p className="text-sm text-foreground/80">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-secondary/5 border border-secondary/20 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <Sparkles size={20} className="text-secondary mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm mb-1">AI Assistant</h4>
            <p className="text-sm text-foreground/80">
              "Based on your submission history, you tend to complete work 2 days before the deadline. 
              I recommend starting your HCI coursework today to maintain your pace."
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
