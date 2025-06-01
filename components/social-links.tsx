"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nicole-hendah/",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
    color: "hover:text-blue-700",
  },
  {
    name: "YouTube",
    href: "#",
    icon: Youtube,
    color: "hover:text-red-600",
  },
  {
    name: "Medium",
    href: "#",
    icon: ExternalLink,
    color: "hover:text-gray-700",
  },
]

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
        >
          <Button variant="ghost" size="sm" asChild className={`transition-colors ${social.color}`}>
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              <social.icon className="w-5 h-5" />
              <span className="sr-only">{social.name}</span>
            </Link>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
