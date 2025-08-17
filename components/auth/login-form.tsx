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
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { Alert, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

type StateType = {
    username: string;
    password: string;
}

function LoginForm() {
    const initialState = {
        username: '',
        password: '',
        message: '',
        success:false,
    }
    const router = useRouter()
    async function loginAction(currentState: StateType,formData: FormData){
        const username = formData.get('username') as string
        const password = formData.get('password') as string
        const result = await signIn('credentials', { redirect: false, username, password })
        if(result?.error) return {message: 'Wrong username or password', username, password, success: false }
        router.push('/')
        return { message: 'Login successful', username, password, success: true }
    }

    const [state,formAction, isPending] = useActionState(loginAction,initialState)
    const { data: session } = useSession()

    useEffect(()=>{
      if(session) router.push('/')
    },[session])

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