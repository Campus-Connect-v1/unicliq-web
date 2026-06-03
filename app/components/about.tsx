// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// export function About() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   const floatVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 10 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   }

//   const imageVariants = {
//     hidden: { opacity: 0, x: -40 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   }

//   return (
//     <section id="about" className="relative w-full bg-gradient-to-b from-white to-background py-16 md:pt-18 md:pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Left Column - Image with Floating Badges */}
//           <motion.div className="relative flex justify-center lg:justify-end" variants={imageVariants}>
//             {/* Main Image */}
//             <div className="relative w-full max-w-sm">
//               <div className="">
//                 <Image src="https://res.cloudinary.com/dklqsfwcu/image/upload/v1762281749/splash2_bq9lx2.png" alt="Student creator" className="object-cover" width={500} height={900} />
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column - Content */}
//           <motion.div className="space-y-6" variants={containerVariants}>
//             {/* Headline */}
//             <motion.h2
//               variants={itemVariants}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
//             >
//               Expanding the
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
//                 boundaries
//               </span>
//             </motion.h2>

//             {/* Description */}
//             <motion.p variants={itemVariants} className="text-lg text-black max-w-md leading-relaxed">
//              At uniCLIQ, we believe every connection can spark opportunity. Our mission is to make student collaboration effortless — empowering learners to meet, build, and grow together. In today’s world, networking is everything, and we’re making sure that starts on campus.
//             </motion.p>

//             {/* Features List */}
//             <motion.div variants={containerVariants} className="space-y-3 pt-4">
//               {[
//                 "Find colleagues by geofencing",
//                 "Get real-time event updates",
//                 "Connect across campuses",
//               ].map((feature, i) => (
//                 <motion.div key={i} variants={itemVariants} className="flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-primary" />
//                   <p className="text-foreground font-medium">{feature}</p>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
//               <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
//                 Start Creating
//               </button>
//               <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/5 transition-colors">
//                 Learn More
//               </button>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }






"use client";

import { motion, easeOut, easeInOut, Variants } from "framer-motion";
import Image from "next/image";

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut }, // ✅ FIXED
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: easeInOut }, // ✅ FIXED
    },
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F7FBFD] py-16 md:pb-12 md:pt-18 lg:pb-16 lg:pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-[2.25rem] bg-[#E8F7F1] shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dklqsfwcu/image/upload/v1762281749/splash2_bq9lx2.png"
                alt="Student creator"
                className="object-cover"
                width={500}
                height={900}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-black leading-tight text-[#003554] md:text-5xl lg:text-6xl"
            >
              Expanding the campus
              <span className="block text-[#C99700]">
                circle
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg leading-8 text-[#425466]"
            >
              At uniCLIQ, we believe every connection can spark opportunity. Our
              mission is to make student collaboration effortless - helping
              learners meet, build, revise, attend, and grow together. Campus
              networking should start where students already are: their classes,
              halls, clubs, departments, and events.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-3 pt-4">
              {[
                "Find nearby students with privacy controls",
                "Get real-time campus updates and announcements",
                "Connect through courses, interests, groups, and events",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-[#C99700]" />
                  <p className="font-bold text-[#081F2D]">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-6">
              <a href="#download" className="rounded-full bg-[#003554] px-8 py-3 font-bold text-white transition-shadow hover:shadow-lg">
                Start Connecting
              </a>
              <a href="#features" className="rounded-full border-2 border-[#003554] px-8 py-3 font-bold text-[#003554] transition-colors hover:bg-[#FFF8DB]">
                See Campus Tools
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
