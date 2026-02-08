import { ExternalLink } from "lucide-react";

const links = [
  {
    name: "St. Louis Plumbing Network",
    url: "#"
  },
  {
    name: "Missouri Drain Pros",
    url: "#"
  },
  {
    name: "STL Sewer Services",
    url: "#"
  },
  {
    name: "Midwest Home Care",
    url: "#"
  },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <span className="text-slate-400 font-medium text-sm lg:mr-4 uppercase tracking-widest text-center w-full lg:w-auto mb-4 lg:mb-0">
            Missouri's Premier Home Network
          </span>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="group flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <span className="font-bold text-sm tracking-tight">{link.name}</span>
              <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};



export default RandomLinks;
