"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-background py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Image with Floating Badges */}
          <motion.div className="relative flex justify-center lg:justify-end" variants={imageVariants}>
            {/* Main Image */}
            <div className="relative w-full max-w-sm">
              <div className="">
                <img src="https://res.cloudinary.com/dklqsfwcu/image/upload/v1762281749/splash2_bq9lx2.png" alt="Student creator" className="w-full h-full object-cover" />
              </div>

              {/* Play Button Overlay */}
              {/* <motion.button
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 text-primary fill-primary ml-1" />
              </motion.button> */}

              {/* +200% Badge */}
              <motion.div
                className="absolute -top-2 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3"
                variants={floatVariants}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="bg-accent/10 rounded-xl px-3 py-1 mb-2">
                  <p className="text-xs font-bold text-accent">TRENDING</p>
                </div>
                <p className="text-2xl font-bold text-foreground">+200%</p>
                <p className="text-xs text-muted-foreground">Views in 24h</p>
              </motion.div>

              {/* Bottom Right Badge */}
              {/* <motion.div
                className="absolute -bottom-0 -right-0 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-4 border-yellow-300"
                variants={floatVariants}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              >
                <p className="text-xl font-bold text-primary">👍</p>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {/* Badge */}
            {/* <motion.div variants={itemVariants} className="inline-block">
              <div className="bg-yellow-100 border border-yellow-300 rounded-full px-4 py-2 w-fit">
                <p className="text-xs font-bold text-yellow-900 tracking-widest">SHOPPABLE VIDEOS</p>
              </div>
            </motion.div> */}

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Expanding the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                boundaries
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Transform your student stories into shoppable moments. Create content that inspires and enables your
              community to shop, learn, and connect all in one place.
            </motion.p>

            {/* Features List */}
            <motion.div variants={containerVariants} className="space-y-3 pt-4">
              {[
                "Direct shop integration in stories",
                "Real-time engagement analytics",
                "Build your creator community",
              ].map((feature, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-foreground font-medium">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
                Start Creating
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
