'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { Alert, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { loginAction } from "@/lib/actions/login-action";


function LoginForm() {
    const initialState = {
        username: '',
        password: '',
        message: '',
        success:false,
    }
    const [state,formAction, isPending] = useActionState(loginAction,initialState)
 
  return (
    <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="your username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
              </Button>

                {state.message !== '' && <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertTitle>{state.message}</AlertTitle>
                </Alert>}

            </div>
          </form>
        </CardContent>
      </Card>
  )
}

export default LoginForm