import React from 'react';
import { GraduationCap } from 'lucide-react';
import FadeIn from '../FadeIn';
import { EDUCATION } from '../../constants/data';

const Education = () => {
  return (
    <section id="education" data-theme="light" className="py-24 bg-slate-50/50 border-t border-slate-200/60 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-teal-600 rounded-xl text-white shadow-lg shadow-teal-600/20">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Formación Académica</h2>
          </div>
        </FadeIn>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {EDUCATION.map((edu, idx) => (
            <FadeIn key={edu.id} delay={idx * 150}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-lg">{edu.inst}</span>
                    <span className="text-teal-600 font-semibold text-sm mb-2">{edu.title}</span>
                    <p className="text-slate-600 text-sm">{edu.desc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
