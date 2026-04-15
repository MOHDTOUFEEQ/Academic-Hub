import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { ArrowLeft, Briefcase, MapPin, Calendar, Bookmark, ExternalLink } from "lucide-react";

const opportunitiesData = [
  { title: "Software Internship 2026", type: "Internship", date: "Application deadline: 30 June 2026", location: "London, UK (Hybrid)", desc: "A 12-week paid internship at a leading technology firm. You will work alongside experienced developers on real-world projects, gaining hands-on experience in software development, code review, and agile workflows. Ideal for students completing their second or final year of a computing degree. Competitive salary and mentorship provided." },
  { title: "Career Networking Event", type: "Event", date: "15 May 2026, 2:00 PM – 5:00 PM", location: "University Main Hall", desc: "Connect with industry professionals from top tech companies including Google, Microsoft, and local startups. Bring your CV and be prepared for informal interviews. Refreshments will be provided. Business casual dress code recommended." },
  { title: "CV Workshop", type: "Workshop", date: "22 April 2026, 10:00 AM – 12:00 PM", location: "Careers Centre, Room 102", desc: "Get expert feedback on your CV from experienced career advisors. Learn how to tailor your CV for tech roles, highlight relevant projects, and present your skills effectively. Bring a printed copy of your current CV. Limited to 20 participants — first come, first served." },
  { title: "Hackathon 2026", type: "Event", date: "10–11 May 2026", location: "Innovation Hub, Building C", desc: "A 48-hour hackathon with exciting prizes. Form teams of 3–5 and build a working prototype addressing a sustainability challenge. Mentors from industry will be available throughout. Food and drinks provided. Register your team by 5 May." },
  { title: "Research Assistant Position", type: "Internship", date: "Summer 2026 (8 weeks)", location: "HCI Research Lab", desc: "Assist Dr. Sarah Williams with ongoing HCI research on accessible interface design. Tasks include conducting user studies, analysing data, and contributing to a research publication. Stipend provided. Open to students with strong interest in UX research." },
];

export default function OpportunityDetail() {
  const { id } = useParams();
  const opp = opportunitiesData[Number(id) || 0];

  return (
    <DashboardLayout>
      <Link to="/opportunities" className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Opportunities
      </Link>

      <div className="max-w-3xl">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-2xl font-bold">{opp.title}</h2>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-secondary">
            <Bookmark size={20} />
          </button>
        </div>
        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">{opp.type}</span>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4 mb-6">
          <span className="flex items-center gap-1"><Calendar size={14} /> {opp.date}</span>
          <span className="flex items-center gap-1"><MapPin size={14} /> {opp.location}</span>
        </div>

        <article className="bg-card rounded-lg shadow-sm border p-6 mb-5">
          <h3 className="font-semibold mb-2 flex items-center gap-2"><Briefcase size={16} className="text-secondary" /> Details</h3>
          <p className="text-sm text-foreground/80 leading-relaxed">{opp.desc}</p>
        </article>

        <button className="px-6 py-2.5 bg-secondary text-secondary-foreground text-sm rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
          <ExternalLink size={14} /> Apply Now
        </button>
      </div>
    </DashboardLayout>
  );
}
