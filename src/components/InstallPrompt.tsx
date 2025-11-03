import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { useState } from 'react';

interface InstallPromptProps {
  isInstallable: boolean;
  onInstall: () => void;
}

export function InstallPrompt({ isInstallable, onInstall }: InstallPromptProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Download className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Install ProDash
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use like a native app
                </p>
              </div>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Install ProDash on your device for quick access and offline functionality.
          </p>
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onInstall}
              className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              Install Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDismissed(true)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Later
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
