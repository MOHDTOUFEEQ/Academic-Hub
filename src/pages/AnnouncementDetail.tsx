import { Link, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { ArrowLeft, Megaphone, Calendar } from "lucide-react";

const announcementsData = [
  { title: "Lecture Moved Online", date: "14 Apr 2026", module: "Human Computer Interaction", tag: "important", body: "Due to building maintenance, the HCI lecture scheduled for 16 April will be held online via Microsoft Teams. Please join using the link provided in your university email. The lecture will be recorded and made available on the module page within 24 hours. All other sessions this week will proceed as normal in their usual rooms." },
  { title: "Assignment Feedback Released", date: "12 Apr 2026", module: "Web Development", tag: "new", body: "Feedback for the Web Development portfolio assignment is now available on the student portal. Please review your individual feedback carefully and note the areas for improvement highlighted by your lecturer. If you have questions about your grade or feedback, please book an office hours slot with Prof. James Chen. The feedback includes inline annotations on your submitted work." },
  { title: "Library Hours Extended", date: "10 Apr 2026", module: "General", tag: "", body: "The university library will extend its opening hours during the revision and exam period. From 21 April to 20 June, the library will be open from 7:00 AM to 10:00 PM on weekdays, and 9:00 AM to 8:00 PM on weekends. Additional study spaces will be available on the second floor. Please remember to bring your student ID for after-hours access." },
  { title: "Guest Lecture: UX in Industry", date: "8 Apr 2026", module: "Human Computer Interaction", tag: "important", body: "We are pleased to announce a guest lecture by a Senior UX Designer from Google. The talk will cover career paths in UX, the design process at large tech companies, and tips for building your portfolio. The session is open to all students and will take place in Lecture Theatre A on 22 April at 2:00 PM. No registration required." },
  { title: "Module Evaluation Open", date: "5 Apr 2026", module: "General", tag: "", body: "Module evaluations for the spring semester are now open. Your feedback is invaluable in helping us improve the quality of teaching and learning. Please take 5 minutes to complete the evaluation for each of your modules by 20 April. All responses are anonymous and will be reviewed by the department after the exam period." },
];

export default function AnnouncementDetail() {
  const { id } = useParams();
  const announcement = announcementsData[Number(id) || 0];

  return (
    <DashboardLayout>
      <Link to="/announcements" className="inline-flex items-center gap-1 text-sm text-secondary hover:underline mb-4">
        <ArrowLeft size={14} /> Back to Announcements
      </Link>

      <div className="max-w-3xl">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Megaphone size={22} className="text-secondary" /> {announcement.title}
          </h2>
          {announcement.tag && (
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
              announcement.tag === "important" ? "bg-destructive/10 text-destructive" : "bg-success/15 text-success"
            }`}>{announcement.tag}</span>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1"><Calendar size={14} /> {announcement.date}</span>
          <span>Module: {announcement.module}</span>
        </div>

        <article className="bg-card rounded-lg shadow-sm border p-6">
          <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">{announcement.body}</p>
        </article>
      </div>
    </DashboardLayout>
  );
}
