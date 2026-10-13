"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    },
    {
        label: "Contact", href: "/#contact"
    }
]


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false)
                menuButtonRef.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)

        }
    }, [isOpen])
    return (
        <header className="sticky top-0 z-50 border-b border-[#C9C1B4] bg-[#F2EDE2]/95 backdrop-blur-md">
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
                    ref={menuButtonRef}
                    onClick={() => setIsOpen((previous) => !previous)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="rounded-md border border-[#C9C1B4] px-4 py-2 text-sm text-[#1B1B19] md:hidden"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
                {/* Contact button */}
                <a
                    href="mailto:mmanrusiana@gmail.com"
                    className="hidden rounded-md bg-[#1B1B19] px-5 py-2.5 text-sm text-white transition-colors hover:bg-[#38332E] md:inline-flex"
                >
                    Contact ↗
                </a>
            </nav>
            {/* Mobile navigation */}
            {isOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile navigation"
                    className="border-t border-[#C9C1B4] bg-[#F2EDE2] px-6 py-6 md:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-2">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="border-b border-[#C9C1B4] py-4 font-serif text-2xl text-[#1B1B19] transition-colors hover:text-[#AD583B]"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <a
                            href="mailto:mmanrusiana@gmail.com"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 inline-flex justify-center rounded-md bg-[#1B1B19] px-6 py-3 text-sm font-medium text-white"
                        >
                            Get In Touch ↗
                        </a>
                    </div>
                </nav>
            )}
        </header>
    )
}