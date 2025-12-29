"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What file types can I upload?",
        answer:
            "QuizBeat supports PDF, Word documents (.doc, .docx), plain text files (.txt), and even images of textbook pages. Our AI can extract and understand content from all these formats to generate comprehensive quizzes.",
    },
    {
        question: "How accurate is the AI quiz generation?",
        answer:
            "Our Llama 70B AI model is trained on millions of educational materials and achieves 95%+ accuracy in generating relevant, well-formed questions. Every quiz is designed to test actual understanding, not just memorization.",
    },
    {
        question: "Can I create private games for my study group?",
        answer:
            "Absolutely! You can create private game rooms with custom invite codes. Only people with the code can join. Perfect for study groups, classrooms, or friendly competitions.",
    },
    {
        question: "Is my uploaded content secure and private?",
        answer:
            "Yes, security is our top priority. All uploads are encrypted, processed securely, and never shared. You can delete your content at any time. We're GDPR and FERPA compliant.",
    },
    {
        question: "Is QuizBeat free to use?",
        answer:
            "QuizBeat offers a generous free tier with up to 10 quizzes per month and unlimited multiplayer games. Premium plans unlock unlimited quiz generation, advanced analytics, and priority AI processing.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-24">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A855F7] rounded-full blur-[200px] opacity-5" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#EC4899]/10 text-[#EC4899] text-sm font-medium mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Frequently Asked{" "}
                        <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
                        Everything you need to know about QuizBeat. Can&apos;t find the answer
                        you&apos;re looking for? Reach out to our support team.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div
                                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "border-[#6366F1]/30"
                                        : "hover:border-white/20"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${openIndex === index
                                                    ? "bg-[#6366F1]"
                                                    : "bg-[#6366F1]/20"
                                                }`}
                                        >
                                            <HelpCircle
                                                className={`w-5 h-5 ${openIndex === index
                                                        ? "text-white"
                                                        : "text-[#6366F1]"
                                                    }`}
                                            />
                                        </div>
                                        <span className="font-semibold text-white pr-4">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-[#9CA3AF] flex-shrink-0" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-6 pb-5 pl-20">
                                                <p className="text-[#9CA3AF] leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#9CA3AF] mb-4">Still have questions?</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 glass-card rounded-xl font-semibold text-white hover:bg-white/5 transition-colors"
                    >
                        Contact Support
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
