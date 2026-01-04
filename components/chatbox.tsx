"use client";

import { useState } from "react";
import { MessageCircle, X, Zap } from "lucide-react";
import Link from "next/link";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Box Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl w-80 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg">Chat With Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-700 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Options */}
          <div className="p-4 space-y-3">
            <p className="text-gray-700 text-sm mb-4">
              Choose how you'd like to get in touch with us
            </p>

            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200"
            >
              <MessageCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm">
                  WhatsApp Chat
                </p>
                <p className="text-xs text-gray-600">
                  Chat with our team instantly
                </p>
              </div>
            </Link>

            {/* AI Chat Button */}
            <button className="flex items-center gap-3 w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm">
                  AI Assistant
                </p>
                <p className="text-xs text-gray-600">Get instant answers</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
