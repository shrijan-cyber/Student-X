import { useState } from 'react';
import { FiMenu, FiMapPin, FiDollarSign, FiUsers, FiStar, FiHeart } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';

const Accommodation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const accommodations = [
    {
      id: 1,
      name: 'Green Valley PG',
      type: 'PG',
      location: 'Koramangala, Bangalore',
      distance: '2 km from IISc',
      price: '₹8,000/month',
      rating: 4.5,
      amenities: ['WiFi', 'Food', 'AC', 'Laundry'],
      gender: 'Boys',
      image: '🏠'
    },
    {
      id: 2,
      name: 'Student Haven Hostel',
      type: 'Hostel',
      location: 'HSR Layout, Bangalore',
      distance: '5 km from BITS',
      price: '₹6,500/month',
      rating: 4.2,
      amenities: ['WiFi', 'Food', 'Gym', 'Security'],
      gender: 'Girls',
      image: '🏢'
    },
    {
      id: 3,
      name: 'Cozy 2BHK Flat',
      type: 'Flat',
      location: 'Indiranagar, Bangalore',
      distance: '3 km from NIT',
      price: '₹15,000/month',
      rating: 4.7,
      amenities: ['WiFi', 'Furnished', 'Parking', 'Power Backup'],
      gender: 'Any',
      image: '🏘️'
    },
    {
      id: 4,
      name: 'Campus View PG',
      type: 'PG',
      location: 'Whitefield, Bangalore',
      distance: '1 km from Christ University',
      price: '₹7,500/month',
      rating: 4.4,
      amenities: ['WiFi', 'Food', 'Cleaning', 'Security'],
      gender: 'Boys',
      image: '🏠'
    },
    {
      id: 5,
      name: 'Royal Nest Hostel',
      type: 'Hostel',
      location: 'Jayanagar, Bangalore',
      distance: '4 km from IIM',
      price: '₹9,000/month',
      rating: 4.6,
      amenities: ['WiFi', 'Food', 'AC', 'Study Room'],
      gender: 'Girls',
      image: '🏢'
    },
    {
      id: 6,
      name: 'Shared 3BHK Apartment',
      type: 'Flat',
      location: 'Marathahalli, Bangalore',
      distance: '6 km from VIT',
      price: '₹10,000/month',
      rating: 4.3,
      amenities: ['WiFi', 'Furnished', 'Kitchen', 'Balcony'],
      gender: 'Any',
      image: '🏘️'
    }
  ];

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      <Navbar />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:ml-64 pt-16">
        <div className="p-6 md:p-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mb-4 p-2 rounded-lg bg-white dark:bg-gray-800"
          >
            <FiMenu size={24} />
          </button>

          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Student Accommodation
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Find safe & student-friendly stays near campus
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-3 mb-6">
            {['All', 'PG', 'Hostel', 'Flat', 'Boys', 'Girls'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Accommodation Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((place) => (
              <Card key={place.id} hover className="flex flex-col">
                <div className="text-7xl mb-4 text-center">{place.image}</div>
                
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">{place.name}</h3>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <FiHeart size={20} />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FiMapPin className="mr-2" size={16} />
                    <span className="text-sm">{place.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="text-sm">{place.distance}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-primary">{place.price}</span>
                  <div className="flex items-center">
                    <FiStar className="text-yellow-500 mr-1" size={16} />
                    <span className="font-medium">{place.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {place.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {place.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                      +{place.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    place.type === 'PG' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : place.type === 'Hostel'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                  }`}>
                    {place.type}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                    {place.gender}
                  </span>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button variant="gradient" size="sm" className="flex-1">
                    Contact Owner
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Roommate Finder CTA */}
          <Card className="mt-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white" glass={false}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <FiUsers className="mr-2" />
                  Looking for a roommate?
                </h3>
                <p className="opacity-90">Find compatible roommates based on your preferences</p>
              </div>
              <Button variant="secondary" className="mt-4 md:mt-0">
                Find Roommates
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
