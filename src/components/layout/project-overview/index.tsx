import imageUrl from "@/assets/images/project_image.jpg";
import Project from "@/components/layout/project";
import { OpenSrcProject } from "@/types";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projects: OpenSrcProject[] = [
  {
    id: 1,
    category: "frontend",
    title: "Portfolio Website",
    description: "Diese Website",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],
    image: imageUrl,
    liveLink: "",
    githubLink: "https://github.com/manuel-pross/portfolio-website",
  },
  {
    id: 2,
    category: "frontend",
    title: "Pokemon Dashboard",
    description:
      "Dashboard mit Linking und Mapping zwischen den verschiedenen Diagrammen.",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "vite" },
      { id: 3, name: "Chart.js" },
    ],
    image: imageUrl,
    liveLink: "https://manuel-pross.github.io/dataVis_dashboard/",
    githubLink: "https://github.com/manuel-pross/dataVis_dashboard",
  },
  {
    id: 3,
    category: "frontend",
    title: "Game of Life",
    description: "Eine Rust und WebAssembly Implementation des Game of Life",
    stack: [
      { id: 1, name: "Rust" },
      { id: 2, name: "WebAssembly" },
    ],

    image: imageUrl,
    liveLink: "test",
    githubLink: "https://github.com/manuel-pross/game_of_life",
  },
  {
    id: 4,
    category: "frontend",
    title: "Custom Chrome Extension",
    description:
      "Eine Chrome Extension zum schnellen Zugriff auf Browser Bookmarks",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],

    image: imageUrl,
    liveLink: "",
    githubLink: "https://github.com/manuel-pross/new-tab-dashboard",
  },
];

function ProjectOverview() {
  return (
    <section id="projects">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        centeredSlides
        loop
        slidesPerView={1.2}
        navigation={{ enabled: false }}
        breakpoints={{
          1024: {
            slidesPerView: 1,
            spaceBetween: 24,
            navigation: { enabled: true },
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="relative !h-auto">
            <Project project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectOverview;
