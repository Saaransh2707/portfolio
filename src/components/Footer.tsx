import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <section id="thankyou" className="bg-background border-t border-gray-200 dark:border-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <Heart size={64} className="text-gray-400 mx-auto mb-4" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
            Thank You!
          </h2>
          <p className="text-gray-200 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Thank you for taking the time to explore my portfolio. Your interest means a lot to me, 
            and I hope you found something that caught your attention.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
           <Button 
              className=" hover:bg-gray-700 text-black px-8 py-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
        </motion.div>

        <Separator className="mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          <p className="mb-2">Designed & Developed with ❤️ by @MohitSaini</p>
          <p>&copy; 2024 Mohit Saini. All rights reserved.</p>
          <p className="mt-4 text-sm">
            "The best way to predict the future is to create it."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouPage;