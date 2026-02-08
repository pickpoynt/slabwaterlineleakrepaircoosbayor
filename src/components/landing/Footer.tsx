import { Phone, Mail, MapPin, Activity, Shield, Hammer } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                St. Louis Sewer Experts
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Serving the St. Louis metro area with specialized trenchless clay pipe replacement and main line restoration. We preserve historic STL properties.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:8777921410" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Sewer Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Clay Pipe Replacement</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Trenchless Relining</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Pipe Bursting Tech</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Video Sewer Scans</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Root Intrusion Repair</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">STL Metro Service</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> South City & Tower Grove</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Central West End & Midtown</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> University City & Clayton</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Lafayette Square & Soulard</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Kirkwood & Webster Groves</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">STL Hot Line</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-blue-400 font-bold text-sm uppercase mb-2">MO Licensed Plumber</div>
              <a href="tel:8777921410" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                (877) 792-1410
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <Shield className="w-4 h-4 text-blue-600" />
                Licensed & Insured #STLSEWER99
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} St. Louis Sewer Experts. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">Clay pipe replacement St. Louis MO</div>
            <div className="w-2 h-2 rounded-full bg-blue-600/30" />
            <div className="text-xs text-slate-600 italic">Trenchless sewer repair STL</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "St. Louis Sewer Experts",
          "telephone": "+1-877-792-1410",
          "url": "https://stlouis-clay-pipe.com/",
          "logo": "https://stlouis-clay-pipe.com/logo.png",
          "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
          "description": "Professional clay pipe replacement and trenchless sewer repair services in St. Louis, MO. We specialize in non-invasive main line restoration for historic STL homes.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving the St. Louis Metro Area",
            "addressLocality": "St. Louis",
            "addressRegion": "MO",
            "postalCode": "63101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.6270,
            "longitude": -90.1994
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};


export default Footer;

