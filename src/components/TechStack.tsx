import "./styles/style.css";

const skills = [
  { name: "Python", icon: "/images/placeholder.webp" },
  { name: "SQL", icon: "/images/mysql.webp" },
  { name: "React", icon: "/images/react2.webp" },
  { name: "Next.js", icon: "/images/next2.webp" },
  { name: "Node.js", icon: "/images/node2.webp" },
  { name: "TypeScript", icon: "/images/typescript.webp" },
  { name: "JavaScript", icon: "/images/javascript.webp" },
  { name: "MongoDB", icon: "/images/mongo.webp" },
  { name: "MySQL", icon: "/images/mysql.webp" },
  { name: "Express", icon: "/images/express.webp" },
  { name: "Pandas", icon: "/images/placeholder.webp" },
  { name: "NumPy", icon: "/images/placeholder.webp" },
  { name: "Power BI", icon: "/images/placeholder.webp" },
  { name: "Tableau", icon: "/images/placeholder.webp" },
  { name: "Excel", icon: "/images/placeholder.webp" },
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
