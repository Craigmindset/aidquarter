import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage system settings and configurations</p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="Aidquarters" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input id="supportEmail" defaultValue="support@aidquarters.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Support Phone</Label>
            <Input id="phone" defaultValue="+234 (0) 8XX XXX XXXX" />
          </div>

          <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">Require 2FA for all admin accounts</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Verification</p>
              <p className="text-sm text-gray-600">Require email verification for new users</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Admin Notifications</p>
              <p className="text-sm text-gray-600">Notify admins of critical events</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* System Info */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Platform Version</span>
            <span className="font-medium text-gray-900">v1.0.0</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Last Updated</span>
            <span className="font-medium text-gray-900">December 15, 2024</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">Database Status</span>
            <span className="font-medium text-green-600">Connected</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600">API Status</span>
            <span className="font-medium text-green-600">Operational</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
