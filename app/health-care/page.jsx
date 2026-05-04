import IndustryPage from "@/components/industry";


const PROBLEMS = [
  {
    title: "Front desk overload",
    desc: "AI handles appointment calls so your staff can focus on in-clinic patients.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
  {
    title: "High no-show rates",
    desc: "Automated reminders and confirmations reduce no-shows significantly.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    ),
  },
  {
    title: "Repetitive patient questions",
    desc: "Smart-Chat answers FAQs — hours, directions, insurance — without staff involvement.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
];

const FEATURES = [
  "Books & reschedules appointments 24/7",
  "Sends automated appointment reminders",
  "Answers FAQs about hours, insurance, location",
  "Routes urgent calls to on-call staff",
];

const STATS = [
  { value: "-28%", label: "Reduction in no-shows" },
  { value: "24/7", label: "Patient support around the clock" },
  { value: "3x",   label: "Faster appointment booking" },
];

export default function HealthCarePage() {
  return (
    <IndustryPage
      badge="Health Care"
      headline="Reduce no-shows,"
      headlineHighlight="fill every slot"
      description="Smart-Chat books appointments, sends reminders, and handles patient FAQs — freeing your front desk for what matters most."
      problems={PROBLEMS}
      featureHeading="Built for"
      featureHeadingHighlight="healthcare providers"
      featureSubtext="Clinics, dental offices, physio centres — Smart-Chat is HIPAA-aware and trained for patient communication."
      features={FEATURES}
      stats={STATS}
      ctaHeading="Free your front desk today"
      ctaSubtext="HIPAA-aware. Setup in 2 days."
    />
  );
}
