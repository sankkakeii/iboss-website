// import "./paradise.css";
// import "./scroll.css";

// const SkillBased = () => {

//     return (
//             <div className="skill_container">

//                 <div className="skill_list">
//                     <ul className="skills_list_1">
//                         <li>Python</li>
//                         <li>React.Js</li>
//                         <li>Node.Js</li>
//                         <li>Ruby on Rails</li>
//                     </ul>
//                 </div>

//                 <div className="skills_list">
//                     <ul className="skills_list_2">
//                         <li>Dynamic 365</li>
//                         <li>Flutter</li>
//                         <li>Angular</li>
//                         <li>Swift</li>
//                     </ul>
//                 </div>
//             </div>
//     );
// };

// export default SkillBased;









import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./paradise.css";
import "./scroll.css";

const skillsList1 = ["Python", "React.Js", "Node.Js", "Ruby on Rails"];
const skillsList2 = ["Dynamic 365", "Flutter", "Angular", "Swift"];

const InfiniteScrolling = ({ items }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2000); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <motion.ul
            className="skills_list"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            key={index} // Ensure a unique key for each render
        >
            {items.map((item, i) => (
                <motion.li
                    key={i}
                    style={{ listStyleType: "none" }}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    );
};

const SkillBased = () => {
    return (
        <div className="skill_container">
            <AnimatePresence>
                <InfiniteScrolling items={skillsList1} />
                <InfiniteScrolling items={skillsList2} />
            </AnimatePresence>
        </div>
    );
};

export default SkillBased;

