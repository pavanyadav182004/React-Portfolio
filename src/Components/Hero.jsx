import heroPdf from "../assets/Pavan.pdf"
import heroImg from "../assets/pavan_yadav.png"
import { heroIcons } from "../Constent/data"
import { BackgroundGradient } from "./ui/Background-gradient"
import { useEffect } from "react"
import Button from "./Button"


// motion 
import { motion } from "motion/react"
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation"

export default function Hero() {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
    
    return (
        <>
            <section className="py-28 lg:pt-40" id="home">
                <motion.div variants={staggerContainer} 
                initial='hidden'
                whileInView='show'
                viewport={{once: true}}

                 className="container flex flex-col items-center">
                    {/* images */}
                    <motion.div variants={fadeIn}>
                    <BackgroundGradient className="w-70 h-70 lg:w-80 lg:h-80 rounded-full  bg-zinc-900">
                    <figure className="rounded-full overflow-hidden ">
                        <img src={heroImg} alt="Pavan yadav" width={452} height={452}  />
                    </figure>
                    </BackgroundGradient>
                    </motion.div>

                    {/* content */}
                    <div className="text-center mt-8">
                        <motion.h1 variants={fadeInUp} className="text-3xl lg:text-5xl mb-1.5 font-bold">Hi, I'm Pavan Yadav</motion.h1>
                        <motion.h2 variants={fadeInUp} >Frontend Developer</motion.h2>
                        <motion.p variants={fadeInUp} className="max-w-[820px] mx-auto mt-4 mb-6" >Hi, I’m Pavan Yadav, a web development enthusiast with skills in HTML, CSS, JavaScript, and React. I’ve completed a Diploma in Computer Science (BTEUP) and currently pursuing Java Full Stack Development from IT Vedant, Mumbai. I have worked on a Fitness and Health project and aim to become a full-stack developer.</motion.p>
                   
                   <motion.div variants={fadeInUp} className="flex items-center justify-center gap-5">
                    {heroIcons.map((icon)=>(
                        <a href="https://github.com/" target="_blank" className="hover:text-indigo-400 transition-colors"><icon.icon size={30}/></a>
                   ))}
                   </motion.div>

                   {/* btn weapper */}
                   <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center  flex-wrap gap-5">
                <a href={heroPdf}>  <Button label='Download CV' classes='primary-btn' icon/></a>
                   <Button label='Lets Collaborate' classes='secondary-btn'/>
                   </motion.div>
                   
                    </div>
                </motion.div>
            </section>
        </>
    )
}