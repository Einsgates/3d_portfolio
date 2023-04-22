import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d3836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full " >
        <img
          src={education.icon}
          alt={education.university_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {education.university_name}
      </p>
      <div className="flex">
        <div>
          Honors:&nbsp;
        </div>
        <div className="font-bold">
          {education.honors}
        </div>
      </div>

      <div className="">
        GPA: {education.gpa}
      </div>
      <div className="flex">
        <div>Courses:&nbsp; </div>
        <div className="italic">
          {education.courses}
        </div>

      </div>
    </div>

  </VerticalTimelineElement>
)

const Education = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I Study</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.dev>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Education, "education")