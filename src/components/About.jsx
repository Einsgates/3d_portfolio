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
        variants={fadeIn("right", "spring", 0.1 * index)}
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
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.dev>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software engineer with experience in Java and JavaScript, and
        expertised in frameworks like React, Node.js, and Spring Boot. Now I'm coverting my focus from full-stack to system engineer.
        CUDA attracts me a lot and I'm very interested in Linux Kernel Development and Computer Architecture. 
        <p></p>
        I'm a quick learner
        and collaborate closely with clients to create efficient, saclable, and user-frienldly
        solutions that solve real-world problems. I am both goal-oriented and resourceful.
        I will always focus on moving forward, and I will take responsibility for challenges
        and problems and when they occur! Let's work together to bring your ideas to life!
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-[10px] mt-5 text-secondary'
      >
        Last update: 01/07/2024
      </motion.p>
      <div className='mt-6 border p-2'>
        <p className={styles.heroSubText}>Personal Info</p>
        <p>email: jh79@illinois.edu</p>
        <p>mobile: 217-200-0555</p>
        <a className='mt-2 underline' href='https://github.com/Einsgates/MyResume/blob/master/Resume_for_CME%20(2).pdf' target="_blank">2024 Summer Intern</a>
        <p></p>
      </div>
      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")