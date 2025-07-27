import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import profilePic from '../assets/profile.jpg';
const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my hobbies, skills, and love for gaming and art!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={profilePic}
              alt="About me"
              className="rounded-lg object-cover w-full h-64 md:h-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Hi! I'm a 10-year-old who loves two things most: gaming and painting! I've been playing video games for 3 years now and I'm pretty good at them. I also love creating colorful paintings and drawings.
                </p>
                <p className="text-muted-foreground">
                  I'm always excited to try new games, learn new art techniques, and share my creations with friends and family. Gaming helps me think strategically, and painting lets me express my creativity!
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Grade</h4>
                    <p className="text-2xl font-bold text-primary">90+ </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Art</h4>
                    <p className="text-2xl font-bold text-primary">20+</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
