import API from "../services/api";

export default function Dashboard() {
  const handleCheckIn = async () => {
    try {
      const res = await API.post("/attendance/check-in");
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleCheckOut = async () => {
    try {
      const res = await API.post("/attendance/check-out");
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

      {/* Sidebar */}
      <div className="w-64 bg-black/30 backdrop-blur-lg border-r border-gray-700 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-400 mb-10 tracking-wide">
          Attendance
        </h2>

        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-500 shadow-lg">
            🏠 Dashboard
          </button>

          <button
            onClick={() => (window.location.href = "/timesheet")}
            className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            📊 Timesheet
          </button>

          <button
            onClick={() => (window.location.href = "/leave")}
            className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            📝 Leave
          </button>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="w-full mt-10 bg-red-500 hover:bg-red-600 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-wide">
            Welcome 👋
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Manage your attendance smoothly
          </p>
        </div>

        {/* Status Card (IMPORTANT for assignment) */}
        <div className="mb-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-gray-700 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">
            Today's Status
          </h2>
          <p className="text-gray-300">
            You have not checked in yet
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Check In */}
          <div className="bg-black/30 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-xl font-semibold mb-3 text-green-400">
              Start Your Day
            </h2>

            <p className="text-gray-400 mb-6">
              Mark your attendance at the beginning of your workday
            </p>

            <button
              onClick={handleCheckIn}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 p-3 rounded-lg text-lg font-semibold shadow-lg"
            >
              ✅ Check In
            </button>
          </div>

          {/* Check Out */}
          <div className="bg-black/30 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-xl hover:scale-[1.02] transition">
            <h2 className="text-xl font-semibold mb-3 text-blue-400">
              End Your Day
            </h2>

            <p className="text-gray-400 mb-6">
              Complete your workday attendance before leaving
            </p>

            <button
              onClick={handleCheckOut}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 p-3 rounded-lg text-lg font-semibold shadow-lg"
            >
              ⏱ Check Out
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-black/30 border border-gray-700 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-purple-400">
              📊 Timesheet
            </h3>
            <p className="text-gray-400 text-sm">
              View your attendance history easily.
            </p>
          </div>

          <div className="bg-black/30 border border-gray-700 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">
              📝 Leaves
            </h3>
            <p className="text-gray-400 text-sm">
              Apply and track leave requests.
            </p>
          </div>

          <div className="bg-black/30 border border-gray-700 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-green-400">
              ⚡ Quick Actions
            </h3>
            <p className="text-gray-400 text-sm">
              Fast access to daily operations.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}