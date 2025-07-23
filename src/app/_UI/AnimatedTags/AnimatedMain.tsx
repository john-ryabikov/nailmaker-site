"use client"

import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode,
    typedClass: string
}

export default function AnimatedMain({ children, typedClass}: Props) {
    return (
        <motion.main 
            className={typedClass}
            initial={{y: 0, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ delay: 0.45 }}
        >
            {children}
        </motion.main>
    )
}