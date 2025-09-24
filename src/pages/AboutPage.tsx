import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seo';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses with cutting-edge technology solutions that drive real results.'
    },
    {
      icon: Eye,
      title: 'Vision-Focused',
      description: 'Creating a future where AI and human creativity work seamlessly together.'
    },
    {
      icon: Heart,
      title: 'Client-Centered',
      description: 'Your success is our priority. We go above and beyond to exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project we undertake.'
    }
  ];

  const stats = [
    { value: '5+', label: 'Years of Excellence' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | AI-Code-Marketplace</title>
        <meta name="description" content="Learn about AI-Code-Marketplace - Leading web development company specializing in AI integration and modern web solutions." />
        <meta name="keywords" content={seoConfig.secondaryKeywords.slice(20, 30).join(', ')} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="section-padding mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 mb-6">
              <span className="text-white">Building the</span>{' '}
              <span className="text-gradient">Future</span>
              <br />
              <span className="text-white">of Web Development</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              We are AI-Code-Marketplace, a team of passionate developers, designers, and innovators 
              dedicated to transforming businesses through technology.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="section-padding mb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded with a vision to democratize advanced web development, AI-Code-Marketplace 
                has grown from a small team of tech enthusiasts to a leading force in the industry.
              </p>
              <p className="text-gray-300 mb-4">
                We recognized the gap between traditional web development and the possibilities 
                offered by AI and modern technologies. Our mission became clear: make cutting-edge 
                web solutions accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300">
                Today, we're proud to have helped hundreds of businesses transform their digital 
                presence, leveraging AI, 3D graphics, and innovative design to create experiences 
                that captivate and convert.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-morphism rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4">
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </motion.div>

          <div className="glass-morphism-strong rounded-3xl p-12 max-w-4xl mx-auto text-center">
            <Users className="w-20 h-20 text-accent-purple mx-auto mb-6" />
            <h3 className="heading-3 mb-4">50+ Expert Professionals</h3>
            <p className="text-gray-300 mb-6">
              Our team consists of developers, designers, AI specialists, project managers, 
              and support staff all working together to deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm">Full-Stack Developers</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm">UI/UX Designers</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm">AI Engineers</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm">DevOps Specialists</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm">Project Managers</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm">QA Engineers</div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="section-padding mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-morphism rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <Globe className="w-16 h-16 text-accent-neon mx-auto mb-6" />
            <h2 className="heading-2 mb-4">Global Reach, Local Touch</h2>
            <p className="text-gray-300">
              Serving clients worldwide with personalized attention and 24/7 support. 
              No matter where you are, we're here to help transform your digital presence.
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
