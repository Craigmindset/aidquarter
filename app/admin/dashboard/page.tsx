import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, CreditCard, TrendingUp, AlertCircle } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      icon: Users,
      change: "+45 this month",
      changeType: "positive" as const,
    },
    {
      title: "Total Revenue",
      value: "₦2,450,000",
      icon: CreditCard,
      change: "+12% from last month",
      changeType: "positive" as const,
    },
    {
      title: "Active Workers",
      value: "2,500",
      icon: TrendingUp,
      change: "98% verified",
      changeType: "positive" as const,
    },
    {
      title: "Pending Issues",
      value: "12",
      icon: AlertCircle,
      change: "Requires attention",
      changeType: "negative" as const,
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      type: "Client",
      joinDate: "2024-12-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Grace Okoro",
      email: "grace@example.com",
      type: "Worker",
      joinDate: "2024-12-14",
      status: "Verified",
    },
    {
      id: 3,
      name: "Ibrahim Musa",
      email: "ibrahim@example.com",
      type: "Worker",
      joinDate: "2024-12-13",
      status: "Pending",
    },
  ]

  const recentPayments = [
    {
      id: 1,
      user: "John Doe",
      amount: 100000,
      type: "Top-up",
      date: "2024-12-15",
      status: "Completed",
    },
    {
      id: 2,
      user: "Sarah Johnson",
      amount: 50000,
      type: "Salary Payment",
      date: "2024-12-14",
      status: "Completed",
    },
    {
      id: 3,
      user: "Mike Admin",
      amount: 75000,
      type: "Wallet Top-up",
      date: "2024-12-13",
      status: "Pending",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Admin</h1>
        <p className="text-gray-600">Here's what's happening with Aidquarters today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p
                className={`text-xs ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : stat.changeType === "negative"
                      ? "text-red-600"
                      : "text-gray-500"
                }`}
              >
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        user.type === "Client"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : "bg-green-100 text-green-800 hover:bg-green-100"
                      }
                    >
                      {user.type}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{user.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{payment.user}</p>
                    <p className="text-sm text-gray-600">{payment.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">₦{payment.amount.toLocaleString()}</p>
                    <Badge
                      className={
                        payment.status === "Completed"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
