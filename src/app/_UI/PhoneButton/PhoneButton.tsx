"use client"

import { motion } from "framer-motion"

import "./PhoneButton.scss"

export default function PhoneButton() {
  return (
    <motion.div
        className="phone-call-btn"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{ delay: 6 }}
    >
        <motion.a 
            className="phone-call-btn__cont"
            animate={{scale: [1.0, 1.15, 1.0]}}
            transition={{ delay: 6, duration: 1.5, repeat: Infinity}}
            href="tel:+79253699091"
            target="_blank"
        >
            <img src="/img/Icons/call_icon.svg" alt="Позвонить" />
        </motion.a>
    
    </motion.div>

    )
}
