"use client"
import octa from '../../../public/octa.png';
import { useParams } from "next/navigation";
import prank from "../../../public/prankapp.png";
import gotovpn from '../../../public/gotovpn.png';
import safenet from "../../../public/safenet.png";
import soravpn from '../../../public/soravpn.png';
import seelvpn from '../../../public/seelvpn.png';
import taskflow from '../../../public/taskflow.png';
import fooddash from '../../../public/fooddash.png';
import yallavpn from '../../../public/yallavpn.png';
import totemvpn from "../../../public/totemvpn.png";
import tytanvpn from "../../../public/tytanvpn.png";
import rockyvpn from '../../../public/rockyvpn.png';
import freeroam from '../../../public/freeroam.png';
import resumely from '../../../public/resumely.png';
import newvpn from '../../../public/Kestrel VPN.png';
import easyguard from '../../../public/easyguard.png';
import gshieldvpn from '../../../public/gshieldvpn.png';
import kryptonyme from '../../../public/kryptonyme.png';
import pixelcount from "../../../public/pixelcount1.png";
import removeflow from '../../../public/removeflow.png';
import devkittools from '../../../public/devkittools.png';
import resumelyApp from '../../../public/resumely-app.png';
import flutterlearn from '../../../public/flutterlearn.png';
import anzatexintl1 from "../../../public/anzatexintl1.png";
import anzatexintl2 from "../../../public/anzatexintl2.png";
import anzatexintl3 from "../../../public/anzatexintl3.png";
import ghostdetector from "../../../public/ghostdetector.png";
import devkittoolsApp from '../../../public/devkittools-app.png';
import ProjectComponent from "@/app/components/projectComponent";
import daycount from '../../../public/daycount.png';

