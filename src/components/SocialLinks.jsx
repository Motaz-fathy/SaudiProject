import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-6 mb-16">
      <a href="#" className="hover:text-[#4CAF50] transition">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#4CAF50] transition">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#4CAF50] transition">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#4CAF50] transition">
        <Facebook className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;