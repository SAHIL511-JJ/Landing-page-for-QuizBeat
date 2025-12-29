"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, CheckCircle } from "lucide-react";

export default function CTA() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#6366F1]/10 via-[#A855F7]/10 to-[#EC4899]/10 blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Main CTA Card */}
                    <div className="glass-card p-8 md:p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden">
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] opacity-30" />

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-[#6366F1]/20 hidden md:flex items-center justify-center"
                        >
                            <Sparkles className="w-8 h-8 text-[#6366F1]" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute bottom-8 right-8 w-16 h-16 rounded-2xl bg-[#EC4899]/20 hidden md:flex items-center justify-center"
                        >
                            <Sparkles className="w-8 h-8 text-[#EC4899]" />
                        </motion.div>

                        {/* Content */}
                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6"
                            >
                                <Sparkles className="w-4 h-4 text-[#EC4899]" />
                                <span className="text-sm text-white">Start Learning Today</span>
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Transform
                                <br />
                                <span className="gradient-text">Your Study Sessions?</span>
                            </h2>

                            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto mb-10">
                                Join 50,000+ students who are already studying smarter with
                                AI-powered quizzes. Get started free today.
                            </p>

                            {/* Email Form */}
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="flex-1 relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full pl-12 pr-4 py-4 bg-[#0F0F1A] border border-white/10 rounded-xl text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#6366F1] transition-colors"
                                            required
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`px-8 py-4 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${isSubmitted
                                                ? "bg-green-500"
                                                : "bg-gradient-to-r from-[#6366F1] to-[#EC4899] shadow-[#6366F1]/25"
                                            }`}
                                    >
                                        {isSubmitted ? (
                                            <>
                                                <CheckCircle className="w-5 h-5" />
                                                <span>Subscribed!</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Get Started</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>

                            {/* Trust badges */}
                            <div className="flex flex-wrap items-center justify-center gap-6 text-[#9CA3AF] text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Free forever plan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
