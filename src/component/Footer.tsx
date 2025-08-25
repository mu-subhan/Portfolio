'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/mu-subhan', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/muhammad-subhan-321821231/', label: 'LinkedIn' },
    // { icon: <FaEnvelope />, url: 'mailto:muhammadsubhan8934@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Left: Branding */}
        <div>
          <h3 className="text-xl font-bold mb-2">Muhammad Subhan</h3>
          <p className="text-slate-400 mb-4">Software Engineer</p>
          <div className="space-y-1 text-slate-400">
            <p className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:muhammadsubhan8934@gmail.com">muhammadsubhan8934@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Lahore, Pakistan
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> Open to Work
            </p>
          </div>
        </div>

        {/* Middle: Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Social & CTA */}
        <div>
          <h4 className="font-semibold mb-3">Let&apos;s Connect</h4>
          <div className="flex gap-4 mb-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a
            href="mailto:muhammadsubhan8934@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-500 text-xs">
        © {currentYear} Muhammad Subhan • All rights reserved
      </div>
    </footer>
  );
}
