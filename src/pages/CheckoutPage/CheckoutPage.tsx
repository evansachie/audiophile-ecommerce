import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Button } from '../../components/ui';
import { CheckoutForm } from '../../components/checkout/CheckoutForm/CheckoutForm';
import { OrderSummary } from '../../components/checkout/OrderSummary/OrderSummary';
import { OrderConfirmation } from '../../components/checkout/OrderConfirmation/OrderConfirmation';
import { useCart } from '../../contexts/CartContext';
import { CheckoutForm as CheckoutFormType, Order } from '../../types/checkout.types';

// Validation schema
const checkoutSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  paymentMethod: Yup.string().oneOf(['e-money', 'cash']).required('Required'),
  eMoneyNumber: Yup.string().when('paymentMethod', {
    is: (val: string) => val === 'e-money',
    then: () => Yup.string().required('Required'),
    otherwise: () => Yup.string().notRequired()
  }),
  eMoneyPin: Yup.string().when('paymentMethod', {
    is: (val: string) => val === 'e-money',
    then: () => Yup.string().required('Required'),
    otherwise: () => Yup.string().notRequired()
  }),
});

// Initial form values
const initialValues: CheckoutFormType = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zipCode: '',
  city: '',
  country: '',
  paymentMethod: 'e-money',
  eMoneyNumber: '',
  eMoneyPin: '',
};

export const CheckoutPage = () => {
  const { state: cartState, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Calculate order summary values
  const shipping = 50;
  const vat = Math.round(totalPrice * 0.2); // 20% VAT
  const grandTotal = totalPrice + shipping;

  const handleSubmit = (values: CheckoutFormType) => {
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      const order: Order = {
        items: cartState.items,
        billingDetails: {
          name: values.name,
          email: values.email,
          phone: values.phone,
        },
        shippingInfo: {
          address: values.address,
          zipCode: values.zipCode,
          city: values.city,
          country: values.country,
        },
        paymentDetails: {
          paymentMethod: values.paymentMethod,
          eMoneyNumber: values.eMoneyNumber,
          eMoneyPin: values.eMoneyPin,
        },
        summary: {
          subtotal: totalPrice,
          shipping,
          vat,
          grandTotal,
        },
      };
  
      // Store order details for confirmation screen
      setOrderDetails(order);
      setOrderPlaced(true);
      setIsSubmitting(false);
      
      // Clear cart after successful order
      clearCart();
    }, 1500);
  };

  // Redirect to home if cart is empty
  if (cartState.items.length === 0 && !orderPlaced) {
    return (
      <Container className="py-16 text-center">
        <h2 className="text-h4 mb-6">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some products to your cart before checking out.</p>
        <Link to="/">
          <Button variant="primary">Continue Shopping</Button>
        </Link>
      </Container>
    );
  }

  // Show order confirmation if order is placed
  if (orderPlaced && orderDetails) {
    return <OrderConfirmation order={orderDetails} />;
  }

  return (
    <div className="bg-audiophile-white-light py-16">
      <Container>
        {/* Go Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-500 hover:text-audiophile-orange transition-colors duration-200"
        >
          Go Back
        </button>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form - Left Side */}
          <div className="lg:col-span-2">
            <Formik
              initialValues={initialValues}
              validationSchema={checkoutSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <>
                  <CheckoutForm formik={formik} />
                  <div className="block lg:hidden mt-8">
                    <OrderSummary 
                      cartItems={cartState.items} 
                      subtotal={totalPrice} 
                      shipping={shipping} 
                      vat={vat} 
                      grandTotal={grandTotal}
                      onSubmit={formik.submitForm}
                      isSubmitting={isSubmitting || formik.isSubmitting}
                      canSubmit={formik.isValid && formik.dirty}
                    />
                  </div>
                </>
              )}
            </Formik>
          </div>
          
          {/* Order Summary - Right Side (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1">
            <OrderSummary 
              cartItems={cartState.items} 
              subtotal={totalPrice} 
              shipping={shipping} 
              vat={vat} 
              grandTotal={grandTotal}
              onSubmit={() => {
                const formElement = document.querySelector('form');
                if (formElement) {
                  formElement.requestSubmit();
                }
              }}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
