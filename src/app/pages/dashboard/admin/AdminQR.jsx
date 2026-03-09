import { useState } from "react";
import { motion } from "framer-motion";
import {
  QrCode,
  Clock,
  Printer,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  X,
} from "lucide-react";
import Button from "@/app/components/ui/button";

export default function AdminQR() {
  const [qrData, setQrData] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateQR = () => {
    setLoading(true);
    setTimeout(() => {
      const token = `ERP-ATTENDANCE-${Date.now()}`;
      setQrData({
        token,
        qrUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(token)}&color=1E3A8A&bgcolor=FFFFFF`,
        expiresAt: "1:00 PM",
      });
      setLoading(false);
    }, 1000);
  };

  const clearQR = () => setQrData(null);
  const printQR = () => window.print();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <QrCode className="w-4 h-4 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Attendance Protocol
          </span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-slate-900">
          Security Key
        </h1>
        <p className="text-slate-500 font-light mt-1">
          Generate dynamic attendance keys for church entrance scanning.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[50px] border border-slate-100 shadow-2xl shadow-blue-900/5 overflow-hidden"
      >
        <div className="p-10 md:p-20 text-center">
          {!qrData ? (
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-slate-50 rounded-[35px] flex items-center justify-center mx-auto mb-10 shadow-inner">
                <QrCode className="w-10 h-10 text-slate-200" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                No Active Key
              </h2>
              <p className="text-slate-400 font-light leading-relaxed mb-10">
                Generate a temporary security key for today's service. Members
                will scan this to verify their presence in the sanctuary.
              </p>

              <button
                onClick={generateQR}
                disabled={loading}
                className="w-full h-18 bg-slate-900 text-white rounded-[24px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl shadow-blue-900/10"
              >
                {loading ? (
                  <RefreshCw className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    Initialize QR Protocol
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex px-4 py-1.5 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-10 border border-green-100 items-center gap-2 animate-pulse">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Session Active
              </div>

              <div className="bg-white p-10 rounded-[45px] shadow-2xl shadow-blue-900/10 border border-slate-50 mb-10 relative group">
                <div className="absolute inset-0 bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" />
                <img
                  src={qrData.qrUrl}
                  alt="Attendance QR"
                  className="w-64 h-64 relative z-10 mix-blend-multiply"
                />
              </div>

              <div className="flex items-center gap-4 text-slate-400 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Expires at {qrData.expiresAt}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Encrypted
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={printQR}
                  className="h-14 px-10 border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <Printer className="w-5 h-5" />
                  Print Key
                </button>

                <button
                  onClick={clearQR}
                  className="h-14 px-10 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center gap-2"
                >
                  <X className="w-5 h-5" />
                  Terminate Session
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-slate-50 px-10 py-6 border-t border-slate-100 flex justify-between items-center text-slate-400">
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Parish Security Level 4
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Asokoro Mega Parish
          </span>
        </div>
      </motion.div>
    </div>
  );
}
