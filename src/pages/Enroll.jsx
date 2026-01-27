import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, ArrowLeft, Upload, User, BookOpen, FileText } from 'lucide-react';
import { getNextIntake } from '../utils/intakeManager';

export default function Enroll() {
  const intake = getNextIntake();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedCourse: '',
    intakePeriod: intake.name,
    qualification: '',
    idDocument: null
  });

  // --- COURSE LIST ---
  const allCourses = [
    { id: 'fashion', name: "Diploma in Fashion & Design", isShort: false },
    { id: 'music', name: "Music Production & Theory", isShort: false },
    { id: 'makeup', name: "Cert. in Professional Makeup", isShort: true },
    { id: 'photography', name: "Short Course: Photography", isShort: true },
  ];

  // Filter based on the dynamic intake manager
  const availableCourses = intake.isShortOnly 
    ? allCourses.filter(c => c.isShort) 
    : allCourses;

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting to Cograbig DB:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center space-y-6 max-w-md animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-black uppercase text-cia-black">Application Received!</h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            Thank you, <span className="text-cia-maroon font-bold">{formData.fullName}</span>. 
            Our admissions team for the <span className="font-bold">{intake.name}</span> intake will review your documents and contact you within 3-5 working days.
          </p>
          <button onClick={() => window.location.href = '/'} className="bg-cia-black text-white px-8 py-3 font-black uppercase text-xs">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT SIDE: PROGRESS & STATUS */}
        <div className="w-full md:w-80 bg-cia-black p-10 text-white">
          <h1 className="text-2xl font-black uppercase tracking-tighter mb-8 leading-tight">
            Apply for <br /><span className="text-cia-yellow">{intake.name}</span>
          </h1>
          
          <div className="space-y-8 relative">
            <div className={`flex items-center gap-4 ${step >= 1 ? 'text-cia-yellow' : 'text-gray-600'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs ${step >= 1 ? 'border-cia-yellow' : 'border-gray-600'}`}>1</div>
              <span className="text-[10px] font-black uppercase tracking-widest">Personal Info</span>
            </div>
            <div className={`flex items-center gap-4 ${step >= 2 ? 'text-cia-yellow' : 'text-gray-600'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs ${step >= 2 ? 'border-cia-yellow' : 'border-gray-600'}`}>2</div>
              <span className="text-[10px] font-black uppercase tracking-widest">Academic Path</span>
            </div>
            <div className={`flex items-center gap-4 ${step >= 3 ? 'text-cia-yellow' : 'text-gray-600'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs ${step >= 3 ? 'border-cia-yellow' : 'border-gray-600'}`}>3</div>
              <span className="text-[10px] font-black uppercase tracking-widest">Documents</span>
            </div>
          </div>

          {intake.isShortOnly && (
            <div className="mt-20 p-4 bg-cia-maroon/30 border border-cia-maroon rounded-sm">
              <p className="text-[9px] font-black uppercase text-cia-yellow leading-relaxed">
                Note: This window is for Certificates & Short Courses only.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: THE FORM CONTENT */}
        <div className="flex-1 p-10">
          <form onSubmit={handleSubmit} className="h-full flex flex-col">
            
            {/* STEP 1: PERSONAL DETAILS */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-2 text-cia-maroon mb-6">
                   <User size={20} /> <h2 className="font-black uppercase text-sm tracking-widest">Basic Information</h2>
                </div>
                <div className="space-y-4">
                  <input 
                    required 
                    type="text" 
                    placeholder="Full Legal Name" 
                    className="w-full p-4 bg-slate-50 border border-gray-200 outline-none focus:border-cia-maroon text-sm font-bold"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                  <input 
                    required 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 bg-slate-50 border border-gray-200 outline-none focus:border-cia-maroon text-sm font-bold"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    required 
                    type="tel" 
                    placeholder="Phone Number (+266...)" 
                    className="w-full p-4 bg-slate-50 border border-gray-200 outline-none focus:border-cia-maroon text-sm font-bold"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            )}

            {/* STEP 2: COURSE SELECTION */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-2 text-cia-maroon mb-6">
                   <BookOpen size={20} /> <h2 className="font-black uppercase text-sm tracking-widest">Select Program</h2>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Available Courses for {intake.name}</label>
                  <select 
                    required
                    className="w-full p-4 bg-slate-50 border border-gray-200 outline-none focus:border-cia-maroon text-sm font-bold"
                    value={formData.selectedCourse}
                    onChange={(e) => setFormData({...formData, selectedCourse: e.target.value})}
                  >
                    <option value="">Select a Program</option>
                    {availableCourses.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                  
                  <textarea 
                    placeholder="Briefly tell us why you want to study this course..." 
                    className="w-full p-4 bg-slate-50 border border-gray-200 outline-none focus:border-cia-maroon text-sm font-bold h-32"
                    onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                  ></textarea>
                </div>
              </div>
            )}

            {/* STEP 3: DOCUMENT UPLOAD */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-2 text-cia-maroon mb-6">
                   <FileText size={20} /> <h2 className="font-black uppercase text-sm tracking-widest">Upload Credentials</h2>
                </div>
                <div className="border-2 border-dashed border-gray-200 p-10 text-center space-y-4 hover:border-cia-maroon transition-colors cursor-pointer relative">
                  <Upload className="mx-auto text-gray-300" size={32} />
                  <p className="text-xs font-bold text-gray-400">Upload Certified ID Copy & Highest Qualification (PDF/JPG)</p>
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setFormData({...formData, idDocument: e.target.files[0]})}
                  />
                  {formData.idDocument && <p className="text-[10px] text-green-600 font-black uppercase italic tracking-widest">File Selected: {formData.idDocument.name}</p>}
                </div>
                <div className="flex items-center gap-2 p-4 bg-yellow-50 rounded-sm">
                   <CheckCircle size={16} className="text-yellow-600" />
                   <p className="text-[9px] font-bold text-yellow-800 uppercase">I confirm that all information provided is true and accurate.</p>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="mt-auto pt-10 flex justify-between">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 hover:text-cia-black">
                  <ArrowLeft size={14} /> Back
                </button>
              )}
              {step < 3 ? (
                <button 
                  type="button" 
                  onClick={handleNext} 
                  disabled={step === 1 && !formData.fullName}
                  className="ml-auto bg-cia-black text-white px-8 py-4 text-[10px] font-black uppercase flex items-center gap-2 hover:bg-cia-maroon disabled:opacity-50 transition-all shadow-[4px_4px_0px_0px_rgba(128,0,0,1)] active:shadow-none"
                >
                  Next Step <ArrowRight size={14} />
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="ml-auto bg-cia-maroon text-white px-8 py-4 text-[10px] font-black uppercase flex items-center gap-2 hover:bg-cia-black transition-all shadow-[4px_4px_0px_0px_rgba(255,215,0,1)] active:shadow-none"
                >
                  Submit Application
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}