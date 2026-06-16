import React, { useEffect } from 'react';

/**
 * ElevenLabsWidget - Versión Actualizada
 * Utiliza el script de unpkg.com y el elemento personalizado <elevenlabs-convai>
 * con el Agent ID específico proporcionado por el usuario.
 */
const ElevenLabsWidget = () => {
  // Usa un valor por defecto seguro si la variable de entorno falla
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID || "agent_2301kt0dtdnbfbbthekvkxvvz9a5";

  useEffect(() => {
    const scriptId = 'elevenlabs-widget-script';
    
    // Solo agregar si no existe
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script); // Es mejor inyectar scripts del cuerpo al final
    }

    // Nota: Como este es un widget de terceros global, 
    // a menudo es mejor no eliminarlo en el cleanup para evitar parpadeos 
    // al navegar entre páginas, a menos que tu aplicación sea una SPA compleja.
  }, []);

  return (
    <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
  );
};

export default ElevenLabsWidget;
