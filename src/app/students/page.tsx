"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function StudentsPage() {
  return (
    <div className="flex flex-col gap-12 bg-[#F4EEE2]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full min-h-screen relative flex items-center justify-center text-center shadow bg-gradient-to-b from-[#074B70] via-[#C2B280] to-[#F4EEE2] overflow-hidden"
        aria-label="Students Hero"
      >
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="rounded-full border-4 border-white ring-4 ring-[#C2B280] shadow-xl p-2 mb-8 mx-auto flex items-center justify-center w-44 h-44 overflow-hidden bg-white">
            <Image src="/logo/logo.png" alt="Mentor-school logo" width={144} height={144} className="w-40 h-40 object-cover rounded-full" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">For Students</h1>
          <p className="text-2xl md:text-3xl text-white mb-6 font-medium">Where Dreams Take Flight</p>
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 10, 0] }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#074B70] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#C2B280] transition-all duration-300 text-lg"
          >
            Start Your Journey
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-32 h-32 rounded-full bg-[#074B70]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#C2B280]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute w-64 h-64 bg-[#074B70] rounded-full opacity-10"
              initial={{ x: -200, y: -200 }}
              animate={{
                x: [0, 200, 0],
                y: [0, 200, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Student Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-3xl shadow flex flex-col gap-8 items-center relative"
        aria-label="Student Experience"
      >
        <h2 className="text-3xl font-bold text-[#074B70] mb-6">Student Life</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Clubs & Activities</h3>
            <p className="text-[#074B70] mb-4">Join our vibrant community of clubs and activities:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Science Olympiad</li>
              <li>Art Club</li>
              <li>Music Ensemble</li>
              <li>Sports Teams</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Leadership</h3>
            <p className="text-[#074B70] mb-4">Develop your leadership skills through:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Student Council</li>
              <li>Class Officers</li>
              <li>Club Leadership</li>
              <li>Peer Mentoring</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Events & Competitions</h3>
            <p className="text-[#074B70] mb-4">Participate in exciting events:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Science Fair</li>
              <li>Art Show</li>
              <li>Sports Tournaments</li>
              <li>Academic Competitions</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Academic Support Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-[#F4EEE2] rounded-3xl shadow flex flex-col gap-6 items-center"
        aria-label="Academic Support"
      >
        <h2 className="text-3xl font-bold text-[#074B70] mb-6">Academic Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Tutoring Services</h3>
            <p className="text-[#074B70] mb-4">Get help with:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Homework Assistance</li>
              <li>Study Skills</li>
              <li>Test Preparation</li>
              <li>Project Support</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Counseling Services</h3>
            <p className="text-[#074B70] mb-4">Support for:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Academic Planning</li>
              <li>College Preparation</li>
              <li>Personal Development</li>
              <li>Study Strategies</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Learning Resources</h3>
            <p className="text-[#074B70] mb-4">Access:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Library</li>
              <li>Computer Labs</li>
              <li>Online Resources</li>
              <li>Research Tools</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Study Spaces</h3>
            <p className="text-[#074B70] mb-4">Find:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Quiet Study Areas</li>
              <li>Group Study Rooms</li>
              <li>Learning Centers</li>
              <li>Resource Rooms</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Student Success Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-3xl shadow flex flex-col gap-6 items-center"
        aria-label="Student Success"
      >
        <h2 className="text-3xl font-bold text-[#074B70] mb-6">Student Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Career Development</h3>
            <p className="text-[#074B70] mb-4">Prepare for your future with:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Career Guidance</li>
              <li>Internship Opportunities</li>
              <li>College Preparation</li>
              <li>Professional Workshops</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Student Recognition</h3>
            <p className="text-[#074B70] mb-4">Achievements celebrated through:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Honor Roll</li>
              <li>Awards Ceremonies</li>
              <li>Student Publications</li>
              <li>Competitive Successes</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Student Support</h3>
            <p className="text-[#074B70] mb-4">We support you with:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Learning Assistance</li>
              <li>Personal Development</li>
              <li>Peer Mentoring</li>
              <li>Wellness Programs</li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Student Voice</h3>
            <p className="text-[#074B70] mb-4">Make your voice heard through:</p>
            <ul className="list-disc pl-6 text-[#074B70]">
              <li>Student Council</li>
              <li>Class Meetings</li>
              <li>Student Forums</li>
              <li>Feedback Opportunities</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Student Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-[#F4EEE2] rounded-3xl shadow flex flex-col gap-6 items-center"
        aria-label="Student Testimonials"
      >
        <h2 className="text-3xl font-bold text-[#074B70] mb-6">Student Voices</h2>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <p className="text-[#074B70] mb-4 italic">&ldquo;The teachers at Mentor-school are amazing! They make learning fun and help us reach our goals.&rdquo;</p>
            <p className="text-sm text-[#074B70]">- Maria, Grade 8</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <p className="text-[#074B70] mb-4 italic">&ldquo;I love all the clubs and activities we have. It&rsquo;s great to try new things and make friends!&rdquo;</p>
            <p className="text-sm text-[#074B70]">- Ahmed, Grade 6</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Student Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-3xl shadow flex flex-col gap-8 items-center relative"
        aria-label="Student Experience"
      >
        <h2 className="text-4xl font-bold text-[#074B70] mb-8">Your Journey Awaits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 10, 0] }}
            whileTap={{ scale: 0.95 }}
            className="p-8 bg-[#F4EEE2] rounded-2xl shadow-lg border border-[#E5E5E5] flex flex-col items-center text-center relative"
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-[#074B70] flex items-center justify-center mb-6"
              whileHover={{ scale: 1.2, rotate: [0, 360] }}
              transition={{ duration: 1 }}
            >
              <span className="text-white text-3xl">🌟</span>
            </motion.div>
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Unleash Your Potential</h3>
            <p className="text-[#074B70] mb-6">Join our award-winning clubs and activities. From robotics to debate, find your passion and excel.</p>
            <a href="#clubs" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 bg-[#F4EEE2] rounded-2xl shadow-lg border border-[#E5E5E5] flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#074B70] flex items-center justify-center mb-6">
              <span className="text-white text-3xl">👑</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Lead the Way</h3>
            <p className="text-[#074B70] mb-6">Develop your leadership skills through our student government, mentorship programs, and community initiatives.</p>
            <a href="#leadership" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 bg-[#F4EEE2] rounded-2xl shadow-lg border border-[#E5E5E5] flex flex-col items-center text-center"
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-[#074B70] flex items-center justify-center mb-6"
              whileHover={{ scale: 1.2, rotate: [0, 360] }}
              transition={{ duration: 1 }}
            >
              <span className="text-white text-5xl">🏆</span>
            </motion.div>
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Compete & Excel</h3>
            <p className="text-[#074B70] mb-6">Participate in regional and national competitions. From science fairs to sports, showcase your talents on the big stage.</p>
            <a href="#competitions" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-3xl shadow flex flex-col gap-6 items-center"
        aria-label="Contact Us"
      >
        <h2 className="text-3xl font-bold text-[#074B70] mb-6">Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Academic Questions</h3>
            <p className="text-[#074B70] mb-4">Contact your teachers or counselors for academic support.</p>
            <a href="#academics" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Student Services</h3>
            <p className="text-[#074B70] mb-4">Get help with student life and support services.</p>
            <a href="#services" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Clubs & Activities</h3>
            <p className="text-[#074B70] mb-4">Join clubs and participate in activities.</p>
            <a href="#activities" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-[#F4EEE2] rounded-xl shadow-sm border border-[#E5E5E5]"
          >
            <h3 className="text-2xl font-semibold text-[#074B70] mb-4">Student Portal</h3>
            <p className="text-[#074B70] mb-4">Access your grades, schedule, and resources.</p>
            <a href="#portal" className="text-[#074B70] hover:text-[#156494] font-medium">Learn More →</a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 