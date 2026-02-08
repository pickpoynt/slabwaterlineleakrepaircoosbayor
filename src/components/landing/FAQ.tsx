import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why were clay pipes used so much in St. Louis?",
    answer: "Vitrified clay was the industry standard for sewer lines in St. Louis for over a century due to its resistance to chemical corrosion. However, its main drawback is its brittleness and the fact that it was installed in 2-to-3-foot sections, creating many joints that roots can easily penetrate."
  },
  {
    question: "How do I know if my historic STL home still has clay pipes?",
    answer: "If your St. Louis home was built before 1970 and hasn't had a major sewer overhaul, it's highly likely you have clay pipes. We can perform a high-definition video sewer lateral inspection to confirm the material and condition of your lines."
  },
  {
    question: "Is trenchless replacement better than digging in St. Louis?",
    answer: "In St. Louis, where many homes have established landscaping, historic brick sidewalks, or shared driveways, trenchless technology is vastly superior. It allows us to replace the entire line with a single continuous HDPE pipe without destroying your property."
  },
  {
    question: "Can't I just snake the roots out of my clay pipes?",
    answer: "Snaking is a temporary fix for St. Louis sewers. It cuts a small hole through the roots, but they will grow back thicker and faster within months. Over time, the pressure from these roots will eventually shatter the brittle clay tiles, leading to a much more expensive collapse."
  },
  {
    question: "What is 'pipe bursting' in the context of STL sewers?",
    answer: "Pipe bursting is a trenchless method where a specialized head is pulled through your old clay pipe, shattering it outward into the soil while simultaneously pulling a new, seamless polyethylene pipe into place behind it."
  },
  {
    question: "Does St. Louis city require an inspection for sewer replacement?",
    answer: "Yes. Most municipalities in the St. Louis metro area, including St. Louis City and County, require permits and inspections for sewer lateral work. Our team handles all permitting and ensures every job meets or exceeds local building codes."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            St. Louis Clay Pipe FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Critical expertise for St. Louis homeowners dealing with aging vitrified clay plumbing.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;


