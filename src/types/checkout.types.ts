import { Cart } from './cart.types';

export interface BillingDetails {
  name: string;
  email: string;
  phone: string;
}

export interface ShippingInfo {
  address: string;
  zipCode: string;
  city: string;
  country: string;
}

export interface PaymentDetails {
  paymentMethod: 'e-money' | 'cash-on-delivery';
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

export interface CheckoutForm extends BillingDetails, ShippingInfo, PaymentDetails {}

export interface Order {
  id: string;
  items: Cart['items'];
  billingDetails: BillingDetails;
  shippingInfo: ShippingInfo;
  paymentDetails: PaymentDetails;
  pricing: {
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
  orderDate: Date;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}

export interface FormFieldError {
  message: string;
  type: 'required' | 'pattern' | 'minLength' | 'maxLength' | 'custom';
}

export type FormErrors<T> = Partial<Record<keyof T, FormFieldError>>;
