import React from "react";
import { motion } from "framer-motion";

interface ProfileSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ProfileSection = ({ title, description, children }: ProfileSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </motion.section>
  );
};

export default ProfileSection;