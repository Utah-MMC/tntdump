'use client';

import { useState, useEffect } from 'react';

interface QuoteFormProps {
  onFormSubmit: (data: any) => void;
  initialData?: any;
}

export default function QuoteForm({ onFormSubmit, initialData }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    dumpsterSize: '',
    wasteType: '',
    deliveryDate: '',
    pickupDate: '',
    rentalDays: '7',
    deliveryAddress: '',
    projectDescription: '',
  });

  // Pre-fill form if initial data is provided
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    onFormSubmit(formData);
  };

  // Calculate minimum delivery date (48 hours from now)
  const getMinDeliveryDate = () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 2); // 48 hours = 2 days
    return minDate.toISOString().split('T')[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(801) 555-1234"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Delivery Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address *
            </label>
            <input
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              required
              placeholder="123 Main St, City, UT 84015"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
              ZIP Code *
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              pattern="^\d{5}$"
              placeholder="84015"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Dumpster Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Dumpster Details</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dumpsterSize" className="block text-sm font-medium text-gray-700 mb-2">
              Dumpster Size *
            </label>
            <select
              id="dumpsterSize"
              name="dumpsterSize"
              value={formData.dumpsterSize}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select size</option>
              <option value="15">15 Yard - $349</option>
              <option value="20">20 Yard - $375 (Most Popular)</option>
              <option value="30">30 Yard - $450</option>
              <option value="10-dirt">10 Yard Clean Dirt - $299</option>
              <option value="10-mixed">10 Yard Mixed Load - $329</option>
              <option value="12-concrete">12 Yard Concrete - $349</option>
            </select>
          </div>

          <div>
            <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700 mb-2">
              Waste Type *
            </label>
            <select
              id="wasteType"
              name="wasteType"
              value={formData.wasteType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select waste type</option>
              <option value="general">General Waste</option>
              <option value="construction">Construction Debris</option>
              <option value="concrete">Concrete/Brick</option>
              <option value="dirt">Clean Dirt</option>
              <option value="mixed">Mixed Materials</option>
              <option value="yard">Yard Waste</option>
            </select>
          </div>
        </div>
      </div>

      {/* Rental Period */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rental Period</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Date *
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
              min={getMinDeliveryDate()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-600 mt-1">Minimum 48 hours notice</p>
          </div>

          <div>
            <label htmlFor="rentalDays" className="block text-sm font-medium text-gray-700 mb-2">
              Rental Duration *
            </label>
            <select
              id="rentalDays"
              name="rentalDays"
              value={formData.rentalDays}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1">1 Day (30% off)</option>
              <option value="3">3 Days</option>
              <option value="7">7 Days (Standard)</option>
              <option value="14">14 Days</option>
              <option value="30">30 Days</option>
            </select>
          </div>

          <div>
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Date (Optional)
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              min={formData.deliveryDate}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
          Project Description (Optional)
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your project, any special requirements, or questions you have..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
      >
        Continue to Payment
      </button>

      <p className="text-xs text-gray-600 text-center">
        By continuing, you agree to our{' '}
        <a href="/terms-of-service" className="text-blue-600 hover:underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}

