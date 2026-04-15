import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { BookOpen, FileText, Megaphone, FolderOpen, ClipboardList, ArrowLeft, User } from "lucide-react";

const modulesData: Record<string, { name: string; code: string; lecturer: string; description: string; assessments: { title: string; due: string; weight: string }[] }> = {
  "human-computer-interaction": {
    name: "Human Computer Interaction",
    code: "HCI301",
    lecturer: "Dr. Sarah Williams",
    description: "This module explores the principles and practices of designing user-centred interactive systems. Topics include usability evaluation, interaction design patterns, accessibility, cognitive load theory, and prototyping methodologies. Students will develop practical skills in conducting user research and creating effective interface designs.",
    assessments: [
      { title: "HCI Coursework", due: "20 May 2026", weight: "60%" },
      { title: "Usability Report", due: "8 June 2026", weight: "40%" },
    ],
  },
  "web-development": {
    name: "Web Development",
    code: "WEB202",
    lecturer: "Prof. James Chen",
    description: "Covers modern web technologies including HTML5, CSS3, JavaScript, and responsive design frameworks. Students build full-stack web applications using industry-standard tools and learn about accessibility, performance optimisation, and deployment workflows.",
    assessments: [
      { title: "Portfolio Website", due: "28 May 2026", weight: "50%" },
      { title: "Reflection Essay", due: "15 June 2026", weight: "20%" },
      { title: "Group Web App", due: "22 June 2026", weight: "30%" },
    ],
  },
  "software-engineering": {
    name: "Software Engineering",
    code: "SE401",
    lecturer: "Dr. Emily Parker",
    description: "This module covers software development life cycles, agile methodologies, version control, testing strategies, and team-based project management. Students work in groups to deliver a software product following professional engineering practices.",
    assessments: [
      { title: "Group Project Report", due: "5 June 2026", weight: "70%" },
      { title: "Individual Reflection", due: "19 June 2026", weight: "30%" },
    ],
  },
  "database-systems": {
    name: "Database Systems",
    code: "DB301",
    lecturer: "Dr. Michael Brown",
    description: "Introduces relational database concepts, SQL programming, normalisation, ER modelling, and transaction management. Students gain hands-on experience designing and querying databases for real-world applications.",
    assessments: [
      { title: "SQL Assessment", due: "10 June 2026", weight: "50%" },
      { title: "Database Design Project", due: "25 June 2026", weight: "50%" },
    ],
  },
};

export default function ModuleDetail() {
  const { slug } = useParams();
  const mod = modulesData[slug || ""] || modulesData["human-computer-interaction"];

  return (
    <DashboardLayout>
      <Link to="/modules" className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Modules
      </Link>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
          <BookOpen size={24} className="text-secondary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{mod.name}</h2>
          <p className="text-sm text-muted-foreground flex items-center gap-1"><User size={13} /> {mod.lecturer} · {mod.code}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <section className="bg-card rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold mb-2">Module Description</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">{mod.description}</p>
          </section>

          {/* Assessments */}
          <section className="bg-card rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><ClipboardList size={16} className="text-secondary" /> Assessments</h3>
            <div className="space-y-3">
              {mod.assessments.map((a, i) => (
                <Link key={i} to={`/assignment/${slug}/${i}`} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-xs text-muted-foreground">Due: {a.due}</p>
                  </div>
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-full">{a.weight}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar links */}
        <div className="space-y-4">
          {[
            { label: "View Assignment Brief", icon: FileText, to: `/assignment/${slug}/0` },
            { label: "Lecture Materials", icon: FolderOpen, to: `/module/${slug}` },
            { label: "Module Announcements", icon: Megaphone, to: "/announcements" },
          ].map((link, i) => (
            <Link key={i} to={link.to} className="flex items-center gap-3 bg-card rounded-lg shadow-sm border p-4 hover:bg-muted/50 transition-colors">
              <link.icon size={18} className="text-secondary" />
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
