"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ClientHome() {
  return (
    <div className="flex flex-col gap-32 bg-[#F4EEE2]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full min-h-screen relative flex items-center justify-center text-center shadow bg-gradient-to-b from-[#F4EEE2] via-[#e0e7ef] to-[#F4EEE2] overflow-hidden"
        aria-label="Hero"
      >
        {/* Circular floating icons - smooth galaxy-like motion */}
        <motion.span
          className="absolute left-8 top-8 text-3xl opacity-40 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -15, -15, 0],
            rotate: [0, 45, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >📚</motion.span>
        <motion.span
          className="absolute right-12 top-16 text-4xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 20, 20, 0],
            rotate: [0, -45, -90, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >✏️</motion.span>
        <motion.span
          className="absolute left-20 bottom-10 text-2xl opacity-50 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 25, -25, 0],
            y: [0, 12, 12, 0],
            rotate: [0, 30, 60, 0]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >📏</motion.span>
        <motion.span
          className="absolute right-24 bottom-16 text-3xl opacity-40 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -30, 30, 0],
            y: [0, -10, -10, 0],
            rotate: [0, -30, -60, 0]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >📖</motion.span>
        <motion.span
          className="absolute left-4 top-1/4 text-4xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -25, -25, 0],
            rotate: [0, 45, 90, 0]
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🎓</motion.span>
        <motion.span
          className="absolute right-4 top-1/3 text-2xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -45, 45, 0],
            y: [0, 20, 20, 0],
            rotate: [0, -45, -90, 0]
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🌍</motion.span>
        <motion.span
          className="absolute left-10 bottom-1/4 text-3xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 35, -35, 0],
            y: [0, 15, 15, 0],
            rotate: [0, 25, 50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🍎</motion.span>
        <motion.span
          className="absolute right-10 bottom-1/5 text-4xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -40, 40, 0],
            y: [0, -15, -15, 0],
            rotate: [0, -25, -50, 0]
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >💡</motion.span>
        <motion.span
          className="absolute left-1/2 top-4 text-2xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 45, -45, 0],
            y: [0, -20, -20, 0],
            rotate: [0, 35, 70, 0]
          }}
          transition={{
            duration: 20.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🎨</motion.span>
        <motion.span
          className="absolute left-1/2 bottom-8 text-3xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -55, 55, 0],
            y: [0, 20, 20, 0],
            rotate: [0, -35, -70, 0]
          }}
          transition={{
            duration: 22.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🖊️</motion.span>
        <motion.span
          className="absolute left-32 top-1/2 text-4xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -30, -30, 0],
            rotate: [0, 40, 80, 0]
          }}
          transition={{
            duration: 24.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🧮</motion.span>
        <motion.span
          className="absolute right-32 top-1/2 text-2xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -65, 65, 0],
            y: [0, 30, 30, 0],
            rotate: [0, -40, -80, 0]
          }}
          transition={{
            duration: 26.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🧪</motion.span>
        <motion.span
          className="absolute left-1/4 top-1/5 text-3xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 65, -65, 0],
            y: [0, -35, -35, 0],
            rotate: [0, 30, 60, 0]
          }}
          transition={{
            duration: 21.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🧑‍🏫</motion.span>
        <motion.span
          className="absolute right-1/4 bottom-1/5 text-3xl opacity-30 pointer-events-none z-0"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, -70, 70, 0],
            y: [0, 35, 35, 0],
            rotate: [0, -30, -60, 0]
          }}
          transition={{
            duration: 23.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🧬</motion.span>
        {/* Main content with z-10 to stay above icons */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="rounded-full border-4 border-[#C2B280] ring-4 ring-[#F4EEE2] shadow-xl p-2 mb-8 mx-auto flex items-center justify-center w-44 h-44 overflow-hidden bg-white">
            <Image src="/logo/logo.png" alt="Mentor-school logo" width={144} height={144} className="w-40 h-40 object-cover rounded-full" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#074B70]">Mentor-school</h1>
          <p className="text-2xl md:text-3xl text-[#074B70] mb-6 font-medium">A Tradition of Excellence in Education</p>
          <div className="text-lg text-[#074B70] mb-10">Est. April 8, 2021 | Jizzakh city, Uzbekistan</div>
          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block bg-[#074B70] text-white px-10 py-4 rounded-full font-bold shadow hover:bg-[#156494] focus:outline-none focus:ring-2 focus:ring-[#074B70] text-lg border-2 border-white transition-all duration-200"
            tabIndex={0}
            aria-label="Enroll Now"
          >
            Enroll Now
          </motion.a>
        </div>
      </motion.section>

      {/* School at a Glance - Add subtle globe background, gather cards closer */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto px-2 py-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center relative"
        aria-label="School at a Glance"
      >
        <div className="absolute inset-0 pointer-events-none z-0 opacity-10 bg-[url('/globe.svg')] bg-center bg-no-repeat bg-contain" />
        {/* Animated numbers for stats */}
        <AnimatedStat icon="🎓" end={528} label="Students" />
        <AnimatedStat icon="👩‍🏫" end={31} label="Teachers" />
        <AnimatedStat icon="🏫" end={11} label="Grades" />
        <AnimatedStat icon="🏅" end={89} suffix="%" label="Graduation Rate" />
      </motion.section>

      {/* About Section - Organized and Engaging */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        id="about"
        className="max-w-4xl mx-auto px-4 py-16 bg-gradient-to-r from-[#F4EEE2] to-white rounded-3xl shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-center border-l-8 border-[#FFD700] relative overflow-visible"
        aria-label="About Mentor-school"
      >
        {/* Elegant watermark */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <Image src="/logo/logo.png" alt="Mentor-school crest" width={320} height={320} className="opacity-10 w-80 h-80 object-contain" />
        </div>
        <div className="flex-1 relative z-10 flex flex-col items-center md:items-start justify-center">
          <div className="flex items-center mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl font-bold text-[#074B70]">🔍</span>
            </div>
            <h2 className="text-4xl font-bold text-[#074B70] font-playfair">
              About Mentor-school
            </h2>
          </div>
          
          {/* Accordion-style content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]"
            >
              <h3 className="text-2xl font-semibold text-[#074B70] mb-2">Who We Are</h3>
              <p className="text-base text-[#074B70] text-justify">
                Founded on April 8, 2021 in Jizzakh city, Mentor-school is a Non-governmental education organization and vibrant, forward-thinking community where tradition meets ambition. As a primarily online course delivery institution, we are proud of our talented teachers, diverse student body, and our commitment to academic excellence and personal growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]"
            >
              <h3 className="text-2xl font-semibold text-[#074B70] mb-2">Our Mission</h3>
              <p className="text-base text-[#074B70] text-justify">
                To empower every student to become a confident, curious, and compassionate leader—ready to succeed in Uzbekistan and beyond.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]"
            >
              <h3 className="text-2xl font-semibold text-[#074B70] mb-2">What Makes Us Unique</h3>
              <ul className="list-disc pl-6 text-base text-[#074B70]">
                <li className="mb-2">Small class sizes (around 48 students) and personal attention for every child</li>
                <li className="mb-2">Modern facilities and a safe, welcoming campus</li>
                <li className="mb-2">Strong partnership with families and the Jizzakh community</li>
                <li className="mb-2">Focus on both academic achievement and character development</li>
                <li>Rich extracurriculars: arts, sports, clubs, and more</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-block bg-[#FFD700] text-[#074B70] px-4 py-1 rounded-full font-bold shadow-lg border-2 border-white text-sm">Prestige</span>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
              alt="Students in a classroom at Mentor-school"
              width={320}
              height={180}
              className="rounded-xl shadow-xl object-cover w-80 h-48 border-4 border-[#FFD700]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#074B70] text-white rounded-xl p-6 shadow-lg w-full text-center border-t-4 border-[#FFD700] relative"
          >
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl">"</span>
            <span className="block font-playfair text-xl mb-2">A Message from the Principal</span>
            <span className="block text-base italic text-justify">"At Mentor-school, we believe every child in Jizzakh deserves a nurturing, challenging, and joyful education. Our dedicated teachers and staff work closely with families to help each student discover their strengths, build confidence, and prepare for a bright future. We are proud of our school's spirit, our commitment to tradition and innovation, and the close-knit community we have built together. I warmly invite you to visit us and experience Mentor-school for yourself."</span>
            <span className="block mt-2 text-xs italic">— Mirkhond Mamadiyorov, Principal</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-[#074B70] opacity-30 my-8" />

      {/* Academics Section - Enhanced with better images and design */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        id="academics"
        className="max-w-6xl mx-auto px-4 py-16 relative"
        aria-label="Academics"
      >
        <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-[#F4EEE2] via-[#e0e7ef] to-[#F4EEE2] opacity-60" style={{maskImage: 'radial-gradient(circle at 50% 50%, white 60%, transparent 100%)'}} />
        <h2 className="text-4xl font-bold mb-10 text-center text-[#074B70] relative z-10">Academics</h2>
        <div className="grid grid-cols-1 gap-10 place-items-center relative z-10">
          
          

          {/* High School */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px #074B7040" }}
            className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center border-t-4 border-[#074B70] transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="High school students in science lab"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[#074B70]">High School</h3>
            <p className="text-[#074B70] text-center mb-6">
              Preparing students for success with:
              <ul className="list-disc pl-6 mt-2 text-[#074B70]">
                <li>Advanced academic programs</li>
                <li>Leadership opportunities</li>
                <li>College preparation</li>
                <li>Specialized electives</li>
              </ul>
            </p>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#074B70] text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:bg-[#156494] focus:outline-none focus:ring-2 focus:ring-[#074B70] text-sm transition-all duration-300"
            >
              View Curriculum
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-[#074B70] opacity-30 my-8" />

      {/* Events Section - Enhanced with better design and interactivity */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        id="events"
        className="max-w-6xl mx-auto px-4 py-16 relative"
        aria-label="Events"
      >
        <div className="absolute inset-0 pointer-events-none z-0 bg-[url('/calendar.svg')] bg-right-top bg-no-repeat opacity-10" />
        <h2 className="text-4xl font-bold mb-10 text-center text-[#074B70] relative z-10">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px #074B7040" }}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-t-4 border-[#074B70] transition-all duration-300 cursor-pointer"
          >
            <div className="text-[#074B70] font-bold text-2xl mb-4">Apr 20</div>
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e09?auto=format&fit=crop&w=400&q=80"
                alt="Science fair setup"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 rounded-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#074B70]">Spring Science Fair</h3>
            <p className="text-[#074B70] text-center">Join us for our annual Science Fair! Students from all grades will showcase their innovative projects. Families welcome.</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-[#FFD700] text-[#074B70] px-3 py-1 rounded-full text-sm">All Ages</span>
              <span className="bg-[#FFD700] text-[#074B70] px-3 py-1 rounded-full text-sm">Free</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px #074B7040" }}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-t-4 border-[#074B70] transition-all duration-300 cursor-pointer"
          >
            <div className="text-[#074B70] font-bold text-2xl mb-4">May 5</div>
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="/logo/logo.png"
                alt="Open House"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 rounded-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#074B70]">Open House</h3>
            <p className="text-[#074B70] text-center">Prospective families are invited to tour Mentor-school, meet our teachers, and learn about our programs.</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-[#FFD700] text-[#074B70] px-3 py-1 rounded-full text-sm">Families</span>
              <span className="bg-[#FFD700] text-[#074B70] px-3 py-1 rounded-full text-sm">RSVP Required</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px #074B7040" }}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border-t-4 border-[#074B70] transition-all duration-300 cursor-pointer"
          >
            <div className="text-[#074B70] font-bold text-2xl mb-4">Now</div>
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                alt="Summer Camp"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 rounded-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#074B70]">Summer Camp Registration</h3>
            <p className="text-[#074B70] text-center">Registration is now open for our summer enrichment camps! Explore STEM, arts, sports, and more.</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-[#FFD700] text-[#074B70] px-3 py-1 rounded-full text-sm">All Ages</span>
              <span className="bg-[#FFD700] text-[#074B70] px-3 py-1 rounded-full text-sm">Limited Spots</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-0.5 bg-[#074B70] opacity-30 my-8" />

      {/* Contact Section - Enhanced with better design and interactivity */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        id="contact"
        className="max-w-6xl mx-auto px-4 py-16 bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-12 items-center relative"
        aria-label="Contact Mentor-school"
      >
        <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-[#F4EEE2] via-[#e0e7ef] to-[#F4EEE2] opacity-20" />
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl font-bold mb-6 text-[#074B70]">Get in Touch</h2>
          <form className="flex flex-col gap-6" aria-label="Contact form">
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <label htmlFor="name" className="absolute -top-3 left-3 bg-white px-2 text-[#074B70] font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full border border-[#074B70] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#074B70] text-[#074B70] placeholder:text-[#074B70]/50"
                required
                aria-required="true"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <label htmlFor="email" className="absolute -top-3 left-3 bg-white px-2 text-[#074B70] font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-[#074B70] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#074B70] text-[#074B70] placeholder:text-[#074B70]/50"
                required
                aria-required="true"
                placeholder="Your email"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <label htmlFor="message" className="absolute -top-3 left-3 bg-white px-2 text-[#074B70] font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-[#074B70] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#074B70] text-[#074B70] placeholder:text-[#074B70]/50"
                required
                aria-required="true"
                placeholder="Your message"
              ></textarea>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#074B70] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#156494] focus:outline-none focus:ring-2 focus:ring-[#074B70] transition-all duration-300"
              aria-label="Send message"
            >
              Send Message
            </motion.button>
          </form>
          <div className="mt-8 text-[#074B70] space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[#074B70]">📍</span>
              <span>Jizzakh city, C2a (Sdva)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#074B70]">📞</span>
              <span>+998970905575</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#074B70]">📧</span>
              <span>mirkhond.mamadiyorov@mentor-schools.com</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80"
              alt="Map of Jizzakh"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 rounded-lg" />
          </div>
          <div className="flex gap-4 mt-4">
            <span className="bg-[#FFD700] text-[#074B70] px-4 py-2 rounded-full text-sm font-medium">Accredited: Non-governmental education organization</span>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full bg-[#F4EEE2] py-6">
        <div className="max-w-6xl mx-auto px-4 text-right text-[#074B70]">
          <p>&copy; 2021-2025 Mentor-school. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

type AnimatedStatProps = {
  icon: string;
  end: number;
  suffix?: string;
  label: string;
};

const AnimatedStat = ({ icon, end, suffix = "", label }: AnimatedStatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <div ref={ref} className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-[#C2B280] transition-all duration-200 cursor-pointer group overflow-visible">
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl bg-[#F4EEE2] border-2 border-[#C2B280] rounded-full w-12 h-12 flex items-center justify-center shadow group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-4xl font-bold text-[#074B70] mt-8 font-playfair">{count}{suffix}</span>
      <span className="text-[#074B70] mt-2 text-lg font-medium">{label}</span>
    </div>
  );
}; 