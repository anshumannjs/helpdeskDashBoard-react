// import Link from "next/link"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button.jsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx"
import { Input } from "@/components/ui/input.jsx"
import { Label } from "@/components/ui/label.jsx"

export function ForgotPassword({toggleForgotPassword}) {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Forgot your password? Dont't worry we'll handle it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
          <Button variant="outline" className="w-full" onClick={toggleForgotPassword}>
            Back to sign in
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
