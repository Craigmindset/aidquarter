import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign } from "lucide-react"
import Image from "next/image"

// Mock data for aid workers
const aidWorkers = [
  {
    id: 1,
    name: "Adunni Okafor",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Housekeeper",
    salaryRange: "₦40,000 - ₦50,000",
    currentLocation: "Lagos",
    preferredWorkLocation: "Lagos only",
    rating: 4.8,
    experience: "5 years",
  },
  {
    id: 2,
    name: "Blessing Adebayo",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Nanny",
    salaryRange: "₦60,000 - ₦80,000",
    currentLocation: "Abuja",
    preferredWorkLocation: "Open",
    rating: 4.9,
    experience: "7 years",
  },
  {
    id: 3,
    name: "Emeka Okonkwo",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Driver",
    salaryRange: "₦45,000 - ₦55,000",
    currentLocation: "Lagos",
    preferredWorkLocation: "Lagos only",
    rating: 4.7,
    experience: "8 years",
  },
  {
    id: 4,
    name: "Fatima Ibrahim",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Housekeeper",
    salaryRange: "₦35,000 - ₦45,000",
    currentLocation: "Kano",
    preferredWorkLocation: "Open",
    rating: 4.6,
    experience: "4 years",
  },
  {
    id: 5,
    name: "Grace Okoro",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Nanny",
    salaryRange: "₦55,000 - ₦70,000",
    currentLocation: "Port Harcourt",
    preferredWorkLocation: "Open",
    rating: 4.8,
    experience: "6 years",
  },
  {
    id: 6,
    name: "Ibrahim Musa",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Driver",
    salaryRange: "₦50,000 - ₦60,000",
    currentLocation: "Abuja",
    preferredWorkLocation: "Abuja only",
    rating: 4.9,
    experience: "10 years",
  },
  {
    id: 7,
    name: "Chioma Nwankwo",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Housekeeper",
    salaryRange: "₦42,000 - ₦52,000",
    currentLocation: "Lagos",
    preferredWorkLocation: "Lagos only",
    rating: 4.7,
    experience: "5 years",
  },
  {
    id: 8,
    name: "Aisha Mohammed",
    image: "/placeholder.svg?height=200&width=200",
    status: "Available to work",
    position: "Nanny",
    salaryRange: "₦65,000 - ₦85,000",
    currentLocation: "Lagos",
    preferredWorkLocation: "Open",
    rating: 4.9,
    experience: "9 years",
  },
]

export default function FindAidPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Find Your Perfect Household Staff</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Browse through our carefully vetted professionals and find the perfect match for your household needs
          </p>
        </div>
      </section>

      {/* Workers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Workers</h2>
            <p className="text-gray-600">Showing {aidWorkers.length} verified professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aidWorkers.map((worker) => (
              <Card key={worker.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Worker Image */}
                  <div className="relative mb-4">
                    <Image
                      src={worker.image || "/placeholder.svg"}
                      alt={worker.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-100">
                      {worker.status}
                    </Badge>
                  </div>

                  {/* Worker Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{worker.name}</h3>
                      <p className="text-green-600 font-medium">{worker.position}</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>{worker.salaryRange}</span>
                    </div>

                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Current: {worker.currentLocation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Preferred: {worker.preferredWorkLocation}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{worker.experience} experience</span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{worker.rating}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Recruit</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
