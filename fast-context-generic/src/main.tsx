import React from 'react'
import ReactDOM from 'react-dom/client'
import createFastContext from './src/createFastContext'
import App from './App'
import './index.css'

interface CategoryType {
  alt: string;
  src: string;
  title: string;
}

interface ProductType extends CategoryType {
  price: string | number;
  discount: number;
  stock: number;
}

declare global {
  interface Window {
    categories: CategoryType[];
    products: ProductType[];
  }
}

const { Provider, useStore } = createFastContext({
  categories: Object.assign({}, (typeof window !== 'undefined') ? window.categories : {});,
  products: Object.assign({}, (typeof window !== 'undefined') ? window.products : {});,
});

/*
 * How to passing `useStore` to App.tsx
 * without re-declare createFastContext() in the App.tsx or to
 * deep child components
 */ 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
