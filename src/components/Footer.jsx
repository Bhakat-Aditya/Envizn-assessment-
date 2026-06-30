import React from "react";
import logo from "../assests/logo.png";

export default function Footer() {
  return (
    <footer
      className="relative py-24 z-10"
      style={{ 
        background: "#FF6229"
      }}
    >
      {/* Left upward curve (Concave corner) */}
      <div style={{
        position: 'absolute',
        top: '-64px',
        left: 0,
        width: '64px',
        height: '64px',
        background: 'radial-gradient(circle at 100% 0, transparent 64px, #FF6229 64px)',
        pointerEvents: 'none'
      }} />
      {/* Right upward curve (Concave corner) */}
      <div style={{
        position: 'absolute',
        top: '-64px',
        right: 0,
        width: '64px',
        height: '64px',
        background: 'radial-gradient(circle at 0 0, transparent 64px, #FF6229 64px)',
        pointerEvents: 'none'
      }} />

      {/* Subtle pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(0,0,0,0.08) 0%, transparent 50%)`,
        }}
      />

      <div className="container-main relative z-10 flex flex-col gap-16 !pt-15">
        {/* Row 1: Top section centered */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 object-contain brightness-0 invert"
            />
            <h2 className="font-raleway text-2xl md:text-3xl text-white">
              Sales Mastery
            </h2>
          </div>
          <h3 className="font-raleway font-bold text-4xl md:text-6xl text-white mb-4">
            Sign up for 21days <br className="hidden md:block" /> Sales Challenge!
          </h3>
          <p className="font-raleway text-base md:text-lg text-white/90 max-w-2xl mb-8">
            Revolutionise Your Approach to Cold Calling and <br className="hidden md:block" /> Unlock Your
            Sales Potential
          </p>
          <button className="bg-[#050614] text-white rounded-full !px-6 !py-4 font-raleway font-bold text-base flex items-center gap-2 hover:bg-black/80 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Enroll Now <span>&gt;</span>
          </button>
        </div>

        {/* Horizontal White Line Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-full"></div>

        {/* Row 2: Two Columns */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full !mb-18">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full md:w-auto">
            <h4 className="font-raleway font-bold text-3xl text-white">
              Sales mastery
            </h4>

            <div className="flex flex-col gap-3 items-center md:items-start">
              {[
                "Feature",
                "Testimonial",
                "How to participate?",
                "Our Packages",
                "FAQ",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-").replace("?", "")}`}
                  className="font-raleway font-bold text-sm text-white hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-6 mt-4 mb-5 justify-center md:justify-start">
              <a
                href="#"
                className="font-raleway font-medium text-xs text-white hover:opacity-80 transition-opacity"
              >
                Terms and condition
              </a>
              <a
                href="#"
                className="font-raleway font-medium text-xs text-white hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6 w-full md:w-auto">
            {/* Newsletter */}
            <div className="flex w-full max-w-md items-center gap-1 sm:gap-2 rounded-full border border-white bg-transparent !p-1 sm:!p-1.5 flex-row">
              <input
                type="email"
                placeholder="Lorem@e-mail.com"
                className="flex-1 bg-transparent !px-3 !py-2 sm:!px-5 sm:!py-3 text-sm sm:text-base text-white placeholder:text-white/60 outline-none w-full min-w-0"
              />

              <button className="rounded-full bg-[#10122a] !px-4 !py-2 sm:!px-6 sm:!py-3 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-black whitespace-nowrap flex-shrink-0">
                Sign up now
              </button>
            </div>

            {/* Logo and Sales Mastery */}
            <div className="flex items-center gap-3 justify-center md:justify-end mt-2">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <span className="font-raleway font-bold text-xl text-white">
                Sales Mastery
              </span>
            </div>

            {/* Email */}
            <p className="font-raleway font-medium text-base text-white">
              Loremipsum@gmail.com
            </p>

            {/* Icons */}
            <div className="flex gap-8 justify-end mt-2">
              {/* Telegram */}
              <a
                href="#"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#FF6229] transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="35px"
                  width="35px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#FF6229] transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="35px"
                  width="35px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#FF6229] transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="35px"
                  width="35px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="mt-4">
              <p className="font-raleway font-medium text-xs text-white/80 flex items-center justify-end gap-6">
                <span>2024 Sales Mastery</span>
                <span>All rights reserved</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
