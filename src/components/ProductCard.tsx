import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const waMessage = encodeURIComponent(
    `Halo MARKSTORE, saya ingin membeli:\n${product.nama}`
  );
  const waLink = `https://wa.me/6287720150288?text=${waMessage}`;

  const formatHarga = (h: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(h);

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        {product.gambar ? (
          <img
            src={product.gambar}
            alt={product.nama}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <ShoppingCart className="w-16 h-16" />
          </div>
        )}
        {product.badge_best_seller && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Star className="w-3 h-3 fill-current" />
            Best Seller
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
          {product.kategori}
        </div>
        <h3 className="text-gray-900 font-semibold text-base mb-1 line-clamp-1">
          {product.nama}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.deskripsi}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-blue-700 font-bold text-lg">
            {formatHarga(product.harga)}
          </span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors shadow-sm hover:shadow-md"
          >
            Beli
          </a>
        </div>
      </div>
    </div>
  );
}
