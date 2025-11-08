import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export function SocialLinks() {
  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <div className="px-6 pb-8">
      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-110"
          >
            <social.icon className="w-4 h-4 text-slate-400 hover:text-cyan-400 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}
