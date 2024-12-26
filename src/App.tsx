import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { FilterPanel } from './components/FilterPanel';
import { TrendingGifts } from './components/TrendingGifts';
import { RecommendationSection } from './components/RecommendationSection';

function App() {
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]); // Assuming you fetch or have all products
  const [reminders, setReminders] = useState<any[]>([]); // Store reminders with details
  const [showModal, setShowModal] = useState(false); // Show or hide the modal
  const [recipient, setRecipient] = useState(""); // Recipient's name
  const [event, setEvent] = useState(""); // Event type (e.g. "Birthday")
  const [reminderDate, setReminderDate] = useState(""); // Reminder date

  // Handle search query
  const handleSearch = (query: string) => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle adding a reminder
  const handleAddReminder = () => {
    if (recipient.trim() !== "" && event.trim() !== "" && reminderDate.trim() !== "") {
      setReminders([
        ...reminders,
        { recipient, event, reminderDate },
      ]);
      setRecipient(""); // Clear recipient input
      setEvent(""); // Clear event input
      setReminderDate(""); // Clear date input
      setShowModal(false); // Close the modal
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gift className="w-8 h-8 text-purple-600" />
              <h1 className="text-xl font-semibold text-gray-900">GiftCuration</h1>
            </div>
            <nav className="flex items-center gap-6">

              
              <button
                onClick={() => setShowModal(true)}
                className="text-gray-600 hover:text-gray-900"
              >
                Set Reminder
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find the Perfect Gift with Intelligent Insights
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlock personalized gift suggestions for every occasion, driven by sophisticated recommendation engines and dynamic preference matching.
          </p>
          <RecommendationSection />
        </div>
      </section>

      {/* Reminders Section */}
      {reminders.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Your Reminders</h2>
            <div className="flex flex-wrap gap-6">
              {reminders.map((reminder, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl w-64"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-medium text-purple-600 mr-2">🎁</span>
                    <h3 className="text-lg font-semibold text-gray-800">{reminder.recipient}</h3>
                  </div>
                  <p className="text-md text-gray-700"><strong>Event:</strong> {reminder.event}</p>
                  <p className="text-md text-gray-700"><strong>Reminder Date:</strong> {reminder.reminderDate}</p>
                  <div className="mt-4 text-right">
                    <button
                      className="bg-purple-600 text-white py-1 px-4 rounded-md hover:bg-purple-700 transition duration-300"
                      onClick={() => alert(`Ready to buy gift for ${reminder.recipient} on ${reminder.reminderDate}`)}
                    >
                      Buy Gift
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3">
            <FilterPanel setFilteredProducts={setFilteredProducts} />
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <TrendingGifts />

            {/* Render Filtered Products */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Filtered Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
                      <div className="relative aspect-square">
                        {product.image && (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{product.name}</h4>
                          <span className="text-purple-600 font-semibold">${product.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                        <a
                          href={product.affiliateUrl} // If available
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block bg-purple-600 text-white py-2 px-4 rounded-full text-center hover:bg-purple-700 transition duration-300"
                        >
                          Get It
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products match the selected filters.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">© 2024 GiftCuration. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* Modal for Adding Reminder */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Add Reminder</h3>
            <div className="mb-4">
              <label htmlFor="recipient" className="block text-gray-700">Recipient's Name</label>
              <input
                id="recipient"
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter recipient's name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="event" className="block text-gray-700">Event</label>
              <input
                id="event"
                type="text"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                placeholder="Enter event type (e.g. Birthday)"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="reminder-date" className="block text-gray-700">Reminder Date</label>
              <input
                id="reminder-date"
                type="date"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReminder}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Save Reminder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;