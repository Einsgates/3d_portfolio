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
        I am a proficient software engineer transitioning from full-stack development to system engineering, 
        with a newfound passion for C/C++ and CUDA programming. My expertise extends to modern CPU architecture, 
        and I have gained valuable experience working on the trade execution system of CME Globex at CME Group, 
        focusing on high-frequency trading performance. I am adept in frameworks such as React, Node.js, 
        and Spring Boot, which complement my broad programming skills. 
        <p></p>
        As a quick learner, 
        I excel in collaborating with clients to develop efficient, scalable, and user-friendly solutions that 
        address real-world challenges. Goal-oriented and resourceful, I am committed to moving projects forward, 
        taking responsibility for any challenges and obstacles that arise. 
        Let's collaborate to turn your innovative ideas into reality!
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-[10px] mt-5 text-secondary'
      >
        Last update: 04/03/2024
      </motion.p>
      <div className='mt-6 border p-2'>
        <p className={styles.heroSubText}>Personal Info</p>
        <p>email: jh79@illinois.edu</p>
        <p>mobile: 217-200-0555</p>
        <a className='mt-2 underline' href='https://github.com/Einsgates/MyResume/blob/master/DRW_Resume_2025_Full_Time.pdf' target="_blank">2025 Full Time Resume</a>
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