import Image from "next/image";

export default function ProjectBlock({ projects }) {
  return (
    projects && (
      <div id="projects">
        {projects.map((project) => (
          <div className="h-full relative">
            <Image
              src={`/images/projects/${project.id}/1.jpg`}
              width={1920}
              height={1080}
            />
            <div className="absolute top-0 left-0 w-[70%] lg:w-[30%] h-full bg-black bg-opacity-30 hover:bg-opacity-50">
              <div className="flex flex-col justify-center h-full text-white p-2 lg:p-10 lg:gap-8">
                {/* <h2 className="text-sm lg:text-5xl font-bold">
                  Projet: {project.id}
                </h2> */}
                <h1 className="text-sm lg:text-5xl font-bold">
                  {project.title}
                </h1>
                <p className="text-xs lg:text-3xl">{project.shortDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
