import DashboardLayout from "@/components/DashboardLayout";
import {
  BellRing,
  CheckCircle2,
  Clock3,
  ScanLine,
  SmartphoneNfc,
  TriangleAlert,
  Wifi,
} from "lucide-react";

const weeklyData = [
  { day: "Mon", pct: 100 },
  { day: "Tue", pct: 92 },
  { day: "Wed", pct: 86 },
  { day: "Thu", pct: 79 },
  { day: "Fri", pct: 95 },
];

const attendanceHistory = [
  { date: "06 May 2026", module: "HCI Lecture", room: "B204", status: "Present", time: "09:01" },
  { date: "05 May 2026", module: "Web Dev Lab", room: "Lab B2", status: "Late", time: "11:08" },
  { date: "04 May 2026", module: "Database Systems", room: "A102", status: "Missed", time: "-" },
  { date: "03 May 2026", module: "Software Engineering", room: "C110", status: "Present", time: "14:00" },
];

const statusStyles: Record<string, string> = {
  Present: "bg-success/15 text-success",
  Late: "bg-warning/15 text-warning",
  Missed: "bg-destructive/10 text-destructive",
};

export default function SmartAttendance() {
  const attendancePct = 87;

  return (
    <DashboardLayout>
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Smart Campus Attendance</h2>
        <p className="text-sm text-muted-foreground mt-1">
          NFC/RFID/Bluetooth inspired live check-in and attendance intelligence.
        </p>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-secondary/80 animate-pulse" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <ScanLine size={18} className="text-secondary" /> Automatic Check-In
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  You are checked into Room B204.
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-success/15 text-success font-semibold inline-flex items-center gap-1">
                <Wifi size={12} className="animate-pulse" /> Live Sync
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border bg-secondary/5 border-secondary/30 p-4">
                <p className="text-xs uppercase text-muted-foreground tracking-wide">Sensor Event</p>
                <p className="text-sm font-medium mt-1">NFC Tag detected at 09:01 AM</p>
                <p className="text-xs text-muted-foreground mt-1">Beacon ID: B204-RDR-07</p>
              </div>
              <div className="rounded-lg border bg-muted/40 p-4">
                <p className="text-xs uppercase text-muted-foreground tracking-wide">Real-time Scan</p>
                <div className="h-2 bg-muted rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-3/4 bg-secondary rounded-full animate-pulse" />
                </div>
                <p className="text-xs mt-2 text-muted-foreground">Scanning ID and synchronizing attendance...</p>
              </div>
            </div>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock3 size={18} className="text-secondary" /> Weekly Attendance Analytics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {weeklyData.map((day) => (
                <div key={day.day} className="rounded-lg border p-3 bg-muted/20">
                  <p className="text-xs text-muted-foreground">{day.day}</p>
                  <div className="h-24 mt-2 rounded-md bg-muted/50 flex items-end p-1.5">
                    <div
                      className={`w-full rounded-sm ${
                        day.pct >= 90 ? "bg-success/70" : day.pct >= 80 ? "bg-warning/70" : "bg-destructive/70"
                      }`}
                      style={{ height: `${day.pct}%` }}
                    />
                  </div>
                  <p className="text-sm font-semibold mt-2">{day.pct}%</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Smart Attendance History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground border-b">
                    <th className="py-2 pr-3 font-medium">Date</th>
                    <th className="py-2 pr-3 font-medium">Module</th>
                    <th className="py-2 pr-3 font-medium">Room</th>
                    <th className="py-2 pr-3 font-medium">Check-in</th>
                    <th className="py-2 pr-0 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceHistory.map((item) => (
                    <tr key={`${item.date}-${item.module}`} className="border-b last:border-0">
                      <td className="py-3 pr-3">{item.date}</td>
                      <td className="py-3 pr-3">{item.module}</td>
                      <td className="py-3 pr-3">{item.room}</td>
                      <td className="py-3 pr-3 text-muted-foreground">{item.time}</td>
                      <td className="py-3 pr-0">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm text-center">
            <h3 className="text-sm font-semibold text-muted-foreground">Attendance Percentage</h3>
            <div
              className="w-36 h-36 mx-auto mt-3 rounded-full grid place-items-center"
              style={{
                background: `conic-gradient(hsl(var(--secondary)) ${attendancePct * 3.6}deg, hsl(var(--muted)) 0deg)`,
              }}
            >
              <div className="w-28 h-28 rounded-full bg-card grid place-items-center border">
                <p className="text-2xl font-bold">{attendancePct}%</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Target: stay above 85% to avoid alerts.</p>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <BellRing size={16} className="text-secondary" /> Smart Alerts
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-lg border bg-warning/5 border-warning/30 flex gap-2">
                <TriangleAlert size={16} className="text-warning mt-0.5 shrink-0" />
                <p>Your Software Engineering attendance dropped to 74%. Attend next lecture to recover.</p>
              </div>
              <div className="p-3 rounded-lg border bg-success/5 border-success/25 flex gap-2">
                <CheckCircle2 size={16} className="text-success mt-0.5 shrink-0" />
                <p>Attendance synced successfully across your timetable and module records.</p>
              </div>
            </div>
          </section>

          <section className="bg-secondary/10 border border-secondary/30 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <SmartphoneNfc size={16} className="text-secondary" /> Device Connections
            </h3>
            <ul className="mt-3 text-xs space-y-2 text-foreground/80">
              <li className="flex justify-between"><span>Student ID NFC</span><span className="text-success">Connected</span></li>
              <li className="flex justify-between"><span>Campus Beacon Link</span><span className="text-success">Active</span></li>
              <li className="flex justify-between"><span>Attendance Cloud Sync</span><span className="text-secondary">Live</span></li>
            </ul>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
