import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Download } from "lucide-react"

export default function PaymentsPage() {
  const payments = [
    {
      id: 1,
      transactionId: "TXN001",
      user: "John Doe",
      amount: 100000,
      type: "Top-up",
      date: "2024-12-15",
      time: "14:30",
      status: "Completed",
      method: "Bank Transfer",
    },
    {
      id: 2,
      transactionId: "TXN002",
      user: "Sarah Johnson",
      amount: 50000,
      type: "Salary Payment",
      date: "2024-12-14",
      time: "10:15",
      status: "Completed",
      method: "Bank Transfer",
    },
    {
      id: 3,
      transactionId: "TXN003",
      user: "Mike Admin",
      amount: 75000,
      type: "Wallet Top-up",
      date: "2024-12-13",
      time: "09:45",
      status: "Pending",
      method: "Debit Card",
    },
    {
      id: 4,
      transactionId: "TXN004",
      user: "Angela Brown",
      amount: 200000,
      type: "Top-up",
      date: "2024-12-12",
      time: "16:20",
      status: "Completed",
      method: "Bank Transfer",
    },
    {
      id: 5,
      transactionId: "TXN005",
      user: "Peter Stone",
      amount: 60000,
      type: "Salary Payment",
      date: "2024-12-11",
      time: "11:30",
      status: "Failed",
      method: "USSD",
    },
  ]

  const totalRevenue = payments.filter((p) => p.status === "Completed").reduce((sum, p) => sum + p.amount, 0)

  const totalPending = payments.filter((p) => p.status === "Pending").reduce((sum, p) => sum + p.amount, 0)

  const totalFailed = payments.filter((p) => p.status === "Failed").reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment Tracking</h1>
          <p className="text-gray-600">Monitor all transactions on the platform</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Payment Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₦{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-600 mt-1">Completed transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₦{totalPending.toLocaleString()}</div>
            <p className="text-xs text-gray-500 mt-1">
              {payments.filter((p) => p.status === "Pending").length} pending
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₦{totalFailed.toLocaleString()}</div>
            <p className="text-xs text-gray-500 mt-1">{payments.filter((p) => p.status === "Failed").length} failed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{payments.length}</div>
            <p className="text-xs text-gray-500 mt-1">All time</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search transactions..." className="pl-10" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-mono text-sm">{payment.transactionId}</TableCell>
                  <TableCell>{payment.user}</TableCell>
                  <TableCell className="font-semibold">₦{payment.amount.toLocaleString()}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p className="font-medium">{payment.date}</p>
                      <p className="text-gray-500">{payment.time}</p>
                    </div>
                  </TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        payment.status === "Completed"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : payment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
