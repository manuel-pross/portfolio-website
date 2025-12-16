import imageUrl from "@/assets/images/project_image.jpg";
import Project from "@/components/layout/project";
import { OpenSrcProject } from "@/types";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projects: OpenSrcProject[] = [
  {
    id: 1,
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],
    image: imageUrl,
    liveLink: "test",
    githubLink: "test",
  },
  {
    id: 2,
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],
    image: imageUrl,
    liveLink: "test",
    githubLink: "test",
  },
  {
    id: 3,
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],

    image: imageUrl,
    liveLink: "test",
    githubLink: "test",
  },
  {
    id: 4,
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],

    image: imageUrl,
    liveLink: "test",
    githubLink: "test",
  },
  {
    id: 5,
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    stack: [
      { id: 1, name: "react" },
      { id: 2, name: "tailwind" },
      { id: 3, name: "vite" },
    ],

    image: imageUrl,
    liveLink: "test",
    githubLink: "test",
  },
];

function ProjectOverview() {
  return (
    <section>
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
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log("slide change")}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Project project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectOverview;
