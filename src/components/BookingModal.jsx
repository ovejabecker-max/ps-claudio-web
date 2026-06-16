import React, { useState, useEffect } from 'react';
import { 
  X, ChevronRight, ChevronLeft, 
  Clock, User, Mail, Phone, MessageSquare, 
  CheckCircle2, Video, MapPin
} from 'lucide-react';
import { SERVICES, TIME_SLOTS } from '../constants/data';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    service: '',
    modality: 'online', // 'online' or 'presencial'
    date: null,
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Resetear el estado cuando se abre/cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleServiceSelect = (serviceName) => {
    setBookingData({ ...bookingData, service: serviceName });
    setStep(2);
  };

  const handleDateTimeSelect = () => {
    if (bookingData.date && bookingData.time) {
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Número de WhatsApp del terapeuta
    const numeroTerapeuta = "56985352846"; 
    
    // 2. Formatear la fecha seleccionada
    const fechaFormateada = bookingData.date.toLocaleDateString('es-CL', { 
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
    });

    // 3. Crear el mensaje estructurado
    const mensajeTexto = `¡Hola Ps. Claudio! Quiero agendar una sesión:
    
*Detalles del servicio:*
- Servicio: ${bookingData.service}
- Modalidad: ${bookingData.modality.toUpperCase()}
- Fecha: ${fechaFormateada}
- Hora: ${bookingData.time} hrs

*Mis datos:*
- Nombre: ${bookingData.name}
- Email: ${bookingData.email}
- Teléfono: ${bookingData.phone}
${bookingData.notes ? `- Motivo/Notas: ${bookingData.notes}` : ''}

Quedo atento a la confirmación. ¡Gracias!`;

    // 4. Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensajeTexto);
    const urlWhatsapp = `https://wa.me/${numeroTerapeuta}?text=${mensajeCodificado}`;

    // 5. Simular un pequeño tiempo de carga visual y luego redirigir
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Abrir WhatsApp en una nueva pestaña
      window.open(urlWhatsapp, '_blank');
      console.log('Datos de reserva enviados a WhatsApp');
    }, 1000);
  };

  // --- Sub-componente Calendario Simple ---
  const SimpleCalendar = ({ selectedDate, onDateSelect }) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const days = [];
    // Espacios vacíos antes del primer día
    for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isPast = date < new Date(today.setHours(0,0,0,0));
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      days.push(
        <button
          key={d}
          type="button"
          disabled={isPast || isWeekend}
          onClick={() => onDateSelect(date)}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all
            ${isSelected ? 'bg-teal-600 text-white font-bold shadow-lg scale-110' : ''}
            ${!isSelected && !isPast && !isWeekend ? 'hover:bg-teal-100 text-slate-700' : ''}
            ${isPast || isWeekend ? 'text-slate-300 cursor-not-allowed' : ''}
          `}
        >
          {d}
        </button>
      );
    }

    return (
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-slate-800">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h4>
          <div className="flex gap-2">
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} className="p-1 hover:bg-slate-100 rounded-full"><ChevronLeft className="w-5 h-5" /></button>
            <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} className="p-1 hover:bg-slate-100 rounded-full"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => <div key={day} className="text-xs font-bold text-slate-400">{day}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white/50">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">Reserva tu Sesión</h2>
            <div className="flex items-center gap-2 mt-1">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? 'w-8 bg-teal-500' : 'w-4 bg-slate-200'}`} />
              ))}
              <span className="text-xs font-bold text-teal-600 uppercase ml-2">Paso {step} de 3</span>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-in-out]">
                <CheckCircle2 className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">¡Reserva Solicitada!</h3>
              <p className="text-slate-600 max-w-md mx-auto mb-8">
                Gracias, <span className="font-bold text-teal-700">{bookingData.name}</span>. Hemos recibido tu solicitud para <span className="font-bold">{bookingData.service}</span>. 
                Se ha abierto una ventana de WhatsApp para que completes tu reserva con Claudio.
              </p>
              <button 
                type="button"
                onClick={onClose}
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-teal-600 transition-colors shadow-lg"
              >
                Finalizar
              </button>
            </div>
          ) : (
            <>
              {/* PASO 1: Servicios y Modalidad */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-8">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 block text-center">Selecciona la Modalidad</label>
                    <div className="flex p-1 bg-slate-100 rounded-2xl max-w-xs mx-auto">
                      <button 
                        type="button"
                        onClick={() => setBookingData({...bookingData, modality: 'online'})}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${bookingData.modality === 'online' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        <Video className="w-4 h-4" /> Online
                      </button>
                      <button 
                        type="button"
                        onClick={() => setBookingData({...bookingData, modality: 'presencial'})}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${bookingData.modality === 'presencial' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        <MapPin className="w-4 h-4" /> Presencial
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.name)}
                        className={`group p-5 rounded-3xl border-2 text-left transition-all hover:-translate-y-1 ${
                          bookingData.service === service.name 
                            ? 'border-teal-500 bg-teal-50/50 ring-4 ring-teal-500/10' 
                            : 'border-slate-100 bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${bookingData.service === service.name ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-teal-100 group-hover:text-teal-600'}`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1 leading-tight">{service.name}</h4>
                        <span className="text-teal-600 font-bold text-sm">{service.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* PASO 2: Fecha y Hora */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold text-sm mb-6 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Volver a servicios
                  </button>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 block">1. Elige un día</label>
                      <SimpleCalendar 
                        selectedDate={bookingData.date} 
                        onDateSelect={(date) => setBookingData({...bookingData, date})} 
                      />
                      <p className="mt-4 text-xs text-slate-400 italic">* Solo días hábiles disponibles</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 block">2. Elige una hora</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            type="button"
                            disabled={!bookingData.date}
                            onClick={() => setBookingData({...bookingData, time})}
                            className={`py-3 rounded-xl border-2 font-bold transition-all text-sm
                              ${bookingData.time === time 
                                ? 'border-teal-500 bg-teal-500 text-white' 
                                : 'border-slate-100 text-slate-600 hover:border-teal-200 hover:bg-teal-50 disabled:opacity-30 disabled:cursor-not-allowed'
                              }
                            `}
                          >
                            <Clock className="w-4 h-4 inline mr-2" />
                            {time}
                          </button>
                        ))}
                      </div>
                      
                      {bookingData.date && bookingData.time && (
                        <div className="mt-8 p-4 rounded-2xl bg-teal-50 border border-teal-100 text-teal-800 animate-in zoom-in-95">
                          <p className="text-sm font-medium">Seleccionado:</p>
                          <p className="font-bold">{bookingData.date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                          <p className="font-bold text-lg">a las {bookingData.time} hrs</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-10 flex justify-end">
                    <button
                      type="button"
                      disabled={!bookingData.date || !bookingData.time}
                      onClick={handleDateTimeSelect}
                      className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:bg-teal-600 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0"
                    >
                      Continuar <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASO 3: Formulario Final */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <button 
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold text-sm mb-6 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Volver al calendario
                  </button>

                  <div className="mb-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" /> Resumen de reserva
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400 block">Servicio:</span>
                        <span className="font-bold text-slate-700">{bookingData.service}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Modalidad:</span>
                        <span className="font-bold text-slate-700 uppercase">{bookingData.modality}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Fecha y Hora:</span>
                        <span className="font-bold text-slate-700">{bookingData.date?.toLocaleDateString()} a las {bookingData.time} hrs</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600 ml-1">Nombre Completo</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            required
                            type="text" 
                            placeholder="Ej. Juan Pérez"
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-hidden"
                            value={bookingData.name}
                            onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600 ml-1">Correo Electrónico</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            required
                            type="email" 
                            placeholder="juan@ejemplo.com"
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-hidden"
                            value={bookingData.email}
                            onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 ml-1">Teléfono de contacto</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          required
                          type="tel" 
                          placeholder="+56 9 1234 5678"
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-hidden"
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 ml-1">Motivo de consulta (opcional)</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                        <textarea 
                          rows="3"
                          placeholder="Cuéntanos brevemente en qué podemos ayudarte..."
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-hidden resize-none"
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 py-5 bg-linear-to-r from-teal-600 to-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Procesando...
                        </>
                      ) : (
                        <>Confirmar y Solicitar Reserva</>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
