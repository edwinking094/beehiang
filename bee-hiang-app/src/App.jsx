import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Star } from 'lucide-react';

// --- Assets & Data ---

// Helper component to render specific product illustrations
const ProductImage = ({ type, className }) => {
  const getSvgContent = () => {
    switch (type) {
      case 'Signature Maltose Pastry (Heong Piah)':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            {/* Biscuit Body */}
            <circle cx="100" cy="100" r="70" fill="#E8C895" stroke="#D4A76A" strokeWidth="3" />
            {/* Outer Flakiness */}
            <circle cx="100" cy="100" r="60" fill="none" stroke="#D4A76A" strokeWidth="1" strokeDasharray="10 5" opacity="0.6" />
            {/* Center filling hint */}
            <circle cx="100" cy="100" r="20" fill="#D99E56" opacity="0.4" filter="blur(5px)" />
            {/* Sesame Seeds */}
            <g fill="#FFFFFF" opacity="0.9">
              <circle cx="90" cy="90" r="2" />
              <circle cx="110" cy="85" r="2" />
              <circle cx="100" cy="110" r="2" />
              <circle cx="85" cy="105" r="2" />
              <circle cx="115" cy="100" r="2" />
              <circle cx="105" cy="75" r="2" />
            </g>
            {/* Char marks */}
            <path d="M70 120 Q 80 130 90 125" stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M130 80 Q 140 70 135 60" stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.3" />
          </svg>
        );

      case 'Mung Bean Pastry (Tau Sar Piah)':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            {/* Smoother, lighter surface */}
            <circle cx="100" cy="100" r="65" fill="#F4E4BC" stroke="#E1C699" strokeWidth="2" />
            {/* Stamp/Red Dot (common on Tau Sar Piah) */}
            <circle cx="100" cy="100" r="8" fill="#DA291C" opacity="0.8" />
            {/* Texture */}
            <path d="M70 70 Q 100 60 130 70" stroke="#E1C699" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M70 130 Q 100 140 130 130" stroke="#E1C699" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
        );

      case 'Traditional Egg Biscuit':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            {/* Fan/Love Letter shape folded */}
            <path d="M60 140 L100 60 L140 140 Q 100 160 60 140 Z" fill="#F9D67E" stroke="#E6B85C" strokeWidth="2" />
            {/* Grill marks */}
            <line x1="90" y1="80" x2="75" y2="120" stroke="#DDA642" strokeWidth="1" />
            <line x1="110" y1="80" x2="125" y2="120" stroke="#DDA642" strokeWidth="1" />
            <line x1="100" y1="80" x2="100" y2="130" stroke="#DDA642" strokeWidth="1" />
          </svg>
        );

      case 'Sachima (Honeycomb Cookies)':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            {/* Block shape */}
            <rect x="50" y="60" width="100" height="80" rx="4" fill="#F0C058" stroke="#D4A036" strokeWidth="2" />
            {/* Noodle texture */}
            <path d="M60 70 H140 M60 85 H140 M60 100 H140 M60 115 H140 M60 130 H140" stroke="#E6B85C" strokeWidth="4" strokeLinecap="round" />
            <path d="M70 60 V140 M90 60 V140 M110 60 V140 M130 60 V140" stroke="#E6B85C" strokeWidth="4" strokeLinecap="round" />
            {/* Sticky syrup gloss */}
            <circle cx="130" cy="70" r="5" fill="#FFFFFF" opacity="0.4" />
            <circle cx="70" cy="120" r="3" fill="#FFFFFF" opacity="0.4" />
          </svg>
        );

      case 'Crispy Peanut Puff (Kok Chai)':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            <g transform="rotate(-15 100 100)">
              {/* Puff Body */}
              <path d="M50 100 A 50 50 0 0 1 150 100 Z" fill="#E8C895" stroke="#C99B58" strokeWidth="2" />
              <path d="M50 100 Q 100 110 150 100" fill="#E8C895" stroke="#C99B58" strokeWidth="2" />
              {/* Crimped Edge */}
              <path d="M50 100 C 50 90 60 90 65 95 C 70 85 80 85 85 95 C 90 80 100 80 110 90 C 120 80 130 80 135 95 C 140 90 150 90 150 100" stroke="#C99B58" strokeWidth="2" fill="none" />
              {/* Bubbles from frying */}
              <circle cx="80" cy="85" r="2" fill="#C99B58" opacity="0.5" />
              <circle cx="120" cy="80" r="3" fill="#C99B58" opacity="0.5" />
            </g>
          </svg>
        );

      case 'Premium Pineapple Tart':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            {/* Flower Base */}
            <path d="M100 50 Q 115 50 120 65 Q 135 70 130 85 Q 145 100 130 115 Q 135 130 120 135 Q 115 150 100 150 Q 85 150 80 135 Q 65 130 70 115 Q 55 100 70 85 Q 65 70 80 65 Q 85 50 100 50 Z" fill="#FDF0C6" stroke="#E6D298" strokeWidth="2" />
            {/* Jam Center */}
            <circle cx="100" cy="100" r="25" fill="#E87E04" stroke="#D35400" strokeWidth="1" />
            {/* Jam Gloss */}
            <circle cx="108" cy="92" r="5" fill="#FFFFFF" opacity="0.4" />
          </svg>
        );

      case 'Traditional Dodol':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
            {/* Pyramid Shape */}
            <path d="M100 50 L 150 150 L 50 150 Z" fill="#4E342E" stroke="#3E2723" strokeWidth="2" />
            {/* Fold lines (wrapping) */}
            <path d="M100 50 L 100 150" stroke="#3E2723" strokeWidth="1" opacity="0.5" />
            <path d="M100 50 L 125 100" stroke="#3E2723" strokeWidth="1" opacity="0.5" />
            <path d="M100 50 L 75 100" stroke="#3E2723" strokeWidth="1" opacity="0.5" />
            {/* Shine */}
            <path d="M100 60 L 110 100" stroke="#FFFFFF" strokeWidth="2" opacity="0.1" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            <circle cx="100" cy="100" r="50" fill="gray" />
          </svg>
        );
    }
  };

  return (
    <div className={`flex items-center justify-center p-8 bg-gradient-to-br from-white to-gray-50 ${className}`}>
      {getSvgContent()}
    </div>
  );
};

