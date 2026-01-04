import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-base-200 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Earn Money by Completing Micro Tasks
          </h1>
          <p className="text-lg mb-6">
            Join as a Worker or Buyer and start earning or managing tasks
            easily.
          </p>

          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Explore Tasks</button>
          </div>
        </motion.div>
      </section>

      {/* Placeholder Sections */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Best Workers</h2>
        <p className="mt-2 text-gray-500">
          Top earners from our platform (coming soon)
        </p>
      </section>

      <section className="py-16 bg-base-200 text-center">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <p className="mt-2 text-gray-500">
          What users say about us (static for now)
        </p>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Why Choose MicroTask?</h2>
        <p className="mt-2 text-gray-500">
          Secure payments, verified tasks, and real rewards.
        </p>
      </section>
    </div>
  );
};

export default Home;
