import Image from "next/image"

export default function Hero() {

    return (
        <section className="grid grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
            <div className="gap-1">
                <p className="text-lg leading-relaxed text-stone-600">FULL-STACK SOFTWARE DEVELOPER</p>
                <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">Good software solves real problems.</h1>
                <p className="text-xs font-semibold uppercase tracking-widest">I'm Emmanuel Rusiana building practical software for people and businesses.</p>
                <a href="#projects" className="rounded-lg bg-stone-900 px-6 py-3 text-white">Explore my work</a>
            </div>

            <div>
                {/* Your portrait */}
                <Image 
                className="rounded-lg object-cover"
                    src="/images/emmanuel.png"
                    alt="Portrait of Emmanuel"
                    width={600}
                    height={800}
                />
            </div>
        </section>
    )
}