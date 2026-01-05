import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CreditCard,
  UserCheck,
  Wallet,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    {
      title: "Active Employees",
      value: "3",
      icon: UserCheck,
      change: "+1 this month",
      changeType: "positive" as const,
    },
    {
      title: "Selected Candidates",
      value: "2",
      icon: Users,
      change: "Pending interviews",
      changeType: "neutral" as const,
    },
    {
      title: "Monthly Payroll",
      value: "₦180,000",
      icon: CreditCard,
      change: "+12% from last month",
      changeType: "positive" as const,
    },
    {
      title: "Wallet Balance",
      value: "₦45,000",
      icon: Wallet,
      change: "Last topped up 3 days ago",
      changeType: "neutral" as const,
    },
  ];

  const recentActivity = [
    {
      action: "Payment made to Grace Okoro",
      amount: "₦60,000",
      time: "2 hours ago",
      type: "payment",
    },
    {
      action: "Interview scheduled with Emeka Okonkwo",
      amount: "",
      time: "1 day ago",
      type: "interview",
    },
    {
      action: "Wallet topped up",
      amount: "₦50,000",
      time: "3 days ago",
      type: "topup",
    },
    {
      action: "New candidate selected: Fatima Ibrahim",
      amount: "",
      time: "5 days ago",
      type: "selection",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, John!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your household staff today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="dark:bg-gray-800 dark:border-gray-700"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <p
                className={`text-xs ${
                  stat.changeType === "positive"
                    ? "text-green-600 dark:text-green-400"
                    : stat.changeType === "negative"
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-white">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors dark:bg-gray-900 dark:border-gray-700">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
                  <p className="font-medium dark:text-white">Find New Staff</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Browse candidates
                  </p>
                </div>
              </Card>
              <Card className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors dark:bg-gray-900 dark:border-gray-700">
                <div className="text-center">
                  <CreditCard className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <p className="font-medium dark:text-white">Make Payment</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Pay your staff
                  </p>
                </div>
              </Card>
              <Card className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors dark:bg-gray-900 dark:border-gray-700">
                <div className="text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                  <p className="font-medium dark:text-white">
                    Schedule Interview
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Book with candidates
                  </p>
                </div>
              </Card>
              <Card className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors dark:bg-gray-900 dark:border-gray-700">
                <div className="text-center">
                  <Wallet className="h-8 w-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
                  <p className="font-medium dark:text-white">Top Up Wallet</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Add funds
                  </p>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "payment"
                          ? "bg-green-500"
                          : activity.type === "interview"
                          ? "bg-blue-500"
                          : activity.type === "topup"
                          ? "bg-orange-500"
                          : "bg-purple-500"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  {activity.amount && (
                    <Badge
                      variant="outline"
                      className="text-green-600 dark:text-green-400 dark:border-green-400"
                    >
                      {activity.amount}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
