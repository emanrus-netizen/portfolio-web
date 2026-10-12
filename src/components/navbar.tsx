"use client"
import { useState } from "react"
import Link from "next/link";
import { Hamburger, X } from "lucide-react";

const navLinks = [
    {
        label: "Home", href: "/#home"
    },
    {
        label: "Projects", href: "/#projects"
    },
    {
        label: "About", href: "/#about"
    },
    {
        label: "Experience", href: "/#experience"
    }
]


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="border-b border-stone-300">
            <nav
                aria-label="Main Navigation"
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
            >
                <Link href={"/"}
                    className=""
                >
                    ER
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                    {
                        navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
                <button
                    type="button"
                    onClick={() => setIsOpen((previous) => !previous)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="rounded-md border border-[#C9C1B4] px-4 py-2 text-sm text-[#1B1B19] md:hidden"
                >
                    {isOpen ? <X /> : <Hamburger />}
                </button>
                {/* Contact button */}
                <a
                    href="mailto:mmanrusiana@gmail.com"
                    className="rounded-md bg-stone-900 px-5 py-2.5 text-sm text-white transition-colors hover:bg-stone-700"
                >
                    Contact ↗
                </a>
            </nav>
        </header>
    )
}