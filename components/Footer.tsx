"use client";

import { motion } from "framer-motion";
import { Zap, Twitter, Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
    product: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#" },
        { name: "API", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
    ],
    resources: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Status", href: "#" },
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Licenses", href: "#" },
    ],
};

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 border-t border-white/5">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6366F1] rounded-full blur-[200px] opacity-5" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EC4899] rounded-full blur-[200px] opacity-5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#EC4899] flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-white">QuizBeat</span>
                            </Link>
                            <p className="text-[#9CA3AF] text-sm mb-6 max-w-xs">
                                Transform any textbook into interactive quizzes with AI. Study smarter, compete with friends, and ace your exams.
                            </p>
                            <div className="space-y-3 text-sm text-[#9CA3AF]">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>hello@quizbeat.app</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <h4 className="text-white font-semibold mb-4 capitalize">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#9CA3AF] text-sm"
                        >
                            © {new Date().getFullYear()} QuizBeat. All rights reserved.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </motion.div>

                        {/* App Store Badges (Placeholder) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="px-4 py-2 rounded-lg bg-white/5 text-[#9CA3AF] text-xs flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                                <span>🍎</span>
                                <span>App Store</span>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-white/5 text-[#9CA3AF] text-xs flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
                                <span>▶️</span>
                                <span>Google Play</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
