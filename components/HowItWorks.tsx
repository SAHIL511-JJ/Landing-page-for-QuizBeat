"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, Trophy, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Upload,
        title: "Upload Your Materials",
        description:
            "Drag and drop your textbook, PDF, Word doc, or text file. We support all major formats.",
        color: "#6366F1",
        gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
        number: "02",
        icon: Sparkles,
        title: "AI Generates Quiz",
        description:
            "Llama 70B AI analyzes your content and creates comprehensive, relevant quiz questions in seconds.",
        color: "#A855F7",
        gradient: "from-[#A855F7] to-[#EC4899]",
    },
    {
        number: "03",
        icon: Trophy,
        title: "Compete & Learn",
        description:
            "Take the quiz solo or challenge friends to a real-time multiplayer battle. Learning made fun!",
        color: "#EC4899",
        gradient: "from-[#EC4899] to-[#FB7185]",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366F1] rounded-full blur-[200px] opacity-10" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EC4899] rounded-full blur-[200px] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-[#EC4899]/10 text-[#EC4899] text-sm font-medium mb-4"
                    >
                        How It Works
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Three Simple Steps to{" "}
                        <span className="gradient-text">Smarter Studying</span>
                    </h2>
                    <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                        From textbook to interactive quiz in under a minute. It&apos;s that easy.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection line - desktop only */}
                    <div className="hidden lg:block absolute top-1/2 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 -translate-y-1/2">
                        <div className="w-full h-full bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] opacity-30" />
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] origin-left"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden group hover:border-white/20 transition-colors">
                                        {/* Step number background */}
                                        <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 select-none">
                                            {step.number}
                                        </div>

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-6 relative z-10`}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#9CA3AF] leading-relaxed relative z-10">
                                            {step.description}
                                        </p>

                                        {/* Arrow for mobile */}
                                        {index < steps.length - 1 && (
                                            <div className="lg:hidden flex justify-center mt-6">
                                                <motion.div
                                                    animate={{ y: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <ArrowRight className="w-6 h-6 text-[#6366F1] rotate-90" />
                                                </motion.div>
                                            </div>
                                        )}

                                        {/* Hover effect */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-5 rounded-2xl`}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-xl font-semibold text-white shadow-lg shadow-[#6366F1]/25 glow-hover inline-flex items-center gap-2"
                    >
                        Start Creating Quizzes
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
