/** Stripe payment integration for MCCAA */

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;

export interface PaymentIntentRequest {
  amount: number; // in cents
  currency?: string;
  description: string;
  metadata?: Record<string, string>;
}

export async function createPaymentIntent(req: PaymentIntentRequest) {
  if (!STRIPE_SECRET || STRIPE_SECRET === "sk_test_placeholder") {
    throw new Error("Stripe not configured. Set STRIPE_SECRET_KEY environment variable.");
  }

  const body = new URLSearchParams({
    amount: String(req.amount),
    currency: req.currency || "eur",
    description: req.description,
  });

  if (req.metadata) {
    Object.entries(req.metadata).forEach(([key, value]) => {
      body.append(`metadata[${key}]`, value);
    });
  }

  const res = await fetch("https://api.stripe.com/v1/payment_intents", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(`Stripe error: ${err.error?.message || res.statusText}`);
  }

  return res.json();
}

export function formatAmount(euros: number): number {
  return Math.round(euros * 100);
}