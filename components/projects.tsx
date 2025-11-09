'use client'

import * as React from "react"
import { ExternalLink, Github } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ProjectMedia = {
  type: "image" | "video"
  src: string
  alt?: string
  poster?: string
}

type Project = {
  title: string
  description: string[]
  tags: string[]
  links: {
    github: string
    demo: string
  }
  media: ProjectMedia[]
}

const PROJECTS: Project[] = [
  {
    title: "HABITUNE",
    description: [
      "Seamless property search experience built with MongoDB, Express, React, and Node.",
      "Enables users to discover properties for rent, lease, and sale with tailored filters.",
      "Interactive map navigation spotlights listings alongside nearby amenities.",
      "AI-powered chat surfaces neighborhood insights, from geography quirks to safety signals.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    links: {
      github: "https://github.com/umeshsemu/habituneFrontend",
      demo: "https://habitune-frontend.vercel.app",
    },
    media: [
      {
        type: "image",
        src: "/habituneImg.png",
        alt: "Habitune dashboard screenshot",
      },
      {
        type: "video",
        src: "/Habitune.mp4",
        poster: "/HabituneImg.png",
      },
    ],
  },
  {
    title: "DIGIHEALTH",
    description: [
      "Online vault that keeps every healthcare document organized, searchable, and always available.",
      "AI assistance highlights key medical insights across uploaded records for quick understanding.",
      "Built with privacy first safeguards so each user’s sensitive health data stays encrypted and personal.",
    ],
    tags: ["FastAPI", "PostgreSQL", "JavaScript", "HTML", "CSS", "Python"],
    links: {
      github: "https://github.com/umeshsemu/digihealth",
      demo: "https://digihealth-wnpg.onrender.com",
    },
    media: [
      {
        type: "image",
        src: "/digihealthImg.png",
        alt: "Digihealth dashboard screenshot",
      },
      {
        type: "video",
        src: "/Digihealth.mp4",
        poster: "/digihealthImg.png",
      },
    ],
  },
]

function ProjectMediaCarousel({ media }: { media: ProjectMedia[] }) {
  const slides = React.useMemo(
    () =>
      media && media.length > 0
        ? media
        : [
            {
              type: "image",
              src: "/placeholder.svg",
              alt: "Project media placeholder",
            } satisfies ProjectMedia,
          ],
    [media],
  )

  return (
    <div className="relative">
      <Carousel className="relative">
        <CarouselContent className="-ml-0">
          {slides.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative h-64 overflow-hidden rounded-none bg-muted">
                {item.type === "image" ? (
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <img
                      src={item.src}
                      alt={item.alt ?? ""}
                      className="h-full w-full object-cover"
                    />
                  </a>
                ) : (
                  <video
                    src={item.src}
                    controls
                    preload="metadata"
                    poster={item.poster}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {slides.length > 1 ? (
          <>
            <CarouselPrevious className="-left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/80 shadow ring-1 ring-border hover:bg-background" />
            <CarouselNext className="-right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/80 shadow ring-1 ring-border hover:bg-background" />
          </>
        ) : null}
      </Carousel>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Showcasing my best work in web development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Project Media */}
              <ProjectMediaCarousel media={project.media} />

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {project.description.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                      <span className="mt-1 inline-block size-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
