import React from "react";

// WebDevTrio component
// Usage: drop this component into a React app that uses Tailwind CSS
// Example: <WebDevTrio />

export default function WebDevTrio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-start justify-center py-12">
      <div className="w-full max-w-6xl px-6">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-slate-800 mb-8">WEB DEVELOPMENT TRIO</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HTML Card */}
          <article className="flex flex-col items-center bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-[0_8px_20px_rgba(59,130,246,0.06)]">
            <div className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold mb-4">HTML</div>

            {/* simple SVG icon representing structure */}
            <svg className="w-28 h-28 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="18" width="52" height="30" rx="2" stroke="#60A5FA" strokeWidth="2" fill="#EFF6FF"/>
              <path d="M14 18V48" stroke="#3B82F6" strokeWidth="2"/>
              <path d="M26 18V48" stroke="#3B82F6" strokeWidth="2"/>
              <path d="M38 18V48" stroke="#3B82F6" strokeWidth="2"/>
              <path d="M50 18V48" stroke="#3B82F6" strokeWidth="2"/>
              <rect x="10" y="6" width="18" height="12" rx="2" fill="#fff" stroke="#93C5FD"/>
              <circle cx="46" cy="10" r="3" fill="#93C5FD"/>
            </svg>

            <h3 className="text-lg font-bold text-slate-800">STRUCTURE</h3>
            <p className="text-sm text-slate-500 mt-2 text-center">Content &amp; Organization</p>
          </article>

          {/* CSS Card */}
          <article className="flex flex-col items-center bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-[0_8px_20px_rgba(16,185,129,0.06)]">
            <div className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold mb-4">CSS</div>

            {/* simple SVG icon representing styling */}
            <svg className="w-28 h-28 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="14" width="44" height="36" rx="2" fill="#ECFDF5" stroke="#86EFAC" strokeWidth="2"/>
              <path d="M22 28c4-6 12-6 16 0s12 6 16 0" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="24" cy="36" r="2" fill="#A7F3D0"/>
              <circle cx="32" cy="34" r="2" fill="#A7F3D0"/>
              <circle cx="40" cy="36" r="2" fill="#A7F3D0"/>
            </svg>

            <h3 className="text-lg font-bold text-slate-800">STIYING</h3>
            <p className="text-sm text-slate-500 mt-2 text-center">Visual Design &amp; Layout</p>
          </article>

          {/* JavaScript Card */}
          <article className="flex flex-col items-center bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-[0_8px_20px_rgba(245,158,11,0.06)]">
            <div className="px-4 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold mb-4">JAVESCRIPT</div>

            {/* simple SVG icon representing functionality */}
            <svg className="w-28 h-28 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 16 L44 16 L32 40 Z" fill="#FFD77A" stroke="#F59E0B" strokeWidth="1.5"/>
              <path d="M18 44c6-6 22-6 28 0" stroke="#FB923C" strokeWidth="2"/>
              <circle cx="46" cy="10" r="3" fill="#FDE68A"/>
              <rect x="28" y="44" width="8" height="6" rx="2" fill="#FEEBC8" stroke="#F59E0B"/>
            </svg>

            <h3 className="text-lg font-bold text-slate-800">FUNCTIONALITY</h3>
            <p className="text-sm text-slate-500 mt-2 text-center">Interactivity &amp; Logic</p>
          </article>
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">@DEVARSH</p>
      </div>
    </div>
  );
}
