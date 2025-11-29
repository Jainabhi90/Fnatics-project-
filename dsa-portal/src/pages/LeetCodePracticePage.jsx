import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Circle, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useMockData } from '../context/MockDataContext';

const LeetCodePracticePage = () => {
    const { leetCodeQuestions, toggleLeetCodeStatus } = useMockData();

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">LeetCode Recommendations</h2>
                <p className="text-muted-foreground">AI-curated problems based on your recent performance.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {leetCodeQuestions.map((question, index) => (
                    <motion.div
                        key={question.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={`h-full flex flex-col transition-all hover:shadow-lg hover:border-primary/30 ${question.status === 'completed' ? 'opacity-75' : ''}`}>
                            <CardContent className="p-6 flex-1 flex flex-col gap-4">

                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-lg flex items-center gap-2">
                                            {question.title}
                                            {question.status === 'completed' && <CheckCircle2 size={16} className="text-green-500" />}
                                        </h3>
                                        <div className="flex gap-2 text-xs">
                                            <span className={`px-2 py-0.5 rounded border ${question.difficulty === 'Hard' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                    question.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                                        'bg-green-500/10 text-green-400 border-green-500/20'
                                                }`}>
                                                {question.difficulty}
                                            </span>
                                            <span className="px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                                                Acceptance: {question.acceptance}
                                            </span>
                                        </div>
                                    </div>
                                    <a href={question.link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                                            <ExternalLink size={18} />
                                        </Button>
                                    </a>
                                </div>

                                <div className="p-3 rounded-lg bg-secondary/30 border border-border/50 text-sm">
                                    <div className="flex items-center gap-2 text-indigo-400 mb-1 font-medium">
                                        <Zap size={14} /> Why Recommended?
                                    </div>
                                    <p className="text-muted-foreground">{question.reason}</p>
                                </div>

                                <div className="mt-auto pt-4">
                                    <Button
                                        variant={question.status === 'completed' ? "outline" : "default"}
                                        className="w-full"
                                        onClick={() => toggleLeetCodeStatus(question.id)}
                                    >
                                        {question.status === 'completed' ? "Mark as Pending" : "Mark as Done"}
                                    </Button>
                                </div>

                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default LeetCodePracticePage;
