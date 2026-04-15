import DashboardLayout from "@/components/DashboardLayout";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User size={22} className="text-secondary" /> Profile
      </h2>
      <div className="max-w-lg bg-card rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl font-bold">
            S
          </div>
          <div>
            <h3 className="font-semibold text-lg">Student Name</h3>
            <p className="text-sm text-muted-foreground">BSc Computer Science</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: "Full Name", value: "Student Name" },
            { label: "Student ID", value: "2026CS001" },
            { label: "Course", value: "BSc Computer Science" },
            { label: "Academic Year", value: "2025/2026" },
            { label: "Email", value: "student@university.ac.uk" },
          ].map((f, i) => (
            <div key={i}>
              <label className="text-xs text-muted-foreground font-medium">{f.label}</label>
              <input
                type="text"
                defaultValue={f.value}
                readOnly
                className="block w-full mt-1 text-sm border rounded-lg px-3 py-2 bg-muted/50 text-foreground"
              />
            </div>
          ))}
        </div>
        <button className="mt-6 px-5 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg hover:opacity-90 transition-opacity">
          Edit Profile
        </button>
      </div>
    </DashboardLayout>
  );
}
