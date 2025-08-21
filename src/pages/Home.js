import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  BookOpen, 
  Award, 
  Bell, 
  MessageSquare, 
  Search,
  Calendar,
  Star,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const [selectedPoll, setSelectedPoll] = useState('');
  const [feedback, setFeedback] = useState('');

  const notices = [
    {
      id: 1,
      title: "Annual Sports Meet 2024",
      date: "2024-02-15",
      priority: "high",
      content: "Annual sports meet will be held on March 15th, 2024. All students are encouraged to participate."
    },
    {
      id: 2,
      title: "Library Week Celebration",
      date: "2024-02-10",
      priority: "medium",
      content: "Library week celebration from February 20-26, 2024 with various literary activities."
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "2024-02-08",
      priority: "high",
      content: "Parent-teacher meeting scheduled for February 25th, 2024 at 10:00 AM."
    }
  ];

  const lostItems = [
    {
      id: 1,
      item: "Blue Water Bottle",
      location: "Science Lab",
      date: "2024-02-12",
      contact: "Room 101"
    },
    {
      id: 2,
      item: "Black School Bag",
      location: "Auditorium",
      date: "2024-02-10",
      contact: "Admin Office"
    },
    {
      id: 3,
      item: "Silver Watch",
      location: "Sports Complex",
      date: "2024-02-08",
      contact: "Sports Office"
    }
  ];

  const stats = [
    { icon: Users, label: "Students", value: "2000+" },
    { icon: BookOpen, label: "Courses", value: "50+" },
    { icon: Award, label: "Awards", value: "100+" },
    { icon: MapPin, label: "Years", value: "25+" }
  ];

  const handlePollSubmit = (e) => {
    e.preventDefault();
    if (selectedPoll) {
      alert('Thank you for your feedback!');
      setSelectedPoll('');
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      alert('Thank you for your feedback!');
      setFeedback('');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-shadow">
              Welcome to Seth MR Jaipuria
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-100">
              Kanpur Road Campus Tour
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our state-of-the-art facilities, dedicated faculty, and vibrant campus life 
              that makes learning an enriching experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/campus-map" className="btn-secondary">
                Explore Campus Map
              </Link>
              <Link to="/about-us" className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-academic-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-academic-blue mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Intro Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-academic-blue">
                About Our Campus
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Seth MR Jaipuria, Kanpur Road Campus is a premier educational institution 
                committed to academic excellence and holistic development. Our campus spans 
                over 25 acres of lush greenery, providing an ideal environment for learning 
                and growth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and a comprehensive 
                curriculum, we nurture students to become responsible global citizens. Our 
                commitment to innovation and tradition creates a unique learning experience 
                that prepares students for future challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about-us" className="btn-primary">
                  Learn More About Us
                </Link>
                <Link to="/contact-us" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-academic-blue rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Star size={20} className="text-academic-gold" />
                    <span>Experienced Faculty</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star size={20} className="text-academic-gold" />
                    <span>Modern Infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star size={20} className="text-academic-gold" />
                    <span>Holistic Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star size={20} className="text-academic-gold" />
                    <span>Sports & Cultural Activities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star size={20} className="text-academic-gold" />
                    <span>Career Guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Notice Board
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest announcements, events, and important information 
              from our campus.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Bell size={20} className="text-academic-blue" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      notice.priority === 'high' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {notice.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>{new Date(notice.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{notice.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{notice.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Polls & Feedback Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Polls */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp size={24} className="text-academic-blue" />
                <h3 className="text-2xl font-bold text-academic-blue">Quick Poll</h3>
              </div>
              <p className="text-gray-600 mb-6">
                How would you rate your overall experience at our campus?
              </p>
              <form onSubmit={handlePollSubmit} className="space-y-4">
                {['Excellent', 'Good', 'Average', 'Needs Improvement'].map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="poll"
                      value={option}
                      checked={selectedPoll === option}
                      onChange={(e) => setSelectedPoll(e.target.value)}
                      className="text-academic-blue focus:ring-academic-blue"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
                <button type="submit" className="btn-primary w-full">
                  Submit Vote
                </button>
              </form>
            </motion.div>

            {/* Feedback */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare size={24} className="text-academic-blue" />
                <h3 className="text-2xl font-bold text-academic-blue">Share Feedback</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We value your feedback! Share your thoughts and suggestions with us.
              </p>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your feedback here..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-blue focus:border-transparent resize-none"
                  rows="4"
                />
                <button type="submit" className="btn-secondary w-full">
                  Submit Feedback
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lost & Found Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Lost & Found
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Found something? Lost something? Check our lost and found section or report items here.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lostItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Search size={20} className="text-academic-blue" />
                  <h3 className="font-semibold text-lg text-gray-800">{item.item}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Location:</strong> {item.location}</p>
                  <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</p>
                  <p><strong>Contact:</strong> {item.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/contact-us" className="btn-primary">
              Report Lost Item
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
