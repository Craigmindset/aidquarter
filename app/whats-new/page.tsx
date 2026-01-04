import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WhatsNewPage() {
  const updates = [
    {
      id: 1,
      title: "Enhanced Background Verification System",
      excerpt: "We've upgraded our verification process with advanced security checks and real-time validation.",
      content:
        "Our new verification system now includes biometric verification, enhanced criminal background checks, and real-time reference validation. This ensures even higher quality and safety standards for all our registered workers.",
      date: "December 15, 2024",
      category: "Security",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "Mobile App Now Available",
      excerpt: "Download our new mobile app for iOS and Android to manage your household staff on the go.",
      content:
        "The Aidquarters mobile app brings all our platform features to your smartphone. Browse workers, manage bookings, communicate with staff, and access support - all from your mobile device.",
      date: "December 10, 2024",
      category: "Product",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 3,
      title: "New Training Programs Launched",
      excerpt: "Comprehensive training modules for housekeepers, nannies, and drivers to enhance service quality.",
      content:
        "We've launched specialized training programs covering modern household management, child safety, defensive driving, and customer service excellence. All our workers now receive continuous professional development.",
      date: "December 5, 2024",
      category: "Training",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 4,
      title: "24/7 Emergency Support",
      excerpt: "Round-the-clock emergency support line for urgent household staff issues.",
      content:
        "Our new emergency support service provides immediate assistance for urgent situations. Whether it's a no-show, emergency replacement, or urgent concern, our team is available 24/7 to help.",
      date: "November 28, 2024",
      category: "Support",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 5,
      title: "Expanded Coverage to 6 New Cities",
      excerpt: "Aidquarters services now available in Ibadan, Kaduna, Enugu, Benin, Jos, and Calabar.",
      content:
        "We're excited to announce our expansion to six new cities across Nigeria. Families in these locations can now access our vetted household staff services with the same quality standards.",
      date: "November 20, 2024",
      category: "Expansion",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "Partnership with Leading Insurance Company",
      excerpt: "All household staff now covered under comprehensive insurance for added peace of mind.",
      content:
        "We've partnered with a leading insurance provider to offer comprehensive coverage for all our registered workers. This includes liability insurance and health coverage during work hours.",
      date: "November 15, 2024",
      category: "Partnership",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
  ]

  const featuredUpdate = updates.find((update) => update.featured)
  const regularUpdates = updates.filter((update) => !update.featured)

  const getCategoryColor = (category: string) => {
    const colors = {
      Security: "bg-red-100 text-red-800",
      Product: "bg-blue-100 text-blue-800",
      Training: "bg-green-100 text-green-800",
      Support: "bg-purple-100 text-purple-800",
      Expansion: "bg-orange-100 text-orange-800",
      Partnership: "bg-indigo-100 text-indigo-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What's New at Aidquarters</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest features, improvements, and announcements from Aidquarters
          </p>
        </div>
      </section>

      {/* Featured Update */}
      {featuredUpdate && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="mb-8">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">Featured Update</Badge>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredUpdate.image || "/placeholder.svg"}
                    alt={featuredUpdate.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge className={getCategoryColor(featuredUpdate.category)}>{featuredUpdate.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {featuredUpdate.date}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900">{featuredUpdate.title}</h2>

                    <p className="text-lg text-gray-600 leading-relaxed">{featuredUpdate.content}</p>

                    <Button className="bg-green-600 hover:bg-green-700 w-fit">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Updates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Updates</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularUpdates.map((update) => (
              <Card
                key={update.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image src={update.image || "/placeholder.svg"} alt={update.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(update.category)}>{update.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {update.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{update.title}</h3>

                    <p className="text-gray-600 line-clamp-3">{update.excerpt}</p>

                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay in the Loop</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates, features, and announcements delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-6">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Our Latest Features?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start using Aidquarters today and benefit from all our latest improvements and features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/find-aid">Find Workers</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/recruit">Post a Job</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
