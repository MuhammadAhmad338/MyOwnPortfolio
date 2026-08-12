"use client"
import { useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "@/app/data/projects";

const AllProjects = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const router = useRouter();

  return (
    <div
      className={`${darkMode ? "bg-zinc-900 text-white" : "bg-gray-100 text-gray-800"
        } p-2.5 sm:p-4 mt-4 rounded-xl`}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-sm sm:text-lg font-medium">Projects</span>

        <div
          onClick={() => router.push("/projects")}
          className="text-sm cursor-pointer"
        >
          View All
        </div>
      </div>

      {projects.map((project) => {
        const Icon = project.icon;

        return (
          <div
            key={project.name}
            onClick={() => router.push(project.route)}
            className={`${darkMode ? "bg-zinc-800" : "bg-white"
              } rounded-xl p-3 sm:p-6 mb-2.5 sm:mb-3 flex items-center justify-between w-full cursor-pointer`}
          >
            <div className="flex items-center">
              <div
                className={`${project.bg} w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white mr-2.5 sm:mr-4 shrink-0`}
              >
                <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>

              <div>
                <div className="font-bold text-sm sm:text-lg">
                  {project.name}
                </div>

                <div
                  className={`${darkMode ? "text-gray-400" : "text-gray-500"
                    } text-xs sm:text-sm`}
                >
                  {project.description}
                </div>
              </div>
            </div>

            <div className={darkMode ? "text-gray-400" : "text-gray-500"}>
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProjects;