import Link from "next/link";

export const metadata = {
  title: "Make a Payment — MCCAA",
  description: "Pay fees, fines, or application charges to the Malta Competition and Consumer Affairs Authority.",
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 font-bold text-4xl text-white">Make a Payment</h1>
          <p className="max-w-2xl text-lg text-white/80">
            Pay MCCAA fees, fines, and application charges securely online.
          </p>
        </div>
      </section>

      {/* Payment options */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Payment Card */}
            <div className="rounded-lg border p-8">
              <div className="mb-4 inline-flex rounded-full bg-brand-orange/10 p-3">
                <svg className="h-6 w-6 text-brand-orange" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-xl text-brand-navy">Card Payment</h3>
              <p className="mb-6 text-gray-600 text-sm">
                Pay securely with Visa, Mastercard, or American Express.
              </p>
              <Link
                href="/payment/checkout"
                className="inline-block rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-orange/90"
              >
                Pay by Card
              </Link>
            </div>

            {/* Bank Transfer Card */}
            <div className="rounded-lg border p-8">
              <div className="mb-4 inline-flex rounded-full bg-brand-navy/10 p-3">
                <svg className="h-6 w-6 text-brand-navy" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-xl text-brand-navy">Bank Transfer</h3>
              <p className="mb-6 text-gray-600 text-sm">
                Transfer directly to our bank account. Instructions provided after submission.
              </p>
              <Link
                href="/payment/bank-transfer"
                className="inline-block rounded-md border-2 border-brand-navy px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              >
                Bank Transfer
              </Link>
            </div>
          </div>

          {/* Reference lookup */}
          <div className="mt-12 rounded-lg border p-6">
            <h3 className="mb-2 font-semibold text-xl text-brand-navy">Have a Payment Reference?</h3>
            <p className="mb-4 text-gray-600 text-sm">
              If you received an invoice or payment notice, enter your reference number to pay directly.
            </p>
            <form className="flex gap-3 max-w-md">
              <input
                type="text"
                placeholder="Enter reference number"
                className="flex-1 rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
              />
              <button
                type="submit"
                className="rounded-md bg-brand-navy px-6 py-2 font-semibold text-white text-sm transition-colors hover:bg-brand-navy/90"
              >
                Look Up
              </button>
            </form>
          </div>

          {/* Need help */}
          <div className="mt-8 rounded-lg bg-amber-50 border border-amber-200 p-6">
            <h3 className="font-semibold text-amber-800">Need Help?</h3>
            <p className="mt-1 text-amber-700 text-sm">
              If you have questions about a payment, contact our Finance Department at{" "}
              <a href="mailto:finance@mccaa.org.mt" className="font-medium hover:underline">
                finance@mccaa.org.mt
              </a>{" "}
              or call <a href="tel:+35623952000" className="font-medium hover:underline">+356 2395 2000</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}