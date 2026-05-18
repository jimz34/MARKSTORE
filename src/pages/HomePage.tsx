import { Link } from 'react-router-dom';
import {
  ShoppingBag, Truck, Shield, Headphones, ArrowRight,
  Star, TrendingUp, Zap, ChevronRight,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [latest, setLatest] = useState<Product[]>([]);

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .eq('badge_best_seller', true)
      .limit(4)
      .then(({ data }) => {
        if (data) setFeatured(data as Product[]);
      });

    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(4)
      .then(({ data }) => {
        if (data) setLatest(data as Product[]);
      });
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <Zap className="w-4 h-4 text-cyan-300" />
              Toko Online Terpercaya
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Belanja Mudah
              <br />
              di{' '}
              <span className="relative">
                <span className="relative z-10 text-cyan-300">MARKSTORE</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-400/20 rounded-sm -z-0" />
              </span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Temukan produk berkualitas dengan harga terbaik. Belanja praktis, pengiriman cepat, dan pelayanan terjamin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Lihat Produk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/6287720150288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-xl transition-all border border-white/25"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/15">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Produk</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                <div className="text-blue-200 text-sm">Pelanggan</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">4.9</div>
                <div className="text-blue-200 text-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-cyan-300 text-cyan-300" />
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              Keunggulan Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih{' '}
              <span className="text-blue-600">MARKSTORE</span>?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Kami berkomitmen memberikan pengalaman belanja terbaik untuk Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: 'Pengiriman Cepat',
                desc: 'Produk sampai dengan cepat dan aman ke alamat Anda.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: Shield,
                title: 'Produk Berkualitas',
                desc: 'Hanya menyediakan produk original dan terjamin kualitasnya.',
                gradient: 'from-cyan-500 to-blue-600',
              },
              {
                icon: Headphones,
                title: 'Layanan 24/7',
                desc: 'Tim kami siap membantu kapan saja melalui WhatsApp.',
                gradient: 'from-blue-600 to-indigo-600',
              },
              {
                icon: Zap,
                title: 'Proses Cepat',
                desc: 'Checkout mudah dan proses pesanan yang sangat cepat.',
                gradient: 'from-sky-500 to-blue-600',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-cyan-50/30 transition-all duration-300" />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featured.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  Best Seller
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Produk Unggulan
                </h2>
              </div>
              <Link
                to="/products"
                className="hidden sm:inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
              >
                Lihat Semua
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            <div className="sm:hidden mt-6 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Lihat Semua Produk
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Products */}
      {latest.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  <TrendingUp className="w-4 h-4" />
                  Baru Masuk
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Produk Terbaru
                </h2>
              </div>
              <Link
                to="/products"
                className="hidden sm:inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
              >
                Lihat Semua
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {latest.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <ShoppingBag className="w-4 h-4" />
            Mulai Belanja
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Siap Belanja?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
            Jelajahi koleksi produk kami dan temukan yang Anda butuhkan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Lihat Semua Produk
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/6287720150288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-xl transition-all border border-white/25"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
