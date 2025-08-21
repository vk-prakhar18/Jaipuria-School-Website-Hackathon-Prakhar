import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  BookOpen, 
  Users, 
  Trophy, 
  Home, 
  Wifi, 
  Car, 
  TreePine,
  MapPin,
  Info,
  X
} from 'lucide-react';

const CampusMap = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [hoveredBuilding, setHoveredBuilding] = useState(null);

  const buildings = [
    {
      id: 1,
      name: "Admin Block",
      icon: Building,
      color: "bg-blue-500",
      position: "col-span-2 row-span-2",
      description: "Main administrative office housing the principal's office, accounts department, and administrative staff.",
      facilities: ["Principal's Office", "Accounts Department", "Reception", "Conference Room"],
      contact: "Ext: 101"
    },
    {
      id: 2,
      name: "Library",
      icon: BookOpen,
      color: "bg-green-500",
      position: "col-span-2 row-span-1",
      description: "State-of-the-art library with extensive collection of books, digital resources, and study spaces.",
      facilities: ["Reading Hall", "Digital Section", "Reference Books", "Study Rooms"],
      contact: "Ext: 201"
    },
    {
      id: 3,
      name: "Science Labs",
      icon: Wifi,
      color: "bg-purple-500",
      position: "col-span-1 row-span-2",
      description: "Modern laboratories equipped with latest scientific instruments and technology.",
      facilities: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"],
      contact: "Ext: 301"
    },
    {
      id: 4,
      name: "Classrooms",
      icon: Users,
      color: "bg-yellow-500",
      position: "col-span-3 row-span-2",
      description: "Spacious and well-equipped classrooms designed for optimal learning experience.",
      facilities: ["Smart Classrooms", "Projector Systems", "Air Conditioning", "Comfortable Seating"],
      contact: "Ext: 401"
    },
    {
      id: 5,
      name: "Sports Complex",
      icon: Trophy,
      color: "bg-red-500",
      position: "col-span-2 row-span-2",
      description: "Multi-purpose sports facility with indoor and outdoor sports amenities.",
      facilities: ["Basketball Court", "Badminton Court", "Table Tennis", "Gymnasium"],
      contact: "Ext: 501"
    },
    {
      id: 6,
      name: "Auditorium",
      icon: Building,
      color: "bg-indigo-500",
      position: "col-span-2 row-span-1",
      description: "Large auditorium for cultural events, assemblies, and performances.",
      facilities: ["500+ Seating", "Sound System", "Stage Lighting", "Green Rooms"],
      contact: "Ext: 601"
    },
    {
      id: 7,
      name: "Hostel",
      icon: Home,
      color: "bg-pink-500",
      position: "col-span-2 row-span-2",
      description: "Comfortable accommodation facilities for outstation students.",
      facilities: ["AC Rooms", "Dining Hall", "Common Room", "24/7 Security"],
      contact: "Ext: 701"
    },
    {
      id: 8,
      name: "Parking",
      icon: Car,
      color: "bg-gray-500",
      position: "col-span-1 row-span-1",
      description: "Spacious parking area for students, staff, and visitors.",
      facilities: ["Covered Parking", "Security", "Bike Stand", "Car Wash"],
      contact: "Ext: 801"
    },
    {
      id: 9,
      name: "Garden",
      icon: TreePine,
      color: "bg-emerald-500",
      position: "col-span-1 row-span-1",
      description: "Beautiful landscaped garden providing a peaceful environment for relaxation.",
      facilities: ["Walking Paths", "Sitting Areas", "Fountain", "Medicinal Plants"],
      contact: "Ext: 901"
    }
  ];

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
  };

  const closeModal = () => {
    setSelectedBuilding(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-shadow">
              Campus Map
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our interactive campus map to discover all the facilities and buildings 
              that make Seth MR Jaipuria a premier educational institution.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>Click to explore</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-academic-gold rounded"></div>
                <span>Hover for details</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-6 gap-4 h-96 md:h-[600px]">
              {buildings.map((building) => (
                <motion.div
                  key={building.id}
                  className={`${building.position} ${building.color} rounded-lg cursor-pointer relative group transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                  onClick={() => handleBuildingClick(building)}
                  onMouseEnter={() => setHoveredBuilding(building)}
                  onMouseLeave={() => setHoveredBuilding(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
                    <building.icon size={32} className="mb-2" />
                    <h3 className="font-semibold text-center text-sm md:text-base">{building.name}</h3>
                    
                    {/* Tooltip */}
                    {hoveredBuilding?.id === building.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-gray-800 p-3 rounded-lg shadow-lg z-20 min-w-[200px]"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <Info size={16} className="text-academic-blue" />
                          <span className="font-semibold text-sm">{building.name}</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{building.description}</p>
                        <div className="text-xs">
                          <p><strong>Contact:</strong> {building.contact}</p>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {buildings.map((building) => (
                <div key={building.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-4 h-4 ${building.color} rounded`}></div>
                  <span className="text-sm font-medium text-gray-700">{building.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building Details Modal */}
      <AnimatePresence>
        {selectedBuilding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${selectedBuilding.color} rounded-lg flex items-center justify-center`}>
                    <selectedBuilding.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedBuilding.name}</h2>
                    <p className="text-gray-600">Contact: {selectedBuilding.contact}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedBuilding.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedBuilding.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-academic-blue rounded-full"></div>
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-academic-blue">
                  <MapPin size={20} />
                  <span className="font-medium">Located in the main campus area</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Campus Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-academic-blue">
                Campus Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our 25-acre campus is designed to provide a comprehensive learning environment 
                with modern facilities and infrastructure. Each building is strategically 
                positioned to create an optimal educational experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-academic-blue">25</div>
                  <div className="text-sm text-gray-600">Acres</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-academic-blue">9</div>
                  <div className="text-sm text-gray-600">Buildings</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-academic-blue rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Campus Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-academic-gold rounded-full"></div>
                  <span>State-of-the-art infrastructure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-academic-gold rounded-full"></div>
                  <span>Modern laboratories and classrooms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-academic-gold rounded-full"></div>
                  <span>Extensive sports facilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-academic-gold rounded-full"></div>
                  <span>Comfortable hostel accommodation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-academic-gold rounded-full"></div>
                  <span>Beautiful landscaped gardens</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusMap;
