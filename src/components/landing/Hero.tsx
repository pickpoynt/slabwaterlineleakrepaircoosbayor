import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Wind, Zap, FlaskConical, Search, Microscope, Hammer } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
  overlayImage?: string;
  phone?: string;
  badge?: string;
}

const Hero = ({
  title = "SF Master Plumbing Pros",
  subtitle = "Expert residential plumbing for San Francisco's historic and modern homes.",
  image = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80",
  overlayImage = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80",
  phone = "8777921410",
  badge = "SF MASTER PLUMBING PROS"
}: HeroProps) => {
  const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="w-full h-full object-cover brightness-[0.5]" />
        <div className="absolute inset-0 opacity-15 mix-blend-overlay overflow-hidden">
          <img
            src={overlayImage}
            alt=""
            className="w-full h-full object-cover scale-150 animate-pulse transition-all duration-[20000ms]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-indigo-900/40 to-teal-900/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 animate-fade-in shadow-lg shadow-emerald-500/5 uppercase tracking-widest text-[10px] items-center font-bold">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>{badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1] uppercase tracking-tight">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic font-medium border-l-4 border-emerald-500 pl-6">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-emerald-900/40 uppercase tracking-widest transition-all hover:scale-105" asChild>
              <a href={`tel:${phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                {formattedPhone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-500/50 text-white hover:bg-emerald-600/10 transition-all h-14 px-8 text-lg uppercase tracking-widest font-bold" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Request Service
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3 uppercase tracking-widest text-[10px] font-bold">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white">Master Plumbing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white">Charlotte Ready</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white">Infrastructure Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
