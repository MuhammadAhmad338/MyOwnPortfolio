"use client"
import React from "react";
import octa from '../../../public/octa.png';
import { useParams } from "next/navigation";
import prank from "../../../public/prankapp.png";
import newvpn from '../../../public/Kestrel VPN.png';
import pixelcount from "../../../public/pixelcount1.png";
import ghostdetector from "../../../public/ghostdetector.png";
import ProjectComponent from "@/app/components/projectComponent";

const Project = () => {
  const params = useParams();
  const projectParam = params?.project;

  console.log("Project parameter:", projectParam);

  // Create a mapping object for your projects with images from public folder
  const projectData: Record<string, any> = {
    pixelcount: {
      title: "Pixel Count App",
      imagemain: pixelcount,
      description:
        "A mobile application for Android and iOS that processes and analyzes images, providing detailed pixel-level information and statistics.",
      articledata: [
        {
          imgsrc: pixelcount,
          desc: "Our mobile image analysis tool was developed to provide users with detailed insights into their images. The application processes images directly on mobile devices to extract valuable information about pixel distribution, color patterns, and image composition.",
          title: "Pixel Count",
          imgsrc1: pixelcount,
          solution:
            "We developed a native mobile application using the Flutter framework to ensure seamless performance on both Android and iOS devices. The app features real-time analysis, intuitive mobile-friendly visualization of results, and leverages device cameras for instant image analysis capabilities.",
        },
      ],
    },
    pranksounds: {
      title: "Prank Sound App",
      description: "A fun and entertaining app filled with high-quality prank sounds.",
      imagemain: prank,
      articledata: [
        {
          "imgsrc": prank,
          "desc": "Prank Sounds App is designed to add laughter and surprise with a variety of hilarious sound effects.",
          "title": "Prank Sounds App",
          "imgsrc1": prank,
          "solution": "We developed a playful and engaging app with an intuitive interface, categorized sound effects, and high-quality audio to ensure the best prank experience for users."
        }
      ]
    },

    octavpn: {
      title: "Octa VPN App",
      description: "A secure and user-friendly VPN service for enhanced online privacy.",
      imagemain: octa,
      articledata: [
        {
          imgsrc: octa,
          desc: "Octa VPN provides users with a fast and reliable VPN service, ensuring their online activities are private and secure. We focused on creating a user-friendly experience with a clean interface.",
          title: "Octa VPN",
          imgsrc1: octa,
          solution: "We developed a cross-platform VPN application with strong encryption and a global server network. The design emphasizes ease of use and a seamless connection process.",
        },
      ],
    },
    ghostdetector: {
      title: "Ghost Detector App",
      description: "A fun, fictional app that detects supernatural presences.",
      imagemain: ghostdetector,
      articledata: [
        {
          imgsrc: ghostdetector,
          desc: "Ghost Detector is a lighthearted mobile app that supposedly uses your phone's sensors to detect paranormal activity. It's designed for entertainment purposes.",
          title: "Ghost Detector",
          imgsrc1: ghostdetector,
          solution: "We created a whimsical app with a spooky interface, incorporating sound effects and visual elements to enhance the user's experience. It uses simulated sensor data to 'detect' ghosts."
        }
      ]
    },
    kestrelvpn: {
      title: "Kestrel VPN",
      description: "A robust and secure VPN application.",
      imagemain: newvpn,
      articledata: [
        {
          imgsrc: newvpn,
          desc: "Kestrel VPN is designed to provide users with a secure and private internet connection. It offers a range of features to ensure online safety and anonymity.",
          title: "Kestrel VPN",
          imgsrc1: newvpn,
          solution: "We developed a high-performance VPN application with strong encryption protocols and a user-friendly interface. The app is available on multiple platforms and provides a seamless and secure browsing experience."
        }
      ]
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
        imagemain={selectedProject.imagemain}
        articledata={selectedProject.articledata}
      />
    </>
  );
};

export default Project;