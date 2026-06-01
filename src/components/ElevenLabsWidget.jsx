import React, { useEffect } from 'react';

/**
 * Componente ElevenLabs ConvAI Widget
 * Integra el widget de chat de voz/texto de ElevenLabs
 */
const ElevenLabsWidget = ({ agentId }) => {
  useEffect(() => {
    // Resolver agentId desde prop o variable de entorno
    const resolvedAgentId = agentId || import.meta.env.VITE_ELEVENLABS_AGENT_ID;
    if (!resolvedAgentId) {
      console.warn('ElevenLabsWidget: falta VITE_ELEVENLABS_AGENT_ID en variables de entorno');
      return;
    }

    // URL del widget (sin versión específica para evitar problemas de MIME)
    const widgetUrl = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

    // Verificar si el custom element ya está definido o si el script ya se está cargando
    const elementAlreadyDefined = customElements.get('elevenlabs-convai');
    const scriptAlreadyLoading = window.ElevenLabsConvAIScriptLoading;
    const scriptAlreadyLoaded = window.ElevenLabsConvAIScriptLoaded;

    if (!elementAlreadyDefined && !scriptAlreadyLoading && !scriptAlreadyLoaded) {
      window.ElevenLabsConvAIScriptLoading = true;

      const loadScript = () => {
        const script = document.createElement('script');
        script.src = widgetUrl;
        script.async = true;
        script.type = 'text/javascript';

        script.onload = () => {
          window.ElevenLabsConvAIScriptLoaded = true;
          window.ElevenLabsConvAIScriptLoading = false;
          if (import.meta.env.DEV) console.info('ElevenLabs ConvAI Widget cargado exitosamente');
        };

        script.onerror = () => {
          window.ElevenLabsConvAIScriptLoading = false;
          console.error('Error al cargar ElevenLabs ConvAI Widget desde', widgetUrl);
        };

        document.head.appendChild(script);
      };

      if ('requestIdleCallback' in window) {
        // @ts-ignore
        requestIdleCallback(loadScript, { timeout: 2000 });
      } else {
        // Fallback: cargar tras un pequeño delay
        setTimeout(loadScript, 1000);
      }
    }
  }, [agentId]);

  const finalAgentId = agentId || import.meta.env.VITE_ELEVENLABS_AGENT_ID;
  if (!finalAgentId) return null;

  // El web component se renderiza directamente; el script lo inicializará
  return (
    <elevenlabs-convai agent-id={finalAgentId} />
  );
};

export default ElevenLabsWidget;
