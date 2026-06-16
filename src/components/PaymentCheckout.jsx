import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import React, { useEffect, useState } from 'react';

// Leemos la clave desde .env
const PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY || 'TU_PUBLIC_KEY';

// Inicializamos solo si la clave parece válida (evita el error 404 en consola que bloquea el render)
if (PUBLIC_KEY !== 'TU_PUBLIC_KEY') {
  initMercadoPago(PUBLIC_KEY);
}

const PaymentCheckout = ({ preferenceId }) => {
  const isKeyMissing = PUBLIC_KEY === 'TU_PUBLIC_KEY';

  if (isKeyMissing) {
    return (
      <div className="mt-6 p-6 bg-red-50 rounded-3xl border border-red-200 text-center animate-in fade-in duration-500">
        <h3 className="font-bold text-red-800 mb-2">Falta Configurar Mercado Pago</h3>
        <p className="text-sm text-red-600 mb-4">
          Para que el botón de pago aparezca, debes agregar tu <strong>Public Key</strong> en el archivo <code>.env</code>.
        </p>
        <code className="block bg-red-100 p-2 rounded text-xs text-red-800 break-words mb-4">
          VITE_MERCADOPAGO_PUBLIC_KEY=tu_clave_aqui
        </code>
        <p className="text-xs text-red-500">
          Actualmente, la integración está oculta para evitar errores en la pantalla del paciente.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-6 bg-slate-50 rounded-3xl border border-teal-100 text-center animate-in fade-in duration-500">
      <h3 className="font-bold text-slate-800 mb-2">Pago Rápido y Seguro</h3>
      <p className="text-sm text-slate-500 mb-6">
        Confirma tu sesión de urgencia al instante. Aceptamos todas las tarjetas.
      </p>
      
      {/* El botón de pago solo se renderiza si existe un ID de preferencia */}
      {preferenceId ? (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      ) : (
        <div className="w-full h-12 bg-slate-200 rounded-xl animate-pulse flex items-center justify-center text-slate-400 text-sm font-bold">
          Generando link de pago...
        </div>
      )}
      
      <p className="mt-4 text-[10px] text-slate-400">
        Protección de datos garantizada por Mercado Pago.
      </p>
    </div>
  );
};

export default PaymentCheckout;
