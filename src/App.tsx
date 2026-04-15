import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import AssignmentDetail from "./pages/AssignmentDetail";
import Deadlines from "./pages/Deadlines";
import Timetable from "./pages/Timetable";
import CalendarSync from "./pages/CalendarSync";
import Announcements from "./pages/Announcements";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import Opportunities from "./pages/Opportunities";
import OpportunityDetail from "./pages/OpportunityDetail";
import AISuggestions from "./pages/AISuggestions";
import SettingsPage from "./pages/SettingsPage";
import AccessibilitySettings from "./pages/AccessibilitySettings";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/module/:slug" element={<ModuleDetail />} />
          <Route path="/assignment/:slug/:id" element={<AssignmentDetail />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/calendar-sync" element={<CalendarSync />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcement/:id" element={<AnnouncementDetail />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/opportunity/:id" element={<OpportunityDetail />} />
          <Route path="/ai-suggestions" element={<AISuggestions />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/accessibility-settings" element={<AccessibilitySettings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
