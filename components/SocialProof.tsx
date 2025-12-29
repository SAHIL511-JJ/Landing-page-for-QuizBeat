"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Star } from "lucide-react";

const stats = [
    { icon: Users, value: "50,000+", label: "Students Learning" },
    { icon: BookOpen, value: "10,000+", label: "Quizzes Generated" },
    { icon: Trophy, value: "99%", label: "Success Rate" },
    { icon: Star, value: "4.9/5", label: "User Rating" },
];

export default function SocialProof() {
    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EC4899]/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Trust Badge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-[#9CA3AF] text-sm mb-12"
                >
                    Trusted by students from leading universities worldwide
                </motion.p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-[#6366F1]/20 to-[#EC4899]/20 mb-4 group-hover:from-[#6366F1]/30 group-hover:to-[#EC4899]/30 transition-colors"
                                >
                                    <IconComponent className="w-7 h-7 text-[#6366F1]" />
                                </motion.div>
                                <motion.h3
                                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                                >
                                    {stat.value}
                                </motion.h3>
                                <p className="text-[#9CA3AF] text-sm">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* University Logos Placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50"
                >
                    {["MIT", "Stanford", "Harvard", "Oxford", "Cambridge"].map((uni, index) => (
                        <motion.div
                            key={uni}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="text-xl font-bold text-[#9CA3AF]/50 hover:text-[#9CA3AF] transition-colors cursor-default"
                        >
                            {uni}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
