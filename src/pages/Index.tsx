import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ClayPipeInfo from "@/components/landing/ClayPipeInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Clay pipe replacement St. Louis MO | St. Louis Sewer Experts: Trenchless & Main Line Specialists</title>
        <meta name="description" content="Clay pipe replacement St. Louis MO. Professional trenchless sewer repair, main line replacement, and root intrusion solutions. Licensed St. Louis plumbers serving the metro area. Call (877) 792-1410 for a free estimate!" />
        <meta name="keywords" content="Clay pipe replacement St. Louis MO, sewer line replacement St. Louis, trenchless sewer repair STL, clay tile pipe removal St. Louis, St. Louis main line repair" />
        <link rel="canonical" href="https://stlouis-clay-pipe.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "St. Louis Sewer Experts",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "St. Louis",
              "addressRegion": "MO",
              "postalCode": "63101",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.6270",
              "longitude": "-90.1994"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "St. Louis, Missouri"
            },
            "priceRange": "$$$",
            "description": "Professional clay pipe replacement and trenchless sewer repair services in St. Louis, MO. We specialize in non-invasive main line restoration for historic St. Louis homes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Clay Pipe Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "St. Louis Sewer Experts",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "St. Louis, Missouri"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Sewer Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Trenchless Sewer Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewer Main Line Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Root Intrusion Removal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Pipe Inspection"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Clay pipe replacement St. Louis MO | St. Louis Sewer Experts" />
        <meta property="og:description" content="Professional clay pipe replacement in St. Louis, MO. Trenchless solutions for historic STL homes. Call (877) 792-1410 for a free estimate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stlouis-clay-pipe.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Clay pipe replacement St. Louis MO
              <span className="block text-blue-400 mt-2">St. Louis Sewer Masters: Trenchless Experts</span>
            </>
          }
          subtitle="Don't let aging clay pipes threaten your St. Louis home's foundation or safety. We specialize in non-invasive, trenchless sewer replacement, removing brittle clay lines and replacing them with durable, root-proof systems without destroying your historic St. Louis yard."
          image="https://images.unsplash.com/photo-1503387762-592adee11292?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <ClayPipeInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;


