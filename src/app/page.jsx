"use client";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";
import { sendEmail } from "../../lib/resend";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  async function handleAction(formData) {
    setStatus("Sending...");
    const result = await sendEmail(formData);
    setStatus(result.success ? "Message sent!" : "Failed to send message.");
  }

  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* Hero Section */}
      <Hero />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-extrabold text-[var(--primary)]">
          Chào mừng đến với Bảo hiểm Hải Đoàn
        </h1>
        <p className="mt-4 text-lg text-[var(--foreground)] max-w-2xl mx-auto">
          Giúp bạn quản lý tương lai tài chính một cách tự tin.
        </p>
      </main>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-white/80 rounded-2xl shadow-md mx-10 my-16 p-10 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-6 text-center">
          Liên hệ với chúng tôi
        </h2>
        <p className="text-[var(--foreground)] text-center mb-6">
          Bạn có thắc mắc hoặc cần báo giá? Chúng tôi luôn sẵn sàng hỗ trợ.
        </p>

        <form action={handleAction} className="flex flex-col space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Tên của bạn"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email của bạn"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Tin nhắn của bạn"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
          <button
            type="submit"
            className="bg-[var(--primary)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--secondary)] transition-all"
          >
            Gửi tin nhắn
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-[var(--foreground)]">{status}</p>
        )}

        <div className="mt-10 text-center text-[var(--foreground)] space-y-2">
          <p>
            E-mail: {" "}
            <a
              href="mailto:hdoan@haidoaninsurance.com"
              className="text-[var(--primary)] font-medium"
            >
              hdoan@haidoaninsurance.com
            </a>
          </p>
          <p>Tế bào: <span className="font-medium">(404) 725-0525</span></p>
          <p>Fax: <span className="font-medium">(678) 205-8383</span></p>
          <p>
            Địa chỉ:{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=5430+Jimmy+Carter+Blvd+Ste+108+Norcross,+GA+30093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] font-medium hover:underline"
            >
              5430 Jimmy Carter Blvd Ste 108, Norcross, GA 30093
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
