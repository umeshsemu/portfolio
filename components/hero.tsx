import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
              Hi, I'm <span className="text-primary">Umesh V</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Aspiring full stack developer — 2025 engineering graduate from Ramaiah Institute of Technology, focused on MERN projects that blend solid fundamentals with practical problem solving.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
            <a
              href="/umesh_resume.pdf"
              download
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/umeshsemu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/umesh-v-791405274"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-3xl"></div>
            <img
              src="/umesh.jpeg"
              alt="Portfolio"
              className="relative w-full rounded-2xl shadow-2xl object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
