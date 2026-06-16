import React, { useCallback } from 'react';
import { useConversation } from '@elevenlabs/react';

/**
 * ElevenLabsWidget - Versión SDK de React
 * Utiliza el SDK oficial para mayor estabilidad, menor latencia y control total del estado.
 */
const ElevenLabsWidget = ({ agentId }) => {
  const finalAgentId = agentId || import.meta.env.VITE_ELEVENLABS_AGENT_ID;

  const conversation = useConversation({
    onConnect: () => console.info('✅ Conectado a ElevenLabs'),
    onDisconnect: () => console.info('ℹ️ Desconectado de ElevenLabs'),
    onMessage: (message) => console.debug('Mensaje recibido:', message),
    onError: (error) => console.error('❌ Error en la conversación:', error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Solicitar permiso de micrófono antes de iniciar
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Iniciar la conversación con el agente
      await conversation.startSession({
        agentId: finalAgentId,
      });
    } catch (error) {
      console.error('No se pudo iniciar la conversación:', error);
    }
  }, [conversation, finalAgentId]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  if (!finalAgentId) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={conversation.status === 'connected' ? stopConversation : startConversation}
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          conversation.status === 'connected'
            ? 'bg-rose-500 text-white animate-pulse'
            : 'bg-linear-to-tr from-teal-500 to-blue-600 text-white'
        }`}
        title={conversation.status === 'connected' ? 'Terminar conversación' : 'Hablar con Claudio (IA)'}
      >
        {conversation.status === 'connecting' ? (
          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
        ) : conversation.status === 'connected' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="22" y1="2" x2="2" y2="22"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
        )}
      </button>

      {/* Indicador de estado visual (opcional) */}
      {conversation.status === 'connected' && (
        <div className="absolute bottom-20 right-0 bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-xl border border-teal-100 dark:border-teal-900 text-xs font-bold whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-500 rounded-full animate-ping" />
            {conversation.isSpeaking ? 'Claudio está hablando...' : 'Escuchando...'}
          </span>
        </div>
      )}
    </div>
  );
};

export default ElevenLabsWidget;
