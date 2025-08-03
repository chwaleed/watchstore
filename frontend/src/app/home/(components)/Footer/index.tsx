import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-18 flex justify-center">
      <div className=" w-full px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="flex justify-between px-">
          {/* Company Info */}

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Men's Watches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Women's Watches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Luxury Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Smart Watches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Watch Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Battery Replacement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Warranty & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Watch Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Battery Replacement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Warranty & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  Care Instructions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={16}
                  className="text-gray-400 mt-1 flex-shrink-0"
                />
                <p className="text-gray-600 text-sm">
                  456 Watch Avenue
                  <br />
                  Timekeeper Plaza
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@timezonewatch.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  info@timezonewatch.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
    </footer>
  );
}
