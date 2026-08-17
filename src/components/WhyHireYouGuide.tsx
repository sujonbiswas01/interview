'use client'
import { useState } from "react";
import { ChevronRight, CircleCheck } from "lucide-react";
const POINTS = [
  {
    n: "01",
    bn: "তোমার স্ট্রেংথ বা শক্তি কী?",
    en: "Your strengths",
    body: "দ্রুত শেখা, প্রবলেম সলভিং ইত্যাদির মতো নিজের মূল শক্তিগুলো তুলে ধরো — যেগুলো তোমাকে অন্যদের থেকে আলাদা করে তোলে।",
  },
  {
    n: "02",
    bn: "রোলের সাথে মিল",
    en: "Fit with the role",
    body: "এই জবের জন্য কেন তুমি উপযুক্ত — জব রিকোয়ারমেন্টের সাথে তোমার অভিজ্ঞতা ও দক্ষতা কীভাবে মিলে যায়, তা ব্যাখ্যা করো।",
  },
  {
    n: "03",
    bn: "টেকনিক্যাল এবিলিটি",
    en: "Technical ability",
    body: "কাজটি করার জন্য দরকারি টেকনিক্যাল স্কিল তোমার আছে কি না, এবং আগে কোনো প্রজেক্টে ব্যবহার করেছো কি না তার উদাহরণ দাও।",
  },
  {
    n: "04",
    bn: "প্রবলেম সলভিং",
    en: "Problem solving",
    body: "সমস্যা এলে কীভাবে চিন্তা করো এবং কীভাবে সমাধান বের করো — তোমার চিন্তাভাবনার প্রক্রিয়া উদাহরণসহ তুলে ধরো।",
  },
  {
    n: "05",
    bn: "কোম্পানির জন্য ভ্যালু",
    en: "Value to the company",
    body: "তোমাকে নিয়োগ দিলে কোম্পানির কী লাভ হবে — তুমি কীভাবে কোম্পানির লক্ষ্য অর্জনে অবদান রাখতে পারবে তা স্পষ্ট করো।",
  },
  {
    n: "06",
    bn: "লার্নিং মাইন্ডসেট",
    en: "Learning mindset",
    body: "নতুন টেকনোলজি বা প্রসেসে তুমি কত দ্রুত মানিয়ে নিতে পারো — শেখার প্রতি তোমার আগ্রহ ও অভিযোজন ক্ষমতা তুলে ধরো।",
  },
  {
    n: "07",
    bn: "টিমওয়ার্ক অ্যান্ড রেসপনসিবিলিটি",
    en: "Teamwork & responsibility",
    body: "টিমের সাথে কাজ করার এবং নিজের দায়িত্ব ঠিকভাবে পালন করার সক্ষমতা তুলে ধরো — সহযোগিতা ও accountability-র উদাহরণ দাও।",
  },
  {
    n: "08",
    bn: "প্রফেশনাল অ্যাটিটিউড",
    en: "Professional attitude",
    body: "সময়মতো কাজ করা, কার্যকর কমিউনিকেশন এবং দায়িত্ববোধ — এই পেশাদার গুণগুলো তোমার মধ্যে কীভাবে প্রকাশ পায় তা বলো।",
  },
];

