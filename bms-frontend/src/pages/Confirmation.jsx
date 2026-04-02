import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h1>No booking</h1>;

  const { seats, total, show } = state;

  // 🎫 Generate Ticket ID
  const ticketId = Math.random().toString(36).substring(2, 8).toUpperCase();

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Movie Ticket", 20, 20);
    doc.text(`Ticket ID: ${ticketId}`, 20, 30);
    doc.text(`Seats: ${seats.join(", ")}`, 20, 40);
    doc.text(`Total: ₹${total}`, 20, 50);
    doc.text(`Show: ${show}`, 20, 60);

    doc.save("ticket.pdf");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded shadow w-80 text-center">

        <h1 className="text-2xl font-bold text-green-600">
          🎉 Booking Confirmed
        </h1>

        <p className="mt-2 text-gray-500">Enjoy your movie 🍿</p>

        {/* Ticket Box */}
        <div className="border p-4 mt-4 rounded bg-gray-50">

          <p className="text-sm text-gray-500">
            Ticket ID: <span className="font-semibold">{ticketId}</span>
          </p>

          <p className="mt-2">Seats: {seats.join(", ")}</p>
          <p>Total: ₹{total}</p>
          <p>Show: {show}</p>

          {/* QR Code */}
          <div className="flex justify-center mt-4">
            <QRCodeCanvas
              value={JSON.stringify({
                ticketId,
                seats,
                total,
                show,
              })}
              size={140}
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mt-4">

          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 border rounded"
          >
            Home
          </button>

          <button
            onClick={downloadPDF}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Download Ticket
          </button>

        </div>

      </div>
    </div>
  );
};

export default Confirmation;