import React from 'react';
import { User, MapPin, Link as LinkIcon, Calendar, Github, Twitter, Linkedin, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { currentUser, topics } from '../mockData';

const ProfilePage = () => {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header Profile Card */}
            <Card className="overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600" />
                <CardContent className="relative pt-0">
                    <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-12 mb-6 px-4">
                        <img
                            src={currentUser.avatar}
                            alt="Profile"
                            className="w-32 h-32 rounded-2xl border-4 border-card bg-card shadow-xl"
                        />
                        <div className="flex-1 mb-2">
                            <h1 className="text-3xl font-bold">{currentUser.name}</h1>
                            <p className="text-muted-foreground">Full Stack Developer & DSA Enthusiast</p>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <Button variant="outline" size="sm"><Github size={16} className="mr-2" /> GitHub</Button>
                            <Button variant="outline" size="sm"><Linkedin size={16} className="mr-2" /> LinkedIn</Button>
                            <Button variant="neon" size="sm">Edit Profile</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin size={16} /> San Francisco, CA
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <LinkIcon size={16} /> <a href="#" className="hover:text-primary">alex.dev</a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar size={16} /> Joined March 2023
                            </div>
                        </div>

                        <div className="col-span-2 grid grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg bg-secondary/30 border border-border text-center">
                                <div className="text-2xl font-bold">{currentUser.totalSolved}</div>
                                <div className="text-xs text-muted-foreground">Solved</div>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/30 border border-border text-center">
                                <div className="text-2xl font-bold">{currentUser.rank}</div>
                                <div className="text-xs text-muted-foreground">Global Rank</div>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/30 border border-border text-center">
                                <div className="text-2xl font-bold">{currentUser.xp}</div>
                                <div className="text-xs text-muted-foreground">XP Earned</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Skills / Topics */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Topic Mastery</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {topics.map((topic) => (
                            <div key={topic.name} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium">{topic.name}</span>
                                    <span className="text-muted-foreground">{topic.progress}% ({Math.round(topic.total * topic.progress / 100)}/{topic.total})</span>
                                </div>
                                <Progress value={topic.progress} className="h-2" />
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Badges / Achievements */}
                <Card>
                    <CardHeader>
                        <CardTitle>Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="aspect-square rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group relative">
                                    <Trophy size={24} className={i <= 3 ? "text-yellow-400" : "text-gray-600"} />
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                                        {i <= 3 ? "Master Solver" : "Locked"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;