export default function WhyHireYouGuide() {
  const [openIdx, setOpenIdx] = useState(0);
  const [done, setDone] = useState(() => new Set());

  const toggle = (i:any) => {
    setOpenIdx((cur) => (cur === i ? -1 : i));
    setDone((prev) => {
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  };

  const completeCount = done.size;
  const progressPct = Math.round((completeCount / POINTS.length) * 100);

  return (
    <div
      className="min-h-screen w-full flex justify-center px-4 py-12 sm:py-16"
      style={{
        background:
          "radial-gradient(ellipse at top, #182338 0%, #0E1521 55%, #0A101A 100%)",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "#D4A94D", letterSpacing: "0.25em" }}
          >
            Interview Blueprint
          </div>
          <h1
            className="text-4xl sm:text-5xl leading-tight mb-3"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              color: "#F3F1EA",
              fontWeight: 600,
            }}
          >
            Why should we
            <br />
            hire you?
          </h1>
          <p
            className="text-base sm:text-lg"
            style={{
              fontFamily: "'Noto Sans Bengali', sans-serif",
              color: "#9AA3B6",
            }}
          >
            আটটি অংশ জোড়া লাগিয়ে একটাই শক্তিশালী উত্তর তৈরি করো
          </p>

          {/* Progress rail */}
          <div className="mt-8 flex items-center gap-3">
            <div
              className="h-[3px] flex-1 rounded-full overflow-hidden"
              style={{ background: "#1F2A3E" }}
            >
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progressPct}%`,
                  background:
                    "linear-gradient(90deg, #D4A94D 0%, #E8C874 100%)",
                }}
              />
            </div>
            <span
              className="text-xs tabular-nums"
              style={{ color: "#6E7891", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {completeCount}/{POINTS.length}
            </span>
          </div>
        </div>

        {/* Panels */}
        <div className="relative">
          {/* connecting rivet line */}
          <div
            className="absolute left-[19px] top-4 bottom-4 w-px"
            style={{ background: "#1F2A3E" }}
            aria-hidden="true"
          />

          <ul className="flex flex-col gap-3">
            {POINTS.map((p, i) => {
              const isOpen = openIdx === i;
              const isDone = done.has(i);
              return (
                <li key={p.n} className="relative">
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="relative z-10 w-full text-left rounded-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{
                      background: isOpen ? "#182338" : "#121A28",
                      border: `1px solid ${isOpen ? "#D4A94D55" : "#20293B"}`,
                      outlineColor: "#D4A94D",
                    }}
                  >
                    <div className="flex items-start gap-4 p-4 sm:p-5">
                      {/* rivet marker */}
                      <div
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300"
                        style={{
                          background: isDone ? "#D4A94D" : "#0E1521",
                          border: `1px solid ${isDone ? "#D4A94D" : "#2A3448"}`,
                        }}
                      >
                        {isDone ? (
                          <CircleCheck size={18} color="#0E1521" strokeWidth={2.5} />
                        ) : (
                          <span
                            className="text-xs"
                            style={{
                              fontFamily: "'IBM Plex Mono', monospace",
                              color: "#6E7891",
                            }}
                          >
                            {p.n}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <h2
                            className="text-base sm:text-lg leading-snug"
                            style={{
                              fontFamily: "'Noto Sans Bengali', sans-serif",
                              color: "#F3F1EA",
                              fontWeight: 600,
                            }}
                          >
                            {p.bn}
                          </h2>
                          <ChevronRight
                            size={18}
                            className="shrink-0 transition-transform duration-300"
                            style={{
                              color: "#6E7891",
                              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                            }}
                          />
                        </div>
                        <span
                          className="text-xs italic"
                          style={{ color: "#8A93A6" }}
                        >
                          {p.en}
                        </span>

                        <div
                          className="grid transition-all duration-300 ease-out"
                          style={{
                            gridTemplateRows: isOpen ? "1fr" : "0fr",
                            opacity: isOpen ? 1 : 0,
                          }}
                        >
                          <div className="overflow-hidden">
                            <p
                              className="pt-3 text-sm sm:text-[15px] leading-relaxed"
                              style={{
                                fontFamily: "'Noto Sans Bengali', sans-serif",
                                color: "#C7CCDA",
                              }}
                            >
                              {p.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Assembled-answer footer */}
        <div
          className="mt-10 rounded-xl p-5 sm:p-6"
          style={{
            background: "#131C2C",
            border: "1px solid #20293B",
          }}
        >
          <div
            className="text-xs tracking-[0.2em] uppercase mb-2"
            style={{ color: "#D4A94D" }}
          >
            Tip
          </div>
          <p
            className="text-sm sm:text-[15px] leading-relaxed"
            style={{
              fontFamily: "'Noto Sans Bengali', sans-serif",
              color: "#C7CCDA",
            }}
          >
            উত্তর দেওয়ার সময় প্রতিটি অংশের সাথে বাস্তব উদাহরণ যোগ করো — এতে
            উত্তরটি আরও বিশ্বাসযোগ্য ও প্রভাবশালী হবে।
          </p>
        </div>
      </div>
    </div>
  );
}