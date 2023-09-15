import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { avatars } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

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
          <img src={icon} alt={title} className="w-160 h-160 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.dev>
    </Tilt>
  )
}

const Avatar = () => {
  return (
    <div>
      <div className={styles.sectionHeadText}>
        My avatars
      </div>
      <div className=''>
        Here are some pictures of mine. The first three are real photos taken in Urbana Champaign. And I use OPENAI API to generate some fancy pictures based on these three.
      </div>
      <div className=''>
        And these pictures tell the dream and plan of me: from a student to an explorer of Mars and AI. 
      </div>
      <div className='mt-10 flex flex-wrap gap-10'>
        {avatars.map((avatar, index) => (
          <ServiceCard key={avatar.title} index={index} {...avatar} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Avatar, "")