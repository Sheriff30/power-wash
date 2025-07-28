import React from "react";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized power washing solutions for every industry and
              application.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-16">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Solutions by Industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Manufacturing */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">
                  Manufacturing
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Heavy-duty equipment for industrial cleaning and maintenance
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Equipment cleaning</li>
                  <li>• Floor maintenance</li>
                  <li>• Safety compliance</li>
                </ul>
              </div>

              {/* Construction */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">
                  Construction
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  High-pressure cleaning for construction sites and equipment
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Equipment cleaning</li>
                  <li>• Surface preparation</li>
                  <li>• Debris removal</li>
                </ul>
              </div>

              {/* Automotive */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">
                  Automotive
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Specialized cleaning for automotive facilities and fleets
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fleet washing</li>
                  <li>• Shop cleaning</li>
                  <li>• Engine cleaning</li>
                </ul>
              </div>

              {/* Food & Beverage */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">
                  Food & Beverage
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Sanitary cleaning solutions for food processing facilities
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sanitary cleaning</li>
                  <li>• FDA compliance</li>
                  <li>• Equipment sanitization</li>
                </ul>
              </div>

              {/* Municipal */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">
                  Municipal
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Public works and infrastructure cleaning solutions
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Street cleaning</li>
                  <li>• Public facilities</li>
                  <li>• Infrastructure maintenance</li>
                </ul>
              </div>

              {/* Agriculture */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">
                  Agriculture
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Cleaning solutions for agricultural operations
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Equipment cleaning</li>
                  <li>• Facility maintenance</li>
                  <li>• Sanitation systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Specialized Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Custom Equipment
                </h3>
                <p className="text-gray-600 mb-4">
                  We design and manufacture custom power washing equipment
                  tailored to your specific industry requirements. Our
                  engineering team works closely with you to understand your
                  unique challenges.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry-specific modifications</li>
                  <li>• Custom pressure and flow rates</li>
                  <li>• Specialized attachments</li>
                  <li>• Safety compliance features</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Training & Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training programs ensure your team can safely
                  and effectively operate your equipment. Our support doesn't
                  end with the sale.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• On-site training</li>
                  <li>• Safety certification</li>
                  <li>• Maintenance workshops</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our industry experts to discuss your specific needs
              </p>
              <div className="space-y-4">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold mr-4">
                  Get a Quote
                </button>
                <button className="bg-white text-red-600 border border-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
