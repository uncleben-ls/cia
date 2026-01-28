import React, { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Upload,
  User,
  BookOpen,
  FileText,
  GraduationCap,
  Plus,
  Trash2
} from 'lucide-react';

/* -----------------------------------------
   OPTIONAL: Intake helper
------------------------------------------ */
const getNextIntake = () => {
  return {
    name: "2026 Intake",
    isShortOnly: false
  };
};

export default function Enroll() {
  const intake = getNextIntake();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* -----------------------------------------
     FORM STATE
  ------------------------------------------ */
  const [formData, setFormData] = useState({
    // Step 1
    fullNames: '',
    surname: '',
    gender: '',
    maritalStatus: '',
    dateOfBirth: '',
    nationality: '',
    idPassportNumber: '',
    country: '',
    address: '',
    telNo: '',
    email: '',
    disability: '',
    disabilityDescription: '',
    dietNeeds: '',
    nextOfKinName: '',
    nextOfKinNumber: '',

    // Step 2
    firstChoice: '',
    secondChoice: '',
    modeOfStudy: '',
    highestQualification: '',

    // Step 3
    primaryHighSchools: [
      { school: '', fromYear: '', toYear: '', qualification: '', file: null }
    ],
    tertiaryInstitutions: [
      { institution: '', fromYear: '', toYear: '', qualification: '', gpa: '', file: null }
    ],
    trainingCourses: [
      { course: '', institution: '', fromYear: '', toYear: '', file: null }
    ],

    // Step 4 (NEW)
    sponsorType: '',
    sponsorName: '',
    sponsorContact: '',
    sponsorEmail: '',
    sponsorAddress: '',
    sponsorID: '',

    // Step 5
    documents: null
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  /* -----------------------------------------
     COURSE LISTS
  ------------------------------------------ */
  const shortCourses = ["Makeup Artistry", "Special Effects Makeup", "Hairdressing", "Dance Art", "Sewing"];
  const longTermCourses = ["Certificate in Tailoring", "Certificate in Dressmaking", "Certificate in Fashion Design", "Certificate in Theatre & Dramatic Arts", "Certificate in Music Performance"];
  const diplomaCourses = ["Diploma in Fashion Design"];

  const courseGroups = {
    "Short Courses": shortCourses,
    "Long Term Certificate Courses": longTermCourses,
    "Diploma Courses": diplomaCourses
  };

    /* -----------------------------------------
     AFRICAN COUNTRIES LIST
  ------------------------------------------ */
  const africanCountries = [
    "Lesotho", // Pinned at top
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo",
    "Cote d'Ivoire",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe"
  ];

  /* -----------------------------------------
     HELPERS
  ------------------------------------------ */
  const isPDF = (file) => file && file.type === "application/pdf";
  const setFieldError = (name, message) => setErrors(prev => ({ ...prev, [name]: message }));
  const clearFieldError = (name) => setErrors(prev => ({ ...prev, [name]: undefined }));
  const markTouched = (name) => setTouched(prev => ({ ...prev, [name]: true }));

  /* -----------------------------------------
     HANDLERS
  ------------------------------------------ */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      if (file && !isPDF(file)) {
        setFieldError(name, "Only PDF files are allowed");
        return;
      }
      clearFieldError(name);
      setFormData(prev => ({ ...prev, [name]: file }));
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value) clearFieldError(name);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    markTouched(name);
    if (!value) setFieldError(name, "This field is required");
  };

  const handleNext = () => {
    if (step === 1 && !isStepOneValid(true)) return;
    if (step === 2 && !isStepTwoValid(true)) return;
    if (step === 3 && !isStepThreeValid(true)) return;
    if (step === 4 && !isStepFourValid(true)) return;
    if (step === 5 && !formData.documents) {
        setFieldError("documents", "Please upload required documents");
        return;
    }
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", formData);
    setIsSubmitted(true);
  };

  /* -----------------------------------------
     TABLE HANDLERS
  ------------------------------------------ */
  const updateRow = (section, index, field, value) => {
    const updated = [...formData[section]];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, [section]: updated }));
    if (value) clearFieldError(`${section}.${index}.${field}`);
  };

  const handleRowFile = (section, index, field, file) => {
    if (file && !isPDF(file)) {
      setFieldError(`${section}.${index}.${field}`, "PDF files only");
      return;
    }
    clearFieldError(`${section}.${index}.${field}`);
    updateRow(section, index, field, file);
  };

  const addRow = (section, emptyRow) => {
    setFormData(prev => ({ ...prev, [section]: [...prev[section], emptyRow] }));
  };

  const removeRow = (section, index) => {
    const updated = [...formData[section]];
    updated.splice(index, 1);
    setFormData(prev => ({ ...prev, [section]: updated }));
  };

  /* -----------------------------------------
     VALIDATION
  ------------------------------------------ */
  const isStepOneValid = (mark = false) => {
    const required = ['fullNames','surname','gender','maritalStatus','dateOfBirth','nationality','idPassportNumber','country','address','telNo','email','disability','nextOfKinName','nextOfKinNumber'];
    let valid = true;
    required.forEach(field => {
      if (!formData[field]) {
        valid = false;
        if (mark) { markTouched(field); setFieldError(field, "Required"); }
      }
    });
    return valid;
  };

  const isStepTwoValid = (mark = false) => {
    const required = ['firstChoice', 'modeOfStudy', 'highestQualification'];
    let valid = true;
    required.forEach(field => {
      if (!formData[field]) {
        valid = false;
        if (mark) { markTouched(field); setFieldError(field, "Required"); }
      }
    });
    return valid;
  };

  const isStepThreeValid = (mark = false) => {
    const first = formData.primaryHighSchools[0];
    const fields = ['school', 'fromYear', 'toYear', 'qualification'];
    let valid = true;
    fields.forEach(field => {
      if (!first[field]) {
        valid = false;
        if (mark) setFieldError(`primaryHighSchools.0.${field}`, "Required");
      }
    });
    return valid;
  };

  const isStepFourValid = (mark = false) => {
    const required = ['sponsorType'];
    if (formData.sponsorType && formData.sponsorType !== 'Self') {
      required.push('sponsorName', 'sponsorContact');
    }
    let valid = true;
    required.forEach(field => {
      if (!formData[field]) {
        valid = false;
        if (mark) { markTouched(field); setFieldError(field, "Required"); }
      }
    });
    return valid;
  };

  /* -----------------------------------------
     SUCCESS SCREEN
  ------------------------------------------ */
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center space-y-6 max-w-md animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-black uppercase text-gray-900">Application Received!</h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            Thank you <span className="font-bold">{formData.fullNames}</span>. Our admissions team will contact you shortly.
          </p>
          <button onClick={() => window.location.href = '/'} className="bg-black text-white px-8 py-3 font-black uppercase text-xs hover:bg-gray-800 transition">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    // Responsive padding applied here (py-12 px-6 sm:px-12 md:px-16 lg:px-24) to ensure space on all sides
    <div className="min-h-screen bg-slate-50 py-12 px-6 sm:px-12 md:px-16 lg:px-24 pb-16">
      <div className="max-w-7xl mx-auto bg-white shadow-xl border border-gray-100 flex flex-col md:flex-row rounded-sm">

        {/* --- LEFT PROGRESS PANEL --- */}
        <div className="w-full md:w-80 bg-black p-10 text-white">
          <h1 className="text-2xl font-black uppercase tracking-tight mb-8 leading-tight">Apply for <br /><span className="text-yellow-400">{intake.name}</span></h1>
          <div className="space-y-6">
            <ProgressStep active={step >= 1} number="1" label="Personal Info" />
            <ProgressStep active={step >= 2} number="2" label="Course Choice" />
            <ProgressStep active={step >= 3} number="3" label="Education" />
            <ProgressStep active={step >= 4} number="4" label="Sponsorship" />
            <ProgressStep active={step >= 5} number="5" label="Documents" />
            <ProgressStep active={step >= 6} number="6" label="Review & Submit" />
          </div>
        </div>

        {/* --- RIGHT FORM PANEL --- */}
        <div className="flex-1 p-6 md:p-12 min-h-[500px]">
          {/* PROGRESS BAR */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Application Progress</p>
              <p className="text-sm font-black text-black">{Math.round((step / 6) * 100)}%</p>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 transition-all duration-500 ease-out" style={{ width: `${(step / 6) * 100}%` }}></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="h-full flex flex-col">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <SectionHeader icon={<User size={20} />} title="Personal Information" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Full Names" required name="fullNames" value={formData.fullNames} onChange={handleChange} onBlur={handleBlur} error={errors.fullNames} touched={touched.fullNames} />
                  <Input label="Surname" required name="surname" value={formData.surname} onChange={handleChange} onBlur={handleBlur} error={errors.surname} touched={touched.surname} />
                  <Select label="Gender" required name="gender" value={formData.gender} onChange={handleChange} onBlur={handleBlur} options={["Male", "Female", "Other", "Prefer not to say"]} error={errors.gender} touched={touched.gender} />
                  <Select label="Marital Status" required name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} onBlur={handleBlur} options={["Single", "Married", "Divorced", "Widowed", "Separated", "Other"]} error={errors.maritalStatus} touched={touched.maritalStatus} />
                  <Input label="Date of Birth" required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} onBlur={handleBlur} error={errors.dateOfBirth} touched={touched.dateOfBirth} />
                  <Input label="Nationality" required name="nationality" value={formData.nationality} onChange={handleChange} onBlur={handleBlur} error={errors.nationality} touched={touched.nationality} />
                  <Input label="ID / Passport Number" required name="idPassportNumber" value={formData.idPassportNumber} onChange={handleChange} onBlur={handleBlur} error={errors.idPassportNumber} touched={touched.idPassportNumber} />
                                    <Select
                    label="Country"
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    options={africanCountries}
                    error={errors.country}
                    touched={touched.country}
                  />
                  <Textarea label="Residential Address" required name="address" value={formData.address} onChange={handleChange} onBlur={handleBlur} error={errors.address} touched={touched.address} className="md:col-span-2" />
                  <Input label="Telephone" required type="tel" name="telNo" value={formData.telNo} onChange={handleChange} onBlur={handleBlur} error={errors.telNo} touched={touched.telNo} />
                  <Input label="Email" required type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} />
                  <Select label="Disability?" required name="disability" value={formData.disability} onChange={handleChange} onBlur={handleBlur} options={["No", "Yes"]} error={errors.disability} touched={touched.disability} />
                  {formData.disability === "Yes" && <Textarea label="Describe" required name="disabilityDescription" value={formData.disabilityDescription} onChange={handleChange} onBlur={handleBlur} error={errors.disabilityDescription} touched={touched.disabilityDescription} className="md:col-span-2" />}
                  <Input label="Dietary Needs" name="dietNeeds" value={formData.dietNeeds} onChange={handleChange} />
                  <Input label="Next of Kin Name" required name="nextOfKinName" value={formData.nextOfKinName} onChange={handleChange} onBlur={handleBlur} error={errors.nextOfKinName} touched={touched.nextOfKinName} />
                  <Input label="Next of Kin Number" required type="tel" name="nextOfKinNumber" value={formData.nextOfKinNumber} onChange={handleChange} onBlur={handleBlur} error={errors.nextOfKinNumber} touched={touched.nextOfKinNumber} />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <SectionHeader icon={<BookOpen size={20} />} title="Course Applied For" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select label="First Choice" required name="firstChoice" value={formData.firstChoice} onChange={handleChange} onBlur={handleBlur} groupedOptions={courseGroups} error={errors.firstChoice} touched={touched.firstChoice} />
                  <Select label="Second Choice" name="secondChoice" value={formData.secondChoice} onChange={handleChange} groupedOptions={courseGroups} />
                  <Select label="Mode of Study" required name="modeOfStudy" value={formData.modeOfStudy} onChange={handleChange} onBlur={handleBlur} options={["Full Time", "Part Time"]} error={errors.modeOfStudy} touched={touched.modeOfStudy} />
                  <Input label="Highest Qualification" required name="highestQualification" value={formData.highestQualification} onChange={handleChange} onBlur={handleBlur} error={errors.highestQualification} touched={touched.highestQualification} />
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 pb-8">
                <SectionHeader icon={<GraduationCap size={20} />} title="Education & Experience" />
                
                {/* Secondary School Table */}
                <div className="space-y-4">
                  
                  <div className="flex justify-between items-center">
                    <h3 className="font-black uppercase text-xs tracking-widest text-gray-700">Primary or High School Qualification(s) <span className="text-red-600">*</span></h3>
                    <button type="button" onClick={() => addRow('primaryHighSchools', { institution: '', from: '', to: '', qualification: '', year: '', file: null })} className="text-xs font-black uppercase text-blue-600 flex items-center gap-1"><Plus size={14}/> Add Row</button>
                  </div>
                  <div className="overflow-x-auto border border-gray-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 text-[10px] uppercase tracking-widest text-gray-600">
                        <tr>
                          <th className="p-3 border-r">Name of School</th>
                          <th className="p-3 border-r">From (Year)</th>
                          <th className="p-3 border-r">To (Year)</th>
                          <th className="p-3 border-r">Qualification Attained</th>
                          <th className="p-3">Upload Qualification</th>
                        </tr>
                      </thead>
                                            <tbody>
                        {formData.primaryHighSchools.map((row, i) => (
                          <tr key={i} className="border-t border-gray-200">
                            <td className="p-2 border-r"><input className="w-full bg-transparent outline-none p-1" value={row.school} onChange={(e) => updateRow('primaryHighSchools', i, 'school', e.target.value)} /></td>
                            <td className="p-2 border-r">
                              <input 
                                type="text" 
                                className="w-full bg-transparent outline-none p-1" 
                                value={row.fromYear} 
                                onChange={(e) => updateRow('primaryHighSchools', i, 'fromYear', e.target.value)}
                                placeholder="e.g., 2015"
                                maxLength="4"
                              />
                            </td>
                            <td className="p-2 border-r">
                              <input 
                                type="text" 
                                className="w-full bg-transparent outline-none p-1" 
                                value={row.toYear} 
                                onChange={(e) => updateRow('primaryHighSchools', i, 'toYear', e.target.value)}
                                placeholder="e.g., 2019"
                                maxLength="4"
                              />
                            </td>
                            <td className="p-2 border-r"><input className="w-full bg-transparent outline-none p-1" value={row.qualification} onChange={(e) => updateRow('primaryHighSchools', i, 'qualification', e.target.value)} /></td>
                            <td className="p-2"><input type="file" accept="application/pdf" className="text-[10px] w-full" onChange={(e) => handleRowFile('primaryHighSchools', i, 'file', e.target.files[0])} /></td>
                            <td className="p-2">{i > 0 && <button type="button" onClick={() => removeRow('primaryHighSchools', i)} className="text-red-500"><Trash2 size={16}/></button>}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tertiary Institutions Table */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black uppercase text-xs tracking-widest text-gray-700">Tertiary Qualifications</h3>
                    <button type="button" onClick={() => addRow('tertiaryInstitutions', { institution: '', from: '', to: '', qualification: '', year: '', file: null })} className="text-xs font-black uppercase text-blue-600 flex items-center gap-1"><Plus size={14}/> Add Row</button>
                  </div>
                  <div className="overflow-x-auto border border-gray-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 text-[10px] uppercase tracking-widest text-gray-600">
                        <tr>
                          <th className="p-3 border-r">Institution</th>
                          <th className="p-3 border-r">From (Year)</th>
                          <th className="p-3 border-r">To (Year)</th>
                          <th className="p-3 border-r">Qualification</th>
                          <th className="p-3 border-r">Overall GPA</th>
                          <th className="p-3">File</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.tertiaryInstitutions.map((row, i) => (
                                                    <tr key={i} className="border-t border-gray-200">
                            <td className="p-2 border-r"><input className="w-full bg-transparent outline-none p-1" value={row.institution} onChange={(e) => updateRow('tertiaryInstitutions', i, 'institution', e.target.value)} /></td>
                            <td className="p-2 border-r">
                              <input 
                                type="text" 
                                className="w-full bg-transparent outline-none p-1" 
                                value={row.fromYear} 
                                onChange={(e) => updateRow('tertiaryInstitutions', i, 'fromYear', e.target.value)}
                                placeholder="e.g., 2020"
                                maxLength="4"
                              />
                            </td>
                            <td className="p-2 border-r">
                              <input 
                                type="text" 
                                className="w-full bg-transparent outline-none p-1" 
                                value={row.toYear} 
                                onChange={(e) => updateRow('tertiaryInstitutions', i, 'toYear', e.target.value)}
                                placeholder="e.g., 2023"
                                maxLength="4"
                              />
                            </td>
                            <td className="p-2 border-r"><input className="w-full bg-transparent outline-none p-1" value={row.qualification} onChange={(e) => updateRow('tertiaryInstitutions', i, 'qualification', e.target.value)} /></td>
                            <td className="p-2 border-r"><input className="w-full bg-transparent outline-none p-1" value={row.year} onChange={(e) => updateRow('tertiaryInstitutions', i, 'year', e.target.value)} placeholder="3.49" /></td>
                            <td className="p-2"><input type="file" accept="application/pdf" className="text-[10px] w-full" onChange={(e) => handleRowFile('tertiaryInstitutions', i, 'file', e.target.files[0])} /></td>
                            <td className="p-2">{i > 0 && <button type="button" onClick={() => removeRow('tertiaryInstitutions', i)} className="text-red-500"><Trash2 size={16}/></button>}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Training Courses Table */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-black uppercase text-xs tracking-widest text-gray-700">Other Training/Courses</h3>
                    <button type="button" onClick={() => addRow('trainingCourses', { course: '', institution: '', from: '', to: '', file: null })} className="text-xs font-black uppercase text-blue-600 flex items-center gap-1"><Plus size={14}/> Add Row</button>
                  </div>
                  <div className="overflow-x-auto border border-gray-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-100 text-[10px] uppercase tracking-widest text-gray-600">
                        <tr>
                          <th className="p-3 border-r">Course</th>
                          <th className="p-3 border-r">Institution</th>
                          <th className="p-3 border-r">From (Year)</th>
                          <th className="p-3 border-r">To (Year)</th>
                          <th className="p-3">File</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.trainingCourses.map((row, i) => (
                                                    <tr key={i} className="border-t border-gray-200">
                            <td className="p-2 border-r"><input className="w-full bg-transparent outline-none p-1" value={row.course} onChange={(e) => updateRow('trainingCourses', i, 'course', e.target.value)} /></td>
                            <td className="p-2 border-r"><input className="w-full bg-transparent outline-none p-1" value={row.institution} onChange={(e) => updateRow('trainingCourses', i, 'institution', e.target.value)} /></td>
                            <td className="p-2 border-r">
                              <input 
                                type="text" 
                                className="w-full bg-transparent outline-none p-1" 
                                value={row.fromYear} 
                                onChange={(e) => updateRow('trainingCourses', i, 'fromYear', e.target.value)}
                                placeholder="e.g., 2021"
                                maxLength="4"
                              />
                            </td>
                            <td className="p-2 border-r">
                              <input 
                                type="text" 
                                className="w-full bg-transparent outline-none p-1" 
                                value={row.toYear} 
                                onChange={(e) => updateRow('trainingCourses', i, 'toYear', e.target.value)}
                                placeholder="e.g., 2022"
                                maxLength="4"
                              />
                            </td>
                            <td className="p-2"><input type="file" accept="application/pdf" className="text-[10px] w-full" onChange={(e) => handleRowFile('trainingCourses', i, 'file', e.target.files[0])} /></td>
                            <td className="p-2">{i > 0 && <button type="button" onClick={() => removeRow('trainingCourses', i)} className="text-red-500"><Trash2 size={16}/></button>}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: SPONSOR DETAILS */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <SectionHeader icon={<User size={20} />} title="Sponsor Details" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select label="Sponsorship Type" required name="sponsorType" value={formData.sponsorType} onChange={handleChange} onBlur={handleBlur} options={["Self", "Parent/Guardian", "Organization", "Bursary/Scholarship", "Other"]} error={errors.sponsorType} touched={touched.sponsorType} className="md:col-span-2" />
                  {formData.sponsorType && formData.sponsorType !== 'Self' && (
                    <>
                      <Input label="Sponsor Name" required name="sponsorName" value={formData.sponsorName} onChange={handleChange} onBlur={handleBlur} error={errors.sponsorName} touched={touched.sponsorName} />
                      <Input label="Sponsor Contact" required name="sponsorContact" value={formData.sponsorContact} onChange={handleChange} onBlur={handleBlur} error={errors.sponsorContact} touched={touched.sponsorContact} />
                      <Input label="Sponsor Email" name="sponsorEmail" value={formData.sponsorEmail} onChange={handleChange} />
                      <Input label="Sponsor ID / Reg No" name="sponsorID" value={formData.sponsorID} onChange={handleChange} />
                      <Textarea label="Sponsor Address" name="sponsorAddress" value={formData.sponsorAddress} onChange={handleChange} className="md:col-span-2" />
                    </>
                  )}
                  {formData.sponsorType === 'Self' && <div className="md:col-span-2 p-4 bg-blue-50 text-blue-800 text-[10px] font-black uppercase border border-blue-100">You have selected Self-Sponsorship. Personal details will be used for billing.</div>}
                </div>
              </div>
            )}

            {/* STEP 5: DOCUMENTS */}
            {step === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <SectionHeader icon={<FileText size={20} />} title="Upload Documents" />
                <div className={`border-2 border-dashed p-10 text-center relative ${errors.documents ? 'border-red-600' : 'border-gray-200 hover:border-black'}`}>
                  <Upload className="mx-auto text-gray-300 mb-4" size={32} />
                  <p className="text-xs font-bold text-gray-400">Upload Certified ID Copy & Highest Qualification (PDF only)</p>
                  <input type="file" name="documents" accept="application/pdf" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleChange} />
                  {formData.documents && <p className="text-[10px] text-green-600 font-bold mt-2 uppercase tracking-widest">Selected: {formData.documents.name}</p>}
                </div>
                {errors.documents && <p className="text-[10px] text-red-600 text-center">{errors.documents}</p>}
              </div>
            )}

            {/* STEP 6: REVIEW */}
            {step === 6 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <SectionHeader icon={<CheckCircle size={20} />} title="Review Your Application" />
                <div className="bg-slate-50 border border-gray-200 divide-y divide-gray-200 rounded-sm">
                  <ReviewRow label="Full Name" value={`${formData.fullNames} ${formData.surname}`} onEdit={() => setStep(1)} />
                  <ReviewRow label="Email" value={formData.email} onEdit={() => setStep(1)} />
                  <ReviewRow label="Course Choice" value={formData.firstChoice} onEdit={() => setStep(2)} />
                  <ReviewRow label="Mode of Study" value={formData.modeOfStudy} onEdit={() => setStep(2)} />
                  <ReviewRow label="Sponsorship" value={formData.sponsorType} onEdit={() => setStep(4)} />
                  <ReviewRow label="Files Uploaded" value={formData.documents ? formData.documents.name : "Missing"} onEdit={() => setStep(5)} />
                </div>
                <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-sm mt-4">
                  <input type="checkbox" required className="mt-1 w-4 h-4" />
                  <label className="text-[10px] font-black text-yellow-900 uppercase leading-relaxed">I confirm that all information provided is true and accurate.</label>
                </div>
              </div>
            )}

            {/* NAV BUTTONS */}
            <div className="mt-auto pt-10 mb-9 flex justify-between">
              {step > 1 && <button type="button" onClick={handleBack} className="flex items-center gap-2 text-[11px] font-black uppercase text-gray-400 hover:text-black"><ArrowLeft size={14} /> Back</button>}
              {step < 6 ? (
                <button type="button" onClick={handleNext} className="ml-auto bg-black text-white px-8 py-4 text-[11px] font-black uppercase flex items-center gap-2 hover:bg-gray-800 transition shadow">Next Step <ArrowRight size={14} /></button>
              ) : (
                <button type="submit" className="ml-auto bg-yellow-500 text-black px-8 py-4 text-[11px] font-black uppercase flex items-center gap-2 hover:bg-yellow-400 transition shadow">Confirm & Submit</button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */
function ProgressStep({ active, number, label }) {
  return (
    <div className={`flex items-center gap-4 ${active ? 'text-yellow-400' : 'text-gray-500'}`}>
      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs ${active ? 'border-yellow-400' : 'border-gray-600'}`}>{number}</div>
      <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </div>
  );
}

function SectionHeader({ icon, title }) {
  return <div className="flex items-center gap-2 text-black mb-4">{icon}<h2 className="font-black uppercase text-sm tracking-widest">{title}</h2></div>;
}

function Input({ label, required, error, touched, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}{required && <span className="text-red-600 ml-1">*</span>}</label>
      <input {...props} required={required} className={`w-full p-4 bg-slate-50 border outline-none focus:border-black text-sm font-bold ${error && touched ? 'border-red-600' : 'border-gray-200'}`} />
      {error && touched && <p className="text-[10px] text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function Textarea({ label, required, error, touched, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}{required && <span className="text-red-600 ml-1">*</span>}</label>
      <textarea {...props} required={required} className={`w-full p-4 bg-slate-50 border outline-none focus:border-black text-sm font-bold h-24 ${error && touched ? 'border-red-600' : 'border-gray-200'}`} />
      {error && touched && <p className="text-[10px] text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function Select({ label, required, options, groupedOptions, error, touched, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}{required && <span className="text-red-600 ml-1">*</span>}</label>
      <select {...props} required={required} className={`w-full p-4 bg-slate-50 border outline-none focus:border-black text-sm font-bold ${error && touched ? 'border-red-600' : 'border-gray-200'}`}>
        <option value="">Select...</option>
        {groupedOptions ? Object.entries(groupedOptions).map(([group, items]) => (
          <optgroup key={group} label={group}>{items.map(item => <option key={item} value={item}>{item}</option>)}</optgroup>
        )) : options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {error && touched && <p className="text-[10px] text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function ReviewRow({ label, value, onEdit }) {
  return (
    <div className="flex justify-between items-center p-4">
      <div><p className="text-[8px] font-black uppercase text-gray-400 tracking-widest">{label}</p><p className="text-xs font-bold text-black">{value || "N/A"}</p></div>
      <button type="button" onClick={onEdit} className="text-[10px] font-black uppercase text-blue-600 hover:underline">Edit</button>
    </div>
  );
}