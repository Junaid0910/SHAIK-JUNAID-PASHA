import { MdArrowOutward } from "react-icons/md";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science (Data Science)</h4>
                <h5>CMR College of Engineering & Technology</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Undergraduate studies focusing on Data Science, Python, SQL, and analytical thinking.
              Previously completed Intermediate at TMRJC Boys-1 (96.5%) and Secondary School at Sri Saraswathi EM High School (10 GPA).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <a
                  href="https://drive.google.com/file/d/1MiQpfnKNysLvsd-gq5NiC4abEbbsBx3n/view?usp=drivesdk"
                  target="_blank"
                  data-cursor="disable"
                >
                  <h4>
                    Artificial Intelligence Intern <MdArrowOutward />
                  </h4>
                </a>
                <h5>Edunet Foundation</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Gained exposure to Artificial Intelligence fundamentals and real-world applications. Worked on analytical thinking, logic building, and problem-solving exercises.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Freelance Developer</h4>
                <h5>
                  <a
                    href="https://www.smartbiz.in/JUNODO"
                    target="_blank"
                    data-cursor="disable"
                  >
                    JUNODO online store
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://www.fiverr.com/s/6YkyzxR"
                    target="_blank"
                    data-cursor="disable"
                  >
                    Fiverr
                  </a>
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founder of JUNODO online store and started a print-on-demand fashion brand: JUNODO-FASHIONS. Working as a freelance developer on Fiverr, delivering web-based and technical solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
