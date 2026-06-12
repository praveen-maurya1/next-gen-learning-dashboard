"use client";

import { motion } from "framer-motion";

export default function DashboardContent({ children }) {
    return (
        <motion.div
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
            initial="hidden"
            animate="show"
            className="grid gap-6"
        >
            {children}
        </motion.div>
    );
}