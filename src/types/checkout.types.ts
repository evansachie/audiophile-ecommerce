import { CartItem } from './cart.types';

export type PaymentMethod = 'e-money' | 'cash';

// Billing details form interface
export interface BillingDetails {
  name: string;
  email: string;
  phone: string;
}

// Shipping information interface
export interface ShippingInfo {
  address: string;
  zipCode: string;
  city: string;
  country: string;
}

// Payment details interface
export interface PaymentDetails {
  paymentMethod: PaymentMethod;
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

// Complete checkout form interface
export interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: PaymentMethod;
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

// Order interface for submitting orders
export interface Order {
  items: CartItem[];
  billingDetails: BillingDetails;
  shippingInfo: ShippingInfo;
  paymentDetails: PaymentDetails;
  summary: {
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
}

// Form field error interface
export interface FormFieldError {
  field: string;
  message: string;
}

// Form errors interface
export interface FormErrors {
  [key: string]: string;
}
