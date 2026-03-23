/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer className="w-full bg-[#074B70] text-white pt-16 pb-8 border-t-4 border-[#C2B280]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center p-1">
              <img src="/logo/logo.png" alt="Mentor-school" className="w-full h-full object-contain" />
            </div>
            <span className="font-playfair font-bold text-2xl tracking-tight">Mentor-school</span>
          </div>
          <p className="text-white/80 leading-relaxed max-w-sm">
            Empowering Minds, Inspiring Futures. A Tradition of Excellence in Education, fostering intellectual curiosity and personal growth.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#C2B280]">Quick Links</h4>
          <ul className="space-y-3 text-white/80">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#academics" className="hover:text-white transition-colors">Academics</a></li>
            <li><a href="#news" className="hover:text-white transition-colors">News & Events</a></li>
            <li><a href="#admissions" className="hover:text-white transition-colors">Admissions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#C2B280]">Contact</h4>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <span className="mt-1">📍</span>
              <span>Sharof Rashidov 87V<br/>Jizzakh City</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+998 97 090 5575</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>info@mentor-schools.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Mentor-school. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;