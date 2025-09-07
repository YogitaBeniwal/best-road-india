import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Package, Shield, Clock, Route, CreditCard } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Fleet Management",
      description: "Professional fleet owners with modern vehicles ensuring safe and timely delivery of your goods across India.",
      features: ["Modern Fleet", "GPS Tracking", "Regular Maintenance", "Experienced Drivers"]
    },
    {
      icon: Package,
      title: "Transport Contracting",
      description: "Comprehensive transport contractor services tailored to meet your specific logistics requirements.",
      features: ["Door-to-Door Service", "Bulk Transportation", "Express Delivery", "Specialized Cargo"]
    },
    {
      icon: Route,
      title: "Logistics Solutions",
      description: "End-to-end logistics solutions designed to optimize your supply chain and reduce operational costs.",
      features: ["Route Optimization", "Warehouse Solutions", "Supply Chain", "Distribution Network"]
    },
    {
      icon: Shield,
      title: "Secure Transportation",
      description: "Your goods are protected with comprehensive insurance coverage and our verified, reliable service network.",
      features: ["Insurance Coverage", "Secure Handling", "JD Verified", "Trusted Network"]
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to on-time delivery with real-time tracking and proactive communication throughout the journey.",
      features: ["On-Time Delivery", "Real-Time Updates", "Flexible Scheduling", "Emergency Support"]
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Multiple payment options including cheques, credit cards, and AMEX for your convenience and ease of transaction.",
      features: ["Credit Cards", "Cheques", "AMEX", "Digital Payments"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transport-dark mb-6">
            Our <span className="text-transport-red">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive transport and logistics solutions designed to meet all your business needs 
            with reliability, efficiency, and professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-transport-dark group-hover:text-transport-red transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-transport-dark">
                      <div className="w-2 h-2 bg-transport-orange rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="transport" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-strong">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transport Your Goods?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a customized quote and experience 
            the reliability and professionalism that has made us a trusted name since 2008.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-transport-red hover:bg-white/90 border-white">
              Get Free Quote
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 border border-white/30">
              Call Now: 020-27660522
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};