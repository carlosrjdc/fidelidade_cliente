'use client'

import MenuPage from "@/pages/menuPage"
import { signIn, useSession } from "next-auth/react"

export default function Home() {

  const session = useSession()

  return (
    <main className="m-2">
      <MenuPage/>
    </main>)
}
