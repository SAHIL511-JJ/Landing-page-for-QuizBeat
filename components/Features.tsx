"use client";

import { motion } from "framer-motion";
import {
    Brain,
    BarChart3,
    BookMarked,
    Gamepad2,
    CheckCircle2,
    Shield,
} from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI Quiz Generation",
        description:
            "Upload any textbook, PDF, or notes. Our Llama 70B AI instantly creates comprehensive quizzes tailored to your content.",
        color: "#6366F1",
    },
    {
        icon: BarChart3,
        title: "Smart Difficulty",
        description:
            "Choose Easy, Medium, or Hard. The AI adapts question complexity to match your learning level.",
        color: "#8B5CF6",
    },
    {
        icon: BookMarked,
        title: "Chapter Selection",
        description:
            "Focus on specific chapters or topics. Study exactly what you need for your next exam.",
        color: "#A855F7",
    },
    {
        icon: Gamepad2,
        title: "Multiplayer Mode",
        description:
            "Challenge friends in Kahoot-style competitions. Real-time leaderboards make studying exciting.",
        color: "#EC4899",
    },
    {
        icon: CheckCircle2,
        title: "Instant Explanations",
        description:
            "Learn from every answer with AI-generated explanations. Understand why you got it right or wrong.",
        color: "#F472B6",
    },
    {
        icon: Shield,
        title: "Secure Sign-In",
        description:
            "One-click Google authentication. Your data is encrypted and your privacy is protected.",
        color: "#FB7185",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Features() {
    return (
        <section id="features" className="relative py-24">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366F1] rounded-full blur-[200px] opacity-5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-[#6366F1]/10 text-[#6366F1] text-sm font-medium mb-4"
                    >
                        Features
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Everything You Need to{" "}
                        <span className="gradient-text">Study Smarter</span>
                    </h2>
                    <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                        Powerful AI tools designed to transform how you learn, study, and
                        compete with friends.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className="group relative"
                            >
                                <div className="glass-card p-8 h-full rounded-2xl border border-white/5 hover:border-[#6366F1]/30 transition-all duration-300 glow-hover">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                        style={{ backgroundColor: `${feature.color}20` }}
                                    >
                                        <IconComponent
                                            className="w-7 h-7"
                                            style={{ color: feature.color }}
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#6366F1] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#9CA3AF] leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Hover gradient border effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/0 to-[#EC4899]/0 group-hover:from-[#6366F1]/10 group-hover:via-transparent group-hover:to-[#EC4899]/10 transition-all duration-500 pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
