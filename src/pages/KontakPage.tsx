import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hubungi Kami</h1>
          <p className="text-blue-100">Kami siap membantu kebutuhan Anda</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6">
          <a
            href="https://wa.me/6287720150288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-100"
          >
            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">WhatsApp</h3>
              <p className="text-gray-500 text-sm">+62 877-2015-0288</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Telepon</h3>
              <p className="text-gray-500 text-sm">+62 877-2015-0288</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-500 text-sm">info@markstore.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Lokasi</h3>
              <p className="text-gray-500 text-sm">Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
