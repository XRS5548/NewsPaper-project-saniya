import React, { useState } from "react";

export default function AttendanceCalendar() {
  const [attendance, setAttendance] = useState({});  
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (m, y) => {
    const date = new Date(y, m, 1);
    const daysArray = [];
    while (date.getMonth() === m) {
      daysArray.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return daysArray;
  };

  const toggleAttendance = (date, status) => {
    const key = date.toDateString();
    setAttendance({ ...attendance, [key]: status });
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else setMonth(month + 1);
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDayIndex = new Date(year, month, 1).getDay();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
       
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
        >
          Prev
        </button>
        <h2 className="text-xl font-bold text-pink-600">
          {monthNames[month]} {year}
        </h2>
        <button
          onClick={nextMonth}
          className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
        >
          Next
        </button>
      </div>

      
      <div className="grid grid-cols-7 gap-2 text-center font-semibold border-b pb-2">
        {days.map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

       
      <div className="grid grid-cols-7 gap-2 mt-2 text-center">
       
        {Array(firstDayIndex).fill("").map((_, idx) => (
          <div key={"empty" + idx}></div>
        ))}

        {daysInMonth.map(date => {
          const status = attendance[date.toDateString()]; // 'present' or 'absent'
          return (
            <div
              key={date}
              className="border p-2 rounded flex flex-col items-center gap-1"
            >
              <div className="font-medium">{date.getDate()}</div>
              <div className="flex gap-1">
                <button
                  onClick={() => toggleAttendance(date, "present")}
                  className={`px-2 py-1 rounded text-white text-sm ${status === "present" ? "bg-green-500" : "bg-gray-300"
                    }`}
                >
                  P
                </button>
                <button
                  onClick={() => toggleAttendance(date, "absent")}
                  className={`px-2 py-1 rounded text-white text-sm ${status === "absent" ? "bg-red-500" : "bg-gray-300"
                    }`}
                >
                  A
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
