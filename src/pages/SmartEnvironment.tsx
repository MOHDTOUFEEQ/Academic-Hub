import DashboardLayout from "@/components/DashboardLayout";
import {
  CircleDot,
  Leaf,
  Thermometer,
  Volume2,
  Waves,
  Wind,
} from "lucide-react";

const sensors = [
  { label: "Temperature", icon: Thermometer, value: "23°C", score: 68, status: "Good" },
  { label: "Air Quality Index", icon: Wind, value: "71 AQI", score: 58, status: "Moderate" },
  { label: "Noise Level", icon: Volume2, value: "63 dB", score: 79, status: "Moderate" },
  { label: "Humidity", icon: Waves, value: "48%", score: 72, status: "Good" },
];

const statusColor: Record<string, string> = {
  Good: "text-success bg-success/10 border-success/25",
  Moderate: "text-warning bg-warning/10 border-warning/25",
  Poor: "text-destructive bg-destructive/10 border-destructive/25",
};

export default function SmartEnvironment() {
  const comfortScore = 74;

  return (
    <DashboardLayout>
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Smart Environment Sensors</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Simulated IoT monitoring for study comfort across classrooms and library spaces.
        </p>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Leaf size={18} className="text-secondary" /> Live Sensor Metrics
              </h3>
              <span className="text-xs text-secondary font-semibold inline-flex items-center gap-1">
                <CircleDot size={12} className="animate-pulse" /> Live stream
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sensors.map((sensor) => (
                <div key={sensor.label} className="rounded-lg border p-4 bg-muted/20">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold flex items-center gap-2">
                        <sensor.icon size={16} className="text-secondary" /> {sensor.label}
                      </p>
                      <p className="text-xl font-bold mt-2">{sensor.value}</p>
                    </div>
                    <span className={`text-[11px] border px-2 py-1 rounded-full font-semibold ${statusColor[sensor.status]}`}>
                      {sensor.status}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full mt-3 overflow-hidden">
                    <div
                      className={`h-full ${
                        sensor.score >= 70 ? "bg-success" : sensor.score >= 50 ? "bg-warning" : "bg-destructive"
                      }`}
                      style={{ width: `${sensor.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Study Environment Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 bg-success/5 border-success/25">
                <p className="text-xs text-muted-foreground">Best current zone</p>
                <p className="text-sm font-semibold mt-1">Library Floor 3 - Quiet Deck</p>
                <p className="text-xs text-muted-foreground mt-1">Low noise, balanced humidity</p>
              </div>
              <div className="rounded-lg border p-4 bg-warning/5 border-warning/25">
                <p className="text-xs text-muted-foreground">Needs attention</p>
                <p className="text-sm font-semibold mt-1">Library Floor 2</p>
                <p className="text-xs text-muted-foreground mt-1">Noise spikes detected</p>
              </div>
              <div className="rounded-lg border p-4 bg-secondary/5 border-secondary/25">
                <p className="text-xs text-muted-foreground">Recommendation</p>
                <p className="text-sm font-semibold mt-1">Move to Engineering Annex</p>
                <p className="text-xs text-muted-foreground mt-1">Comfort score trend is improving</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-card rounded-xl border p-5 shadow-sm text-center">
            <h3 className="text-sm font-semibold text-muted-foreground">Comfort Indicator Score</h3>
            <div className="h-2 bg-muted rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-secondary transition-all duration-700" style={{ width: `${comfortScore}%` }} />
            </div>
            <p className="text-3xl font-bold mt-4">{comfortScore}/100</p>
            <p className="text-xs text-muted-foreground mt-1">Current environment is suitable for focused study.</p>
          </section>

          <section className="bg-card rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold mb-3">Smart Alerts</h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-lg border bg-destructive/5 border-destructive/25">
                Noise levels are currently high in Library Floor 2.
              </div>
              <div className="p-3 rounded-lg border bg-success/5 border-success/25">
                Recommended quiet study area available nearby in Engineering Annex.
              </div>
            </div>
          </section>

          <section className="bg-secondary/10 border border-secondary/30 rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold">Sensor Health</h3>
            <ul className="mt-3 text-xs text-foreground/80 space-y-2">
              <li className="flex justify-between"><span>Air sensor</span><span className="text-success">Connected</span></li>
              <li className="flex justify-between"><span>Noise monitor</span><span className="text-success">Connected</span></li>
              <li className="flex justify-between"><span>Gateway sync</span><span className="text-secondary">Live</span></li>
            </ul>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
