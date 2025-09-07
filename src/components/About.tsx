import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Zap } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: "JD Verified Business",
      description: "Verified credentials ensuring trust and reliability"
    },
    {
      icon: Users,
      title: "Customer Centric",
      description: "Building long-term relationships with quality service"
    },
    {
      icon: Award,
      title: "Established 2008",
      description: "15+ years of experience in transport industry"
    },
    {
      icon: Zap,
      title: "Seamless Payments",
      description: "Multiple payment options including cards and cheques"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transport-dark mb-6">
            About <span className="text-transport-red">Best India Road Carriers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2008, we have been a trusted name in the transport and logistics industry, 
            satisfactorily catering to the demands of our valued customer base with dedication and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-transport-dark mb-6">Our Journey</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Best India Road Carriers came into existence in 2008 and has since become a renowned 
              name in the logistics sector. Located in the heart of Nigdi Pradhikaran, Pune, we are 
              strategically positioned to serve clients across India.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our commitment to customer centricity has enabled us to build lasting relationships 
              and establish ourselves as a reliable partner for all transportation needs. We ensure 
              top-notch quality in all our services and maintain the highest standards of professionalism.
            </p>
            <div className="bg-gradient-card p-6 rounded-lg shadow-soft border-l-4 border-transport-red">
              <p className="text-transport-dark font-semibold text-lg">
                "Customer centricity is at the core of our business, and this belief has led us 
                to build long-term relationships with our clients."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-transport-dark mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-card rounded-lg shadow-soft">
            <div className="text-4xl font-bold text-transport-red mb-2">2008</div>
            <div className="text-transport-dark font-semibold">Established</div>
          </div>
          <div className="text-center p-8 bg-gradient-card rounded-lg shadow-soft">
            <div className="text-4xl font-bold text-transport-red mb-2">15+</div>
            <div className="text-transport-dark font-semibold">Years Experience</div>
          </div>
          <div className="text-center p-8 bg-gradient-card rounded-lg shadow-soft">
            <div className="text-4xl font-bold text-transport-red mb-2">100%</div>
            <div className="text-transport-dark font-semibold">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};