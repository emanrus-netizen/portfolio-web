
import Link from "next/link";
export default function NavBar() {

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
                    <Link href={"/#home"}>Home</Link>
                    <Link href={"/#about"}>About</Link>
                    <Link href={"/#projects"}>Projects</Link>
                    <Link href={"/#skills"}>Skills</Link>
                </div>
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