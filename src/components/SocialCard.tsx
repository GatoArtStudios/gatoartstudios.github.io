import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SocialCardProps {
  icon: React.ReactNode;
  name: string;
  username: string;
  link: string;
  delay?: number;
  className?: string;
}

const SocialCard = ({ icon, name, username, link, delay = 0, className }: SocialCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group flex items-center gap-4 p-4 rounded-xl bg-cyan-50/80 backdrop-blur-sm border border-cyan-200 hover:shadow-lg hover:scale-105 transition-all duration-300",
        className
      )}
    >
      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{name}</span>
        <span className="text-sm text-gray-500">{username}</span>
      </div>
    </motion.a>
  );
};

export default SocialCard;