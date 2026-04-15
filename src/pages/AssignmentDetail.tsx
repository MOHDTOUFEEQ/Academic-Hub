import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { ArrowLeft, CalendarClock, Upload, FileText, Clock, AlertTriangle } from "lucide-react";

const assignmentsData: Record<string, { title: string; module: string; due: string; status: string; description: string; instructions: string[] }[]> = {
  "human-computer-interaction": [
    {
      title: "HCI Coursework",
      module: "Human Computer Interaction",
      due: "20 May 2026",
      status: "priority",
      description: "Design and evaluate a user interface prototype for an academic task management system. Your submission should demonstrate understanding of usability principles, accessibility guidelines, and user-centred design methodology.",
      instructions: ["Submit a written report (max 3000 words) with annotated wireframes.", "Include a usability evaluation with at least 5 participants.", "Submit via the university portal as a single PDF.", "Late submissions will incur a 5% penalty per day."],
    },
    {
      title: "Usability Report",
      module: "Human Computer Interaction",
      due: "8 June 2026",
      status: "upcoming",
      description: "Conduct a heuristic evaluation of an existing educational platform and write a detailed usability report with recommendations.",
      instructions: ["Use Nielsen's 10 heuristics as your framework.", "Include screenshots with annotations.", "Maximum 2500 words.", "Submit as PDF via portal."],
    },
  ],
  "web-development": [
    {
      title: "Portfolio Website",
      module: "Web Development",
      due: "28 May 2026",
      status: "upcoming",
      description: "Build a personal portfolio website showcasing your web development skills. The site must be responsive, accessible, and deployed online.",
      instructions: ["Use HTML5, CSS3, and vanilla JavaScript.", "Must be responsive across devices.", "Deploy to GitHub Pages or similar.", "Submit the URL and source code."],
    },
    {
      title: "Reflection Essay",
      module: "Web Development",
      due: "15 June 2026",
      status: "submitted",
      description: "Write a reflective essay on your learning journey in web development this semester.",
      instructions: ["1500 words maximum.", "Reference at least 3 academic sources.", "Submit as Word document."],
    },
    {
      title: "Group Web App",
      module: "Web Development",
      due: "22 June 2026",
      status: "upcoming",
      description: "Collaborate in a team to build a functional web application solving a real-world problem.",
      instructions: ["Teams of 3-4 students.", "Include user authentication.", "Present a live demo in week 12.", "Submit group report and codebase."],
    },
  ],
  "software-engineering": [
    {
      title: "Group Project Report",
      module: "Software Engineering",
      due: "5 June 2026",
      status: "upcoming",
      description: "Document the software development process your team followed, including requirements, design, implementation, and testing phases.",
      instructions: ["Follow the provided report template.", "Maximum 5000 words.", "Include UML diagrams.", "Submit as PDF with appendices."],
    },
    {
      title: "Individual Reflection",
      module: "Software Engineering",
      due: "19 June 2026",
      status: "upcoming",
      description: "Reflect on your individual contribution to the group project and lessons learned.",
      instructions: ["1000 words maximum.", "Be honest about challenges.", "Submit individually via portal."],
    },
  ],
  "database-systems": [
    {
      title: "SQL Assessment",
      module: "Database Systems",
      due: "10 June 2026",
      status: "upcoming",
      description: "Complete a series of SQL queries against a provided database schema. Demonstrate proficiency in SELECT, JOIN, subqueries, and aggregate functions.",
      instructions: ["Complete all 15 questions.", "Submit .sql file via portal.", "Ensure queries run without errors.", "Time limit: 2 hours (open book)."],
    },
    {
      title: "Database Design Project",
      module: "Database Systems",
      due: "25 June 2026",
      status: "upcoming",
      description: "Design a normalised relational database for a given case study, including ER diagrams and implementation.",
      instructions: ["Produce an ER diagram in 3NF.", "Implement in MySQL or PostgreSQL.", "Submit report with screenshots.", "Maximum 2000 words."],
    },
  ],
};

const statusStyles: Record<string, string> = {
  priority: "bg-destructive/10 text-destructive",
  upcoming: "bg-secondary/15 text-secondary",
  submitted: "bg-success/15 text-success",
};

export default function AssignmentDetail() {
  const { slug, id } = useParams();
  const moduleAssignments = assignmentsData[slug || "human-computer-interaction"] || assignmentsData["human-computer-interaction"];
  const assignment = moduleAssignments[Number(id) || 0] || moduleAssignments[0];

  return (
    <DashboardLayout>
      <Link to={`/module/${slug}`} className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Module
      </Link>

      <div className="max-w-3xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              {assignment.title}
              {assignment.status === "priority" && <AlertTriangle size={18} className="text-destructive" />}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{assignment.module}</p>
          </div>
          <span className={`text-xs uppercase font-bold px-3 py-1 rounded-full ${statusStyles[assignment.status]}`}>
            {assignment.status}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><CalendarClock size={14} /> Due: {assignment.due}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> Submitted: N/A</span>
        </div>

        {/* Description */}
        <section className="bg-card rounded-lg shadow-sm border p-5 mb-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2"><FileText size={16} className="text-secondary" /> Assignment Description</h3>
          <p className="text-sm text-foreground/80 leading-relaxed">{assignment.description}</p>
        </section>

        {/* Instructions */}
        <section className="bg-card rounded-lg shadow-sm border p-5 mb-5">
          <h3 className="font-semibold mb-3">Submission Instructions</h3>
          <ul className="space-y-2">
            {assignment.instructions.map((inst, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {inst}
              </li>
            ))}
          </ul>
        </section>

        {/* Upload */}
        <section className="bg-card rounded-lg shadow-sm border p-5">
          <h3 className="font-semibold mb-3 flex items-center gap-2"><Upload size={16} className="text-secondary" /> File Upload</h3>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-1">Drag and drop your file here, or click to browse</p>
            <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX, ZIP (max 50MB)</p>
            <button className="mt-4 px-5 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg hover:opacity-90 transition-opacity">
              Choose File
            </button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
