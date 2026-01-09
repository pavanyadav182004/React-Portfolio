
import { RiLinkedinBoxFill, RiGithubFill } from "@remixicon/react"
import { contactItems } from "../Constent/data"

// motion 
import { motion } from "motion/react"
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation"


export default function Contact()
{
    return(
        <>
        <section className="py-20" id="contact">
            <motion.div 
             variants={staggerContainer} 
                initial='hidden'
                whileInView='show'
                viewport={{once: true}}
            
            className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800">

                {/* content */}
                <div>
                  <motion.h2 variants={fadeInUp} >Get In Touch</motion.h2>
                  <motion.p variants={fadeInUp} className="mt-3.5 mb-7">Ready to work on your next project. Let's discuss how I can help bring your ideas to life</motion.p>

                  {/* list */}
                  <motion.ul variants={fadeInUp}>
                    {contactItems.map((item)=>(
                        <motion.li  variants={fadeInUp} key={item.id} className="flex items-center gap-1.5">
                            <p className="text-white font-semibold">{item.label}</p>
                            <a href="#">{item.link}</a>
                        </motion.li>
                    ))}
                  </motion.ul>

                  {/* Social Profiles */}
                  <motion.div variants={fadeInUp} className="flex items-center gap-2 mt-6">
                    <button  className="hover:text-neutral-300 transition-colors">
                        <RiLinkedinBoxFill size={30} />
                    </button>
                    <button  className="hover:text-neutral-300 transition-colors">
                     <a href="https://github.com/">   <RiGithubFill size={30}/></a>
                    </button>
                  </motion.div>
                </div>

                {/* form */}
                <motion.form variants={fadeInUp} action='' className="grid gap-5">
                    {/* input field */}
                    <div className="grid gap-2">
                    <label htmlFor="name">Name *</label>
                    <input type="text"placeholder="Your name" className="input" required/>
                    </div>

                     {/* input field */}
                    <div className="grid gap-2">
                    <label htmlFor="email">Email *</label>
                    <input type="text"placeholder="Your email" className="input" required/>
                    </div>

                    {/* text area */}
                    <div className="grid gap-2">
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="massage" placeholder="Message" className="h-40 border border-neutral-800 indent-4 py-2 resize-none" required></textarea>
                    </div>
                      <button className="primary-btn max-w-max">
                Send Message
            </button>
                </motion.form>
               

            </motion.div>
           

        </section>
        </>
    )
}