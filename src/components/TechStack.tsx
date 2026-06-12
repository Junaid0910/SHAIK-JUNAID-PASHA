import "./styles/style.css";

const skills = [
  { name: "Python", icon: "/images/python.png" },
  { name: "Java", icon: "/images/java.png" },
  { name: "SQL", icon: "/images/sql.png" },
  { name: "React", icon: "/images/react.png" },
  { name: "Next.js", icon: "/images/nextjs.png" },
  { name: "Node.js", icon: "/images/nodejs.png" },
  { name: "JavaScript", icon: "/images/javascript.png" },
  { name: "MySQL", icon: "/images/mysql.png" },
  { name: "Express", icon: "/images/express.png" },
  { name: "Pandas", icon: "/images/pandas.png" },
  { name: "NumPy", icon: "/images/numpy.png" },
  { name: "Power BI", icon: "/images/powerbi.png" },
  { name: "Tableau", icon: "/images/tableau.png" },
  { name: "Excel", icon: "/images/excel.png" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack & Skills</h2>
      <div className="tech-grid">
        {skills.map((skill, index) => (
          <div
            className="tech-box"
            key={index}
            data-cursor="disable"
            style={{ "--delay": index } as React.CSSProperties}
          >
            {skill.icon !== "/images/placeholder.webp" ? (
              <img src={skill.icon} alt={skill.name} />
            ) : (
              <div className="tech-icon-placeholder">
                {skill.name.substring(0, 2)}
              </div>
            )}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
