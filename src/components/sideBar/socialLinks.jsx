import { Linkedin, Github } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export function SocialLinks() {
  const socials = [
    { icon: SiWhatsapp, href: 'https://wa.me/+5584991161676', label: 'WhatsApp' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lucas-azevedo-costa-9b469734a', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/LucasAzevedoCosta', label: 'GitHub' },
  ];

  return (
    <div className="px-6 pb-8">
      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
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
