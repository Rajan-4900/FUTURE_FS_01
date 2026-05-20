import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: <FiGithub size={22} />, href: "https://github.com/Rajan-4900", name: "GitHub", external: true },
  { icon: <FiLinkedin size={22} />, href: "https://www.linkedin.com/in/rajan-l/", name: "LinkedIn", external: true },
  { icon: <FiInstagram size={22} />, href: "https://www.instagram.com/its_.me._rajan?igsh=MXdiaWVzMDN3NDBoMg==", name: "Instagram", external: true },
  { icon: <FiMail size={22} />, href: "mailto:rajan91480@gmail.com", name: "Email", external: false },
];

/**
 * SocialIcons Component
 * Reusable component for displaying social media links with hover animations.
 */
export default function SocialIcons({ className = "", iconSize = 22 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`flex items-center gap-6 ${className}`}
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.name}
          title={social.name}
          {...(social.external && { target: "_blank", rel: "noopener noreferrer" })}
          className="p-3 rounded-full dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border dark:text-gray-400 text-gray-600 hover:text-white hover:bg-primary-orange dark:hover:bg-sky-500 hover:border-primary-orange dark:hover:border-sky-500 transition-all transform hover:-translate-y-2 shadow-lg"
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  );
}
