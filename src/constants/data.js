import { 
  BrainCircuit, Users, Dna, Zap, Activity, HeartHandshake, Video 
} from 'lucide-react';

export const NAV_LINKS = [
  { id: 'inicio', name: 'Inicio', href: '#home' },
  { id: 'filosofia', name: 'Filosofía', href: '#about' },
  { id: 'especialidades', name: 'Especialidades', href: '#specialties' },
  { id: 'servicios', name: 'Servicios', href: '#services' },
  { id: 'formacion', name: 'Formación', href: '#education' },
];

export const SPECIALTIES = [
  { id: 'mente-cuerpo', title: 'Terapias Mente-Cuerpo', icon: BrainCircuit, color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'hover:border-indigo-300', desc: 'Conexión profunda entre procesos psicológicos y el bienestar físico.' },
  { id: 'constelaciones', title: 'Constelaciones Familiares', icon: Users, color: 'text-teal-600', bg: 'bg-teal-100', border: 'hover:border-teal-300', desc: 'Resolución de dinámicas ocultas en el sistema familiar que afectan el presente.' },
  { id: 'transgeneracional', title: 'Terapia Transgeneracional', icon: Dna, color: 'text-blue-600', bg: 'bg-blue-100', border: 'hover:border-blue-300', desc: 'Sanación de patrones heredados y lealtades familiares inconscientes.' },
  { id: 'decodificacion', title: 'Decodificación Biológica', icon: Zap, color: 'text-rose-600', bg: 'bg-rose-100', border: 'hover:border-rose-300', desc: 'Bioneuroemoción para entender el origen emocional de los síntomas físicos.' },
];

export const CONDITIONS = [
  { id: 'estres', name: 'Estrés' },
  { id: 'autoestima', name: 'Problemas de autoestima' },
  { id: 'fobias', name: 'Fobias' },
  { id: 'insomnio', name: 'Insomnio' },
  { id: 'cefalea', name: 'Cefalea' },
  { id: 'abusos', name: 'Trastornos por abusos sexuales' },
  { id: 'menopausia', name: 'Trastorno por menopausia' },
  { id: 'pareja', name: 'Crisis en la relación de pareja' },
  { id: 'familia', name: 'Crisis en relación padres e hijos' },
  { id: 'adicciones', name: 'Adicciones' }
];

export const SERVICES = [
  { id: 'complementaria', name: 'Consulta Terapeuta Complementario', price: '$35.000', icon: HeartHandshake },
  { id: 'bioneuroemocion', name: 'Bioneuroemoción', price: '$35.000 - $50.000', icon: Zap },
  { id: 'constelaciones', name: 'Constelaciones Familiares', price: '$35.000', icon: Users },
  { id: 'online', name: 'Consulta online', price: '$35.000', icon: Video },
  { id: 'hipnosis', name: 'Hipnosis', price: '$35.000', icon: BrainCircuit },
  { id: 'coaching', name: 'Coaching en adicciones', price: '$35.000', icon: Activity },
  { id: 'parejas', name: 'Terapia de parejas', price: '$35.000', icon: Users },
];

export const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00', '18:00'
];

export const EDUCATION = [
  { id: 'bioneuroemocion-inst', title: 'Bioneuroemoción', inst: 'ENRIC CORBERA INSTITUTE ESPAÑA', desc: 'Avalado por la Facultad de Medicina, Universidad Nacional del Nordeste de Argentina.' },
  { id: 'holistica-inst', title: 'Terapia Holística', inst: 'COLEGIO DE TERAPEUTAS HOLISTICOS', desc: 'Sexta Región, Chile.' },
  { id: 'continua-inst', title: 'Capacitación Continua', inst: 'PRO CAPACITA', desc: 'Rancagua, Chile.' },
];
