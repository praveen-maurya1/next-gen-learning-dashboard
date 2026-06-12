"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
            }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-6 border border-zinc-800"
        >
            <h1 className="text-3xl font-bold">
                Welcome Back, Praveen 👋
            </h1>

            <p className="text-zinc-400 mt-2">
                Keep your learning streak alive today.
            </p>
        </motion.div>
    );
}