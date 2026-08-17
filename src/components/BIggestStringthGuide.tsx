"use client";

import { useState } from "react";
import { ChevronRight, CircleCheck } from "lucide-react";
const POINTS = [
  {
    n: "01",
    bn: "ফাস্ট লার্নার",
    en: "Fast learner",
    body: "শুধু \"দ্রুত শিখি\" বললেই হবে না — যেটা শিখো, সেটা প্র্যাকটিক্যালি ইউজ করতে পারাটাই আসল।",
    example: "রিয়্যাক্ট শিখে সাথে সাথে রিয়্যাক্ট নেটিভে একটা প্রজেক্ট শুরু করে দেওয়া।",
  },
  {
    n: "02",
    bn: "টিমওয়ার্ক অ্যান্ড রেসপনসিবিলিটি",
    en: "Teamwork & responsibility",
    body: "শুধু \"টিমে কাজ করতে পারি\" না — টিমের সাথে সম্মান রেখে টাইমমতো কাজ শেষ করা এবং নিয়মিত আপডেট দেওয়াটাই গুরুত্বপূর্ণ।",
    example: "গ্রুপ প্রজেক্টে নিজের মডিউল সময়মতো শেষ করে GitHub-এ পুশ করা, এবং টিমমেটদের নিয়মিত আপডেট দেওয়া।",
  },
  {
    n: "03",
    bn: "প্রবলেম সলভিং",
    en: "Problem solving",
    body: "সব উত্তর জানা থাকাটা জরুরি না — সমস্যা এলে কীভাবে চিন্তা করো এবং ডকুমেন্টেশন বা গুগল ব্যবহার করে কীভাবে সমাধান বের করো, সেটাই আসল।",
    example: "রিয়্যাক্ট নেটিভে এরর পেলে হতাশ না হয়ে ডকুমেন্টেশন পড়ে কারণ বের করে ফিক্স করা।",
  },
];

export default function BiggestStrengthGuide() {
  const [openIdx, setOpenIdx] = useState(0);
  const [done, setDone] = useState(() => new Set([0]));

  const toggle = (i:any) => {
    setOpenIdx((cur) => (cur === i ? -1 : i));
    setDone((prev) => {
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  };

  const progressPct = Math.round((done.size / POINTS.length) * 100);

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
            What is your
            <br />
            biggest strength?
          </h1>
          <p
            className="text-base sm:text-lg"
            style={{
              fontFamily: "'Noto Sans Bengali', sans-serif",
              color: "#9AA3B6",
            }}
          >
            তিনটা উদাহরণসহ শক্তি প্রমাণ করার মতো করে উত্তর সাজাও
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
              {done.size}/{POINTS.length}
            </span>
          </div>
        </div>

        {/* Panels */}
        <div className="relative">
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
                        <span className="text-xs italic" style={{ color: "#8A93A6" }}>
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

                            <div
                              className="mt-3 rounded-lg p-3"
                              style={{
                                background: "#0E1521",
                                border: "1px solid #D4A94D33",
                              }}
                            >
                              <span
                                className="text-[11px] tracking-[0.15em] uppercase"
                                style={{ color: "#D4A94D" }}
                              >
                                উদাহরণ
                              </span>
                              <p
                                className="mt-1 text-sm leading-relaxed"
                                style={{
                                  fontFamily: "'Noto Sans Bengali', sans-serif",
                                  color: "#C7CCDA",
                                }}
                              >
                                {p.example}
                              </p>
                            </div>
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

        {/* Tip footer */}
        <div
          className="mt-10 rounded-xl p-5 sm:p-6"
          style={{ background: "#131C2C", border: "1px solid #20293B" }}
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
            প্রতিটা strength বলার সময় শুধু গুণটার নাম বললেই হবে না — সাথে একটা
            বাস্তব উদাহরণ দিলে উত্তরটা অনেক বেশি বিশ্বাসযোগ্য শোনাবে।
          </p>
        </div>
      </div>
    </div>
  );
}