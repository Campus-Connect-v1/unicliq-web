// "use client"

// import type React from "react"

// import { motion } from "framer-motion"
// import Image from "next/image"

// interface StudentCardProps {
//   id: number
//   name: string
//   major: string
//   image: string
//   bgColor: string
//   badge?: {
//     label: string
//     icon?: string
//   }
//   overlay?: React.ReactNode
//   size?: "sm" | "md" | "lg"
// }

// export function StudentCard({ id, name, major, image, bgColor, badge, overlay, size = "md" }: StudentCardProps) {
//   const sizeClasses = {
//     sm: "aspect-square",
//     md: "aspect-video md:aspect-square",
//     lg: "aspect-video",
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true, margin: "-50px" }}
//       whileHover={{ y: -8 }}
//       className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow ${sizeClasses[size]}`}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 z-0" style={{ backgroundColor: bgColor }}></div>

//       {/* Image */}
//       <motion.div className="absolute inset-0 z-10" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={name}
//           fill
//           className="object-cover"
//           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//         />
//       </motion.div>

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>

//       {/* Badge */}
//       {badge && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.4, delay: 0.2 }}
//           className="absolute top-3 right-3 z-30 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
//         >
//           <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//           {badge.label}
//         </motion.div>
//       )}

//       {/* Custom Overlay */}
//       {overlay && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           className="absolute inset-0 z-20 flex items-center justify-center"
//         >
//           {overlay}
//         </motion.div>
//       )}

//       {/* Info */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4, delay: 0.1 }}
//         className="absolute bottom-0 left-0 right-0 z-30 p-4 text-white"
//       >
//         <h3 className="font-bold text-lg truncate">{name}</h3>
//         <p className="text-sm text-white/80 truncate">{major}</p>
//       </motion.div>

//       {/* Hover Action Dot */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         whileInView={{ opacity: 0.5 }}
//         whileHover={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.2 }}
//         className="absolute bottom-3 left-3 z-30 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-primary font-bold text-sm group-hover:bg-white"
//       >
//         ✨
//       </motion.div>
//     </motion.div>
//   )
// }



"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface StudentCardProps {
  id: number
  name: string
  major: string
  image?: string
  video?: string
  bgColor: string
  badge?: {
    label: string
    icon?: string
  }
  overlay?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

export function StudentCard({
  id,
  name,
  major,
  image,
  video,
  bgColor,
  badge,
  overlay,
  size = "md",
}: StudentCardProps) {
  const sizeClasses = {
    sm: "aspect-square",
    md: "aspect-video md:aspect-square",
    lg: "aspect-video",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow ${sizeClasses[size]}`}
    >
      {/* Background Color */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: bgColor }} />

      {/* Image or Video */}
      <motion.div
        className="absolute inset-0 z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </motion.div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />

      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-3 right-3 z-30 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          {badge.label}
        </motion.div>
      )}

      {/* Custom Overlay */}
      {overlay && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          {overlay}
        </motion.div>
      )}

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute bottom-0 left-0 right-0 z-30 p-4 text-white"
      >
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-sm text-white/80 truncate">{major}</p>
      </motion.div>
    </motion.div>
  )
}
