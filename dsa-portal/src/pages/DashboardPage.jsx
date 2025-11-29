import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Target, CheckCircle, Flame, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { recentActivity, recommendedQuestions } from '../mockData';
import { useMockData } from '../context/MockDataContext';

const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
    <Card className="border-l-4" style={{ borderLeftColor: color }}>
        <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold">{value}</div>
                <span className="text-xs text-muted-foreground">{subtext}</span>
            </div>
        </CardContent>
    </Card>
);

const DashboardPage = () => {
    const { stats, topics } = useMockData();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline">Download Report</Button>
                    <Button variant="neon">Start Practice</Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Solved"
                    value={stats.totalQuestions}
                    subtext="+12 from last week"
                    icon={CheckCircle}
                    color="#10b981"
                />
                <StatCard
                    title="Accuracy"
                    value="78.5%"
                    subtext="+2.1% improvement"
                    icon={Target}
                    color="#3b82f6"
                />
                <StatCard
                    title="Current Streak"
                    value="12 Days"
                    subtext="Keep it up!"
                    icon={Flame}
                    color="#f59e0b"
                />
                <StatCard
                    title="Daily Goal"
                    value={`${stats.solvedToday} / ${stats.dailyGoal}`}
                    subtext="2 more to go"
                    icon={Activity}
                    color="#8b5cf6"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Activity Graph Placeholder */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Activity Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] w-full flex items-end justify-between gap-2 px-4">
                            {recentActivity.map((day, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 w-full group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${day.count * 10}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="w-full bg-primary/20 rounded-t-sm hover:bg-primary/50 transition-colors relative"
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            {day.count} Qs
                                        </div>
                                    </motion.div>
                                    <span className="text-xs text-muted-foreground">{day.date.split('-')[2]}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Weak Topics */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Topic Mastery</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {topics.map((topic) => (
                                <div key={topic.name} className="space-y-1">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">{topic.name}</span>
                                        <span className="text-muted-foreground">{topic.progress}%</span>
                                    </div>
                                    <Progress value={topic.progress} className="h-2" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recommended Questions */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Recommended for You</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recommendedQuestions.map((q) => (
                                <div key={q.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50 hover:bg-accent/50 transition-colors group cursor-pointer">
                                    <div className="space-y-1">
                                        <div className="font-medium group-hover:text-primary transition-colors">{q.title}</div>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span className={`px-2 py-0.5 rounded-full bg-secondary ${q.difficulty === 'Hard' ? 'text-red-400' :
                                                q.difficulty === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                                                }`}>
                                                {q.difficulty}
                                            </span>
                                            <span>{q.topic}</span>
                                            <span>• Acceptance: {q.acceptance}</span>
                                        </div>
                                    </div>
                                    <Button size="icon" variant="ghost">
                                        <ArrowUpRight size={18} />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions / Motivation */}
                <Card className="col-span-1 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20">
                    <CardHeader>
                        <CardTitle>Daily Challenge</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg bg-background/50 border border-white/5">
                            <h4 className="font-semibold mb-2">Reverse Nodes in k-Group</h4>
                            <div className="flex gap-2 mb-4">
                                <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">Hard</span>
                                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">+50 XP</span>
                            </div>
                            <Button className="w-full" variant="neon">Solve Now</Button>
                        </div>
                        <div className="text-xs text-center text-muted-foreground">
                            Time remaining: 04:23:12
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;
