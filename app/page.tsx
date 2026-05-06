export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Infrastructure Resilience
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Go Down When Your{" "}
          <span className="text-[#58a6ff]">Cloud Account Gets Suspended</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Continuous monitoring of cloud provider APIs detects account suspensions in seconds and automatically reroutes your traffic to backup providers — before your users notice.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Protecting Your Infrastructure — $99/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Multi-Cloud Monitoring", desc: "Watches AWS, GCP, Azure, and more for account status changes around the clock." },
            { title: "Instant DNS Failover", desc: "Automatically updates DNS and load balancer configs the moment a suspension is detected." },
            { title: "Real-Time Dashboard", desc: "Live status view of all your cloud accounts and failover events in one place." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$99</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 10 cloud accounts monitored",
              "Sub-60-second suspension detection",
              "Automatic DNS & load balancer failover",
              "Real-time monitoring dashboard",
              "Slack & email alerts",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How quickly does failover happen after a suspension?",
              a: "Our monitoring checks cloud provider APIs every 30 seconds. Once a suspension is detected, DNS and load balancer updates are triggered within 60 seconds, minimizing downtime for your users."
            },
            {
              q: "Which cloud providers are supported?",
              a: "We support AWS, Google Cloud, Microsoft Azure, DigitalOcean, and Linode. Additional providers are added regularly based on customer demand."
            },
            {
              q: "Do I need to configure my DNS or load balancer manually?",
              a: "No. You connect your DNS provider and load balancer once during setup. After that, all failover routing is handled automatically without any manual intervention."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Cloud Suspension Backup Router. All rights reserved.
      </footer>
    </main>
  );
}
