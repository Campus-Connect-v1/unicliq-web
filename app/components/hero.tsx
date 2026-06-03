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
import { ArrowRight, CalendarCheck, MessageCircle, Users } from "lucide-react"

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
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-[#003554] text-white">
      <Image
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=85&w=2200"
        alt="University students spending time together on campus"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#003554]/78" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,53,84,0.12)_0%,rgba(0,53,84,0.86)_88%)]" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-32 sm:px-6 md:pb-16 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm font-bold text-[#FFE8A3] backdrop-blur-md"
        >
          <Users size={16} />
          CampusConnect for university students
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="mb-6 max-w-5xl text-5xl font-black leading-[0.98] md:text-7xl lg:text-8xl"
        >
          uniCLIQ
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-3xl text-xl leading-8 text-white/88 md:text-2xl md:leading-10"
        >
          The campus companion for finding events, joining study groups, seeing
          announcements, meeting nearby students, and keeping every university
          moment in one social hub.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F7C948] px-7 py-4 font-black text-[#123140] shadow-lg transition hover:bg-[#FFE17D]"
          >
            Join your campus
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-white/80 px-7 py-4 font-black text-white backdrop-blur-sm transition hover:bg-white hover:text-[#003554]"
          >
            Explore features
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3"
        >
          {[
            [CalendarCheck, "RSVP to campus events"],
            [MessageCircle, "Chat with classmates"],
            [Users, "Build study circles"],
          ].map(([Icon, label]) => {
            const StatIcon = Icon as typeof CalendarCheck;
            return (
              <div key={label as string} className="flex items-center gap-3 rounded-lg border border-white/18 bg-white/12 px-4 py-3 backdrop-blur-md">
                <StatIcon className="shrink-0 text-[#F7C948]" size={22} />
                <span className="font-bold text-white">{label as string}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
