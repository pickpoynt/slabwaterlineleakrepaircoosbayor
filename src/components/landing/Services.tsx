import { ArrowRight, Drill, Zap, Camera, Waves } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-emerald-600">Plumbing Services</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Coshocton property owners trust us for resilient infrastructure diagnostics and precision plumbing restoration. We provide master-licensed care for local Ohio communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap, // Using Zap for fast/emergency/leak
              title: "Leak Detection",
              description: "We use advanced acoustic and thermal imaging technology to find hidden leaks behind walls and under foundations without destruction.",
              link: "#contact"
            },
            {
              icon: Drill, // Using Drill for installation/work
              title: "Water Heaters",
              description: "Whether you need a tankless upgrade or a repair for your traditional unit, we ensure you always have reliable hot water.",
              link: "#contact"
            },
            {
              icon: Camera,
              title: "Drain Cleaning",
              description: "From simple clogs to complex blockages, our professional drain cleaning services restore full flow to your home's plumbing.",
              link: "#contact"
            },
            {
              icon: Waves,
              title: "Emergency Repair",
              description: "Plumbing disasters don't wait for business hours. Our 24/7 team is ready to tackle burst pipes, overflows, and backups anytime.",
              link: "#contact"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
