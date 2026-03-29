import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShow, setSelectedShow] = useState({
    label: "Morning",
    time: "09:00 AM",
  });

  const navigate = useNavigate();

  const bookedSeats = ["A1", "A2", "D5", "E6", "G3"];

  const sections = [
    {
      name: "Class 3 (Front)",
      price: 100,
      rows: ["G", "H", "I"],
    },
    {
      name: "Class 2 (Middle)",
      price: 150,
      rows: ["D", "E", "F"],
    },
    {
      name: "Balcony (Class 1)",
      price: 200,
      rows: ["A", "B"],
    },
  ];

  const shows = [
    { label: "Morning", time: "09:00 AM" },
    { label: "Matinee", time: "12:30 PM" },
    { label: "First Show", time: "04:00 PM" },
    { label: "Second Show", time: "08:00 PM" },
  ];

  const seatsPerRow = 10;

  const toggleSeat = (seat, price) => {
    const exists = selectedSeats.find((s) => s.seat === seat);

    if (exists) {
      setSelectedSeats(selectedSeats.filter((s) => s.seat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, { seat, price }]);
    }
  };

  const total = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  const handleConfirm = () => {
    const booking = {
      seats: selectedSeats,
      total,
      show: selectedShow.time,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("bookings")) || []),
        booking,
      ])
    );

    navigate("/confirmation", {
      state: {
        seats: selectedSeats.map((s) => s.seat),
        total,
        show: selectedShow.time,
      },
    });
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8">

      <h1 className="text-2xl font-bold text-center mb-6">
        Select Seats
      </h1>

      {/* SHOWS */}
      <div className="flex gap-3 justify-center mb-6">
        {shows.map((show) => (
          <button
            key={show.time}
            onClick={() => setSelectedShow(show)}
            className={`px-3 py-1 border rounded text-sm ${
              selectedShow.time === show.time
                ? "bg-blue-600 text-white"
                : ""
            }`}
          >
            {show.label} <br /> {show.time}
          </button>
        ))}
      </div>

      {/* SCREEN */}
      <div className="text-center mb-8">
        <div className="bg-gray-300 h-2 w-3/4 mx-auto rounded"></div>
        <p className="text-sm text-gray-500 mt-1">SCREEN</p>
      </div>

      {/* SECTIONS */}
      {sections.map((section) => (
        <div key={section.name} className="mb-8">

          <h2 className="font-semibold mb-3 text-center">
            {section.name} - ₹{section.price}
          </h2>

          {section.rows.map((row) => (
            <div key={row} className="flex justify-center gap-2 mb-2">
              <span className="w-6">{row}</span>

              {Array.from({ length: seatsPerRow }, (_, i) => {
                const seatId = `${row}${i + 1}`;
                const isSelected = selectedSeats.some(
                  (s) => s.seat === seatId
                );
                const isBooked = bookedSeats.includes(seatId);

                return (
                  <div
                    key={seatId}
                    onClick={() =>
                      !isBooked && toggleSeat(seatId, section.price)
                    }
                    className={`w-9 h-9 flex items-center justify-center text-xs rounded cursor-pointer border
                      ${
                        isBooked
                          ? "bg-black text-white cursor-not-allowed"
                          : isSelected
                          ? "bg-green-600 text-white"
                          : "border-green-600 text-green-600 hover:bg-green-100"
                      }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}

      {/* SUMMARY */}
      <div className="text-center mt-6">
        <p>
          Selected:{" "}
          {selectedSeats.map((s) => s.seat).join(", ") || "None"}
        </p>
        <p className="font-semibold mt-2">Total: ₹{total}</p>

        <button
          onClick={handleConfirm}
          className="mt-4 bg-red-500 text-white px-6 py-2 rounded"
        >
          Confirm Booking
        </button>
      </div>

    </div>
  );
};

export default Booking;