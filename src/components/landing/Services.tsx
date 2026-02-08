import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Trenchless Pipe Bursting",
    description: "The modern standard for St. Louis clay pipe replacement. We pull a new HDPE line through the old tile, shattering it without digging up your yard.",
    link: "#clay-pipe-info"
  },
  {
    icon: Hammer,
    title: "Cured-In-Place Pipelining",
    description: "Perfect for historic St. Louis homes. We create a 'pipe within a pipe' using epoxy-resin, sealing all cracks and joints permanently.",
    link: "#clay-pipe-info"
  },
  {
    icon: Droplets,
    title: "Root Intrusion Clearance",
    description: "Removing aggressive tree roots that have penetrated brittle clay joints in older St. Louis neighborhoods like South City.",
    link: "#clay-pipe-info"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Sewer Response",
    description: "24/7 rapid response for total sewer backups in St. Louis. We stabilize the situation and clear the line fast to prevent flooding.",
    link: "#clay-pipe-info"
  },
  {
    icon: Search,
    title: "HD Video Sewer Inspection",
    description: "We use robotic cameras to navigate St. Louis's complex sewer networks, providing you with a high-definition recording of your clay pipe.",
    link: "#clay-pipe-info"
  },
  {
    icon: Waves,
    title: "Main Line Descaling",
    description: "Removing decades of scale and mineral buildup from historic St. Louis cast iron and clay pipes, restoring full flow capacity.",
    link: "#clay-pipe-info"
  },
  {
    icon: Shield,
    title: "Point Repair Solutions",
    description: "Targeted repairs for localized failures in St. Louis clay pipes, avoiding a full replacement when only a single section is damaged.",
    link: "#clay-pipe-info"
  },
  {
    icon: ClipboardList,
    title: "Pre-Purchase Inspections",
    description: "Comprehensive sewer scans for St. Louis homebuyers. Know the condition of those underground clay pipes before you sign the contract.",
    link: "#clay-pipe-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            St. Louis's Specialized Sewer Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't trust generic plumbers with your historic St. Louis sewer. Our team specializes specifically in the challenges of aging clay pipes and trenchless repair.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

