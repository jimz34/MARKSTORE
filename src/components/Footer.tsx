import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                MARK<span className="text-blue-400">STORE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Toko online terpercaya dengan produk berkualitas dan harga terbaik.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/products" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">Products</Link>
              <Link to="/kontak" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">Kontak</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+62 877-2015-0288</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@markstore.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MARKSTORE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
