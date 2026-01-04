"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogOut } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith("/dashboard")

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens/session here
    // For now, we'll just redirect to login
    router.push("/login")
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isDashboard ? "/dashboard" : "/"} className="flex items-center space-x-2">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <span className="font-bold text-lg">AQ</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Aidquarters</span>
          </Link>

          {/* Desktop Navigation - Hide on dashboard */}
          {!isDashboard && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">
                Services
              </Link>
              <Link href="/why-aidquarters" className="text-gray-700 hover:text-green-600 font-medium">
                Why Aidquarters
              </Link>
              <Link href="/whats-new" className="text-gray-700 hover:text-green-600 font-medium">
                What's New
              </Link>
              <Link href="/find-aid" className="text-gray-700 hover:text-green-600 font-medium">
                Find Aid
              </Link>
            </nav>
          )}

          {/* Dashboard Navigation - Show only on dashboard */}
          {isDashboard && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/dashboard" className="text-gray-700 hover:text-green-600 font-medium">
                Overview
              </Link>
              <Link href="/dashboard/recruitment" className="text-gray-700 hover:text-green-600 font-medium">
                Recruitment
              </Link>
              <Link href="/dashboard/payroll" className="text-gray-700 hover:text-green-600 font-medium">
                Payroll
              </Link>
              <Link href="/dashboard/employees" className="text-gray-700 hover:text-green-600 font-medium">
                Employees
              </Link>
              <Link href="/dashboard/wallet" className="text-gray-700 hover:text-green-600 font-medium">
                Wallet
              </Link>
              <Link href="/find-aid" className="text-gray-700 hover:text-green-600 font-medium">
                Find Aid
              </Link>
            </nav>
          )}

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isDashboard ? (
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/recruit">Recruit</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {!isDashboard ? (
                <>
                  <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                    Home
                  </Link>
                  <Link href="/services" className="text-gray-700 hover:text-green-600 font-medium">
                    Services
                  </Link>
                  <Link href="/why-aidquarters" className="text-gray-700 hover:text-green-600 font-medium">
                    Why Aidquarters
                  </Link>
                  <Link href="/whats-new" className="text-gray-700 hover:text-green-600 font-medium">
                    What's New
                  </Link>
                  <Link href="/find-aid" className="text-gray-700 hover:text-green-600 font-medium">
                    Find Aid
                  </Link>
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button asChild variant="ghost">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/recruit">Recruit</Link>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/dashboard" className="text-gray-700 hover:text-green-600 font-medium">
                    Overview
                  </Link>
                  <Link href="/dashboard/recruitment" className="text-gray-700 hover:text-green-600 font-medium">
                    Recruitment
                  </Link>
                  <Link href="/dashboard/payroll" className="text-gray-700 hover:text-green-600 font-medium">
                    Payroll
                  </Link>
                  <Link href="/dashboard/employees" className="text-gray-700 hover:text-green-600 font-medium">
                    Employees
                  </Link>
                  <Link href="/dashboard/wallet" className="text-gray-700 hover:text-green-600 font-medium">
                    Wallet
                  </Link>
                  <Link href="/find-aid" className="text-gray-700 hover:text-green-600 font-medium">
                    Find Aid
                  </Link>
                  <div className="pt-4">
                    <Button
                      onClick={handleLogout}
                      variant="ghost"
                      className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
