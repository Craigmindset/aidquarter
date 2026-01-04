"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Edit, Plus } from "lucide-react"

export default function SubAdminsPage() {
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [selectedRole, setSelectedRole] = useState("")

  const subAdmins = [
    {
      id: 1,
      name: "Michael Admin",
      email: "michael@aidquarters.com",
      role: "User Manager",
      status: "Active",
      joinDate: "2024-06-01",
      image: "/placeholder.svg?height=40&width=40",
      permissions: ["view_users", "edit_users", "delete_users"],
    },
    {
      id: 2,
      name: "Jennifer Reports",
      email: "jennifer@aidquarters.com",
      role: "Finance Manager",
      status: "Active",
      joinDate: "2024-07-15",
      image: "/placeholder.svg?height=40&width=40",
      permissions: ["view_payments", "export_reports", "view_analytics"],
    },
    {
      id: 3,
      name: "David Support",
      email: "david@aidquarters.com",
      role: "Support Manager",
      status: "Active",
      joinDate: "2024-08-20",
      image: "/placeholder.svg?height=40&width=40",
      permissions: ["view_tickets", "resolve_issues", "view_users"],
    },
  ]

  const allPermissions = [
    "view_users",
    "edit_users",
    "delete_users",
    "view_payments",
    "edit_payments",
    "export_reports",
    "view_analytics",
    "view_tickets",
    "resolve_issues",
    "manage_sub_admins",
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sub-Admin Management</h1>
          <p className="text-gray-600">Manage administrators and assign roles</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700" onClick={() => setShowAddDialog(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Sub-Admin
        </Button>
      </div>

      {/* Sub-Admin Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Sub-Admins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{subAdmins.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {subAdmins.filter((a) => a.status === "Active").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{new Set(subAdmins.map((a) => a.role)).size}</div>
          </CardContent>
        </Card>
      </div>

      {/* Sub-Admins List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subAdmins.map((admin) => (
          <Card key={admin.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={admin.image || "/placeholder.svg"} alt={admin.name} />
                  <AvatarFallback>
                    {admin.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{admin.name}</h3>
                  <p className="text-sm text-gray-600">{admin.email}</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-1">{admin.role}</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Permissions:</p>
                <div className="flex flex-wrap gap-1">
                  {admin.permissions.map((perm) => (
                    <Badge key={perm} variant="secondary" className="text-xs">
                      {perm.replace(/_/g, " ")}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500">Joined: {admin.joinDate}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Sub-Admin Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Sub-Admin</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter full name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user-manager">User Manager</SelectItem>
                  <SelectItem value="finance-manager">Finance Manager</SelectItem>
                  <SelectItem value="support-manager">Support Manager</SelectItem>
                  <SelectItem value="custom">Custom Role</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Permissions</Label>
              <div className="border rounded-lg p-3 space-y-2 max-h-40 overflow-y-auto">
                {allPermissions.map((perm) => (
                  <div key={perm} className="flex items-center space-x-2">
                    <Checkbox id={perm} />
                    <Label htmlFor={perm} className="text-sm cursor-pointer">
                      {perm.replace(/_/g, " ")}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Add Sub-Admin</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
