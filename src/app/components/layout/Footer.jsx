import { Church, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Church className="h-6 w-6 text-gold" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  Everlasting Refuge
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-gold/80">
                  Mega Parish
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Where the love of God reigns, where dreams come true, where
              Legends are born, and tomorrow's history is experienced today.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">
              Worship With Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                Plot 1901 Yakubu Gowon Crescent, Hillside Plaza, Beside NITEL,
                Asokoro, Abuja.
              </li>
              <li>
                <span className="text-gold">Sunday Service:</span>
                7:30 AM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-gold transition-colors"
                >
                  About ERP
                </a>
              </li>
              <li>
                <a
                  href="/live"
                  className="hover:text-gold transition-colors"
                >
                  Watch Online
                </a>
              </li>
              <li>
                <a
                  href="/give"
                  className="hover:text-gold transition-colors"
                >
                  Giving
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-gold hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-gold hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-gold hover:text-white transition-all"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-gold hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-xs text-center text-slate-500">
          © {new Date().getFullYear()} RCCG Everlasting Refuge Mega Parish.
          Built with faith and excellence.
        </div>
      </div>
    </footer>
  );
}