const PRODUCTS = [
  {
    id: 1,
    name: 'Signature Maltose Pastry (Heong Piah)',
    chineseName: '驰名麦芽酥',
    price: 18.00,
    category: 'Signature',
    tag: 'Best Seller',
    description: 'The classic favorite. Flaky pastry skin filled with sticky, sweet maltose and fragrant shallots.',
  },
  {
    id: 2,
    name: 'Mung Bean Pastry (Tau Sar Piah)',
    chineseName: '传统豆沙饼',
    price: 15.00,
    category: 'Traditional',
    tag: 'Classic',
    description: 'Hand-ground mung bean paste encased in delicate, flaky layers. A timeless Penang favorite.',
  },
  {
    id: 3,
    name: 'Traditional Egg Biscuit',
    chineseName: '古早味鸡蛋饼',
    price: 12.00,
    category: 'Traditional',
    tag: null,
    description: 'Light, crispy, and rich in egg flavor. A nostalgic snack perfect for dipping in hot coffee.',
  },
  {
    id: 4,
    name: 'Sachima (Honeycomb Cookies)',
    chineseName: '萨其马',
    price: 14.00,
    category: 'Sweet',
    tag: "Kid's Fav",
    description: 'Soft, fluffy fried batter strips bound together with caramelized sugar syrup. Sweet and satisfying.',
  },
  {
    id: 5,
    name: 'Crispy Peanut Puff (Kok Chai)',
    chineseName: '油角 / 角仔',
    price: 22.00,
    category: 'Seasonal',
    tag: 'CNY Special',
    description: 'Miniature deep-fried puffs filled with crushed roasted peanuts and sugar. Crunchy and addictive.',
  },
  {
    id: 6,
    name: 'Premium Pineapple Tart',
    chineseName: '黄梨饼',
    price: 28.00,
    category: 'Seasonal',
    tag: 'CNY Special',
    description: 'Buttery, melt-in-your-mouth pastry topped with tangy, homemade pineapple jam.',
  },
  {
    id: 7,
    name: 'Traditional Dodol',
    chineseName: '哆哆',
    price: 16.00,
    category: 'Seasonal',
    tag: 'Limited Time',
    description: 'Sticky, chewy toffee-like treat made from coconut milk, jaggery, and rice flour. Rich and creamy.',
  }
];

// --- Components ---

