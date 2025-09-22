'use client';

import React, { useState } from 'react';

export default function DumpsterCalculator() {
  const [zipCode, setZipCode] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [isVeteran, setIsVeteran] = useState(false);
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    if (!zipCode || !selectedSize || !selectedDuration) {
      alert('Please fill in all required fields');
      return;
    }

    // T&T Dumpsters pricing
    const basePrices = {
      '10': 299,
      '15': 399,
      '20': 499,
      '30': 699,
      '40': 899
    };

    const basePrice = basePrices[selectedSize as keyof typeof basePrices] || 399;
    const days = parseInt(selectedDuration);
    let totalEstimate = basePrice;

    if (days === 1) {
      totalEstimate = basePrice * 0.7; // 30% discount for 1 day
    } else if (days <= 7) {
      totalEstimate = basePrice;
    } else if (days === 14) {
      totalEstimate = basePrice * 1.5;
    } else if (days === 30) {
      totalEstimate = basePrice * 2;
    }

    const veteranDiscount = isVeteran ? totalEstimate * 0.10 : 0;
    const finalPrice = totalEstimate - veteranDiscount;

    setResult(`
      <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200 shadow-md">
        <h4 class="text-lg font-bold text-blue-600 mb-3">💰 Estimated Cost</h4>
        <div class="text-3xl font-bold text-blue-600 mb-2">$${finalPrice.toLocaleString()}</div>
        <p class="text-gray-600 mb-3">For ${selectedSize}-yard dumpster, ${selectedDuration} day${selectedDuration === '1' ? '' : 's'} in ${zipCode}</p>
        ${isVeteran ? `<div class="text-blue-600 font-semibold">Veteran discount (10%): -$${veteranDiscount.toLocaleString()}</div>` : ''}
        <div class="mt-4">
          <button onclick="window.location.href='tel:801-209-9013'" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Call (801) 209-9013 for Exact Quote
          </button>
        </div>
      </div>
    `);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">T&T Dumpsters Cost Calculator</h2>
        <p className="text-lg text-gray-600">Get an instant price estimate for your dumpster rental</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        {/* Zip Code Input */}
        <div className="mb-6">
          <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
            📍 Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter zip code"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={5}
          />
        </div>

        {/* Dumpster Size Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">📦 Choose Your Dumpster Size</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { size: '10', price: '$299', description: 'Small projects' },
              { size: '15', price: '$399', description: 'Renovations' },
              { size: '20', price: '$499', description: 'Most popular' },
              { size: '30', price: '$699', description: 'Large projects' },
              { size: '40', price: '$899', description: 'Commercial' }
            ].map((option) => (
              <label
                key={option.size}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedSize === option.size 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <input
                  type="radio"
                  name="dumpsterSize"
                  value={option.size}
                  checked={selectedSize === option.size}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="sr-only"
                />
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{option.size} Yard</div>
                  <div className="text-sm text-gray-600 mb-1">{option.description}</div>
                  <div className="text-sm font-semibold text-blue-600">{option.price}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
        
        {/* Duration Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">⏱️ Select Rental Duration</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { duration: '1', description: 'Same day pickup' },
              { duration: '3', description: 'Short term' },
              { duration: '7', description: 'Standard rental' },
              { duration: '14', description: 'Extended rental' },
              { duration: '30', description: 'Long term rental' }
            ].map((option) => (
              <label
                key={option.duration}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedDuration === option.duration 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <input
                  type="radio"
                  name="duration"
                  value={option.duration}
                  checked={selectedDuration === option.duration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="sr-only"
                />
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-1">{option.duration} Day{option.duration === '1' ? '' : 's'}</div>
                  <div className="text-xs text-gray-600">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
            
        {/* Veteran Discount */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isVeteran}
              onChange={(e) => setIsVeteran(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              🎖️ Veteran Discount (10%) - Thank you for your service!
            </span>
          </label>
        </div>
          
        {/* Calculate Button */}
        <div className="text-center mb-6">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={handleCalculate}
          >
            Calculate Estimate
          </button>
        </div>
          
        {/* Results Section */}
        {result && (
          <div dangerouslySetInnerHTML={{ __html: result }} />
        )}

        {/* How It Works Section */}
        <div className="bg-blue-50 rounded-lg p-6 mt-6">
          <h4 className="font-bold text-blue-600 mb-4">💡 How Our Calculator Works</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-600">
            <ul className="space-y-2">
              <li>• <strong>Utah Service:</strong> We serve the entire Wasatch Front area</li>
              <li>• <strong>1-Day Special:</strong> 30% discount for same-day pickup</li>
              <li>• <strong>Flexible Pricing:</strong> Competitive rates based on duration</li>
            </ul>
            <ul className="space-y-2">
              <li>• <strong>Veteran Discount:</strong> 10% off for all veterans</li>
              <li>• <strong>Weight-Based:</strong> Additional charges for heavy materials</li>
              <li>• <strong>Family Owned:</strong> Serving Utah since 1965</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}