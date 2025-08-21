import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  History, 
  Award, 
  Building, 
  Users, 
  BookOpen, 
  Trophy,
  Star,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';

const AboutUs = () => {
  const achievements = [
    {
      year: "2023",
      title: "Best School Award",
      description: "Recognized as the best educational institution in Uttar Pradesh"
    },
    {
      year: "2022",
      title: "Academic Excellence",
      description: "100% pass rate in board examinations"
    },
    {
      year: "2021",
      title: "Sports Champions",
      description: "State level champions in basketball and cricket"
    },
    {
      year: "2020",
      title: "Innovation Award",
      description: "Best innovative teaching methods implementation"
    }
  ];

  const facilities = [
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "State-of-the-art buildings with modern amenities and technology"
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Extensive collection of books and digital resources"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teaching staff"
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      description: "Multi-purpose sports facilities for all-round development"
    }
  ];

  const stats = [
    { label: "Years of Excellence", value: "25+", icon: Calendar },
    { label: "Students", value: "2000+", icon: Users },
    { label: "Faculty Members", value: "150+", icon: Star },
    { label: "Awards Won", value: "100+", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              About Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the rich legacy, vision, and commitment to excellence that makes 
              Seth MR Jaipuria, Kanpur Road Campus a premier educational institution.
            </p>
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

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-academic-blue rounded-lg flex items-center justify-center">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-academic-blue">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To be a leading educational institution that nurtures creative minds, 
                fosters innovation, and shapes responsible global citizens who contribute 
                positively to society.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-academic-blue" />
                  <span className="text-gray-600">Excellence in education</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-academic-blue" />
                  <span className="text-gray-600">Character development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-academic-blue" />
                  <span className="text-gray-600">Innovation and creativity</span>
                </li>
              </ul>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-academic-gold rounded-lg flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-academic-blue">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To provide quality education through innovative teaching methodologies, 
                state-of-the-art infrastructure, and a nurturing environment that 
                promotes holistic development of students.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-academic-gold" />
                  <span className="text-gray-600">Quality education delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-academic-gold" />
                  <span className="text-gray-600">Holistic development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-academic-gold" />
                  <span className="text-gray-600">Innovation in learning</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
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
              Our History
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A journey of excellence spanning over two decades, marked by continuous 
              growth, innovation, and commitment to educational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-academic-blue rounded-lg flex items-center justify-center">
                  <History size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-academic-blue">Legacy of Excellence</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-academic-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1998 - Foundation</h4>
                    <p className="text-gray-600">Established with a vision to provide quality education in Lucknow</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-academic-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2005 - Expansion</h4>
                    <p className="text-gray-600">Expanded campus infrastructure and introduced new programs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-academic-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2015 - Modernization</h4>
                    <p className="text-gray-600">Implemented digital learning and modern teaching methodologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-academic-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2023 - Excellence</h4>
                    <p className="text-gray-600">Recognized as one of the top educational institutions in the region</p>
                  </div>
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
              <h3 className="text-2xl font-bold mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-academic-gold rounded-full"></div>
                  <span>Established in 1998</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-academic-gold rounded-full"></div>
                  <span>25+ years of excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-academic-gold rounded-full"></div>
                  <span>2000+ successful alumni</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-academic-gold rounded-full"></div>
                  <span>100+ awards and recognitions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-academic-gold rounded-full"></div>
                  <span>State-of-the-art infrastructure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-academic-blue mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Celebrating our success stories and recognitions that reflect our 
              commitment to excellence in education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-academic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-academic-blue mb-2">{achievement.year}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
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
              Our Facilities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure and modern facilities designed to 
              provide the best learning environment for our students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-academic-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
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
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are guided by strong values that shape our educational philosophy 
                and define our commitment to excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-academic-gold" />
                  <span className="text-gray-700">Excellence in everything we do</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-academic-gold" />
                  <span className="text-gray-700">Integrity and ethical practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-academic-gold" />
                  <span className="text-gray-700">Innovation and creativity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-academic-gold" />
                  <span className="text-gray-700">Respect for diversity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-academic-gold" />
                  <span className="text-gray-700">Continuous improvement</span>
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
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-academic-gold mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Proven Track Record</h4>
                    <p className="text-blue-100 text-sm">25+ years of educational excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-academic-gold mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Expert Faculty</h4>
                    <p className="text-blue-100 text-sm">Highly qualified and experienced teachers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-academic-gold mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Modern Infrastructure</h4>
                    <p className="text-blue-100 text-sm">State-of-the-art facilities and technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-academic-gold mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Holistic Development</h4>
                    <p className="text-blue-100 text-sm">Focus on academic and personal growth</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
