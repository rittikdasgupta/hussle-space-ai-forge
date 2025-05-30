import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: 'Custom AI Agents', href: '#features' },
      { name: 'Consultation', href: '#booking' },
      { name: 'Integration Support', href: '#' },
      { name: 'Maintenance', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'Webinars', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold bg-purple-gradient bg-clip-text text-transparent mb-4">
              HussleSpace
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional AI agent development services that automate your business, engage customers 24/7, 
              and scale your operations without limits.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-2">Stay updated</h4>
              <p className="text-gray-400">Get the latest insights on AI agents and business automation.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-purple-gradient text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm">
            © 2025 HussleSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Made with ❤️ in San Francisco</span>
            <span>•</span>
            <span>SOC 2 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
