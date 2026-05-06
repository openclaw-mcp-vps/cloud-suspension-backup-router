import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Suspension Backup Router",
  description: "Automatic failover when cloud providers suspend accounts. Real-time monitoring and instant traffic rerouting to backup providers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1cdf872a-028a-4946-9640-3c6771d7dbb5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
