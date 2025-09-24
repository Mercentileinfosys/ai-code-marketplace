import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { pricingPlans } from '../data/pricing';
import { seoConfig } from '../config/seo';

const PricingPage: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Pricing Plans | AI-Code-Marketplace</title>
        <meta name="description" content="Affordable web development pricing with 90% discount. Choose from Basic, Standard, Premium, or Enterprise plans starting at $899." />
        <meta name="keywords" content={`pricing, ${seoConfig.primaryKeyword}, web development cost, website pricing`} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-blob-reverse animation-delay-200" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-blob animation-delay-400" />
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
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Limited Time: 90% OFF All Plans!</span>
            </div>
            
            <h1 className="heading-1 mb-6">
              <span className="text-gradient">Transparent Pricing</span>
              <br />
              <span className="text-white">That Scales With You</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your business. All plans include our core features 
              with unlimited revisions and dedicated support.
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                className="relative h-full"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`
                    relative h-full rounded-2xl p-8
                    ${plan.highlighted 
                      ? 'glass-morphism-strong border-2 border-accent-purple shadow-2xl shadow-purple-500/20' 
                      : 'glass-morphism border border-white/10'
                    }
                    ${hoveredPlan === plan.id ? 'scale-105 shadow-xl' : ''}
                    transition-all duration-300
                  `}
                >
                  {/* Animated Background Gradient */}
                  {plan.highlighted && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 animate-gradient" />
                  )}

                  <div className="relative z-10">
                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.pages} Page{plan.pages > 1 ? 's' : ''}</p>

                    {/* Pricing with Discount */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-lg text-gray-400 line-through">${plan.originalPrice}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400 font-semibold">Save ${plan.originalPrice - plan.price}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-accent-neon flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`
                        w-full py-3 px-6 rounded-full font-semibold text-center block
                        transition-all duration-300 transform hover:scale-105
                        ${plan.highlighted
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        }
                      `}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="section-padding mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">All Plans Include</h2>
            <p className="text-lg text-gray-400">Premium features that come standard with every package</p>
          </motion.div>

          <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Free Domain (1 Year)',
                'SSL Certificate',
                'Mobile Responsive Design',
                'SEO Optimization',
                'Google Analytics',
                'Content Management System',
                'Social Media Integration',
                'Contact Forms',
                'Live Chat Support',
                'Regular Backups',
                'Security Updates',
                'Performance Monitoring'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Money Back Guarantee */}
        <section className="section-padding mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-morphism-strong rounded-2xl p-12 max-w-2xl mx-auto">
              <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="heading-3 mb-4">30-Day Money Back Guarantee</h3>
              <p className="text-gray-300 mb-8">
                We're confident you'll love our service. If you're not completely satisfied 
                within 30 days, we'll refund your payment—no questions asked.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Risk-Free Today
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
