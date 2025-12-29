"use client";

import { motion } from "framer-motion";
import { Zap, Users, Clock, Sparkles, CheckCircle } from "lucide-react";

export default function ProductShowcase() {
    return (
        <section id="showcase" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#6366F1]/10 to-[#EC4899]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#A855F7]/10 text-[#A855F7] text-sm font-medium mb-4">
                        See It In Action
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Experience the{" "}
                        <span className="gradient-text">Future of Studying</span>
                    </h2>
                    <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                        A beautiful, intuitive interface that makes learning engaging and
                        effective.
                    </p>
                </motion.div>

                {/* Main Showcase */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - App Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="glass-card p-3 rounded-3xl glow-hover">
                            <div className="bg-[#1A1A2E] rounded-2xl overflow-hidden">
                                {/* App Header */}
                                <div className="bg-gradient-to-r from-[#6366F1] to-[#EC4899] p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                                <Zap className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white">Live Quiz Battle</h4>
                                                <p className="text-white/70 text-sm">Chemistry Finals</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-white/70" />
                                            <span className="text-white/70 text-sm">24 players</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quiz Content */}
                                <div className="p-6 space-y-6">
                                    {/* Timer */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-[#9CA3AF]">
                                            <Clock className="w-4 h-4" />
                                            <span>Question 7 of 15</span>
                                        </div>
                                        <div className="px-4 py-2 bg-[#6366F1]/20 rounded-lg">
                                            <span className="text-[#6366F1] font-mono font-bold">00:15</span>
                                        </div>
                                    </div>

                                    {/* Question */}
                                    <div className="bg-[#0F0F1A] rounded-xl p-6">
                                        <p className="text-lg text-white leading-relaxed">
                                            What is the molecular formula for glucose?
                                        </p>
                                    </div>

                                    {/* Answer Options */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { text: "C₆H₁₂O₆", correct: true },
                                            { text: "C₆H₁₀O₆", correct: false },
                                            { text: "C₅H₁₂O₆", correct: false },
                                            { text: "C₆H₁₂O₅", correct: false },
                                        ].map((option, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={`p-4 rounded-xl cursor-pointer transition-all ${option.correct
                                                        ? "bg-green-500/20 border-2 border-green-500"
                                                        : "bg-[#0F0F1A] border border-white/10 hover:border-[#6366F1]/50"
                                                    }`}
                                            >
                                                <span className={option.correct ? "text-green-400" : "text-white"}>
                                                    {option.text}
                                                </span>
                                                {option.correct && (
                                                    <CheckCircle className="w-4 h-4 text-green-400 inline ml-2" />
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Leaderboard Preview */}
                                    <div className="bg-[#0F0F1A] rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[#9CA3AF] text-sm">Live Leaderboard</span>
                                            <Sparkles className="w-4 h-4 text-[#EC4899]" />
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { name: "Sarah K.", score: 4850, pos: 1 },
                                                { name: "You", score: 4720, pos: 2 },
                                                { name: "Mike R.", score: 4500, pos: 3 },
                                            ].map((player, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex items-center justify-between p-2 rounded-lg ${player.name === "You"
                                                            ? "bg-[#6366F1]/20 border border-[#6366F1]/30"
                                                            : ""
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span
                                                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 0
                                                                    ? "bg-yellow-500 text-black"
                                                                    : i === 1
                                                                        ? "bg-gray-400 text-black"
                                                                        : "bg-amber-700 text-white"
                                                                }`}
                                                        >
                                                            {player.pos}
                                                        </span>
                                                        <span className="text-white text-sm">{player.name}</span>
                                                    </div>
                                                    <span className="text-[#6366F1] font-mono text-sm">
                                                        {player.score}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating notification */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-4 -right-4 glass-card p-4 rounded-xl hidden md:flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-white font-medium">Correct!</p>
                                <p className="text-xs text-[#9CA3AF]">+500 points</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Features List */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Real-Time Multiplayer Battles
                            </h3>
                            <p className="text-[#9CA3AF] text-lg leading-relaxed">
                                Challenge classmates to live quiz competitions. See scores update in
                                real-time, climb the leaderboard, and make studying a social
                                experience.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Live leaderboards with instant updates",
                                "Invite friends with shareable game codes",
                                "Compete for weekly and monthly rankings",
                                "AI-powered fair matchmaking",
                                "Voice chat for team quizzes",
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[#9CA3AF]">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 glass-card rounded-xl font-semibold text-white hover:bg-white/5 transition-colors inline-flex items-center gap-2"
                        >
                            <Users className="w-5 h-5" />
                            Join a Game
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
