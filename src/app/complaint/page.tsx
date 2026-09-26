import Link from "next/link";

export const metadata = {
  title: "File a Complaint — MCCAA",
  description: "File a consumer complaint with the Malta Competition and Consumer Affairs Authority.",
};

export default function ComplaintPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 font-bold text-4xl text-white">File a Complaint</h1>
          <p className="max-w-2xl text-lg text-white/80">
            If you believe your consumer rights have been violated, the MCCAA is here to help.
            Fill out the form below and our team will review your case.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-lg border p-8">
            <h2 className="mb-6 font-bold text-2xl text-brand-navy">Submit Your Complaint</h2>

            <form className="space-y-6">
              {/* Personal Information */}
              <fieldset>
                <legend className="mb-4 font-semibold text-lg text-brand-navy">
                  Your Information
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Complaint Details */}
              <fieldset>
                <legend className="mb-4 font-semibold text-lg text-brand-navy">
                  Complaint Details
                </legend>
                <div>
                  <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="category">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  >
                    <option value="">Select a category...</option>
                    <option value="defective-goods">Defective Goods</option>
                    <option value="misleading-advertising">Misleading Advertising</option>
                    <option value="unfair-practices">Unfair Commercial Practices</option>
                    <option value="pricing">Pricing Issues</option>
                    <option value="warranty">Warranty / Guarantee</option>
                    <option value="digital-services">Digital Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="traderName">
                    Trader / Company Name *
                  </label>
                  <input
                    id="traderName"
                    name="traderName"
                    required
                    className="w-full rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  />
                </div>
                <div className="mt-4">
                  <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="description">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    required
                    className="w-full rounded-md border px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    placeholder="Describe your complaint in detail. Include dates, amounts, and any steps you have already taken."
                  />
                </div>
              </fieldset>

              {/* Attachments */}
              <fieldset>
                <legend className="mb-4 font-semibold text-lg text-brand-navy">
                  Supporting Documents
                </legend>
                <div>
                  <label className="mb-1 block font-medium text-gray-700 text-sm" htmlFor="attachments">
                    Upload receipts, invoices, correspondence (PDF, JPG, PNG — max 10MB each)
                  </label>
                  <input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full rounded-md border px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-brand-orange file:px-3 file:py-1 file:text-white file:text-sm"
                  />
                </div>
              </fieldset>

              {/* Consent */}
              <div className="flex items-start gap-2">
                <input id="consent" name="consent" type="checkbox" required className="mt-1" />
                <label htmlFor="consent" className="text-gray-600 text-sm">
                  I confirm that the information provided is true and accurate to the best of my
                  knowledge. I understand that the MCCAA may contact me regarding this complaint. *
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-brand-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-orange/90"
              >
                Submit Complaint
              </button>
            </form>
          </div>

          {/* Alternative contact */}
          <div className="mt-8 rounded-lg border border-brand-navy/10 bg-brand-navy/5 p-6">
            <h3 className="font-semibold text-brand-navy">Prefer to speak with someone?</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Call our Consumer Helpline on{" "}
              <a href="tel:+35623952000" className="font-medium text-brand-orange hover:underline">
                +356 2395 2000
              </a>{" "}
              or visit our offices at Mizzi House, National Road, Blata l-Bajda HMR9010, Malta.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}