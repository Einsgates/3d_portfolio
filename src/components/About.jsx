import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
// https://github.com/Einsgates/MyResume/blob/master/Jiayuan_Hong_2023_SDE_New_Graduate.pdf
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.dev
        variants={fadeIn("right", "spring", 0.5 * index)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.dev>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.dev>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software engineer with experience in TypeScript and JavaScript, and
        expertised in frameworks like React, Node.js, and Vite.js. I'm a quick learner
        and collaborate closely with clients to create efficient, saclable, and user-frienldly
        solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className='mt-4 w-[500px] border p-2'>
        <p className={styles.heroSubText}>Personal Info</p>
        <p>email: jh79@illinois.edu</p>
        <p>mobile: 217-200-0555</p>
        <a className='mt-2 underline' href='https://github.com/Einsgates/MyResume/blob/master/Jiayuan_Hong_2023_SDE_New_Graduate.pdf' target="_blank">Resume for 2023 New Graduate</a>
        <p></p>
        <a className='mt-2 underline' href='https://github.com/Einsgates/MyResume/blob/master/Jiayuan_Hong_2024_SDE_Intern.pdf' target="_blank">Resume for 2024 Intern</a>
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")