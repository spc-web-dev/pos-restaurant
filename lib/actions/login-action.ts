'use server'

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

type StateType = {
    username: string;
    password: string;
}
export async function loginAction(currentState: StateType,formData: FormData){
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const result = await signIn('credentials', { redirect: false, username, password })
    if(result?.error) return {message: result.error, username, password }
    redirect('/')
}
