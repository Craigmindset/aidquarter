import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Download, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function PayrollPage() {
  const employees = [
    {
      id: 1,
      name: "Grace Okoro",
      position: "Nanny",
      image: "/placeholder.svg?height=40&width=40",
      salary: 60000,
      lastPaid: "2024-12-01",
      status: "Paid",
    },
    {
      id: 2,
      name: "Ibrahim Musa",
      position: "Driver",
      image: "/placeholder.svg?height=40&width=40",
      salary: 50000,
      lastPaid: "2024-12-01",
      status: "Paid",
    },
    {
      id: 3,
      name: "Chioma Nwankwo",
      position: "Housekeeper",
      image: "/placeholder.svg?height=40&width=40",
      salary: 45000,
      lastPaid: "2024-11-01",
      status: "Pending",
    },
  ]

  const paymentHistory = [
    {
      id: 1,
      staffName: "Grace Okoro",
      amount: 60000,
      paymentDate: "2024-12-01",
      status: "Paid",
      method: "Bank Transfer",
    },
    {
      id: 2,
      staffName: "Ibrahim Musa",
      amount: 50000,
      paymentDate: "2024-12-01",
      status: "Paid",
      method: "Bank Transfer",
    },
    {
      id: 3,
      staffName: "Chioma Nwankwo",
      amount: 45000,
      paymentDate: "2024-11-01",
      status: "Paid",
      method: "Bank Transfer",
    },
    {
      id: 4,
      staffName: "Grace Okoro",
      amount: 60000,
      paymentDate: "2024-11-01",
      status: "Paid",
      method: "Bank Transfer",
    },
    {
      id: 5,
      staffName: "Ibrahim Musa",
      amount: 50000,
      paymentDate: "2024-11-01",
      status: "Paid",
      method: "Bank Transfer",
    },
  ]

  const totalMonthlyPayroll = employees.reduce((sum, emp) => sum + emp.salary, 0)
  const pendingPayments = employees.filter((emp) => emp.status === "Pending").length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payroll Management</h1>
          <p className="text-gray-600">Manage staff payments and view payment history</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <CreditCard className="h-4 w-4 mr-2" />
          Pay All Staff
        </Button>
      </div>

      {/* Payroll Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Monthly Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₦{totalMonthlyPayroll.toLocaleString()}</div>
            <p className="text-xs text-gray-500">Total for {employees.length} employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{pendingPayments}</div>
            <p className="text-xs text-gray-500">Payments due</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Next Payment Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">Jan 1</div>
            <p className="text-xs text-gray-500">2025</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Staff Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Current Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {employees.map((employee) => (
              <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={employee.image || "/placeholder.svg"} alt={employee.name} />
                    <AvatarFallback>
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{employee.name}</p>
                    <p className="text-sm text-gray-600">{employee.position}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₦{employee.salary.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Monthly salary</p>
                  </div>

                  <Badge
                    className={
                      employee.status === "Paid"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                    }
                  >
                    {employee.status}
                  </Badge>

                  <Button size="sm" className="bg-green-600 hover:bg-green-700" disabled={employee.status === "Paid"}>
                    {employee.status === "Paid" ? "Paid" : "Pay Now"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Payment History</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search payments..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Staff Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.staffName}</TableCell>
                  <TableCell>₦{payment.amount.toLocaleString()}</TableCell>
                  <TableCell>{new Date(payment.paymentDate).toLocaleDateString()}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{payment.status}</Badge>
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
