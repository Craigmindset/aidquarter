import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Clock, Star, CheckCircle, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WhyAidquartersPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Vetting",
      description:
        "Every worker undergoes thorough background checks, reference verification, and skill assessments before joining our platform.",
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join over 500 satisfied families who have found reliable household staff through our platform.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is available round-the-clock to assist with any questions or concerns.",
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "We stand behind our workers with performance guarantees and replacement services if needed.",
    },
    {
      icon: Award,
      title: "Professional Training",
      description: "Our workers receive ongoing training to maintain the highest standards of service quality.",
    },
    {
      icon: CheckCircle,
      title: "Easy Process",
      description: "Simple, streamlined hiring process that gets you connected with the right staff quickly.",
    },
  ]

  const stats = [
    { number: "2,500+", label: "Verified Workers" },
    { number: "500+", label: "Happy Families" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why Choose
                <span className="text-green-600"> Aidquarters?</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just another staffing platform. We're your trusted partner in finding reliable, professional
                household staff who become part of your family's success story.
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/find-aid">Start Your Search</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Happy family with household staff"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">The Aidquarters Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that comes with choosing a platform built specifically for Nigerian families and
              their unique household staffing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple, three-step process gets you connected with the perfect household staff
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browse & Select</h3>
              <p className="text-gray-600">
                Browse through our verified professionals and select candidates that match your requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interview & Hire</h3>
              <p className="text-gray-600">
                Conduct interviews with your shortlisted candidates and make your hiring decision
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enjoy Peace of Mind</h3>
              <p className="text-gray-600">
                Start working with your new household staff with our ongoing support and guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-medium text-white mb-8">
              "Aidquarters helped us find the perfect nanny for our children. The vetting process gave us complete
              confidence, and the ongoing support has been exceptional."
            </blockquote>
            <div className="text-green-100">
              <p className="font-semibold text-lg">Mrs. Adebayo</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied families who trust Aidquarters for their household staffing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/find-aid">Find Workers</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
