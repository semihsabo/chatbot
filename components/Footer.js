// components/Footer.js
export default function Footer() {
  const cols = [
    {
      title: "NAVIGATION",
      items: ["Home", "About Us", "What We Do", "To The Power of 10", "Donate"],
    },
    {
      title: "WHAT WE DO",
      items: [
        "Encouraging Testing",
        "Strengthening Advocacy",
        "Sharing Information",
        "Building Leadership",
        "Engaging With Global Fund",
        "Shining a Light",
      ],
    },
    {
      title: "LEGAL",
      items: ["General Info", "Privacy Policy", "Terms of Service"],
    },
    {
      title: "TALK TO US",
      items: [
        "support@ercom.com",
        "+66 2399 1145",
        "Contact Us",
        "Facebook",
        "LinkedIn",
        "Twitter",
      ],
    },
  ];

  const socials = [
    {
      name: "facebook",
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      name: "linkedin",
      path: "M4 4h4v16H4zm14 0h4v16h-4zM6 10h2v2H6zm12 6h2v2h-2zm-6-6h4v8h-4z",
    },
    {
      name: "twitter",
      path: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4 6v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
  ];

  return (
    <footer className="bg-black text-gray-400 pt-14 sm:pt-20 pb-10 sm:pb-14 px-6 sm:px-8 font-manrope">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 mb-8 md:mb-0">
              <span className="w-9 h-9 rounded-full bg-white inline-block" />
              <span className="text-white text-2xl font-extrabold">ChatBot</span>
            </div>
          </div>

          {/* Four columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {cols.map((col) => (
              <div key={col.title}>
                <h3 className="text-white mb-4 text-base sm:text-[16px] font-medium whitespace-nowrap">
                  {col.title}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-[16px]">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      className="hover:text-white transition cursor-pointer leading-relaxed whitespace-nowrap"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 md:mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <span className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Lift Media. All rights reserved.
          </span>

          {/* Social icons */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-600 transition"
                aria-label={s.name}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-300 fill-current"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