const ProjectClient = () => {
  const params = useParams();
  const projectParam = params?.project;

  const projectData: Record<string, any> = {

    daycount: {
      title: "Daycount",
      year: "2026",
      imagemain: daycount,
      description:
        "A privacy-focused collection of calculators for dates, money, work, and everyday decisions.",
      articledata: [
        {
          imgsrc: daycount,
          desc: "Daycount brings age, mortgage, loan, compound interest, salary, percentage, and rent-versus-buy calculators together in one clear, easy-to-navigate experience.",
          title: "Daycount",
          imgsrc1: daycount,
          solution:
            "We designed a calm, responsive calculator hub with strong visual hierarchy, consistent tool cards, and private in-browser calculations that make complex numbers feel approachable."
        },
      ],
    },

    flutterlearn: {
      title: "FlutterLearn",
      year: "2026",
      imagemain: flutterlearn,
      description:
        "A free, structured Flutter curriculum that guides developers from their first widget through production-ready concepts.",
      articledata: [
        {
          imgsrc: flutterlearn,
          desc: "FlutterLearn organizes 26 lessons into beginner, intermediate, and advanced modules with clear explanations, complete code samples, and practical exercises.",
          title: "FlutterLearn",
          imgsrc1: flutterlearn,
          solution:
            "We designed a focused learning experience with straightforward navigation, clear curriculum levels, and an approachable path through the entire course without sign-up barriers."
        },
      ],
    },
    devkittools: {
      title: "DevKitTools",
      year: "2026",
      imagemain: devkittools,
      description:
        "A privacy-focused collection of everyday developer utilities with fast, local processing and a clean interface.",
      articledata: [
        {
          imgsrc: devkittools,
          desc: "DevKitTools brings focused utilities such as JSON formatting, Base64 encoding, UUID generation, JWT decoding, and password generation into one streamlined workspace.",
          title: "DevKitTools",
          imgsrc1: devkittools,
          solution:
            "We created a polished tool suite that delivers instant results in the browser, keeps user data local, and makes frequently used developer tasks easy to find."
        },
      ],
    },
    devkittoolsapp: {
      title: "DevKitTools App",
      year: "2026",
      imagemain: devkittoolsApp,
      description:
        "A mobile developer toolkit with fast offline utilities, favorites, recent tools, and an AI coding assistant.",
      articledata: [
        {
          imgsrc: devkittoolsApp,
          desc: "DevKitTools App puts practical utilities such as Word Counter, JSON Formatter, Base64 tools, and Password Generator into a focused mobile workspace.",
          title: "DevKitTools App",
          imgsrc1: devkittoolsApp,
          solution:
            "The app combines local, offline processing with quick search, saved favorites, and an AI assistant for code questions and debugging help."
        },
      ],
    },
    resumely: {
      title: "Resumely",
      year: "2026",
      imagemain: resumely,
      description:
        "A modern CV builder for creating clean, ATS-friendly resumes with real-time editing and instant PDF downloads.",
      articledata: [
        {
          imgsrc: resumely,
          desc: "Resumely combines professional templates with an approachable editing experience so users can create and preview a polished CV in one place.",
          title: "Resumely",
          imgsrc1: resumely,
          solution:
            "We designed a calm, confidence-building workflow with strong typography, clear calls to action, live save feedback, and quick access to downloadable resumes."
        },
      ],
    },
    resumelyapp: {
      title: "Resumely App",
      year: "2026",
      imagemain: resumelyApp,
      description:
        "A guided mobile CV builder with professional templates, live previews, structured editing, and an AI CV coach.",
      articledata: [
        {
          imgsrc: resumelyApp,
          desc: "Resumely App guides users through personal details, summaries, experience, template selection, and live CV previews from a mobile-first interface.",
          title: "Resumely App",
          imgsrc1: resumelyApp,
          solution:
            "The AI CV coach provides focused feedback and helps users turn their experience into clearer, stronger achievement statements."
        },
      ],
    },
    removeflow: {
      title: "RemoveFlow",
      year: "2026",
      imagemain: removeflow,
      description:
        "A simple browser-based tool that automatically removes image backgrounds for free while keeping the workflow fast and accessible.",
      articledata: [
        {
          imgsrc: removeflow,
          desc: "RemoveFlow offers upload, drag-and-drop, and clipboard input options alongside sample images and an immediate before-and-after preview.",
          title: "RemoveFlow",
          imgsrc1: removeflow,
          solution:
            "We built a clear single-purpose experience with a prominent upload area, useful input alternatives, and a visual comparison that communicates the result at a glance."
        },
      ],
    },

    fooddash: {
      title: "FoodDash",
      year: "2026",
      imagemain: fooddash,
      description:
        "An all-in-one food delivery and restaurant management mobile platform connecting customers, restaurants, and delivery orders seamlessly.",
      articledata: [
        {
          imgsrc: fooddash,
          desc: "FoodDash provides a comprehensive food ordering experience. Users can search nearby restaurants, browse menu dishes, manage saved addresses, track live orders, view payment methods, and toggle restaurant open/close statuses.",
          title: "FoodDash App",
          imgsrc1: fooddash,
          solution:
            "We built a robust, user-centered mobile food delivery ecosystem featuring real-time order tracking, address management, dish discovery, and merchant order management."
        },
      ],
    },
    taskflow: {
      title: "TaskFlow",
      year: "2026",
      imagemain: taskflow,
      description:
        "A modern task management and productivity mobile application for Android and iOS designed to help users stay organized and stay ahead.",
      articledata: [
        {
          imgsrc: taskflow,
          desc: "TaskFlow is designed to provide users with an intuitive, clean, and modern task tracking experience. Featuring pending and completed task stats, due dates, priority labels (Low, Medium, High), search, and recurrence settings (Daily, Weekly, Monthly).",
          title: "TaskFlow App",
          imgsrc1: taskflow,
          solution:
            "We built a feature-packed task management application focusing on exceptional UI/UX, smooth transitions, and simple task organization to keep users focused and organized."
        },
      ],
    },
    anzatexintl: {
      title: "Anzatex Intl",
      year: "2026",
      imagemain: anzatexintl1,
      description:
        "Ecommerce platform for Anzatex Intl",
      articledata: [
        {
          imgsrc: anzatexintl2,
          desc: " An e-commerce platform for Anzatex Intl, a company that sells textiles and clothing. The platform allows users to browse and purchase products, and provides a seamless shopping experience.",
          title: "Anzatex Intl",
          imgsrc1: anzatexintl3,
          solution:
           "The platform was built using modern web technologies to ensure fast loading times, responsive design, and a smooth user experience across all devices."
        },
      ],
    },
    pixelcount: {
      title: "Pixel Count App",
      year: "2025",
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
    soravpn: {
      title: "Sora VPN",
      year: "2026",
      imagemain: soravpn,
      description: "A productivity and privacy application for Android and iOS that provides a seamless and secure browsing experience.",
      articledata: [
        {
          imgsrc: soravpn,
          desc: "Sora VPN is designed to provide users with a simple and effective way to protect their online privacy. With a focus on ease of use, it offers a seamless experience for users of all technical levels.",
          title: "Sora VPN",
          imgsrc1: soravpn,
          solution: "We developed an intuitive VPN application with a straightforward interface, making it easy for users to connect and browse securely. The app includes essential features like one-click connection and automatic server selection.",
        },
      ],
    },
    seelvpn: {
      title: "Seel VPN",
      year: "2026",
      imagemain: seelvpn,
      description: "A productivity and privacy application for Android and iOS that provides a seamless and secure browsing experience.",
      articledata: [
        {
          imgsrc: seelvpn,
          desc: "Seel VPN is designed to provide users with a simple and effective way to protect their online privacy. With a focus on ease of use, it offers a seamless experience for users of all technical levels.",
          title: "Seel VPN",
          imgsrc1: seelvpn,
          solution: "We developed an intuitive VPN application with a straightforward interface, making it easy for users to connect and browse securely. The app includes essential features like one-click connection and automatic server selection.",
        },
      ],
    },
    yallavpn: {
      title: "Yalla VPN",
      year: "2026",
      imagemain: yallavpn,
      description: "A productivity and privacy application for Android and iOS that provides a seamless and secure browsing experience.",
      articledata: [
        {
          imgsrc: yallavpn,
          desc: "Yalla VPN is designed to provide users with a simple and effective way to protect their online privacy. With a focus on ease of use, it offers a seamless experience for users of all technical levels.",
          title: "Yalla VPN",
          imgsrc1: yallavpn,
          solution: "We developed an intuitive VPN application with a straightforward interface, making it easy for users to connect and browse securely. The app includes essential features like one-click connection and automatic server selection.",
        },
      ],
    },
    pranksounds: {
      title: "Prank Sounds App",
      year: "2024",
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
    tytanvpn: {
      title: "Tytan VPN App",
      year: "2025",
      imagemain: tytanvpn,
      description:
        "A mobile application for Android and iOS that processes and analyzes images, providing detailed pixel-level information and statistics.",
      articledata: [
        {
          imgsrc: tytanvpn,
          desc: "Our mobile image analysis tool was developed to provide users with detailed insights into their images. The application processes images directly on mobile devices to extract valuable information about pixel distribution, color patterns, and image composition.",
          title: "Tytan VPN App",
          imgsrc1: tytanvpn,
          solution:
            "We developed a native mobile application using the Flutter framework to ensure seamless performance on both Android and iOS devices. The app features real-time analysis, intuitive mobile-friendly visualization of results, and leverages device cameras for instant image analysis capabilities.",
        },
      ],
    },
    totemvpn: {
      title: "Totem VPN App",
      year: "2025",
      imagemain: totemvpn,
      description:
        "A mobile application for Android and iOS that processes and analyzes images, providing detailed pixel-level information and statistics.",
      articledata: [
        {
          imgsrc: totemvpn,
          desc: "Our mobile image analysis tool was developed to provide users with detailed insights into their images. The application processes images directly on mobile devices to extract valuable information about pixel distribution, color patterns, and image composition.",
          title: "Totem VPN App",
          imgsrc1: totemvpn,
          solution: "We developed a native mobile application using the Flutter framework to ensure seamless performance on both Android and iOS devices. The app features real-time analysis, intuitive mobile-friendly visualization of results, and leverages device cameras for instant image analysis capabilities.",
        },
      ],
    },
    safenetvpn: {
      title: "SafeNet VPN",
      year: "2025",
      description: "A user-friendly VPN application for secure browsing.",
      imagemain: safenet,
      articledata: [
        {
          imgsrc: safenet,
          desc: "SafeNet VPN is designed to provide users with a simple and effective way to protect their online privacy. With a focus on ease of use, it offers a seamless experience for users of all technical levels.",
          title: "SafeNet VPN",
          imgsrc1: safenet,
          solution: "We developed an intuitive VPN application with a straightforward interface, making it easy for users to connect and browse securely. The app includes essential features like one-click connection and automatic server selection."
        }
      ]
    },
    kryptonyme: {
      title: "Kryptonyme VPN",
      year: "2025",
      description: "A user-friendly VPN application for secure browsing.",
      imagemain: kryptonyme,
      articledata: [
        {
          imgsrc: kryptonyme,
          desc: "Kryptonyme VPN is designed to provide users with a simple and effective way to protect their online privacy. With a focus on ease of use, it offers a seamless experience for users of all technical levels.",
          title: "Kryptonyme VPN",
          imgsrc1: kryptonyme,
          solution: "We developed an intuitive VPN application with a straightforward interface, making it easy for users to connect and browse securely. The app includes essential features like one-click connection and automatic server selection."
        }
      ]
    },

    easyguard: {
      title: "EasyGuard VPN",
      year: "2025",
      description: "A user-friendly VPN application for secure browsing.",
      imagemain: easyguard,
      articledata: [
        {
          imgsrc: easyguard,
          desc: "EasyGuard VPN is designed to provide users with a simple and effective way to protect their online privacy. With a focus on ease of use, it offers a seamless experience for users of all technical levels.",
          title: "EasyGuard VPN",
          imgsrc1: easyguard,
          solution: "We developed an intuitive VPN application with a straightforward interface, making it easy for users to connect and browse securely. The app includes essential features like one-click connection and automatic server selection."
        }
      ]
    },
    freeroam: {
      title: "Freeroam VPN",
      year: "2025",
      description: "A versatile VPN application for secure and unrestricted browsing.",
      imagemain: freeroam,
      articledata: [
        {
          imgsrc: freeroam,
          desc: "Freeroam VPN is designed to provide users with a flexible and secure browsing experience. It allows users to access content from anywhere while keeping their online activities private.",
          title: "Freeroam VPN",
          imgsrc1: freeroam,
          solution: "We developed a powerful VPN application with a focus on user freedom and privacy. The app features a wide range of server locations and advanced security protocols."
        }
      ]
    },
    gotovpn: {
      title: "Goto VPN",
      year: "2025",
      description: "A reliable VPN service for secure internet access.",
      imagemain: gotovpn,
      articledata: [
        {
          imgsrc: gotovpn,
          desc: "Goto VPN is designed to provide users with a secure and private internet connection. It offers a range of features to ensure online safety and anonymity.",
          title: "Goto VPN",
          imgsrc1: gotovpn,
          solution: "We developed a high-performance VPN application with strong encryption protocols and a user-friendly interface. The app is available on multiple platforms and provides a seamless and secure browsing experience."
        }
      ]
    },
    octavpn: {
      title: "Octa VPN App",
      year: "2025",
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
      year: "2024",
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
      year: "2025",
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
    rockyvpn: {
      title: "Rocky VPN",
      year: "2025",
      description: "A robust and flexible VPN application.",
      imagemain: rockyvpn,
      articledata: [
        {
          imgsrc: rockyvpn,
          desc: "Rocky VPN is designed to provide users with a secure and private internet connection. It offers a range of features to ensure online safety and anonymity.",
          title: "Rocky VPN",
          imgsrc1: rockyvpn,
          solution: "We developed a high-performance VPN application with strong encryption protocols and a user-friendly interface. The app is available on multiple platforms and provides a seamless and secure browsing experience."
        }
      ]
    },
    gshieldvpn: {
      title: "Gshield VPN",
      year: "2025",
      description: "A robust and flexible VPN application.",
      imagemain: gshieldvpn,
      articledata: [
        {
          imgsrc: gshieldvpn,
          desc: "Gshield VPN is designed to provide users with a secure and private internet connection. It offers a range of features to ensure online safety and anonymity.",
          title: "Gshield VPN",
          imgsrc1: gshieldvpn,
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
        year={selectedProject.year}
      />
    </>
  );
};

export default ProjectClient;
