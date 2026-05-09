import DashboardLayout from "@/components/DashboardLayout";
import {
  Building2,
  CircleDot,
  Filter,
  Flame,
  MapPin,
  Users,
  VolumeX,
} from "lucide-react";

const spaces = [
  { name: "Library Quiet Zone - L2", type: "quiet", occupancy: 32, seats: 24 },
  { name: "Collaborative Room G12", type: "group", occupancy: 71, seats: 8 },
  { name: "Computer Lab B2", type: "lab", occupancy: 85, seats: 6 },
  { name: "Study Lounge C Block", type: "group", occupancy: 49, seats: 14 },
];

const occupancyColor = (value: number) => {
  if (value < 45) return "bg-success/20 text-success border-success/30";
  if (value < 75) return "bg-warning/20 text-warning border-warning/30";
  return "bg-destructive/10 text-destructive border-destructive/30";
};

export default function StudySpaces() {
  return (
    <DashboardLayout>
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Smart Study Space Availability</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Live occupancy sensor simulation for campus study rooms, quiet areas, and computer labs.
        </p>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Building2 size={18} className="text-secondary" /> Live Space Availability
              </h3>
              <div className="text-xs text-secondary font-semibold flex items-center gap-1">
                <CircleDot size={12} className="animate-pulse" /> Real-time updates
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {spaces.map((space) => (
                <div key={space.name} className="rounded-lg border p-4 bg-muted/20 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{space.name}</p>
                      <p className="text-xs text-muted-foreground mt-1 capitalize">{space.type} room</p>
                    </div>
                    <span className={`text-[11px] border px-2 py-1 rounded-full font-semibold ${occupancyColor(space.occupancy)}`}>
                      {space.occupancy}% occupied
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full mt-3 overflow-hidden">
                    <div
                      className={`h-full ${
                        space.occupancy < 45 ? "bg-success" : space.occupancy < 75 ? "bg-warning" : "bg-destructive"
                      }`}
                      style={{ width: `${space.occupancy}%` }}
                    />
                  </div>
                  <p className="text-xs mt-2 text-muted-foreground">{space.seats} seats available now</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Heatmap-style Crowdedness</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {[28, 35, 40, 55, 63, 81, 78, 67, 49, 32, 26, 44].map((level, index) => (
                <div
                  key={index}
                  className={`h-12 rounded-md ${
                    level < 45 ? "bg-success/35" : level < 75 ? "bg-warning/35" : "bg-destructive/30"
                  } hover:scale-105 transition-transform`}
                  title={`${level}%`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Green: low occupancy, Yellow: moderate, Red: crowded.
            </p>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <VolumeX size={16} className="text-success" /> Quiet Zone Status
            </h3>
            <div className="mt-3 p-3 rounded-lg border bg-success/5 border-success/20">
              <p className="text-sm font-medium text-success">Optimal quiet conditions</p>
              <p className="text-xs text-muted-foreground mt-1">Library Floor 3 has low noise and 18 free seats.</p>
            </div>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Filter size={16} className="text-secondary" /> Smart Filters
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs bg-secondary/15 text-secondary">Quiet rooms</span>
              <span className="px-3 py-1.5 rounded-full text-xs bg-muted text-muted-foreground">Group rooms</span>
              <span className="px-3 py-1.5 rounded-full text-xs bg-muted text-muted-foreground">Computer labs</span>
            </div>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <MapPin size={16} className="text-secondary" /> Suggested Nearby Spaces
            </h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="p-3 rounded-lg border bg-muted/20">
                <p className="font-medium">Engineering Library North Wing</p>
                <p className="text-xs text-muted-foreground mt-1">4 min walk • 21 seats available</p>
              </li>
              <li className="p-3 rounded-lg border bg-muted/20">
                <p className="font-medium">Quiet Pods - C Block</p>
                <p className="text-xs text-muted-foreground mt-1">6 min walk • 9 seats available</p>
              </li>
            </ul>
          </section>

          <section className="bg-warning/5 border border-warning/25 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Flame size={16} className="text-warning" /> Peak Crowdedness Indicator
            </h3>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span>Expected peak</span>
              <span className="font-semibold text-warning">1:00 PM - 3:00 PM</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Users size={13} /> Delay group study by 30 minutes for better availability.
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
