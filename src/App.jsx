import { useState } from "react";
import DashboardDatePicker from "./components/datePicker";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select a Date</h2>
      <DashboardDatePicker
        dateInputClassName="custom-date-input"
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        startDate={new Date()}
        endDate={new Date(new Date().setDate(new Date().getDate() + 30))} // Example: 30 days from today
        dateFormat="yyyy/MM/dd"
      />
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
}

export default App;
