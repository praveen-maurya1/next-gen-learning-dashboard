"use client";

import { motion } from "framer-motion";
import {
    Rocket,
    Database,
    Network,
    Code2
} from "lucide-react";

const icons = {
    Rocket,
    Database,
    Network,
    Code2,
};

export default function CourseCard({ course }) {
    const Icon = icons[course.icon_name] || Code2;

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-blue-500 transition-all duration-300"        >
            <Icon size={32} className="mb-4 text-blue-400" />

            <h2 className="font-semibold mb-4">
                {course.title}
            </h2>

            <div className="w-full h-3 bg-zinc-700 rounded-full">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-3 bg-blue-500 rounded-full"
                />
            </div>

            <p className="mt-3 text-sm text-zinc-400">
                {course.progress}% Complete
            </p>
        </motion.div>
    );
}