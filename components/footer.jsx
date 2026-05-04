import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Smart-Chat</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Our AI assistant works 24/7 to book jobs, reschedule appointments, and answer questions.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs font-medium text-gray-300 uppercase tracking-widest mb-4">Services</p>
          <ul className="flex flex-col gap-2">
            {["Home Services", "Legal", "Healthcare", "AI Webchat", "Analytics"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-xs text-gray-400 hover:text-green-400 transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-xs font-medium text-gray-300 uppercase tracking-widest mb-4">Support</p>
          <ul className="flex flex-col gap-2">
            {["Privacy Policy", "Terms", "Partner Terms", "Request Demo"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-xs text-gray-400 hover:text-green-400 transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-medium text-gray-300 uppercase tracking-widest mb-4">Contact</p>
          <ul className="flex flex-col gap-2 text-xs text-gray-400">
            <li>Phoenix, AZ</li>
            <li>(888) 435-9109</li>
            <li>support@smartchat.co</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Smart-Chat. All rights reserved.
      </div>
    </footer>
  );
}
