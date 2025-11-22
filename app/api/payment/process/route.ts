import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      amount,
      customerInfo,
      dumpsterSize,
      deliveryDate,
      pickupDate,
      rentalDays,
    } = body;

    if (!amount || !customerInfo || !dumpsterSize || !deliveryDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: customerInfo.email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(amount * 100), // dollars -> cents
            product_data: {
              name: `${dumpsterSize} Dumpster Rental`,
              description: `Delivery: ${deliveryDate}${
                pickupDate ? ` • Pickup: ${pickupDate}` : ''
              }`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        dumpsterSize,
        deliveryDate,
        pickupDate: pickupDate || '',
        rentalDays: rentalDays?.toString() || '',
        customerName: `${customerInfo.firstName} ${customerInfo.lastName}`,
        customerPhone: customerInfo.phone,
        customerZip: customerInfo.zipCode,
      },
      success_url: `${baseUrl}/order-confirmation?orderId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart?canceled=true`,
    });

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      {
        error: 'Payment processing failed',
        message: error?.message || 'Unknown error',
      },
      { status: 500 },
    );
  }
}
