import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useParticipant } from './hooks/useParticipant';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MobileNav } from './components/layout/MobileNav';
import { ToastContainer } from './components/shared/Toast';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

const Echauffement = lazy(() => import('./pages/Echauffement').then(m => ({ default: m.Echauffement })));
const Sprint1 = lazy(() => import('./pages/Sprint1').then(m => ({ default: m.Sprint1 })));
const Sprint2 = lazy(() => import('./pages/Sprint2').then(m => ({ default: m.Sprint2 })));
const Sprint3 = lazy(() => import('./pages/Sprint3').then(m => ({ default: m.Sprint3 })));

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
        <main className="flex-1 p-4 sm:p-6 pb-28 lg:pb-6">
          <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="text-text-muted text-[14px] font-body">Chargement...</div></div>}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard onChangeMetier={logout} />} />
              <Route path="/echauffement" element={<Echauffement participantId={participant.id} />} />
              <Route path="/sprint-1" element={<Sprint1 participantId={participant.id} />} />
              <Route path="/sprint-2" element={<Sprint2 participantId={participant.id} />} />
              <Route path="/sprint-3" element={<Sprint3 participantId={participant.id} />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Suspense>
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
