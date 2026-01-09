import { ResumeItems } from "../Constent/data";

// motion 
import { motion } from "motion/react"
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation"


export default function Exprince() {
    return (
        <>
            <section className="section" id="resume">
                <motion.div
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}

                    className="container">
                    <motion.h2 variants={fadeInUp}>My Resume</motion.h2>

                    {/* wrapper */}
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
                        {ResumeItems.map((item) => (
                            <motion.div variants={fadeInUp} key={item.id} className="divide-y divide-neutural-700">
                                {/* Title */}
                                <h3 className="text-2xl font-semibold mt-8 pb-3">{item.title}</h3>

                                {/* list */}
                                <div className="mt-10 space-y-8">
                                    {item.list.map((listItem, index) => (
                                        <div key={index} className="flex items-center justify-between flex-wrap gap-6">
                                            <div>
                                                <h4 className="text-xl">{listItem.role}</h4>
                                                <p>{listItem.label}</p>
                                            </div>
                                            <p className="border border-neutral-700 p-2 text-white">{listItem.time}</p>
                                        </div>
                                    ))}
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </>
    )
}