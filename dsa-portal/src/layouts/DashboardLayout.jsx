import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Code2,
    Trophy,
    User,
    Menu,
    X,
    LogOut,
    ChevronRight,
    BookOpen,
    Globe
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { currentUser } from '../mockData';

const SidebarItem = ({ icon: Icon, label, path, isCollapsed }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Link to={path}>
            <div className={`flex items-center p-3 mb-2 rounded-lg transition-all duration-300 group
        ${isActive
                    ? 'bg-primary/10 text-primary border-r-2 border-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-white'
                }
      `}>
                <Icon size={20} className={`${isActive ? 'text-primary' : ''}`} />
                {!isCollapsed && (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="ml-3 font-medium whitespace-nowrap"
                    >
                        {label}
                    </motion.span>
                )}
                {isActive && !isCollapsed && (
                    <motion.div layoutId="active-pill" className="ml-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </motion.div>
                )}
            </div>
        </Link>
    );
};

const DashboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-background flex text-foreground overflow-hidden">
            {/* Sidebar */}
            <motion.aside
                initial={{ width: 240 }}
                animate={{ width: isCollapsed ? 80 : 240 }}
                className="h-screen border-r border-border bg-card/50 backdrop-blur-xl z-50 flex flex-col relative hidden md:flex"
            >
                {/* Logo Area */}
                <Link to="/" className="h-16 flex items-center justify-center border-b border-border/50 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                            <Code2 size={18} />
                        </div>
                        {!isCollapsed && <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">DSA.ai</span>}
                    </div>
                </Link>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-20 bg-card border border-border rounded-full p-1 text-muted-foreground hover:text-white transition-colors z-50 shadow-lg"
                >
                    {isCollapsed ? <ChevronRight size={14} /> : <Menu size={14} />}
                </button>

                {/* Navigation */}
                <nav className="flex-1 p-4 overflow-y-auto py-6">
                    <SidebarItem icon={LayoutDashboard} label="Dashboard" path="/dashboard" isCollapsed={isCollapsed} />
                    <SidebarItem icon={BookOpen} label="DSA Questions" path="/dsa-questions" isCollapsed={isCollapsed} />
                    <SidebarItem icon={Globe} label="LeetCode Practice" path="/leetcode-practice" isCollapsed={isCollapsed} />
                    <SidebarItem icon={Trophy} label="Leaderboard" path="/leaderboard" isCollapsed={isCollapsed} />
                    <SidebarItem icon={User} label="Profile" path="/profile" isCollapsed={isCollapsed} />
                </nav>

                {/* User Profile Snippet */}
                <div className="p-4 border-t border-border/50">
                    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
                        <img src={currentUser.avatar} alt="User" className="w-8 h-8 rounded-full border border-border" />
                        {!isCollapsed && (
                            <div className="flex flex-col overflow-hidden">
                                <span className="text-sm font-medium truncate">{currentUser.name}</span>
                                <span className="text-xs text-muted-foreground truncate">Rank #{currentUser.rank}</span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Top Navbar (Mobile mostly, but also search/actions) */}
                <header className="h-16 border-b border-border/50 bg-background/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon"><Menu /></Button>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-sm">
                        <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                        <span className="text-border">|</span>
                        <span className="text-muted-foreground">Welcome back, <span className="text-foreground font-medium">{currentUser.name}</span></span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="hidden sm:flex">Daily Challenge</Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive transition-colors">
                            <LogOut size={18} />
                        </Button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                    <Outlet />
                </div>

                {/* Background Gradients */}
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
