// import React from 'react';
import { Shield, FileText, AlertCircle, Mail, Calendar, Scale, Eye, Building2 } from 'lucide-react';

// Mock SectionTitle component since it's imported
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
      {title}
    </h1>
    <div className="w-16 h-px bg-gray-900 mx-auto"></div>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const TermsConditions = () => {
  const sections = [
    {
      id: 1,
      title: "Introduction",
      icon: <FileText className="w-5 h-5" />,
      content: "Welcome to Safe Solution International. These terms and conditions outline the rules and regulations for the use of our services, products, and website. By accessing this website or availing any of our services, you accept these terms in full."
    },
    {
      id: 2,
      title: "Intellectual Property Rights",
      icon: <Shield className="w-5 h-5" />,
      content: "Unless otherwise stated, Safe Solution International and/or its licensors own the intellectual property rights for all material on the website and digital platforms. All rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms."
    },
    {
      id: 3,
      title: "Restrictions",
      icon: <AlertCircle className="w-5 h-5" />,
      content: null,
      restrictions: [
        "You are specifically restricted from publishing any website material in any other media without prior written permission.",
        "Selling, sublicensing, or commercializing any content from this site is strictly prohibited.",
        "Using this website in any way that is damaging or may be damaging to the site or user access is not permitted."
      ]
    },
    {
      id: 4,
      title: "Service Terms",
      icon: <Scale className="w-5 h-5" />,
      content: "Our services are provided \"as is,\" with all faults, and we make no express or implied representations or warranties of any kind related to this website or the materials contained on this website."
    },
    {
      id: 5,
      title: "Limitation of Liability",
      icon: <Eye className="w-5 h-5" />,
      content: "In no event shall Safe Solution International, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website."
    },
    {
      id: 6,
      title: "Changes to Terms",
      icon: <Calendar className="w-5 h-5" />,
      content: "We reserve the right to revise these terms at any time as we see fit. By using this website you are expected to review such terms on a regular basis to ensure you understand all terms and conditions."
    },
    {
      id: 7,
      title: "Contact Information",
      icon: <Mail className="w-5 h-5" />,
      content: "If you have any questions or concerns regarding these terms, please contact us at ",
      hasContact: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center mb-8">
            <Building2 className="w-8 h-8 text-gray-700 mr-3" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Legal Documentation</span>
          </div>
          <SectionTitle title="Terms & Conditions" />
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              Please read these terms and conditions carefully before using our services. 
              These terms constitute a legally binding agreement between you and Safe Solution International.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Effective Date */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <h3 className="font-semibold text-blue-900">Effective Date</h3>
              <p className="text-blue-700 text-sm mt-1">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <article key={section.id} className="border-b border-gray-100 pb-12 last:border-b-0">
              <header className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white rounded-lg mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {section.id}. {section.title}
                  </h2>
                </div>
              </header>
              
              <div className="pl-14">
                {section.content && (
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {section.content}
                    {section.hasContact && (
                      <a 
                        href="mailto:support@safesolution.com" 
                        className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-200 hover:decoration-blue-400 transition-colors duration-200"
                      >
                        support@safesolution.com
                      </a>
                    )}
                  </p>
                )}
                
                {section.restrictions && (
                  <div className="space-y-3">
                    {section.restrictions.map((restriction, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{restriction}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                Legal Inquiries
              </h3>
              <p className="text-gray-600 mb-4">
                For questions regarding these terms and conditions, please contact our legal department.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> 
                  <a href="mailto:support@safesolution.com" className="ml-2 text-blue-600 hover:text-blue-800">
                    support@safesolution.com
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Response Time:</span> 
                  <span className="ml-2">Within 48 hours</span>
                </p>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-3" />
                Company Information
              </h3>
              <p className="text-gray-600 mb-4">
                Safe Solution International is committed to providing transparent and fair terms of service.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Company:</span> 
                  <span className="ml-2">Safe Solution International</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Document Version:</span> 
                  <span className="ml-2">1.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">Important Legal Notice</h4>
              <p className="text-yellow-800 text-sm leading-relaxed">
                These terms and conditions are legally binding. By continuing to use our services, 
                you acknowledge that you have read, understood, and agree to be bound by these terms. 
                If you do not agree to these terms, please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;