'use client'

import { signIn, useSession } from "next-auth/react"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {

  const params = useParams()
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if(session.status === "authenticated") {
      router.push("/")
    }
    if (session.status === "unauthenticated") {
      signIn("credentials", { token: params.token , redirect:true} ,)
    }
    
  }, [session.status])

  return (
    <div>
      {JSON.stringify(params)}
    </div>
  )

}