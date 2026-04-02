import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useParticipant } from './hooks/useParticipant';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { ToastContainer } from './components/shared/Toast';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Echauffement } from './pages/Echauffement';
import { Sprint1 } from './pages/Sprint1';
import { Sprint2 } from './pages/Sprint2';
import { Sprint3 } from './pages/Sprint3';
import { Formateur } from './pages/Formateur';

function AppContent() {
  const { participant, loading, login, logout } = useParticipant();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-app flex items-center justify-center">
        <div className="text-text-muted text-[14px] font-body">Chargement...</div>
      </div>
    );
  }

  if (!participant) {
    return <Login onLogin={login} loading={loading} />;
  }

  return (
    <div className="min-h-screen bg-surface-app">
      <Header metier={participant.metier} onLogout={logout} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 pb-20 lg:pb-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard onChangeMetier={logout} />} />
            <Route path="/echauffement" element={<Echauffement participantId={participant.id} metier={participant.metier} />} />
            <Route path="/sprint-1" element={<Sprint1 participantId={participant.id} metier={participant.metier} />} />
            <Route path="/sprint-2" element={<Sprint2 participantId={participant.id} metier={participant.metier} />} />
            <Route path="/sprint-3" element={<Sprint3 participantId={participant.id} metier={participant.metier} />} />
            <Route path="/formateur" element={<Formateur />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
      <MobileNav />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/canal-tp-companion">
      <AppContent />
    </BrowserRouter>
  );
}
