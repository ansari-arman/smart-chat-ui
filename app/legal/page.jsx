import IndustryPage from "@/components/industry";


const PROBLEMS = [
  {
    title: "Missed intake calls",
    desc: "A potential client calls after hours and leaves — Smart-Chat captures every lead, anytime.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
  {
    title: "Unqualified inquiries",
    desc: "AI screens callers before routing — only serious prospects reach your team.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z" />
      </svg>
    ),
  },
  {
    title: "Slow consultation booking",
    desc: "Consultations booked automatically into your calendar — zero back and forth.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
];

const FEATURES = [
  "Collects case type, name, and urgency",
  "Qualifies leads before routing to attorneys",
  "Books consultations into your calendar",
  "Full call transcript & intake summary",
];

const STATS = [
  { value: "+40%", label: "More consultations booked" },
  { value: "100%", label: "Calls answered after hours" },
  { value: "<1s",  label: "AI response time" },
];

export default function LegalPage() {
  return (
    <IndustryPage
      badge="Legal"
      headline="Never miss a"
      headlineHighlight="potential client again"
      description="Smart-Chat qualifies leads, collects case details, and books consultations — so you focus on winning cases, not answering phones."
      problems={PROBLEMS}
      featureHeading="Built for"
      featureHeadingHighlight="law firms of all sizes"
      featureSubtext="Whether you're a solo practitioner or a multi-attorney firm — Smart-Chat handles intake so you can focus on cases."
      features={FEATURES}
      stats={STATS}
      ctaHeading="Win more clients without more staff"
      ctaSubtext="No contracts. Cancel anytime."
    />
  );
}
