import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import spiderman from "../assets/spiderman.jpg"
import sonic from "../assets/sonic.jpg"
import gojo from "../assets/gojo.jpg"
const Achievements = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      alt: "Project Screenshot 1",
      title: "Dashboard Design"
    },
    {
      id: 2,
      src: spiderman,
      alt: "Project Screenshot 2",
      title: "Spiderman"
    },
    {
      id: 3,
      src: gojo,
      alt: "Project Screenshot 3",
      title: "Gojo Saturo"
    },
    {
      id: 4,
      src: sonic,
      alt: "Project Screenshot 4",
      title: "Sonic"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=400&fit=crop",
      alt: "Project Screenshot 5",
      title: "API Documentation"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      alt: "Project Screenshot 6",
      title: "Data Visualization"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My awesome achievements and special moments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto" // ✅ Add max-width and centering
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64
                         object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg font-semibold">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* ✅ Position buttons inside the carousel with proper spacing */}
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
