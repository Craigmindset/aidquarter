import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Shield, Star } from "lucide-react"

export default function RecruitPage() {
  const benefits = [
    {
      icon: Users,
      title: "Access to 2,500+ Verified Workers",
      description: "Browse through our extensive database of pre-screened professionals",
    },
    {
      icon: Shield,
      title: "Background Verified",
      description: "All workers undergo comprehensive background checks and verification",
    },
    {
      icon: Clock,
      title: "Quick Matching",
      description: "Get matched with suitable candidates within 24-48 hours",
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "Satisfaction guaranteed with our replacement service if needed",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Post Your Job Requirements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us what you're looking for and we'll connect you with the perfect household staff
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Recruit with Aidquarters?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Posting Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Post a Job</CardTitle>
                <p className="text-center text-gray-600">
                  Fill out the form below to get matched with qualified candidates
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <form className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                          <SelectItem value="kano">Kano</SelectItem>
                          <SelectItem value="ibadan">Ibadan</SelectItem>
                          <SelectItem value="kaduna">Kaduna</SelectItem>
                          <SelectItem value="enugu">Enugu</SelectItem>
                          <SelectItem value="benin">Benin</SelectItem>
                          <SelectItem value="jos">Jos</SelectItem>
                          <SelectItem value="calabar">Calabar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Job Details</h3>

                    <div className="space-y-2">
                      <Label htmlFor="position">Position Required *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="housekeeper">Housekeeper</SelectItem>
                          <SelectItem value="nanny">Nanny</SelectItem>
                          <SelectItem value="driver">Driver</SelectItem>
                          <SelectItem value="cook">Cook</SelectItem>
                          <SelectItem value="gardener">Gardener</SelectItem>
                          <SelectItem value="security">Security Guard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="workType">Work Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select work type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="live-in">Live-in</SelectItem>
                            <SelectItem value="temporary">Temporary</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="How soon do you need someone?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="within-week">Within a week</SelectItem>
                            <SelectItem value="within-month">Within a month</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="minSalary">Minimum Salary (₦)</Label>
                        <Input id="minSalary" type="number" placeholder="e.g., 40000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxSalary">Maximum Salary (₦)</Label>
                        <Input id="maxSalary" type="number" placeholder="e.g., 60000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Job Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the role, responsibilities, and any specific requirements..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Requirements & Preferences</h3>

                    <div className="space-y-3">
                      <Label>Experience Level</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Entry Level (0-2 years)", "Mid Level (3-5 years)", "Senior Level (5+ years)"].map(
                          (level) => (
                            <div key={level} className="flex items-center space-x-2">
                              <Checkbox id={level} />
                              <Label htmlFor={level} className="text-sm">
                                {level}
                              </Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Special Skills (Optional)</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Cooking", "Child Care", "Pet Care", "Elderly Care", "First Aid", "Driving License"].map(
                          (skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox id={skill} />
                              <Label htmlFor={skill} className="text-sm">
                                {skill}
                              </Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                      <Textarea
                        id="additionalRequirements"
                        placeholder="Any other specific requirements or preferences..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <a href="/terms" className="text-green-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-green-600 hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-3">
                      Post Job & Find Candidates
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">No hidden fees. Pay only when you find the right candidate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic Search</CardTitle>
                <div className="text-3xl font-bold text-gray-900">Free</div>
                <p className="text-gray-600">Browse worker profiles</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">View worker profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Basic search filters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Contact up to 3 workers</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Premium Access</CardTitle>
                <div className="text-3xl font-bold text-gray-900">₦5,000</div>
                <p className="text-gray-600">One-time fee per hire</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Unlimited worker contacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Priority matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Background check reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">30-day replacement guarantee</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-gray-900">Custom</div>
                <p className="text-gray-600">For multiple hires</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Bulk hiring discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Custom screening process</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-2 h-2 rounded-full p-0 bg-green-600"></Badge>
                  <span className="text-sm">Priority support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
