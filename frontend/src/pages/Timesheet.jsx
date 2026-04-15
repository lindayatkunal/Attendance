import { useEffect, useState } from "react";
import API from "../services/api";

export default function Timesheet() {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/attendance/timesheet");
      setRecords(res.data);
    } catch (err) {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Timesheet</h1>

      <div className="bg-white p-4 rounded shadow">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Date</th>
              <th className="p-2">Check In</th>
              <th className="p-2">Check Out</th>
            </tr>
          </thead>

          <tbody>
            {records.map((item) => (
              <tr key={item.id} className="text-center border-t">
                <td className="p-2">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="p-2">
                  {item.checkIn
                    ? new Date(item.checkIn).toLocaleTimeString()
                    : "-"}
                </td>
                <td className="p-2">
                  {item.checkOut
                    ? new Date(item.checkOut).toLocaleTimeString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}