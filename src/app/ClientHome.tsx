"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ClientHome() {
  return (
    <div className="flex flex-col bg-white overflow-hidden font-inter selection:bg-[#074B70] selection:text-white">
      {/* Fancy Blurred Hero Section */}
      <section
        className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center pt-20"
        aria-label="Hero"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-[#074B70]"
        >
          {/* Graduation Video */}
          <video 
            src="/videos/7945420-hd_1920_1080_25fps.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#074B70] via-[#074B70]/70 to-[#074B70]/30"></div>
        </motion.div>
        
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <span className="bg-[#C2B280] text-[#074B70] px-4 py-1.5 rounded-sm text-sm font-bold tracking-widest uppercase shadow-xl">
              Enrollment Open 2026-2027
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white font-playfair tracking-tight leading-tight drop-shadow-2xl"
          >
            A Tradition of <br className="hidden md:block"/> Excellence in Education
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white mb-10 font-medium leading-relaxed max-w-3xl drop-shadow-lg"
          >
            Empowering minds and inspiring futures. We foster intellectual curiosity and rigorous character development in every student.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-white text-[#074B70] px-10 py-4 rounded-sm font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 text-lg uppercase tracking-wider"
            >
              Schedule a Call
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto text-center bg-transparent border-2 border-white text-white px-10 py-4 rounded-sm font-bold hover:bg-white hover:text-[#074B70] transition-all duration-300 text-lg uppercase tracking-wider"
            >
              Discover More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modern Statistics */}
      <motion.section 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 -mt-16 sm:-mt-20 mx-auto w-[92%] max-w-6xl"
      >
        <div className="bg-white rounded shadow-2xl shadow-[#074B70]/20 border-t-4 border-[#C2B280] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-gray-200">
            <div className="flex flex-col items-center">
              <AnimatedStat end={528} />
              <span className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest block">Students</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedStat end={31} />
              <span className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest block">Teachers</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedStat end={11} />
              <span className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest block">Grades</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedStat end={100} suffix="%" />
              <span className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest block">Success Rate</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:py-32 bg-white flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 relative w-full aspect-[4/3] max-w-2xl mx-auto"
          >
            <div className="absolute inset-0 bg-[#C2B280] translate-x-4 translate-y-4 rounded z-0"></div>
            <video
              src="/videos/5644125-hd_1920_1080_30fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full h-full object-cover rounded shadow-lg"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div>
              <span className="text-[#C2B280] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Discover Our School</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#074B70] font-playfair leading-tight">
                A Message from the Principal
              </h2>
            </div>
            
            <div className="text-[#1E293B] space-y-6 text-lg font-normal leading-relaxed">
              <p>
                &quot;At Mentor-school, we believe every child deserves a nurturing, challenging, and joyful education. Located in the heart of Jizzakh, our dedicated faculty works closely with families to help each student discover their unique strengths and capabilities.&quot;
              </p>
              <p>
                Founded on April 8, 2021, Mentor-school is a proud <strong className="font-bold text-[#074B70]">non-governmental educational organization</strong>. We have quickly grown into a forward-thinking community where tradition meets ambition. Our small class sizes ensure personal attention, providing a safe and inspiring campus for students to thrive academically and socially.
              </p>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <p className="font-playfair text-2xl text-[#074B70] font-bold">Mirkhond Mamadiyorov</p>
              <p className="text-[#C2B280] text-sm uppercase tracking-widest font-bold mt-1">Principal</p>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="bg-[#F8FAFC] py-24 px-6 md:py-32 border-y border-gray-200 overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <span className="text-[#C2B280] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#074B70] font-playfair">Academic Programs</h2>
            <p className="mt-6 text-[#1E293B] max-w-2xl mx-auto text-lg font-normal">
              Comprehensive education from Grades 1 to 11, designed to foster intellectual curiosity and critical thinking.
            </p>
            <div className="w-24 h-1 bg-[#C2B280] mx-auto mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Primary School",
                grades: "Grades 1-4",
                desc: "Focus on foundational literacy, numeracy, and social-emotional development in a nurturing, structured environment.",
                video: "5734831-hd_1920_1080_30fps.mp4"
              },
              {
                title: "Middle School",
                grades: "Grades 5-8",
                desc: "Smooth transition into specialized subjects, fostering independent critical thinking and collaborative problem-solving skills.",
                video: "13413787_3840_2160_60fps.mp4"
              },
              {
                title: "High School",
                grades: "Grades 9-11",
                desc: "A rigorous, well-rounded education focused on advanced subject mastery, leadership, and elite university readiness.",
                video: "8143237-uhd_4096_2160_24fps.mp4"
              }
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white rounded overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#074B70]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <video 
                    src={`/videos/${prog.video}`} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 delay-100" 
                  />
                  <div className="absolute top-4 left-4 bg-white text-[#074B70] px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest z-20 shadow">
                    {prog.grades}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#074B70] font-playfair mb-4">{prog.title}</h3>
                  <p className="text-[#1E293B] font-normal leading-relaxed mb-8 flex-1">{prog.desc}</p>
                  <a href="#" className="inline-flex items-center text-[#074B70] font-bold text-sm uppercase tracking-widest hover:text-[#C2B280] transition-colors">
                    Learn More <span className="ml-2">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 px-6 md:py-32 bg-white overflow-hidden flex justify-center flex-col">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-gray-200 pb-8"
          >
            <div>
              <span className="text-[#C2B280] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Campus Life</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#074B70] font-playfair">News & Events</h2>
            </div>
            <a href="#" className="bg-[#074B70] text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#053652] hover:shadow-xl transition-all duration-300 shadow-md">
              View Calendar
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {[
              { date: "APR 20", title: "Spring Science Fair", desc: "Students showcase innovative projects. Families welcome.", category: "Academic" },
              { date: "MAY 05", title: "Open House", desc: "Prospective families are invited to tour Mentor-school campus.", category: "Admissions" },
              { date: "JUN 15", title: "Summer Camp Setup", desc: "Registration opens for our summer enrichment programs.", category: "Community" }
            ].map((event, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="flex gap-6 group cursor-pointer items-start p-6 rounded hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
              >
                <div className="flex-shrink-0 text-center bg-[#F8FAFC] border border-gray-200 p-4 rounded-sm min-w-[100px]">
                  <span className="block text-[#C2B280] font-bold text-sm tracking-widest mb-1">{event.date.split(" ")[0]}</span>
                  <span className="block text-3xl font-playfair font-bold text-[#074B70]">{event.date.split(" ")[1]}</span>
                </div>
                <div className="pt-1">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">{event.category}</span>
                  <h3 className="text-xl font-bold text-[#074B70] mb-3 group-hover:text-[#C2B280] transition-colors">{event.title}</h3>
                  <p className="text-[#1E293B] font-normal text-sm leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="contact" className="py-24 bg-[#074B70] overflow-hidden flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 text-center text-white w-full"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8 text-white">Ready to Join Us?</h2>
          <div className="w-24 h-1 bg-[#C2B280] mx-auto mb-8"></div>
          <p className="text-xl text-white mb-12 font-normal max-w-2xl mx-auto leading-relaxed">
            We are currently accepting inquiries for the upcoming academic year. Take the first step towards an exceptional education by speaking with our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="bg-[#C2B280] text-[#074B70] px-12 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg uppercase tracking-wider cursor-pointer">
               Schedule a Call
             </button>
             <button className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-sm font-bold text-lg hover:bg-white/10 hover:shadow-xl transition-all duration-300 shadow-none uppercase tracking-wider cursor-pointer">
               Schedule a Tour
             </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Clean Stats Component
const AnimatedStat = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-playfair text-[#074B70]">
      {count}{suffix}
    </div>
  );
};