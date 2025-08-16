import { withAuth} from 'next-auth/middleware'

export default withAuth(
    function middleware(req) {
        console.log(req.nextauth.token)
    },
    {
        pages: {
            signIn: '/login',
        },
    }
)


export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}