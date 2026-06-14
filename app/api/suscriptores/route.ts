import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const respuesta = await fetch("https://el-tequendama.onrender.com/suscriptores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.API_KEY}`
    },
    body: JSON.stringify(body),
  })

  const datos = await respuesta.json()
  return NextResponse.json(datos, { status: respuesta.status })
}