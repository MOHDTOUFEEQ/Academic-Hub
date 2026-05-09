import DashboardLayout from "@/components/DashboardLayout";
import {
  Accessibility,
  CircleDot,
  Clock3,
  LocateFixed,
  MapPinned,
  Navigation,
  Pin,
  Route,
} from "lucide-react";

const routeSteps = [
  "Start at Library Atrium",
  "Proceed through Corridor C",
  "Use Lift 2 to Floor B",
  "Turn right to Room B204",
];

const guidanceCards = [
  { title: "HCI Lecture - Room B204", eta: "7 min", floor: "Floor B", mode: "Fastest route" },
  { title: "Web Dev Lab - Lab B2", eta: "10 min", floor: "Floor B", mode: "Low-traffic route" },
  { title: "Engineering Seminar Hall", eta: "12 min", floor: "Floor C", mode: "Accessible route" },
];

export default function CampusNavigation() {
  return (
    <DashboardLayout>
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Smart Campus Navigation</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Indoor wayfinding simulation inspired by Bluetooth beacon navigation.
        </p>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPinned size={18} className="text-secondary" /> Interactive Campus Map
              </h3>
              <span className="text-xs text-secondary font-semibold inline-flex items-center gap-1">
                <CircleDot size={12} className="animate-pulse" /> Beacon tracking
              </span>
            </div>
            <div className="rounded-xl border bg-gradient-to-br from-secondary/10 via-background to-muted/40 p-4 min-h-[250px] relative overflow-hidden">
              <div className="absolute left-[10%] top-[18%] w-3 h-3 rounded-full bg-success shadow-[0_0_0_8px_rgba(34,197,94,0.18)]" />
              <div className="absolute left-[76%] top-[58%] w-3 h-3 rounded-full bg-destructive shadow-[0_0_0_8px_rgba(239,68,68,0.16)]" />
              <div className="absolute left-[12%] top-[20%] right-[24%] bottom-[40%] border-2 border-dashed border-secondary/70 rounded-[32px] animate-pulse" />
              <div className="absolute left-4 bottom-4 text-xs text-muted-foreground">
                Live route line updates while you move.
              </div>
            </div>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Route size={18} className="text-secondary" /> Smart Route Suggestions
            </h3>
            <div className="space-y-3">
              {guidanceCards.map((card) => (
                <div key={card.title} className="rounded-lg border p-4 bg-muted/20 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold">{card.title}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/15 text-secondary font-semibold">{card.mode}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock3 size={12} /> {card.eta}</span>
                    <span className="inline-flex items-center gap-1"><Pin size={12} /> {card.floor}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <LocateFixed size={16} className="text-secondary" /> Find My Classroom
            </h3>
            <p className="text-sm mt-2">Current destination: <span className="font-semibold">Room B204</span></p>
            <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-secondary animate-pulse" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Route progress: 67%</p>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold mb-3">Building Guidance</h3>
            <ul className="space-y-2 text-sm">
              {routeSteps.map((step) => (
                <li key={step} className="p-2.5 rounded-md bg-muted/30 border">
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-success/5 border border-success/25 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Navigation size={16} className="text-success" /> Smart Notifications
            </h3>
            <ul className="mt-3 text-sm space-y-3">
              <li>You are 3 minutes away from your lecture room.</li>
              <li className="flex items-center gap-2"><Accessibility size={14} className="text-secondary" /> Fastest accessible route selected.</li>
            </ul>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold mb-2">Floor Navigation Tabs</h3>
            <div className="flex gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium">Floor B</span>
              <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground">Floor C</span>
              <span className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground">Ground</span>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
