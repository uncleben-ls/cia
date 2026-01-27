import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  // --- LOGIN LOGIC ---
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating a secure backend authentication delay
    setTimeout(() => {
      setLoading(false);
      // For now, we redirect to the dashboard we built
      navigate('/admin-dashboard'); 
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cia-black flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 left-0 w-full h-1 bg-cia-maroon"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cia-maroon/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        
        {/* CATEGORY: BRANDING */}
        <div className="text-center">
          <img src="/src/assets/logo.png" alt="CIA Logo" className="h-20 mx-auto mb-6" />
          <h1 className="text-white text-2xl font-black uppercase tracking-tighter">Staff Portal</h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">
            Authorized Personnel Only
          </p>
        </div>

        {/* CATEGORY: AUTHENTICATION FORM */}
        <div className="bg-white p-10 shadow-2xl rounded-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Employee ID / Email</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="text" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-100 outline-none focus:border-cia-maroon text-sm font-bold transition-all"
                  placeholder="e.g. CIA-ADMIN-01"
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Secure Password</label>
                <button type="button" className="text-[9px] font-black uppercase text-cia-maroon hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="password" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-100 outline-none focus:border-cia-maroon text-sm font-bold transition-all"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            {/* Login Button */}
            <button 
              disabled={loading}
              type="submit" 
              className="w-full bg-cia-black text-white py-4 font-black uppercase text-xs flex items-center justify-center gap-3 hover:bg-cia-maroon transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Verifying Credentials...
                </>
              ) : (
                <>
                  Access Dashboard <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* CATEGORY: SECURITY NOTICE */}
        <div className="flex items-center gap-3 justify-center text-gray-500">
          <ShieldCheck size={16} />
          <p className="text-[9px] font-bold uppercase tracking-widest">
            Encryption Enabled (AES-256)
          </p>
        </div>
      </div>
    </div>
  );
}