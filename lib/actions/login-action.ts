'use server'

type StateType = {
    username: string;
    password: string;
}
export async function loginAction(currentState: StateType,formData: FormData){
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    return { username, password }
}
