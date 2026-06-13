"use client"

export default function TestBoton() {
  return (
    <button
      onClick={() => alert("funciona")}
      style={{ background: "red", color: "white", padding: "20px", fontSize: "20px", zIndex: 9999, position: "relative" }}
    >
      PRUEBA
    </button>
  )
}