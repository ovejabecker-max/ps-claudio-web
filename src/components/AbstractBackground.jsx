import React from 'react';

const AbstractBackground = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none -z-10 transition-colors duration-1500 ${isDark ? 'bg-teal-950' : 'bg-slate-50'}`}>
      <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-[pulse_8s_ease-in-out_infinite] transition-colors duration-1000 ${isDark ? 'bg-teal-700' : 'bg-teal-200'}`} />
      <div className={`absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[150px] opacity-60 animate-[pulse_10s_ease-in-out_infinite_reverse] transition-colors duration-1000 ${isDark ? 'bg-cyan-900' : 'bg-blue-200'}`} />
      <div className={`absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-[pulse_12s_ease-in-out_infinite] transition-colors duration-1000 ${isDark ? 'bg-emerald-900' : 'bg-indigo-200'}`} />
    </div>
  );
};

export default AbstractBackground;
