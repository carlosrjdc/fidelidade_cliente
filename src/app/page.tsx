'use client'

import MenuPage from "@/pages/menuPage"
import { signIn, useSession } from "next-auth/react"

export default function Home() {

  return (
    <main className="m-2">
      <MenuPage/>
    </main>)
}
