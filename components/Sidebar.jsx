"use client";

import { motion } from "framer-motion";
import { House, BookOpen, BarChart3, Settings } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const [active, setActive] = useState("Home");

    const items = [
        { name: "Home", icon: House },
        { name: "Courses", icon: BookOpen },
        { name: "Analytics", icon: BarChart3 },
        { name: "Settings", icon: Settings },
    ];

    return (
        <aside className="hidden lg:block bg-zinc-900 rounded-3xl p-6">
            <h2 className="text-xl font-bold mb-6">
                Dashboard
            </h2>

            <nav className="space-y-2">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            whileHover={{ x: 5 }}
                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${active === item.name
                                ? "bg-zinc-800"
                                : ""
                                }`}
                        >
                            <Icon size={18} />
                            <span>{item.name}</span>
                        </motion.div>
                    );
                })}
            </nav>
        </aside>
    );
}