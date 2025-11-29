import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import DSAQuestionsPage from './pages/DSAQuestionsPage';
import LeetCodePracticePage from './pages/LeetCodePracticePage';
import { MockDataProvider } from './context/MockDataContext';

function App() {
  return (
    <Router>
      <MockDataProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dsa-questions" element={<DSAQuestionsPage />} />
            <Route path="/leetcode-practice" element={<LeetCodePracticePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MockDataProvider>
    </Router>
  );
}

export default App;
