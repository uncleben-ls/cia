import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Clock, BookOpen, Wallet } from 'lucide-react';

export default function CourseDetail() {
  const { courseId } = useParams(); // Gets 'fashion-design' from URL

  // Mock data - In a real app, this comes from an API
  const courseInfo = {
    title: "Diploma in Fashion & Design",
    duration: "2 Years (Full Time)",
    fee: "M15,500 / Semester",
    modules: ["Textile Science", "Pattern Drafting", "Fashion Illustration", "Business of Fashion"],
    requirements: ["COSC/LGCSE with 4 Credits", "Portfolio Review", "Interest in Creative Arts"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ----------------------------------------------------------------------
          CATEGORY: COURSE HEADER
          Purpose: Displaying core identity of the specific program.
      ----------------------------------------------------------------------- */}
      <div className="bg-cia-maroon py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-[10px] font-black text-cia-yellow uppercase tracking-[0.4em] mb-4">Academic Programs</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter max-w-4xl">
            {courseInfo.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* ----------------------------------------------------------------------
            CATEGORY: COURSE CONTENT (Left)
            Purpose: Detailed modules and requirements.
        ----------------------------------------------------------------------- */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h3 className="text-2xl font-black text-cia-black uppercase mb-6 flex items-center gap-3">
              <BookOpen className="text-cia-maroon" /> Curriculum Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseInfo.modules.map(mod => (
                <div key={mod} className="p-4 bg-slate-50 border-l-4 border-cia-yellow font-bold text-sm">
                  {mod}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-cia-black uppercase mb-6 flex items-center gap-3">
              <CheckCircle className="text-cia-maroon" /> Entry Requirements
            </h3>
            <ul className="space-y-4">
              {courseInfo.requirements.map(req => (
                <li key={req} className="flex items-start gap-3 text-gray-600 font-medium">
                  <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1"><CheckCircle size={12}/></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ----------------------------------------------------------------------
            CATEGORY: ADMISSION SIDEBAR (Right)
            Purpose: Pricing and immediate action.
        ----------------------------------------------------------------------- */}
        <div className="space-y-6">
          <div className="bg-cia-black p-8 text-white shadow-2xl">
            <h4 className="text-cia-yellow font-black uppercase text-xs tracking-widest mb-6">Course Information</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="text-gray-400" size={20}/>
                <div><p className="text-[10px] uppercase opacity-50">Duration</p><p className="font-bold">{courseInfo.duration}</p></div>
              </div>
              <div className="flex items-center gap-4">
                <Wallet className="text-gray-400" size={20}/>
                <div><p className="text-[10px] uppercase opacity-50">Tuition Fee</p><p className="font-bold">{courseInfo.fee}</p></div>
              </div>
            </div>
            <button className="w-full mt-10 bg-cia-yellow text-cia-black py-4 font-black uppercase text-xs hover:bg-white transition-all">
              Apply for this Course
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}