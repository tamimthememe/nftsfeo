import React from "react"
import heroImage from "../images/hero-image.png"
import {motion} from "framer-motion"

export default function Hero(){
    return (
        <section className="hero">
            <div className="hero-text">
                <motion.h1 
                    animate={{y:0, opacity: 1}} 
                    initial={{y :-50, opacity: 0}} 
                    transition={{ease: "easeOut", duration:1}}
                    className="hero-title">Buy and sell digital art, <span className="hero-text-gradient">NFTs collection</span></motion.h1> 
                <motion.p 
                    animate={{y:0, opacity: 1}} 
                    initial={{y :-50, opacity: 0}} 
                    transition={{ease: "easeOut", duration:1}}
                    className="hero-subtitle">Find exclusive digital artwork. collect digital artwork made by amazing people. make money by doing something you passionate.</motion.p>
                <motion.div animate={{y:0, opacity: 1}} 
                    initial={{y :50, opacity: 0}} 
                    transition={{ease: "easeOut", duration:1}}
                     className="hero-buttons">
                    <button className="hero-btn-explore">Explore</button>
                    <button className="hero-btn-create">Create</button>
                </motion.div>
            </div>
            <motion.img  animate={{x:0, opacity: 1}} 
                    initial={{x :50, opacity: 0}} 
                    transition={{ease: "easeOut", duration:2}} 
                    className="hero-image" src={heroImage} alt="some really cool photo" />
        </section>
    )
}