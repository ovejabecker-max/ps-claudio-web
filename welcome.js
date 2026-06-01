#!/usr/bin/env node

/**
 * Script de bienvenida para el ChatWidget Vapi
 * Ejecuta: node welcome.js
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  
  // Colores
  cyan: '\x1b[36m',
  teal: '\x1b[38;5;6m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  white: '\x1b[37m',
  blue: '\x1b[34m',
};

const icon = {
  success: '✅',
  warning: '⚠️ ',
  error: '❌',
  info: 'ℹ️ ',
  arrow: '→',
  star: '⭐',
  rocket: '🚀',
  tada: '🎉',
  heart: '❤️ ',
  check: '✓',
};

console.clear();

console.log(`
${colors.bright}${colors.cyan}╔════════════════════════════════════════════════════════════╗${colors.reset}
${colors.bright}${colors.cyan}║                                                            ║${colors.reset}
${colors.bright}${colors.cyan}║         ${icon.rocket} ChatWidget Premium - Vapi AI Integration  ${icon.rocket}        ║${colors.reset}
${colors.bright}${colors.cyan}║                                                            ║${colors.reset}
${colors.bright}${colors.cyan}║              Creado para InteliMark - Mar 1, 2025            ║${colors.reset}
${colors.bright}${colors.cyan}║                                                            ║${colors.reset}
${colors.bright}${colors.cyan}╚════════════════════════════════════════════════════════════╝${colors.reset}
`);

console.log(`${colors.bright}${colors.green}✓ INSTALACIÓN COMPLETADA${colors.reset}\n`);

console.log(`${colors.cyan}📦 Archivos Creados:${colors.reset}`);
console.log(`   ${icon.check} src/components/ChatWidget.jsx`);
console.log(`   ${icon.check} src/hooks/useVapiIntegration.js`);
console.log(`   ${icon.check} src/utils/vapiIntegration.js`);
console.log(`   ${icon.check} .env.example (referencia)\n`);

console.log(`${colors.cyan}📝 Documentación Creada:${colors.reset}`);
console.log(`   ${icon.check} CHAT_WIDGET_README.md (documentación principal)`);
console.log(`   ${icon.check} IMPLEMENTATION_GUIDE.md (guía paso a paso)`);
console.log(`   ${icon.check} IMPLEMENTATION_CHECKLIST.md (checklist validación)`);
console.log(`   ${icon.check} ASSISTANT_INSTRUCTIONS.txt (prompt para Vapi)`);
console.log(`   ${icon.check} SUMMARY.md (resumen de cambios)\n`);

console.log(`${colors.bright}${colors.yellow}⚙️  PRÓXIMOS PASOS:${colors.reset}\n`);

console.log(`${colors.white}1. CREAR CUENTA EN VAPI${colors.reset}`);
console.log(`   ${colors.dim}Ir a: https://dashboard.vapi.ai${colors.reset}`);
console.log(`   ${colors.dim}Registrarse y obtener API Key\n`);

console.log(`${colors.white}2. CREAR ASISTENTE IA${colors.reset}`);
console.log(`   ${colors.dim}En dashboard: New Assistant${colors.reset}`);
console.log(`   ${colors.dim}Name: "Asistente Claudio Ballesteros"${colors.reset}`);
console.log(`   ${colors.dim}Copiar instrucciones de: ASSISTANT_INSTRUCTIONS.txt${colors.reset}`);
console.log(`   ${colors.dim}Seleccionar voz en español\n`);

console.log(`${colors.white}3. CONFIGURAR .env.local${colors.reset}`);
console.log(`   ${colors.dim}Crear archivo .env.local en raíz del proyecto${colors.reset}`);
console.log(`   ${colors.dim}VITE_VAPI_API_KEY=tu_key_aqui${colors.reset}`);
console.log(`   ${colors.dim}VITE_VAPI_ASSISTANT_ID=tu_id_aqui\n`);

console.log(`${colors.white}4. INICIAR SERVIDOR${colors.reset}`);
console.log(`   ${colors.dim}npm run dev${colors.reset}`);
console.log(`   ${colors.dim}Visitar: http://localhost:5174\n`);

console.log(`${colors.white}5. PROBAR CHAT${colors.reset}`);
console.log(`   ${colors.dim}Haz click en botón flotante (esquina inferior derecha)${colors.reset}`);
console.log(`   ${colors.dim}Prueba escribir un mensaje${colors.reset}`);
console.log(`   ${colors.dim}Verifica que recibes respuesta\n`);

console.log(`${colors.bright}${colors.green}📚 DOCUMENTACIÓN RECOMENDADA:${colors.reset}\n`);
console.log(`   1. Lee: IMPLEMENTATION_GUIDE.md (5-10 min)`);
console.log(`   2. Sigue: IMPLEMENTATION_CHECKLIST.md`);
console.log(`   3. Consulta: CHAT_WIDGET_README.md (referencia)\n`);

console.log(`${colors.bright}${colors.teal}🎨 CARACTERÍSTICAS INCLUIDAS:${colors.reset}\n`);
console.log(`   ${icon.star} Diseño premium y moderno`);
console.log(`   ${icon.star} Animaciones avanzadas y fluidas`);
console.log(`   ${icon.star} Soporte Vapi AI integrado`);
console.log(`   ${icon.star} Chat de texto + Llamadas de voz`);
console.log(`   ${icon.star} Responsive design (mobile-first)`);
console.log(`   ${icon.star} Modo claro/oscuro automático`);
console.log(`   ${icon.star} 3 quick actions contextuales`);
console.log(`   ${icon.star} Indicadores de estado en tiempo real\n`);

console.log(`${colors.bright}${colors.blue}💡 TIPS IMPORTANTES:${colors.reset}\n`);
console.log(`   ⚡ El diseño es premium, pero depende de las instrucciones`);
console.log(`      que le des a Vapi. Revisa ASSISTANT_INSTRUCTIONS.txt\n`);
console.log(`   ⚡ Guarda tus credenciales en .env.local (no en código)\n`);
console.log(`   ⚡ Prueba primero en desarrollo antes de producción\n`);
console.log(`   ⚡ Revisa las transcripciones para mejorar el asistente\n`);

console.log(`${colors.bright}${colors.cyan}📞 RECURSOS:${colors.reset}\n`);
console.log(`   ${colors.dim}Documentación Vapi: https://docs.vapi.ai${colors.reset}`);
console.log(`   ${colors.dim}React Docs: https://react.dev${colors.reset}`);
console.log(`   ${colors.dim}Tailwind CSS: https://tailwindcss.com\n`);

console.log(`${colors.bright}${colors.green}${icon.tada} ¡TODO LISTO!${colors.reset}\n`);
console.log(`${colors.dim}Tu chat está ready para producción. Solo necesitas${colors.reset}`);
console.log(`${colors.dim}configurar Vapi y agregar tu .env.local.\n`);

console.log(`${colors.cyan}¿Preguntas? Revisa los archivos .md para documentación completa.${colors.reset}\n`);

console.log(`${colors.bright}Hecho con ${icon.heart}por InteliMark - Agencia de Alta Capacidad Tecnológica${colors.reset}\n`);
