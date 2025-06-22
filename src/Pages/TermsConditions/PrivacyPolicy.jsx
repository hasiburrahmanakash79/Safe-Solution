// import React from 'react';
import { Shield, Lock, Eye, Database, Cookie, UserCheck, Globe,  Mail, Building2, Calendar, FileText } from 'lucide-react';

// Mock SectionTitle component since it's imported
const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
      {title}
    </h1>
    <div className="w-16 h-px bg-gray-900 mx-auto"></div>
  </div>
);

import PropTypes from 'prop-types';
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information.",
      subsections: [
        {
          title: "Personal Information",
          content: "Name, email address, phone number, mailing address, and payment details when you engage with our services."
        },
        {
          title: "Usage Information",
          content: "Information about how you use our website, including pages visited, time spent, and interaction patterns."
        },
        {
          title: "Device Information",
          content: "Technical information about your device, browser type, IP address, and operating system."
        }
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <UserCheck className="w-5 h-5" />,
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about your account and our services.",
      subsections: [
        {
          title: "Service Provision",
          content: "To deliver our services, process your requests, and provide customer support."
        },
        {
          title: "Communication",
          content: "To send you important notices, updates about our services, and respond to your inquiries."
        },
        {
          title: "Improvement",
          content: "To analyze usage patterns and improve our website functionality and user experience."
        }
      ]
    },
    {
      id: 3,
      title: "Information Sharing and Disclosure",
      icon: <Globe className="w-5 h-5" />,
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.",
      subsections: [
        {
          title: "Service Providers",
          content: "We may share information with trusted third-party service providers who assist us in operating our website and conducting our business."
        },
        {
          title: "Legal Requirements",
          content: "We may disclose information when required by law or to protect our rights, property, or safety."
        },
        {
          title: "Business Transfers",
          content: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        }
      ]
    },
    {
      id: 4,
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      subsections: [
        {
          title: "Encryption",
          content: "We use industry-standard encryption to protect sensitive data during transmission and storage."
        },
        {
          title: "Access Controls",
          content: "Access to personal information is restricted to authorized personnel who need it for legitimate business purposes."
        },
        {
          title: "Regular Audits",
          content: "We regularly review and update our security practices to ensure ongoing protection of your data."
        }
      ]
    },
    {
      id: 5,
      title: "Cookies and Tracking Technologies",
      icon: <Cookie className="w-5 h-5" />,
      content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.",
      subsections: [
        {
          title: "Essential Cookies",
          content: "Required for basic website functionality and cannot be disabled in our systems."
        },
        {
          title: "Analytics Cookies",
          content: "Help us understand how visitors interact with our website by collecting and reporting information anonymously."
        },
        {
          title: "Marketing Cookies",
          content: "Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness."
        }
      ]
    },
    {
      id: 6,
      title: "Your Rights and Choices",
      icon: <Eye className="w-5 h-5" />,
      content: "You have certain rights regarding your personal information, including the right to access, update, or delete your information.",
      subsections: [
        {
          title: "Access and Portability",
          content: "You can request a copy of the personal information we hold about you."
        },
        {
          title: "Correction and Updates",
          content: "You can update or correct your personal information through your account settings or by contacting us."
        },
        {
          title: "Deletion",
          content: "You can request deletion of your personal information, subject to certain legal and business requirements."
        }
      ]
    },
    {
      id: 7,
      title: "Data Retention",
      icon: <FileText className="w-5 h-5" />,
      content: "We retain your personal information for as long as necessary to provide our services and comply with legal obligations.",
      subsections: [
        {
          title: "Account Information",
          content: "Retained for the duration of your account and for a reasonable period after account closure."
        },
        {
          title: "Transaction Records",
          content: "Kept for the period required by applicable laws and regulations for financial record-keeping."
        },
        {
          title: "Marketing Data",
          content: "Retained until you opt out of marketing communications or as required by law."
        }
      ]
    },
    {
      id: 8,
      title: "Changes to This Privacy Policy",
      icon: <Calendar className="w-5 h-5" />,
      content: "We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on this page and updating the effective date."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-gray-700 mr-3" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Privacy & Data Protection</span>
          </div>
          <SectionTitle title="Privacy Policy" />
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              Your privacy is important to us. This policy explains how Safe Solution International 
              collects, uses, and protects your personal information when you use our services.
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

        {/* Privacy Overview */}
        <div className="mb-12 p-8 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-3">Our Privacy Commitment</h3>
              <p className="text-green-800 leading-relaxed mb-4">
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                We follow industry best practices and comply with applicable data protection regulations.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-green-700">
                <div className="flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Secure Data Storage</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  <span>Transparent Practices</span>
                </div>
                <div className="flex items-center">
                  <UserCheck className="w-4 h-4 mr-2" />
                  <span>User Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
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
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {section.content}
                </p>
                
                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{subsection.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{subsection.content}</p>
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
            
            {/* Privacy Contact */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                Privacy Inquiries
              </h3>
              <p className="text-gray-600 mb-4">
                For questions about this privacy policy or to exercise your privacy rights, please contact our privacy team.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> 
                  <a href="mailto:privacy@safesolution.com" className="ml-2 text-blue-600 hover:text-blue-800">
                    privacy@safesolution.com
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Response Time:</span> 
                  <span className="ml-2">Within 30 days</span>
                </p>
              </div>
            </div>

            {/* Data Protection Officer */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-3" />
                Data Protection
              </h3>
              <p className="text-gray-600 mb-4">
                Our data protection team ensures compliance with privacy regulations and handles all privacy-related matters.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Company:</span> 
                  <span className="ml-2">Safe Solution International</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Policy Version:</span> 
                  <span className="ml-2">2.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-12 p-6 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-purple-900 mb-2">Regulatory Compliance</h4>
              <p className="text-purple-800 text-sm leading-relaxed">
                This privacy policy is designed to comply with applicable data protection laws and regulations, 
                including GDPR, CCPA, and other relevant privacy legislation. We regularly review and update 
                our practices to ensure ongoing compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Settings */}
        <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <Cookie className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Cookie Management</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                  You can manage your cookie preferences and opt out of non-essential cookies at any time. 
                  Please note that disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>
            <button className="ml-4 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200 flex-shrink-0">
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;