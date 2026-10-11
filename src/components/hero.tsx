import Image from "next/image"

export default function Hero() {

    return (
        <section id="home" className="grid grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
            <div className="flex flex-col gap-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-800">
                    Full-Stack Software Developer
                </p>
                <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">Good software solves real problems.</h1>
                <p className="text-lg leading-relaxed text-stone-600">
                    I'm Emmanuel Rusiana, building practical software
                    for people and businesses.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                    <a
                        href="#projects"
                        className="rounded-lg bg-stone-900 px-6 py-3 text-white inline-flex items-center justify-center"
                    >
                        Explore my work ↗
                    </a>
                    <a href="mailto:mmanrusiana@gmail.com"
                        className="rounded-lg px-6 py-3 text-black inline-flex items-center justify-center border"
                    >
                        Contact Me ↗
                    </a>

                </div>

            </div>

            <div>
                {/* Your portrait */}
                <Image
                    className="h-auto w-full rounded-lg object-cover"
                    src="/images/emmanuel.png"
                    alt="Portrait of Emmanuel"
                    width={600}
                    height={800}
                />
            </div>
        </section>
    )
}