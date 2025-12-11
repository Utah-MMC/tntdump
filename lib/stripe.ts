import Stripe from 'stripe';

// Read once so bundlers can tree‑shake when possible
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// In local/dev or environments without Stripe configured, we don't want the
// whole app (or the build) to crash just because the key is missing. Instead,
// we expose a nullable client and let the API route handle the error.
if (!stripeSecretKey) {
  console.warn(
    'STRIPE_SECRET_KEY is not set; Stripe payment API routes will return an error until this is configured.'
  );
}

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      // Use a stable, known-good API version. This should be kept in sync
      // with the Stripe account settings but does not need to be cutting edge
      // to work correctly.
      apiVersion: '2023-10-16' as const,
      typescript: true,
    })
  : null;

