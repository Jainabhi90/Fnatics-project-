import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { leaderboardData } from '../mockData';

const RankIcon = ({ rank }) => {
    if (rank === 1) return <Crown className="text-yellow-400" size={24} />;
    if (rank === 2) return <Medal className="text-gray-400" size={24} />;
    if (rank === 3) return <Medal className="text-amber-600" size={24} />;
    return <span className="text-muted-foreground font-bold w-6 text-center">{rank}</span>;
};

const LeaderboardPage = () => {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Global Leaderboard</h2>
                <p className="text-muted-foreground">See where you stand among the best developers.</p>
            </div>

            <Card className="overflow-hidden border-none bg-transparent shadow-none">
                <CardContent className="p-0 space-y-2">
                    {leaderboardData.map((user, index) => (
                        <motion.div
                            key={user.rank}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex items-center p-4 rounded-xl border transition-all hover:scale-[1.01] ${user.isCurrentUser
                                    ? 'bg-primary/10 border-primary/50 shadow-[0_0_15px_rgba(79,70,229,0.2)]'
                                    : 'bg-card/50 border-border hover:bg-card/80'
                                }`}
                        >
                            <div className="flex items-center justify-center w-12">
                                <RankIcon rank={user.rank} />
                            </div>

                            <div className="flex items-center gap-4 flex-1">
                                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border border-white/10" />
                                <div>
                                    <div className="font-semibold flex items-center gap-2">
                                        {user.name}
                                        {user.isCurrentUser && <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">You</span>}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{user.solved} questions solved</div>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="font-bold text-lg text-primary">{user.score}</div>
                                <div className="text-xs text-muted-foreground">Points</div>
                            </div>
                        </motion.div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default LeaderboardPage;
