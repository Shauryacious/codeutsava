import React from "react";

function Footer() {
  const quickLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Schedule" },
    { href: "#", label: "FAQs" },
  ];

  const socialLinks = [
    { href: "#", label: "Discord" },
    { href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-dark text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            About Codeutsava 8.O
          </h2>
          <p className="mb-4">
            This Codeutsava 8.O is a premier event dedicated to pushing the
            boundaries of technology. We challenge you to innovate, collaborate,
            and build something incredible.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Join the Community
          </h2>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
          <p>Codeutsava 8.O</p>
          <p>Email: info@Codeutsava.com</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Codeutsava 8.O. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
