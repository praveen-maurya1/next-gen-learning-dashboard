"use client";

import {
    House,
    BookOpen,
    BarChart3,
    Settings
} from "lucide-react";

export default function MobileNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 lg:hidden bg-zinc-900 border-t border-zinc-800 flex justify-around py-3">
            <House size={22} />
            <BookOpen size={22} />
            <BarChart3 size={22} />
            <Settings size={22} />
        </nav>
    );
}