const Navigation = ({ activeTab, setActiveTab, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#DA291C] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo Section */}
          <div
            className="flex-shrink-0 cursor-pointer flex items-center gap-4 group"
            onClick={() => setActiveTab('home')}
          >
            {/* Red Box Logo */}
            <div className="flex flex-col items-center justify-center border-2 border-yellow-300 rounded-sm px-2 py-1 h-16 w-12 bg-[#DA291C] shadow-sm">
              <span className="font-serif font-bold text-yellow-300 text-xl leading-none mb-1">味</span>
              <span className="font-serif font-bold text-yellow-300 text-xl leading-none">香</span>
            </div>

            {/* Text Logo */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-black tracking-wide text-yellow-300 uppercase drop-shadow-sm" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                BEE HIANG
              </h1>
              <div className="h-1 w-full bg-yellow-300 mt-1 rounded-full"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-yellow-300 relative py-2 ${activeTab === link.id
                  ? 'text-white'
                  : 'text-white/90'
                  }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                )}
              </button>
            ))}
          </div>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center space-x-6">
            <div className="relative cursor-pointer group p-2">
              <ShoppingBag className="h-6 w-6 text-yellow-300 group-hover:text-white transition-colors stroke-[2.5]" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-white text-[#DA291C] text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </div>

            <button
              className="md:hidden text-yellow-300 focus:outline-none hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#B91C1C] border-t border-red-800 absolute w-full left-0 shadow-xl z-50 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left text-lg font-bold py-2 px-4 rounded-lg transition-colors ${activeTab === link.id
                ? 'bg-red-900/50 text-white'
                : 'text-yellow-300/80 hover:text-white hover:bg-red-800/30'
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onShopNow }) => (
  <div className="relative bg-[#FFFBEB] overflow-hidden min-h-[85vh] flex items-center">
    {/* Dot Pattern Background */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#DA291C 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

      {/* Left Content */}
      <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
          <span className="block text-4xl md:text-5xl mb-2 text-gray-800">The Taste of</span>
          <span className="text-[#DA291C] relative inline-block">
            Tradition.
            <div className="absolute w-full h-4 -bottom-2 left-0 bg-yellow-400 -z-10 opacity-80"></div>
          </span>
        </h2>

        <p className="max-w-md text-gray-700 text-lg md:text-xl mb-10 leading-relaxed font-light">
          Golden, flaky, and filled with memories. We bake our <strong className="font-semibold text-gray-900">Heong Piah</strong> fresh daily using recipes passed down through generations.
        </p>

        <button
          onClick={onShopNow}
          className="group bg-[#DA291C] text-yellow-300 px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-red-800 hover:text-white transition-all duration-300 flex items-center shadow-lg hover:shadow-xl rounded-sm transform hover:-translate-y-1"
        >
          Order Now
          <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Right Image (Layered Card Style) */}
      <div className="order-1 md:order-2 relative flex justify-center items-center p-8">
        <div className="relative w-full max-w-md aspect-square">
          {/* Yellow Background Layer */}
          <div className="absolute inset-0 bg-yellow-400 transform rotate-3 rounded-sm shadow-lg"></div>

          {/* White Card Layer */}
          <div className="absolute inset-0 bg-white transform -rotate-2 rounded-sm shadow-xl flex items-center justify-center p-8 border border-gray-100">
            {/* Inner Border */}
            <div className="w-full h-full border border-red-100 flex items-center justify-center">
              <ProductImage type="Signature Maltose Pastry (Heong Piah)" className="w-64 h-64 md:w-80 md:h-80 !bg-transparent drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductCard = ({ product, addToCart }) => (
  <div className="group flex flex-col bg-white border border-gray-100 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden h-full transform hover:-translate-y-1">
    <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
      {/* Tag */}
      {product.tag && (
        <span className="absolute top-3 right-3 z-10 bg-yellow-400 text-[#DA291C] text-[10px] font-black px-3 py-1 uppercase tracking-wide shadow-sm rounded-sm">
          {product.tag}
        </span>
      )}

      {/* Product Illustration */}
      <div className="absolute inset-0 p-6 transition-transform duration-500 group-hover:scale-110">
        <ProductImage type={product.name} className="w-full h-full !bg-transparent" />
      </div>

      {/* Quick Add Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm border-t border-gray-100">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#DA291C] text-yellow-300 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-800 shadow-md transition-all rounded-sm flex items-center justify-center space-x-2 active:scale-95"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>

    <div className="flex flex-col p-5 h-full">
      <p className="text-[#DA291C] text-xs font-bold uppercase tracking-wider mb-1">{product.chineseName}</p>
      <h3 className="text-gray-900 font-bold text-lg mb-2 leading-tight group-hover:text-[#DA291C] transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
        {product.description}
      </p>
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
        <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FeaturedSection = ({ products, addToCart, onSeeAll }) => (
  <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <span className="text-[#DA291C] tracking-[0.2em] text-xs font-bold uppercase block mb-3">Fresh from the Oven</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Best Sellers</h2>
      </div>
      <button onClick={onSeeAll} className="hidden md:inline-flex items-center text-sm font-bold text-[#DA291C] hover:text-red-800 transition-colors uppercase tracking-wider">
        View Full Menu <ChevronRight className="ml-1 w-4 h-4" />
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>

    <div className="mt-12 text-center md:hidden">
      <button onClick={onSeeAll} className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
        View Full Menu
      </button>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="bg-[#DA291C] text-white py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 border-[20px] border-white/5 rounded-full -translate-y-12 translate-x-12"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 border-[40px] border-white/5 rounded-full translate-y-12 -translate-x-12"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="border-4 border-yellow-400 p-8 md:p-12 relative">
            <div className="absolute -top-6 left-12 -translate-x-12 bg-[#DA291C] px-6">
              <span className="text-yellow-300 font-serif text-3xl font-bold">味香</span>
            </div>
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-yellow-100 text-center">
              "For over 30 years, our red sign has been a beacon for pastry lovers. We don't just bake biscuits; we bake memories."
            </p>
          </div>
        </div>
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-bold mb-6 text-white">A Legacy of <span className="text-yellow-300">Flaky Goodness</span></h2>
          <p className="text-white/90 leading-relaxed mb-6 text-lg">
            Bee Hiang (味香) started as a humble shop in Parit Buntar in 1988. Our distinctive red packaging and golden logo have become synonymous with authentic <strong>Heong Piah</strong> and <strong>Beh Teh Saw</strong>.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="bg-red-800/50 p-6 rounded border border-red-700">
              <span className="text-3xl font-bold text-yellow-300 block mb-1">100%</span>
              <span className="text-sm uppercase tracking-wider font-bold">Handmade</span>
            </div>
            <div className="bg-red-800/50 p-6 rounded border border-red-700">
              <span className="text-3xl font-bold text-yellow-300 block mb-1">1988</span>
              <span className="text-sm uppercase tracking-wider font-bold">Established</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

      <div className="lg:col-span-4 space-y-12">
        <div>
          <div className="w-16 h-1 bg-[#DA291C] mb-6"></div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Shop</h2>
          <p className="text-gray-500">Come say hello and smell the aroma of freshly baked biscuits.</p>
        </div>

        <div className="space-y-8">
          <div className="flex items-start">
            <div className="mt-1 mr-4 p-3 bg-red-100 text-[#DA291C] rounded-full">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wider mb-2">Flagship Store</h4>
              <p className="text-gray-600 leading-relaxed">
                123 Heritage Lane, George Town<br />
                10200 Penang, Malaysia
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 mr-4 p-3 bg-red-100 text-[#DA291C] rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wider mb-2">Phone</h4>
              <p className="text-gray-600">+60 12-345 6789</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="h-10 w-10 bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#DA291C] hover:text-white transition-all rounded-full">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#DA291C] hover:text-white transition-all rounded-full">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 bg-white p-8 md:p-12 border-2 border-gray-100 shadow-xl rounded-sm">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#DA291C] focus:bg-white transition-colors rounded-sm" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#DA291C] focus:bg-white transition-colors rounded-sm" placeholder="your@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
            <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#DA291C] focus:bg-white transition-colors rounded-sm" placeholder="Tell us about your order..."></textarea>
          </div>
          <div className="pt-4">
            <button className="bg-[#DA291C] text-white font-bold py-4 px-8 hover:bg-red-800 transition-colors uppercase tracking-widest text-sm rounded-sm shadow-md">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="border-t-4 border-yellow-400 pt-20 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-[#DA291C] font-bold px-3 py-1 text-xs uppercase mb-4">Authorised Dealers</div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Find Us Locally</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Can't make it to our main shop? Find authentic Bee Hiang products at these trusted locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { area: 'Penang Island', shop: 'Ban Joo Tong Medical Hall', address: '34, Lebuh Carnarvon, George Town' },
            { area: 'Parit Buntar', shop: 'Sin Guan Hoe', address: '88, Jalan Teh Peh Kong' },
            { area: 'Kuala Lumpur', shop: 'Chai Huat Hin', address: '75, Jalan Petaling (Chinatown)' }
          ].map((loc, idx) => (
            <div key={idx} className="bg-white p-8 border-b-4 border-gray-200 hover:border-[#DA291C] hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-[#DA291C]" />
                <h4 className="font-bold text-xl text-gray-900">{loc.area}</h4>
              </div>
              <p className="font-bold text-[#DA291C] text-sm uppercase tracking-wide mb-1">{loc.shop}</p>
              <p className="text-gray-500 text-sm">{loc.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Footer = ({ onNavClick }) => (
  <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t-4 border-[#DA291C]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex flex-col items-center justify-center border border-white/20 rounded px-1 py-1 h-12 w-8 bg-[#DA291C]">
              <span className="font-serif font-bold text-yellow-300 text-xs leading-none">味</span>
              <span className="font-serif font-bold text-yellow-300 text-xs leading-none">香</span>
            </div>
            <h3 className="text-2xl font-black tracking-wide text-yellow-300 uppercase">BEE HIANG</h3>
          </div>
          <p className="text-gray-400 text-sm leading-loose max-w-sm">
            Authentic traditional pastries since 1988. We are committed to preserving the heritage flavors of Parit Buntar for generations to come.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest text-[#DA291C]">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><button onClick={() => onNavClick('shop')} className="hover:text-yellow-300 transition-colors text-left">Signatures</button></li>
            <li><button onClick={() => onNavClick('shop')} className="hover:text-yellow-300 transition-colors text-left">Gift Boxes</button></li>
            <li><button onClick={() => onNavClick('shop')} className="hover:text-yellow-300 transition-colors text-left">All Products</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest text-[#DA291C]">Info</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><button onClick={() => onNavClick('contact')} className="hover:text-yellow-300 transition-colors text-left">Locations</button></li>
            <li><button onClick={() => onNavClick('contact')} className="hover:text-yellow-300 transition-colors text-left">Contact Us</button></li>
            <li><span className="cursor-not-allowed opacity-50">Privacy Policy</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
        <p className="mb-2 md:mb-0">&copy; 2024 Bee Hiang Biscuits.</p>
        <p>Taste of Tradition</p>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);
  const [filter, setFilter] = useState('All');

  const addToCart = (product) => {
    setCart((prevCart) => {
      // 1. Check if item exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // 2. If exists, update quantity
        setNotification(
          <div className="flex items-center">
            <span className="font-bold mr-2 text-yellow-300">{product.name}</span>
            <span className="text-white">Quantity updated: {existingItem.quantity + 1}</span>
          </div>
        );
        setTimeout(() => setNotification(null), 3000);

        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // 3. If not, add new item with quantity 1
      setNotification(
        <div className="flex items-center">
          <span className="font-bold mr-2 text-yellow-300">{product.name}</span>
          <span className="text-white">Added to cart</span>
        </div>
      );
      setTimeout(() => setNotification(null), 3000);

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  const renderContent = () => {
    switch (activeTab) {
      case 'shop':
        return (
          <div className="py-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b-2 border-gray-100">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
                  <p className="text-gray-500">Handcrafted daily with premium ingredients.</p>
                </div>
                <div className="mt-6 md:mt-0 flex flex-wrap gap-2 text-sm">
                  {['All', 'Signature', 'Traditional', 'Seasonal'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-4 py-2 font-bold rounded-sm transition-all shadow-sm ${filter === cat
                        ? 'bg-[#DA291C] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            </div>
          </div>
        );
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <>
            <Hero onShopNow={() => setActiveTab('shop')} />
            <FeaturedSection
              products={PRODUCTS}
              addToCart={addToCart}
              onSeeAll={() => setActiveTab('shop')}
            />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-yellow-300 selection:text-red-900">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalItems}
      />

      <main className="min-h-[calc(100vh-300px)]">
        {renderContent()}
      </main>

      <Footer onNavClick={setActiveTab} />

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-8 right-8 bg-[#DA291C] text-white px-6 py-4 shadow-2xl flex items-center z-50 animate-bounce-short border-2 border-yellow-400 rounded-sm">
          <span className="text-sm font-medium tracking-wide">{notification}</span>
          <button onClick={() => setNotification(null)} className="ml-6 text-white hover:text-yellow-300 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
