import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const features: string[] = ['Ultra Light', 'Premium Material', 'Modern Design'];

const ShoeLandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold tracking-wide">STEPHORIA</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:text-black">Home</li>
          <li className="cursor-pointer hover:text-black">Product</li>
          <li className="cursor-pointer hover:text-black">About</li>
          <li className="cursor-pointer hover:text-black">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-10 py-16 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold leading-tight">
            Walk Faster.
            <br />
            Walk Smarter.
          </h2>
          <p className="mt-6 text-gray-600 max-w-md">
            Sepatu premium dengan desain modern, ringan, dan nyaman. Dirancang
            untuk aktivitas harian dan performa maksimal.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl hover:opacity-90">
              <ShoppingCart size={18} />
              Buy Now
            </button>
            <button className="px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-200">
              Explore
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Sepatu"
            className="w-[420px] rounded-3xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-10 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item: string, index: number) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-8 rounded-2xl shadow"
            >
              <h4 className="text-xl font-semibold mb-3">{item}</h4>
              <p className="text-gray-600 text-sm">
                Dirancang dengan standar kualitas tinggi untuk kenyamanan dan
                ketahanan jangka panjang.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Highlight */}
      <section className="px-10 py-16">
        <div className="bg-black text-white rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold">Stephoria X-Series</h3>
            <p className="mt-4 text-gray-300">
              Sepatu serbaguna untuk kerja, olahraga ringan, dan gaya kasual.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((value: number) => (
                <Star key={value} size={18} fill="white" />
              ))}
              <span className="ml-2 text-sm">5.0 Rating</span>
            </div>
            <button className="mt-6 bg-white text-black px-6 py-3 rounded-2xl font-medium">
              Order Now
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
            alt="Sepatu Premium"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 text-center text-sm text-gray-500">
        © 2026 Stephoria Shoes. All rights reserved.
      </footer>
    </div>
  );
};

export default ShoeLandingPage;
