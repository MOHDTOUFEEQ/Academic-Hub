import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import Deadlines from "./pages/Deadlines";
import Timetable from "./pages/Timetable";
import Announcements from "./pages/Announcements";
import Opportunities from "./pages/Opportunities";
import AISuggestions from "./pages/AISuggestions";
import SettingsPage from "./pages/SettingsPage";
import Profile from "./pages/Profile";
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
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/ai-suggestions" element={<AISuggestions />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
