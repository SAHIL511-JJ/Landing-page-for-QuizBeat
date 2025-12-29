"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Medical Student",
        university: "Stanford University",
        quote:
            "QuizBeat transformed how I study for exams. I uploaded my anatomy textbook and had 50 practice questions in seconds. My test scores improved by 20%!",
        rating: 5,
        avatar: "SC",
        color: "#6366F1",
    },
    {
        name: "Marcus Thompson",
        role: "Engineering Major",
        university: "MIT",
        quote:
            "The multiplayer mode is a game-changer. Study groups are actually fun now. We compete every week and everyone&apos;s grades have gone up.",
        rating: 5,
        avatar: "MT",
        color: "#EC4899",
    },
    {
        name: "Emily Rodriguez",
        role: "Pre-Law Student",
        university: "Harvard University",
        quote:
            "I was skeptical about AI-generated quizzes, but the quality is incredible. The explanations help me understand concepts I missed in class.",
        rating: 5,
        avatar: "ER",
        color: "#A855F7",
    },
    {
        name: "James Park",
        role: "Biology Major",
        university: "UCLA",
        quote:
            "Finally, a study tool that doesn&apos;t feel like work. QuizBeat makes learning addictive in the best way possible.",
        rating: 5,
        avatar: "JP",
        color: "#8B5CF6",
    },
    {
        name: "Priya Patel",
        role: "Computer Science",
        university: "UC Berkeley",
        quote:
            "The chapter selection feature is perfect for finals. I can focus on exactly what I need to study without wasting time.",
        rating: 5,
        avatar: "PP",
        color: "#F472B6",
    },
    {
        name: "Alex Kim",
        role: "High School Senior",
        university: "Prep School",
        quote:
            "Used QuizBeat to prep for SATs. The AI creates questions that are actually challenging. Got into my dream college!",
        rating: 5,
        avatar: "AK",
        color: "#FB7185",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1] rounded-full blur-[200px] opacity-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EC4899] rounded-full blur-[200px] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#6366F1]/10 text-[#6366F1] text-sm font-medium mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Loved by{" "}
                        <span className="gradient-text">Students Worldwide</span>
                    </h2>
                    <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                        Join thousands of students who are already studying smarter with
                        QuizBeat.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="glass-card p-6 h-full rounded-2xl hover:border-[#6366F1]/30 transition-all duration-300 relative overflow-hidden">
                                {/* Quote Icon */}
                                <Quote
                                    className="absolute top-4 right-4 w-8 h-8 text-white/5 group-hover:text-[#6366F1]/10 transition-colors"
                                />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-[#9CA3AF] leading-relaxed mb-6 text-sm">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                                        style={{ backgroundColor: testimonial.color }}
                                    >
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-[#9CA3AF] text-xs">
                                            {testimonial.role} • {testimonial.university}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Overall Rating */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-full">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-6 h-6 fill-yellow-500 text-yellow-500"
                                />
                            ))}
                        </div>
                        <div className="h-8 w-px bg-white/20" />
                        <div className="text-left">
                            <p className="text-white font-semibold">4.9 out of 5</p>
                            <p className="text-[#9CA3AF] text-sm">Based on 2,000+ reviews</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
