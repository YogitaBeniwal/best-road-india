import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Clock, CreditCard } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "1st Floor, Office No 11",
        "Kalbhor Building, Near Axis ATM",
        "Ankush Chowk, Sainath Nagar",
        "Nigdi Pradhikaran, Pune - 411044"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Office: 020-27660522",
        "Mobile: +91 9326904040",
        "Mobile: +91 7720904040",
        "Mobile: +91 9545838484"
      ]
    },
    {
      icon: Mail,
      title: "Email & Website",
      details: [
        "bestindia.roadcarriers@gmail.com",
        "www.bestindiaroadcarriers.com"
      ]
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Emergency Services Only" }
  ];

  const paymentMethods = [
    "Credit Cards", "Debit Cards", "AMEX Card", "Cheques", "Bank Transfer", "Digital Payments"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transport-dark mb-6">
            Contact <span className="text-transport-red">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with <span className="font-semibold text-transport-red">KAILASH BENIWAL</span> and 
            our professional team for all your transport and logistics needs. We're here to serve you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-strong transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-transport-dark">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground mb-2 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Business Hours */}
          <Card className="bg-gradient-card border-0 hover:shadow-strong transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-transport-dark">
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                  <span className="font-medium text-transport-dark">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="bg-gradient-card border-0 hover:shadow-strong transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-transport-dark">
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-transport-orange rounded-full mr-3"></div>
                    <span className="text-sm text-muted-foreground">{method}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-transport-green/10 rounded-lg border-l-4 border-transport-green">
                <p className="text-sm text-transport-dark font-medium">
                  All payment methods ensure seamless and secure transactions for your convenience.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="bg-gradient-hero border-0 shadow-strong">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact <span className="font-bold">KAILASH BENIWAL</span> today for personalized 
                transport solutions that meet your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white text-transport-red hover:bg-white/90 border-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 020-27660522
                </Button>
                <Button variant="contact" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 border border-white/30">
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Website
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};