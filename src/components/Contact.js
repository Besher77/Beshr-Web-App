import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../locales/translations';

const Contact = () => {
  const { isDarkMode, language, direction } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const t = translations[language]?.contact || {
    title: language === 'en' ? 'Contact' : 'اتصل بي',
    description: language === 'en' 
      ? 'Get in touch with me for any questions or opportunities'
      : 'تواصل معي لأي استفسارات أو فرص',
    form: {
      name: language === 'en' ? 'Enter your name' : 'أدخل اسمك',
      email: language === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني',
      message: language === 'en' ? 'Enter your message' : 'أدخل رسالتك',
      submit: language === 'en' ? "Let's talk" : 'دعنا نتحدث'
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: language === 'en' ? 'Email' : 'البريد الإلكتروني',
      value: 'beshr@example.com',
      href: 'mailto:beshr@example.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: language === 'en' ? 'Phone' : 'الهاتف',
      value: '+1 234 567 890',
      href: 'tel:+1234567890'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: language === 'en' ? 'Location' : 'الموقع',
      value: language === 'en' ? 'Silicon Valley, CA' : 'وادي السيليكون، كاليفورنيا',
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div
      name="contact"
      className={`w-full min-h-screen py-24 ${
        isDarkMode
          ? 'bg-gradient-to-b from-black to-gray-800 text-white'
          : 'bg-gradient-to-b from-white to-gray-100 text-gray-900'
      }`}
      dir={direction}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-screen-xl mx-auto px-4 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            {t.title}
          </h2>
          <p className={`mt-6 text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center p-6 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-800/50 hover:bg-gray-700/50'
                    : 'bg-white hover:bg-gray-50'
                } transition-all duration-300 shadow-lg group`}
              >
                <div className="mr-4 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-cyan-500">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className={`${
                        isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      } transition-colors duration-300`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block mb-2 font-medium" htmlFor="name">
                  {language === 'en' ? 'Name' : 'الاسم'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.name}
                  required
                  className={`w-full p-3 rounded-lg outline-none ${
                    isDarkMode
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-cyan-500'
                      : 'bg-white text-gray-900 border border-gray-200 focus:border-cyan-500'
                  } transition-colors duration-300`}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block mb-2 font-medium" htmlFor="email">
                  {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.form.email}
                  required
                  className={`w-full p-3 rounded-lg outline-none ${
                    isDarkMode
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-cyan-500'
                      : 'bg-white text-gray-900 border border-gray-200 focus:border-cyan-500'
                  } transition-colors duration-300`}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block mb-2 font-medium" htmlFor="message">
                  {language === 'en' ? 'Message' : 'الرسالة'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.message}
                  required
                  rows="5"
                  className={`w-full p-3 rounded-lg outline-none ${
                    isDarkMode
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-cyan-500'
                      : 'bg-white text-gray-900 border border-gray-200 focus:border-cyan-500'
                  } transition-colors duration-300`}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                  } text-white transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  <FaPaperPlane className={`${isSubmitting ? 'animate-bounce' : ''}`} />
                  <span>
                    {isSubmitting 
                      ? (language === 'en' ? 'Sending...' : 'جاري الإرسال...')
                      : t.form.submit
                    }
                  </span>
                </button>
              </motion.div>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-3 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-500/20 text-green-500'
                      : submitStatus === 'error'
                      ? 'bg-red-500/20 text-red-500'
                      : 'bg-cyan-500/20 text-cyan-500'
                  }`}
                >
                  {submitStatus === 'success'
                    ? (language === 'en' ? 'Message sent successfully!' : 'تم إرسال الرسالة بنجاح!')
                    : submitStatus === 'error'
                    ? (language === 'en' ? 'Failed to send message.' : 'فشل في إرسال الرسالة.')
                    : (language === 'en' ? 'Sending message...' : 'جاري إرسال الرسالة...')
                  }
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
