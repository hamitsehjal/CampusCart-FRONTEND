import React from 'react';
import Link from 'next/link'
const PartnerConfirmation = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="p-1 bg-gradient-to-r from-red-300 via-red-600 to-red-900 rounded shadow-lg">
        <div className="bg-white p-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl text-campus-text font-cinzel mb-8">Thank You For</h2>
            <h3 className="text-3xl text-campus-text font-cinzel mb-8">Submitting Your Details</h3>
            <p className="text-xl font-noto_serif font-medium mb-6">Our team will contact you.</p>
            <Link href="/" className="mt-3 inline-block w-96 bg-campus-red text-white font-noto_serif font-medium py-2 px-4 rounded-md hover:bg-campus-accent">
              Browse →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerConfirmation;
