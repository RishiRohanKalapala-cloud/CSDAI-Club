import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react"; // Social media icons

const Footer = () => {
  // Social links data for easy management
  const socialLinks = [
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "#" },
  ];

  // Navigation links
  const navLinks = [
    { name: "Home", url: "#hero" },
    { name: "About", url: "#why-humanoid" },
    { name: "Showcase", url: "#showcase" },
    { name: "Join", url: "#get-access" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">
          
          {/* Column 1: Branding and Mission */}
          <div className="md:col-span-2 lg:col-span-1">
            {/* UPDATED: Removed the <img> tag for the logo */}
            <a href="#hero" className="mb-4 inline-block">
              <span className="font-bold text-xl">CSDAI Club</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of innovators in AI and Data Science at CMRIT Hyderabad.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-400 hover:text-pulse-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
            <ul className="space-y-3">
               <li>
                 <a href="mailto:contact@csdaiclub.com" className="text-gray-400 hover:text-pulse-400 transition-colors duration-300">
                    contact@csdaiclub.com
                  </a>
               </li>
               <li>
                 <p className="text-gray-400">CMRIT Hyderabad, India</p>
               </li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
             <h4 className="font-semibold text-white mb-4">Follow Us</h4>
             <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700/50 rounded-full text-gray-400 hover:bg-pulse-500 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Credits and Copyright */}
        <div className="border-t border-gray-700/50 py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left mb-4 sm:mb-0">
            © {new Date().getFullYear()} CSDAI Club CMRIT. All Rights Reserved.
          </p>
          <p className="text-center text-gray-500 text-sm">
            Designed & Developed by{" "}
            <a 
              href="https://www.linkedin.com/in/rishi-rohan-k/" // Optional: Add a link to a portfolio or LinkedIn
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-gray-400 hover:text-pulse-400 transition-colors duration-300"
            >
              Rishi Rohan Kalapala
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;