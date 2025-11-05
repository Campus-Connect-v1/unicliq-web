"use client"

import { motion } from "framer-motion"
import { StudentCard } from "./student-card"
import './student-grid.css'

interface Student {
  id: number
  name: string
  major: string
  image?: string
  video?: string
  bgColor: string
  badge?: {
    label: string
  }
  size?: "sm" | "md" | "lg"
}

const STUDENTS: Student[] = [
  {
    id: 1,
    name: "University of Ghana",
    major: "Accra, Ghana",
    image: "https://imgs.search.brave.com/kQeDiFrBg2SPmnF7yvHqu1EmJ7_KNFtC-OoHM3mKEvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzNl/LzkwLzg3M2U5MDIz/NGY2OGUyYzEyY2Nh/OTIyZDdkOTA0MmUz/LmpwZw",
    bgColor: "#7A9EC7",
    size: "md",
  },
  {
    id: 2,
    name: "Maya Patel",
    major: "Business & Tech",
    video: "https://res.cloudinary.com/dklqsfwcu/video/upload/v1762273660/Valley_View_University_students_perform_Olivia_-_Lasmid_dance_ghanaentertainment_ghanamusic_music_nvmk44.mp4",
    bgColor: "#5B8AC5",
    badge: { label: "Tutor" },
    size: "lg",
  },
  {
    id: 3,
    name: "Jordan Lee",
    major: "Environmental Science",
    video: "https://res.cloudinary.com/dklqsfwcu/video/upload/v1762273660/Valley_View_University_students_perform_Olivia_-_Lasmid_dance_ghanaentertainment_ghanamusic_music_nvmk44.mp4",
    bgColor: "#A0D8E0",
    badge: { label: "LIVE" },
    size: "md",
  },
  {
    id: 4,
    name: "Sophie Zhang",
    major: "Digital Media",
    image: "https://images.unsplash.com/photo-1761839257789-20147513121a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
    bgColor: "#D4A5A5",
    size: "sm",
  },
  {
    id: 5,
    name: "Marcus Johnson",
    major: "Design & Innovation",
    image: "https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    bgColor: "#9BA8C8",
    size: "lg",
  },
  {
    id: 6,
    name: "Emma Valdez",
    major: "Psychology",
    image: "https://images.unsplash.com/photo-1621959614020-e12047c380ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    bgColor: "#E8D5C4",
    size: "lg",
  },
]


export function StudentGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-8">
      {/* Masonry layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="student-grid"
      >
        {STUDENTS.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="student-card-wrapper"
          >
            <StudentCard {...student} />
          </motion.div>
        ))}
      </motion.div>

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

