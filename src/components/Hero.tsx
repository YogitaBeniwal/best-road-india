import { Button } from "@/components/ui/button";
import { Truck, Shield, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/transport-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional transport and logistics services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transport-dark/90 via-transport-dark/70 to-transport-red/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Indian Flag Inspired Accent */}
          <div className="w-16 h-12 mx-auto mb-8 rounded-lg overflow-hidden shadow-strong">
            <div className="h-1/3 bg-transport-orange"></div>
            <div className="h-1/3 bg-white"></div>
            <div className="h-1/3 bg-transport-green"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transport-orange">BEST INDIA</span><br />
            <span className="text-white">ROAD CARRIERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-transport-orange font-semibold">
            FLEET OWNERS & TRANSPORT CONTRACTOR
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Serving India's logistics needs since 2008 with reliable, efficient, and customer-centric transport solutions
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Truck className="w-8 h-8 text-transport-orange mb-2" />
              <span className="text-sm font-medium">Fleet Owner</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Shield className="w-8 h-8 text-transport-orange mb-2" />
              <span className="text-sm font-medium">JD Verified</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Clock className="w-8 h-8 text-transport-orange mb-2" />
              <span className="text-sm font-medium">15+ Years</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-transport-orange mb-2" />
              <span className="text-sm font-medium">Pan India</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Quote Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-transport-dark">
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};