import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h1>No payment data</h1>;

  const { movieId, seats, total, showTime } = state;

  // 🔥 Fake UPI ID
  const upiId = "bookmyshow@upi";

  // 🔥 UPI payment string (real format)
  const upiString = `upi://pay?pa=${upiId}&pn=BookMyScreen&am=${total}&cu=INR`;

  const handlePayment = async () => {
    await fetch("http://localhost:9000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieId,
        seats,
        showTime,
        total,
      }),
    });

    navigate("/confirmation", {
      state: { seats, total, show: showTime },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded shadow w-80 text-center">

        <h1 className="text-2xl font-bold mb-3">Scan & Pay</h1>

        <p className="text-sm text-gray-500 mb-2">
          Scan using any UPI app
        </p>

        {/* 🔳 QR CODE */}
        <div className="flex justify-center mb-4">
          <QRCodeCanvas value={upiString} size={180} />
        </div>

        <p className="font-semibold mb-2">Total: ₹{total}</p>

        <p className="text-xs text-gray-400 mb-4">
          UPI ID: {upiId}
        </p>

        {/* Button after payment */}
        <button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          I Have Paid
        </button>

      </div>
    </div>
  );
};

export default Payment;