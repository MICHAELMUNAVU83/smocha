import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function PaymentInfo() {
  const navigate = useNavigate();
  const [showMpesaModal, setShowMpesaModal] = useState(false);



  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        Your cart is empty.{' '}
        <button onClick={() => navigate('/')} className="text-blue-500 underline">
          Go back
        </button>
      </div>
    );
  }

  const totalCost = cartItems.reduce((sum, item) => sum + item.total, 0);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: "url('/images/bg.jpg')",
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '48px',
    paddingBottom: '48px'
  }}
>
  <div className="absolute top-0 left-0 w-full h-full bg-[#754728d3] z-0"></div>

  <div
    className="max-w-xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl space-y-6 border border-gray-200"
    style={{ padding: '32px' }}
  >
    <h1
      className="text-3xl font-bold text-[#4c1f13] border-b"
      style={{ paddingBottom: '12px' }}
    >
      🛒 Cart Summary
    </h1>

    <button onClick={() => navigate('/')} className="text-[#4c1f13] underline">
      Go back
    </button>

    <div className="space-y-6">
      {cartItems.map((order, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg shadow-sm border border-gray-100"
          style={{ padding: '16px' }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: '4px' }}>
            <span className="text-lg font-semibold text-[#4c1f13]">{order.item.name}</span>
            <span className="text-sm font-medium text-gray-500">x{order.quantity}</span>
          </div>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Sauces:</span>{' '}
              {order.sauces.length ? order.sauces.join(', ') : 'None'}
            </p>
            <p>
              <span className="font-semibold">Additives:</span>{' '}
              {order.additives.length ? order.additives.join(', ') : 'None'}
            </p>
          </div>

          <p
            className="text-right text-sm font-bold text-yellow-800"
            style={{ marginTop: '8px' }}
          >
            KES {order.total}
          </p>

          <button
            className="text-red-500"
            style={{ marginTop: '8px' }}
            onClick={() => handleRemoveItem(index)}
          >
            Remove from Cart
          </button>
        </div>
      ))}
    </div>

    <div className="flex justify-between items-center border-t" style={{ paddingTop: '16px' }}>
      <span className="text-xl font-semibold text-gray-800">Total:</span>
      <span className="text-2xl font-bold text-yellow-800">KES {totalCost}</span>
    </div>

    <button
      onClick={() => setShowMpesaModal(true)}
      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-md transition rounded-full"
      style={{ paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px' }}
    >
      Pay with M-Pesa
    </button>
  </div>

  {showMpesaModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-sm text-center space-y-4 relative"
        style={{ padding: '24px' }}
      >
        <button
          onClick={() => setShowMpesaModal(false)}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-green-600">M-Pesa Payment</h2>
        <p className="text-gray-700">Send payment to:</p>

        <div
          className="text-xl font-mono font-semibold text-gray-800 bg-gray-100 rounded-md"
          style={{ padding: '8px 16px' }}
        >
          07XX XXX XXX
        </div>

        <p className="text-sm text-gray-500">After payment, your order will be processed.</p>

        <button
          onClick={() => setShowMpesaModal(false)}
          className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold transition rounded-full"
          style={{ paddingTop: '8px', paddingBottom: '8px', paddingLeft: '16px', paddingRight: '16px', marginTop: '16px' }}
        >
          Done
        </button>
      </div>
    </div>
  )}
</div>
  );
}

export default PaymentInfo;
