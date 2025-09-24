import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Brain, ShoppingCart, Smartphone, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import { seoConfig } from '../config/seo';

// Icon mapping for services
const iconMap = {
  code: Code2,
  palette: Palette,
  brain: Brain,
  'shopping-cart': ShoppingCart,
  smartphone: Smartphone,
  lightbulb: Lightbulb,
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | AI-Code-Marketplace</title>
        <meta name="description" content="Comprehensive web development services including AI integration, UI/UX design, e-commerce solutions, and mobile app development." />
        <meta name="keywords" content={seoConfig.secondaryKeywords.slice(10, 20).join(', ')} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-cyan-900/10" />
          <div className="mesh-gradient opacity-5" />
        </div>

        {/* Header Section */}
        <section className="section-padding mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">Cutting-Edge Solutions</span>
            </div>
            
            <h1 className="heading-1 mb-6">
              <span className="text-white">Services That</span>{' '}
              <span className="text-gradient">Transform</span>
              <br />
              <span className="text-white">Your Digital Presence</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              From concept to deployment, we provide end-to-end solutions 
              that leverage the latest technologies and AI innovations.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2;
              
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full glass-morphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 card-hover">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-accent-neon rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-accent-neon hover:text-white transition-colors group"
                    >
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements' },
                { step: '02', title: 'Design', description: 'Creating wireframes, mockups, and interactive prototypes' },
                { step: '03', title: 'Development', description: 'Building your solution with clean, scalable code' },
                { step: '04', title: 'Launch', description: 'Testing, deployment, and ongoing support' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                  )}

                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full glass-morphism flex items-center justify-center">
                      <span className="text-3xl font-bold text-gradient">{phase.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-400">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-morphism-strong rounded-3xl p-12 text-center"
          >
            <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
