const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex gap-6 mb-2 md:mb-0">
          <a href="#about" className="hover:underline focus:outline-none focus:underline" tabIndex={0} aria-label="About">About</a>
          <a href="#academics" className="hover:underline focus:outline-none focus:underline" tabIndex={0} aria-label="Academics">Academics</a>
          <a href="#news" className="hover:underline focus:outline-none focus:underline" tabIndex={0} aria-label="News">News</a>
          <a href="#contact" className="hover:underline focus:outline-none focus:underline" tabIndex={0} aria-label="Contact">Contact</a>
        </div>
        <div className="text-sm">&copy; {new Date().getFullYear()} Mentor-school. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer; 