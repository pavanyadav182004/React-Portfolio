
import { ProjectsItems } from "../Constent/data"
import { Carousel } from "./ui/Carousel"

// motion 
import { motion } from "motion/react"
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation"


export default function Project()
{
    return(
        <>
        <section className="section" id="projects">
            <motion.div
             variants={staggerContainer} 
                initial='hidden'
                whileInView='show'
                viewport={{once: true}}

            className="container">
                {/* title */}
                <motion.h2 variants={fadeInUp} className="text-center">Recent Project</motion.h2>
              
                {/* card wrapper */}
                <motion.div variants={fadeInUp} className="relative overflow-hidden w-full h-full py-20">
                <Carousel slides={ProjectsItems}/>
                </motion.div>
            </motion.div>
        </section>
        </>
    )
}