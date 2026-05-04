import IndustryPage from "@/components/industry";

const PROBLEMS = [
  {
    title: "Missed calls = lost revenue",
    desc: "Every unanswered call is a job going to a competitor. Smart-Chat answers 24/7.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    title: "Booking chaos",
    desc: "AI books jobs directly into your dispatch board — no double bookings, no confusion.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
  {
    title: "After-hours emergencies",
    desc: "Customers with urgent needs get instant help — even at 2 AM on a Sunday.",
    icon: (
      <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    ),
  },
];

const FEATURES = [
  "Books service appointments automatically",
  "Captures caller info, issue type & urgency",
  "Notifies the right technician instantly",
  "Integrates with ServiceTitan, Housecall Pro",
];

const STATS = [
  { value: "+35%", label: "More jobs booked per month" },
  { value: "24/7", label: "Always answering, never off" },
  { value: "2 days", label: "Average setup time" },
];

export default function HomeServicesPage() {
  return (
    <IndustryPage
      badge="Home Services"
      headline="Stop losing jobs to"
      headlineHighlight="missed calls"
      description="Smart-Chat answers every call 24/7, books jobs directly into your schedule, and notifies your team instantly."
      problems={PROBLEMS}
      featureHeading="Built for"
      featureHeadingHighlight="home service businesses"
      featureSubtext="From plumbers to HVAC technicians — Smart-Chat is trained to handle your industry-specific calls with confidence."
      features={FEATURES}
      stats={STATS}
      ctaHeading="Ready to stop missing jobs?"
      ctaSubtext="Setup takes under 2 days. No contracts."
    />
  );
}
