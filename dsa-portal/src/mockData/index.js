// Mock Data for the DSA Analytics Portal

export const currentUser = {
  name: "Alex Coder",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  rank: 42,
  totalSolved: 345,
  accuracy: 78.5,
  streak: 12,
  xp: 15400,
};

export const stats = {
  dailyGoal: 5,
  solvedToday: 3,
  weakTopics: ["Dynamic Programming", "Graphs", "Bit Manipulation"],
  strongTopics: ["Arrays", "Strings", "Hash Maps"],
  totalQuestions: 1200,
};

export const recentActivity = [
  { date: "2023-10-25", count: 5 },
  { date: "2023-10-26", count: 8 },
  { date: "2023-10-27", count: 2 },
  { date: "2023-10-28", count: 10 },
  { date: "2023-10-29", count: 4 },
  { date: "2023-10-30", count: 7 },
  { date: "2023-10-31", count: 3 },
];

export const leaderboardData = [
  { rank: 1, name: "Sarah J.", score: 2500, solved: 500, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { rank: 2, name: "Mike T.", score: 2450, solved: 490, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
  { rank: 3, name: "Emma W.", score: 2300, solved: 460, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  { rank: 4, name: "James L.", score: 2100, solved: 420, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
  { rank: 5, name: "You", score: 1540, solved: 345, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", isCurrentUser: true },
];

export const recommendedQuestions = [
  { id: 1, title: "Merge K Sorted Lists", difficulty: "Hard", topic: "Heap", acceptance: "45%" },
  { id: 2, title: "Longest Palindromic Substring", difficulty: "Medium", topic: "DP", acceptance: "32%" },
  { id: 3, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack", acceptance: "80%" },
];

export const topics = [
  { name: "Arrays", progress: 85, total: 150 },
  { name: "DP", progress: 30, total: 120 },
  { name: "Graphs", progress: 45, total: 100 },
  { name: "Trees", progress: 60, total: 110 },
];
