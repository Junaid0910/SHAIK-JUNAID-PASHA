import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      if (boxes.length === 0) return;
      const container = document.querySelector(".work-container");
      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    const refreshAll = () => {
      setTranslateX();
      ScrollTrigger.refresh();
    };

    refreshAll();
    window.addEventListener("resize", refreshAll);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: 0.5,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
      force3D: true,
    });

    return () => {
      window.removeEventListener("resize", refreshAll);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Shopping Trends Data Analysis",
              category: "Data Analysis",
              tools: "Python, Pandas, NumPy",
              image: "/images/shopping trends data analysis.jfif",
              link: "https://github.com/Junaid0910/shopping-trend-analysis",
            },
            {
              name: "Sales Performance Dashboard",
              category: "Data Visualization",
              tools: "Power BI, Excel, Power Query",
              image: "/images/amazon sales.PNG",
              link: "https://github.com/Junaid0910/Amazon-Sales-analysis-Dashboard",
            },
            {
              name: "Voice-to-Text Web Application",
              category: "Web App",
              tools: "Speech Input, Document Gen",
              image: "/images/voice2text.PNG",
              link: "https://voice2textdoc.vercel.app/",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
 
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
