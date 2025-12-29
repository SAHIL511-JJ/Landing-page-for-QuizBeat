"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1] rounded-full blur-[128px] opacity-30"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EC4899] rounded-full blur-[128px] opacity-20"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                >
                    <Sparkles className="w-4 h-4 text-[#EC4899]" />
                    <span className="text-sm text-[#9CA3AF]">Powered by Llama 70B AI</span>
                    <Zap className="w-4 h-4 text-[#6366F1]" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    Turn Any Textbook Into
                    <br />
                    <span className="gradient-text">an Interactive Quiz</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10"
                >
                    Upload your study materials, let AI create quizzes, and compete with
                    friends in real-time. Learning has never been this fun.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-xl font-semibold text-white shadow-lg shadow-[#6366F1]/25 glow-hover flex items-center gap-2"
                    >
                        Get Started Free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 glass-card rounded-xl font-semibold text-white flex items-center gap-2 hover:bg-white/5 transition-colors"
                    >
                        <Play className="w-5 h-5" />
                        Watch Demo
                    </motion.button>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 relative"
                >
                    {/* App Mockup */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="glass-card p-2 rounded-2xl glow-hover">
                            <div className="bg-[#1A1A2E] rounded-xl overflow-hidden">
                                {/* Browser Header */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-[#0F0F1A] rounded-lg px-4 py-1 text-sm text-[#9CA3AF] text-center">
                                            quizbeat.app
                                        </div>
                                    </div>
                                </div>

                                {/* App Content Preview */}
                                <div className="p-8 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#EC4899] flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white">Biology 101 Quiz</h3>
                                                <p className="text-sm text-[#9CA3AF]">15 Questions • Medium</p>
                                            </div>
                                        </div>
                                        <div className="px-4 py-2 bg-[#6366F1]/20 rounded-lg text-[#6366F1] text-sm font-medium">
                                            Live Game
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.8 + i * 0.1 }}
                                                className="p-4 rounded-xl bg-[#0F0F1A] border border-white/5 hover:border-[#6366F1]/50 transition-colors cursor-pointer"
                                            >
                                                <div className="h-3 w-3/4 bg-[#2A2A4E] rounded mb-2" />
                                                <div className="h-3 w-1/2 bg-[#2A2A4E] rounded" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 glass-card p-4 rounded-xl hidden md:block"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">
                                    98%
                                </div>
                                <span className="text-sm text-white font-medium">Accuracy</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -left-6 glass-card p-4 rounded-xl hidden md:block"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#EC4899] flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm text-white font-medium">AI Generated</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-animation"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-[#6366F1]/50 flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
