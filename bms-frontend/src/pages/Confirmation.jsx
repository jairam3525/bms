import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <h1>No booking</h1>;

  const { seats, total, show } = state;

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Movie Ticket", 20, 20);
    doc.text(`Seats: ${seats.join(", ")}`, 20, 40);
    doc.text(`Total: ₹${total}`, 20, 50);
    doc.text(`Show: ${show}`, 20, 60);

    doc.save("ticket.pdf");
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">

      <h1 className="text-2xl font-bold text-green-600">
        🎉 Booking Confirmed
      </h1>

      <p className="mt-2">Thanks for booking</p>

      <div className="border p-4 mt-4 rounded">
        <p>Seats: {seats.join(", ")}</p>
        <p>Total: ₹{total}</p>
        <p>Show: {show}</p>

        <div className="flex justify-center mt-4">
          <QRCodeCanvas value={seats.join(",")} size={120} />
        </div>
      </div>

      <div className="flex gap-3 justify-center mt-4">
        <button onClick={() => navigate("/")}>Home</button>
        <button
          onClick={downloadPDF}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Confirmation;