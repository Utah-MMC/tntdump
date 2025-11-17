import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerInfo,
      dumpsterSize,
      deliveryDate,
      pickupDate,
      rentalDays,
      amount,
      paymentMethod,
      status,
    } = body;

    // Validate required fields
    if (!customerInfo || !dumpsterSize || !deliveryDate || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate a unique order ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create order object
    const order = {
      orderId,
      customerInfo,
      dumpsterSize,
      deliveryDate,
      pickupDate,
      rentalDays,
      amount,
      paymentMethod: paymentMethod || 'cash',
      status: status || 'pending_payment',
      createdAt: new Date().toISOString(),
    };

    // Log the order (in production, save to database)
    console.log('Order created:', order);

    // TODO: Save order to database
    // TODO: Send confirmation email to customer
    // TODO: Send notification to business owner with order details

    return NextResponse.json({
      success: true,
      orderId,
      message: 'Order created successfully',
      order,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Order creation failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

