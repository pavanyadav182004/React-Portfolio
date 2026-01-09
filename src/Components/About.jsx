import { aboutItems } from "../Constent/data";

// motion 
import { motion } from "motion/react"
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation"


export default function About() {
    return (
        <>
            <section className="section bg-secondry-clr" id="about">
                <motion.div 
                variants={staggerContainer} 
                initial='hidden'
                whileInView='show'
                viewport={{once: true}}
                
                className="container">
                    <motion.h2 variants={fadeInUp}>About Me</motion.h2>

                    <motion.p variants={fadeInUp} className="mt-3 mb-9">I’m Pavan Yadav, a passionate and motivated Web Developer with a strong interest in building modern, user-friendly web applications. I have hands-on knowledge of HTML, CSS, JavaScript, and React, and I enjoy turning ideas into functional and visually appealing websites.

                        I have worked on a project called “Fitness and Health”,
                        where I focused on creating a responsive and practical web experience.
                        This project helped me strengthen my front-end skills and understand
                        real-world development workflows.

                        I have completed my Diploma in Computer Science from the BTEUP Board.
                        Currently, I am pursuing Java Full Stack Development from IT Vedant,
                        Mumbai, where I am expanding my expertise in both front-end and back-end technologies.

                        I am a strong believer in continuous learning, consistency,
                        and hard work. My goal is to grow as a Front-End / Full-Stack Developer and contribute to meaningful, real-world projects.</motion.p>

                    {/* Skills */}
                    <motion.div variants={fadeInUp}>
                        <motion.p variants={fadeInUp} className="text-white font-sembold text-xl mb-3">Skills</motion.p>
                        <motion.ul variants={fadeInUp} className="">
                            {aboutItems.map(item => (
                                <motion.l1 variants={fadeInUp} key={item.id}>
                                <motion.p variants={fadeInUp} >✓ {item.label}</motion.p>
                                </motion.l1>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}