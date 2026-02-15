import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CoshoctonPlumbingInfo from "@/components/landing/CoshoctonPlumbingInfo";
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
        <title>plumber coshocton ohio Coshocton Ohio</title>
        <meta name="description" content="plumber coshocton ohio Coshocton Ohio - Expert plumbing repair, leak detection & infrastructure maintenance. Reliable residential and commercial services for Coshocton, Ohio. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber coshocton ohio, Coshocton Ohio plumber, plumbing repair Coshocton, village plumber Ohio, Coshocton County plumbing, historic home plumbing Coshocton" />
        <link rel="canonical" href="https://coshocton-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Coshocton Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1590644365607-1c5a519a9917?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coshocton",
              "addressRegion": "OH",
              "postalCode": "43812",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.2723",
              "longitude": "-81.8590"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Coshocton, OH"
            },
            "priceRange": "$$",
            "description": "Professional residential and commercial plumbing services in Coshocton, Ohio. We specialize in maintenance, technical diagnostics, and high-performance plumbing care for historic and modern Ohio homes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Comprehensive Plumbing Solutions",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Coshocton Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Coshocton, Ohio"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Coshocton Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Historic Home Plumbing Preservation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Industrial & Agricultural Plumbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Infrastructure Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber coshocton ohio Coshocton Ohio - Coshocton Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing services in Coshocton, Ohio. Reliable infrastructure maintenance and technical restoration for local property owners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coshocton-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1590644365607-1c5a519a9917?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber coshocton ohio Coshocton Ohio
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Coshocton Plumbing Pros</span>
            </>
          }
          subtitle="Coshocton's trusted authority for resilient local infrastructure. We provide precision diagnostics, expert preservation, and technical support for Ohio property owners. Village Pride."
          image="https://images.unsplash.com/photo-1590644365607-1c5a519a9917?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000"
          badge="COSHOCTON MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <CoshoctonPlumbingInfo />
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
