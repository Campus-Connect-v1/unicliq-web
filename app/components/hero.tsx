// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// export function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   }

//   return (
//     <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pt-24 text-center mt-10">
//       <motion.div variants={containerVariants} initial="hidden" animate="visible">
//         <motion.h1
//           variants={itemVariants}
//           className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-black bg-clip-text text-transparent mt-10"
//         >
//           Most Powerful Way  To Connect On Campus
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
//           Build genuine connections with students from your university. Share moments, find your squad, and create
//           memories that matter.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-black text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
//           >
//             Download on App Store
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-primary/5 transition-colors"
//           >
//             Download on Google Play
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }




"use client"

import { motion, easeOut, Variants } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }, // ✅ fixed
    },
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pt-24 text-center mt-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-black bg-clip-text text-transparent mt-10"
        >
          Most Powerful Way To Connect On Campus
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Build genuine connections with students from your university. Share
          moments, find your squad, and create memories that matter.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Download on App Store
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-black text-black rounded-full font-semibold hover:bg-primary/5 transition-colors"
          >
            Download on Google Play
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
