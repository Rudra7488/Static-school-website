import React from 'react';
import AdmissionFormComponent from '../components/AdmissionForm';

const AdmissionForm = () => {
  return (
    <div className="pt-20 pb-8 min-h-screen bg-[#fffcfd]">
      <div className="max-w-7xl mx-auto px-5">
        <AdmissionFormComponent showHeader={true} />
      </div>
    </div>
  );
};

export default AdmissionForm;
