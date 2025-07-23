"use client"

import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode,
    typedClass: string,
    id?: string
}

export default function AnimatedSection({ children, typedClass, id }: Props) {
    return (
        <motion.section 
            className={typedClass}
            id={id}
            initial={{y: 40, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ delay: 0.45 }}
        >
            {children}
        </motion.section>
    )
}