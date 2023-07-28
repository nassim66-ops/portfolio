/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../constants";
import ExperienceCard from "./common/ExperienceCard";

import "react-vertical-timeline-component/style.min.css";
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
