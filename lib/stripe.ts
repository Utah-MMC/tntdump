import Stripe from 'stripe';

// Read once so bundlers can tree‑shake when possible
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// In environments without Stripe configured, we expose a nullable client and
// let the API route return a graceful "disabled" response.

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      // Use a stable, known-good API version. This should be kept in sync
      // with the Stripe account settings but does not need to be cutting edge
      // to work correctly.
      apiVersion: '2023-10-16' as const,
      typescript: true,
    })
  : null;

