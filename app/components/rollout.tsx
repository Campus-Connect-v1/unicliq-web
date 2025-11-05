"use client"

import { motion } from "framer-motion"
import './student-grid.css'

export function Rollout() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-4">

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Ready to Join Your Campus Community?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with thousands of students, discover events, and build lasting friendships.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-black text-white rounded-full font-semibold shadow-sm hover:shadow-xl transition-shadow text-lg"
        >
          Start Exploring Now
        </motion.button>
      </motion.div>
    </section>
  )
}

