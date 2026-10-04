import {
  Award, BookOpen, Briefcase, Building2, ClipboardCheck, Code2, Coffee,
  Database, Globe, GraduationCap, Shirt, Sparkles, Terminal, Trophy,
  UtensilsCrossed, Wrench,
} from 'lucide-react'

// Maps the icon names used in portfolioData.js to Lucide components
export const iconMap = {
  Award, BookOpen, Briefcase, Building2, ClipboardCheck, Code2, Coffee,
  Database, Globe, GraduationCap, Shirt, Sparkles, Terminal, Trophy,
  UtensilsCrossed, Wrench,
}

export const getIcon = (name) => iconMap[name] || Code2
