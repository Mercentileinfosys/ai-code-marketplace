import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

const TestEmailJS: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'info'>('idle');

  const testEmailJS = async () => {
    setIsLoading(true);
    setTestResult('Starting EmailJS test...\n');
    setStatus('info');

    try {
      // Check environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;

      let configStatus = '📋 Configuration Check:\n';
      configStatus += `Service ID: ${serviceId ? '✅ Found' : '❌ Missing'} ${serviceId ? `(${serviceId})` : ''}\n`;
      configStatus += `Template ID: ${templateId ? '✅ Found' : '❌ Missing'} ${templateId ? `(${templateId})` : ''}\n`;
      configStatus += `Public Key: ${publicKey ? '✅ Found' : '❌ Missing'} ${publicKey ? `(${publicKey.substring(0, 10)}...)` : ''}\n`;
      configStatus += `User Template ID: ${userTemplateId ? '✅ Found' : '❌ Missing'} ${userTemplateId ? `(${userTemplateId})` : ''}\n\n`;
      
      setTestResult(prev => prev + configStatus);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing required EmailJS configuration. Please check your .env file.');
      }

      // Initialize EmailJS
      setTestResult(prev => prev + '🔧 Initializing EmailJS...\n');
      emailjs.init(publicKey);
      setTestResult(prev => prev + '✅ EmailJS initialized successfully\n\n');

      // Prepare test email data
      const testData = {
        to_email: 'ugameropbolte@gmail.com',
        to_name: 'Admin',  // Added for template compatibility
        reply_to: 'test@example.com',  // Added reply_to field
        from_name: 'Test User',
        from_email: 'test@example.com',
        user_email: 'test@example.com',  // Alternative field name
        company: 'Test Company',
        service: 'web-development',
        budget: '$999',
        message: 'This is a test message from the EmailJS testing utility.',
        ticket_id: `TEST-${Date.now()}`,
        date: new Date().toLocaleString()
      };

      // Send test email
      setTestResult(prev => prev + '📧 Sending test email...\n');
      const response = await emailjs.send(serviceId, templateId, testData);
      
      setTestResult(prev => prev + `✅ Email sent successfully!\n`);
      setTestResult(prev => prev + `Response status: ${response.status}\n`);
      setTestResult(prev => prev + `Response text: ${response.text}\n\n`);

      // Try sending user confirmation if template exists
      if (userTemplateId && userTemplateId !== 'q48gn9q') {
        setTestResult(prev => prev + '📧 Sending user confirmation email...\n');
        try {
          const userResponse = await emailjs.send(serviceId, userTemplateId, {
            to_email: 'test@example.com',
            to_name: 'Test User',
            ticket_id: testData.ticket_id,
            service: testData.service,
            message: testData.message
          });
          setTestResult(prev => prev + `✅ User confirmation sent successfully!\n`);
          setTestResult(prev => prev + `Response status: ${userResponse.status}\n\n`);
        } catch (userError) {
          setTestResult(prev => prev + `⚠️ User template error: ${userError}\n\n`);
        }
      } else {
        setTestResult(prev => prev + '⚠️ User template ID seems invalid (q48gn9q). You may need to create a proper template in EmailJS.\n\n');
      }

      setTestResult(prev => prev + '🎉 Test completed successfully! Check your email inbox.');
      setStatus('success');

    } catch (error) {
      console.error('EmailJS test error:', error);
      let errorMessage = '❌ Test failed!\n\n';
      
      if (error instanceof Error) {
        errorMessage += `Error: ${error.message}\n\n`;
        
        // Provide specific guidance based on error
        if (error.message.includes('Service ID')) {
          errorMessage += '📝 Solution: Check that your VITE_EMAILJS_SERVICE_ID in .env matches your EmailJS dashboard.\n';
        } else if (error.message.includes('Template ID')) {
          errorMessage += '📝 Solution: Verify your email template exists in EmailJS and the template ID is correct.\n';
        } else if (error.message.includes('Public Key')) {
          errorMessage += '📝 Solution: Get your public key from EmailJS Account > API Keys.\n';
        } else if (error.message.includes('404')) {
          errorMessage += '📝 Solution: The template or service was not found. Check your EmailJS dashboard.\n';
        } else if (error.message.includes('401')) {
          errorMessage += '📝 Solution: Authentication failed. Verify your public key is correct.\n';
        } else if (error.message.includes('network')) {
          errorMessage += '📝 Solution: Network error. Check your internet connection.\n';
        }
      } else {
        errorMessage += `Error: ${JSON.stringify(error, null, 2)}\n`;
      }
      
      setTestResult(prev => prev + errorMessage);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="glass-morphism rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
            EmailJS Configuration Tester
            {getStatusIcon()}
          </h1>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-4">
              This utility will test your EmailJS configuration and help diagnose any issues with the contact form.
            </p>
            
            <button
              onClick={testEmailJS}
              disabled={isLoading}
              className="btn-primary"
            >
              {isLoading ? 'Testing...' : 'Run EmailJS Test'}
            </button>
          </div>

          {testResult && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Test Results:</h2>
              <pre className="bg-black/50 rounded-lg p-4 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {testResult}
              </pre>
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <h3 className="font-semibold mb-2 text-blue-400">📌 Quick Setup Guide:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
              <li>Go to <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">EmailJS.com</a> and sign up/login</li>
              <li>Add an email service (Gmail, Outlook, etc.) from the Email Services section</li>
              <li>Create an email template with variables matching the form fields</li>
              <li>Copy your Service ID, Template ID, and Public Key to your .env file</li>
              <li>Restart the development server after updating .env</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestEmailJS;
