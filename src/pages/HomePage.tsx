import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Users, TrendingUp, Star, Rocket, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero3D from '../components/three/Hero3D';
import GradientCard from '../components/ui/GradientCard';
import TechSphere from '../components/ui/TechSphere';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seo';

const HomePage: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Development',
      description: 'Leverage cutting-edge AI technology to create intelligent web solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern frameworks and best practices',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and customers',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and designers dedicated to your success',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '50+', label: 'Team Members' }
  ];

  return (
    <>
      <Helmet>
        <title>{seoConfig.defaultMeta.title}</title>
        <meta name="description" content={seoConfig.defaultMeta.description} />
        <meta name="keywords" content={seoConfig.secondaryKeywords.slice(0, 10).join(', ')} />
        <meta property="og:title" content={seoConfig.defaultMeta.title} />
        <meta property="og:description" content={seoConfig.defaultMeta.description} />
        <meta property="og:type" content={seoConfig.defaultMeta.type} />
        <script type="application/ld+json">
          {JSON.stringify(seoConfig.structuredData)}
        </script>
      </Helmet>

      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Hero3D />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
        
        {/* Content */}
        <div className="relative z-10 section-padding text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">90% OFF Limited Time Offer</span>
            </motion.div>

            <h1 className="heading-1 mb-6">
              <span className="text-gradient">AI-Powered</span>{' '}
              <span className="text-white">Web Development</span>
              <br />
              <span className="text-white">for the</span>{' '}
              <span className="text-gradient">Future</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with cutting-edge web solutions. 
              We build intelligent, scalable, and beautiful applications that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing" className="btn-primary inline-flex items-center gap-2">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
                Explore Services
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="section-padding">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Why Choose AI-Code-Marketplace?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We combine innovative technology with creative design to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl p-6 h-full card-hover">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-3 mb-4`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 aurora opacity-5" />
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">
              <span className="holographic bg-clip-text text-transparent">Technologies</span> We Master
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Cutting-edge tech stack for next-generation web solutions
            </p>
          </motion.div>
          
          <TechSphere />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="section-padding relative">
          <div className="glass-3d rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="section-padding relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have revolutionized their online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <TrendingUp className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                See Pricing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
