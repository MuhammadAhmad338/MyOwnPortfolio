"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProjectComponent from "@/app/components/projectComponent";

const Project = () => {
  // Get the parameter from the URL
  const params = useParams();
  const projectParam = params?.project; // Ensure it's accessed safely

  console.log("Project parameter:", projectParam);

  // Create a mapping object for your projects
  const projectData: Record<string, any> = {
    pixelcount: {
      title: "Pixel Count",
      description:
        "A mobile application for Android and iOS that processes and analyzes images, providing detailed pixel-level information and statistics.",
      articledata: [
        {
          imgsrc: "",
          desc: "Our mobile image analysis tool was developed to provide users with detailed insights into their images. The application processes images directly on mobile devices to extract valuable information about pixel distribution, color patterns, and image composition.",
          title: "Pixel Count",
          imgsrc1: "/pixelcount.png",
          solution:
            "We developed a native mobile application using the Flutter framework to ensure seamless performance on both Android and iOS devices. The app features real-time analysis, intuitive mobile-friendly visualization of results, and leverages device cameras for instant image analysis capabilities.",
        },
      ],
    },
    pranksounds: {
      "title": "Prank Sounds App",
      "description": "A fun and entertaining app filled with high-quality prank sounds.",
      "articledata": [
        {
          "imgsrc": "",
          "desc": "Prank Sounds App is designed to add laughter and surprise with a variety of hilarious sound effects.",
          "title": "Prank Sounds App",
          "imgsrc1": "/pranksounds.png",
          "solution": "We developed a playful and engaging app with an intuitive interface, categorized sound effects, and high-quality audio to ensure the best prank experience for users."
        }
      ]
    },
    simply: {
      title: "Simply",
      description: "Landing page and illustration design for digital products.",
      articledata: [
        {
          imgsrc: "",
          desc: "Simply provides clean, effective landing pages with custom illustrations designed to maximize conversion rates.",
          title: "Simply",
          imgsrc1: "/simply.png",
          solution:
            "We created a flexible landing page template system with custom illustrations that effectively communicates product benefits while maintaining high performance and accessibility standards.",
        },
      ],
    },
  };

  // Ensure projectParam is a string and check if the project exists
  const selectedProject = projectParam ? projectData[projectParam.toString()] : null;

  if (!selectedProject) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="text-lg font-medium">Project not found</div>
          <div className="text-gray-500 text-sm mt-2">
            The requested project does not exist
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProjectComponent
        title={selectedProject.title}
        description={selectedProject.description}
        articledata={selectedProject.articledata}
      />
    </>
  );
};

export default Project;
