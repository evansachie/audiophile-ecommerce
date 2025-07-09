# Audiophile E-commerce Website

[![Live Site](https://img.shields.io/badge/Live%20Site-Vercel-brightgreen)](https://audiophile-ecommerce-puce.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/evansachie/audiophile-ecommerce)

A fully-functional, multi-page e-commerce application built with React, TypeScript, and Tailwind CSS.

![Screenshot of Audiophile E-commerce Website](public/heroimage.png)

## About This Project

This project is a solution to a frontend development challenge for the Talent Mobility Program (TMP) organized by [Azubi Africa](http://azubiafrica.org/). The challenge required building a fully functional multi-page e-commerce website with specific requirements for user interaction, responsive design, and functionality.

## Features

- **Responsive Design**: Layout optimized for mobile, tablet, and desktop views
- **Interactive Elements**: Hover states for all interactive elements
- **Shopping Cart**: Add/remove products and update quantities
- **Form Validation**: Complete checkout form with validation
- **Accurate Pricing**: Order totals with product subtotal, shipping ($50), and VAT (20%)
- **Order Confirmation**: Modal with order summary after successful checkout
- **Cart Persistence**: Shopping cart state is saved between page refreshes

## Pages

- **Home Page**: Features hero section and featured products
- **Category Pages**: Separate pages for headphones, speakers, and earphones
- **Product Detail Pages**: Detailed information for each product
- **Checkout Page**: Form to complete purchase with billing, shipping, and payment details

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Form Handling**: Formik with Yup validation
- **State Management**: React Context API
- **Build Tool**: Vite
- **Deployment**: Vercel

## Project Structure

```
src
├── components
│   ├── Cart
│   ├── Checkout
│   ├── Home
│   ├── Product
│   └── Shared
├── context
│   └── CartContext.tsx
├── hooks
│   ├── useCart.ts
│   └── useProducts.ts
├── pages
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── HomePage.tsx
│   ├── ProductPage.tsx
│   └── NotFoundPage.tsx
├── styles
│   └── tailwind.css
├── App.tsx
├── index.tsx
└── vite-env.d.ts
```

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/AWESOME04/audiophile-ecommerce.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd audiophile-ecommerce
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:5173` to see the app in action.

Made with ❤️ by [Evans Acheampong](https://github.com/AWESOME04)
