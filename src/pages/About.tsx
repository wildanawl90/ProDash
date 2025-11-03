import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Cloud } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern web technologies for optimal performance',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data stays on your device with local storage',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Install as a PWA and use like a native mobile app',
    },
    {
      icon: Cloud,
      title: 'Offline Support',
      description: 'Works seamlessly even without internet connection',
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About ProDash
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A modern Progressive Web App designed to boost your productivity and help you stay organized.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          ProDash was created with a simple mission: to provide a fast, beautiful, and intuitive productivity
          tool that respects your privacy and works anywhere, anytime.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We believe that productivity tools should be accessible, offline-capable, and easy to use.
          That's why we built ProDash as a Progressive Web App that you can install on any device
          and use like a native application.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to boost your productivity?
        </h2>
        <p className="text-lg text-blue-100 mb-6">
          Install ProDash on your device and start organizing your tasks today.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
