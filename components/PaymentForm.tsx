'use client';

import { useState } from 'react';

interface PaymentFormProps {
  amount: number;
  dumpsterSize: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipCode: string;
  };
  deliveryDate: string;
  pickupDate?: string;
  rentalDays: string;
  onSuccess: (paymentIntentId: string) => void;
  onError: (error: string) => void;
}

export default function PaymentForm({
  amount,
  dumpsterSize,
  customerInfo,
  deliveryDate,
  pickupDate,
  rentalDays,
  onSuccess,
  onError,
}: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      if (paymentMethod === 'cash') {
        // Pay on delivery: create order directly in our system
        const response = await fetch('/api/orders/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            customerInfo,
            dumpsterSize,
            deliveryDate,
            pickupDate,
            rentalDays,
            amount,
            paymentMethod: 'cash',
            status: 'pending_payment',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create order');
        }

        const result = await response.json();

        alert(
          'Order created successfully! We will contact you to confirm payment and delivery details.',
        );
        window.location.href =
          '/order-confirmation?orderId=' + result.orderId;
        return;
      }

      // Card payment: create Stripe Checkout session
      const response = await fetch('/api/payment/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          customerInfo,
          dumpsterSize,
          deliveryDate,
          pickupDate,
          rentalDays,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Payment processing failed');
      }

      const result = await response.json();

      // Notify parent that a session was created
      onSuccess(result.sessionId || '');

      // Redirect user to Stripe-hosted Checkout page
      if (result.url) {
        window.location.href = result.url;
      } else {
        throw new Error('Missing Stripe checkout URL');
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      onError(error.message || 'An error occurred while processing your payment');
      alert(
        error.message ||
          'Payment failed. Please try again or contact us at (801) 209-9013',
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Method Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Payment Method
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`p-4 border-2 rounded-lg text-center font-semibold transition-colors ${
              paymentMethod === 'card'
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
            }`}
          >
            💳 Credit/Debit Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('cash')}
            className={`p-4 border-2 rounded-lg text-center font-semibold transition-colors ${
              paymentMethod === 'cash'
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
            }`}
          >
            💵 Pay on Delivery
          </button>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Pay with Card:</strong> When you click{' '}
            <em>Complete Order</em>, you&apos;ll be redirected to a secure
            Stripe checkout page to pay with your credit or debit card.
            We never see or store your full card details.
          </p>
        </div>
      )}

      {paymentMethod === 'cash' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Pay on Delivery:</strong> You can pay with cash or check
            when the dumpster is delivered. Our driver will provide you with a
            receipt. We&apos;ll contact you to confirm your order and delivery
            details.
          </p>
        </div>
      )}

      {/* Security Notice */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <svg
            className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Secure Checkout
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Card payments are handled by Stripe on their PCI-compliant
              checkout page. TNT Dump never stores your full card details.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isProcessing}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          `Complete Order - $${amount.toFixed(2)}`
        )}
      </button>

      <p className="text-xs text-gray-600 text-center">
        By completing this order, you agree to our{' '}
        <a href="/terms-of-service" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}
