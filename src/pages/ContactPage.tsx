import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, Phone, MapPin, Clock, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types';
import { seoConfig } from '../config/seo';
import { pricingPlans } from '../data/pricing';
import NeonButton from '../components/ui/NeonButton';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [ticketId, setTicketId] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const generateTicketId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `TKT-${timestamp}-${random}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const ticket = generateTicketId();
      setTicketId(ticket);

      // Check if EmailJS is configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      console.log('📧 EmailJS Configuration:', {
        serviceId: serviceId ? `${serviceId.substring(0, 10)}...` : 'Missing',
        templateId: templateId ? `${templateId.substring(0, 10)}...` : 'Missing',
        publicKey: publicKey ? `${publicKey.substring(0, 10)}...` : 'Missing'
      });
      
      if (serviceId && templateId && publicKey && publicKey !== 'your_public_key_here') {
        // EmailJS is configured, send actual emails
        console.log('✅ EmailJS configuration found, initializing...');
        emailjs.init(publicKey);

        const emailData = {
          to_email: 'ugameropbolte@gmail.com',
          to_name: 'Admin',  // Added to_name for template
          reply_to: data.email,  // Added reply_to field
          from_name: data.name,
          from_email: data.email,
          user_email: data.email,  // Alternative field name
          company: data.company || 'Not specified',
          service: data.service,
          budget: data.budget || 'Not specified',
          message: data.message,
          ticket_id: ticket,
          date: new Date().toLocaleString()
        };

        console.log('📨 Sending email with data:', emailData);
        const response = await emailjs.send(serviceId, templateId, emailData);
        console.log('✅ Email sent successfully:', response);
        
        // Send user confirmation if template exists
        const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
        if (userTemplateId && userTemplateId !== 'q48gn9q') {
          try {
            const userEmailData = {
              to_email: data.email,
              to_name: data.name,
              ticket_id: ticket,
              service: data.service,
              message: data.message
            };
            console.log('📨 Sending user confirmation...');
            await emailjs.send(serviceId, userTemplateId, userEmailData);
            console.log('✅ User confirmation sent');
          } catch (userError) {
            console.warn('⚠️ User confirmation email failed (non-critical):', userError);
          }
        }
      } else {
        // EmailJS not configured - save to console and show success
        console.log('⚠️ EmailJS not fully configured. Saving submission locally.');
        console.log('Contact Form Submission:');
        console.log('Ticket ID:', ticket);
        console.log('To: ugameropbolte@gmail.com');
        console.log('From:', data.name, `(${data.email})`);
        console.log('Company:', data.company || 'Not specified');
        console.log('Service:', data.service);
        console.log('Budget:', data.budget || 'Not specified');
        console.log('Message:', data.message);
        console.log('Date:', new Date().toLocaleString());
        
        // Store in localStorage as backup
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push({
          ticket,
          ...data,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        console.log('💾 Submission saved to localStorage');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      
      // Provide detailed error information
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
        
        // Check for specific EmailJS errors
        if (error.message.includes('404') || error.message.includes('not found')) {
          console.error('🔍 Template or service not found. Please check your EmailJS dashboard.');
        } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
          console.error('🔐 Authentication failed. Please verify your public key.');
        } else if (error.message.includes('network')) {
          console.error('🌐 Network error. Please check your internet connection.');
        }
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | AI-Code-Marketplace</title>
        <meta name="description" content="Get in touch with AI-Code-Marketplace for web development services. Free consultation and 24/7 support available." />
        <meta name="keywords" content={`contact, ${seoConfig.primaryKeyword}, web development inquiry`} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        {/* Header Section */}
        <section className="section-padding mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 mb-6">
              <span className="text-white">Let's Build</span>{' '}
              <span className="text-gradient">Something Amazing</span>
              <br />
              <span className="text-white">Together</span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Ready to transform your ideas into reality? Get in touch with our team 
              for a free consultation and project quote.
            </p>
          </motion.div>
        </section>

        <div className="section-padding">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="glass-morphism rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent-neon mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:aicodemarketplace2@gmail.com" className="text-gray-400 hover:text-accent-neon transition-colors">
                        aicodemarketplace2@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent-neon mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-gray-400">24/7 Support Available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent-neon mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-gray-400">Available Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent-neon mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Business Hours</p>
                      <p className="text-gray-400">Mon - Sun: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-morphism rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Free Consultation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    90% Discount Offer
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    24/7 Support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Money Back Guarantee
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-morphism rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-400">Message sent successfully!</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Your ticket ID is: <span className="font-mono font-semibold">{ticketId}</span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          We've sent a confirmation email with your ticket details.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-400">Failed to send message</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Please try again or contact us directly at aicodemarketplace2@gmail.com
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-neon transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-neon transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-neon transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Service Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service <span className="text-red-400">*</span>
                      </label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-neon transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="ai-integration">AI Integration</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="consulting">Consulting</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    {/* Budget Field */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-neon transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {pricingPlans.map(plan => (
                          <option key={plan.id} value={`$${plan.price}`}>
                            {plan.name} - ${plan.price} ({plan.pages} page{plan.pages > 1 ? 's' : ''})
                          </option>
                        ))}
                        <option value="custom">Custom Budget</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-neon transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <NeonButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    fullWidth
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </NeonButton>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="section-padding mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How quickly can you start my project?',
                a: 'We can typically start new projects within 24-48 hours after consultation.'
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes, we offer flexible payment options including 50% upfront and 50% on completion.'
              },
              {
                q: 'What if I need changes after project completion?',
                a: 'All plans include revisions. Premium and Enterprise plans include unlimited revisions.'
              },
              {
                q: 'Do you provide hosting services?',
                a: 'Yes, we can handle hosting setup and management as part of our service packages.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent-neon" />
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
