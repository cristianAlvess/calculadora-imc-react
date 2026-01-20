import { useState } from "react";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularIMC() {
    if (!peso || !altura) {
      setResultado("Preencha peso e altura corretamente.");
      return;
    }

    const imc = peso / (altura * altura);

    setResultado(`Seu IMC é ${imc.toFixed(2)}`);
  }

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0013a2",
      fontFamily: "Arial",
    }}
  >
    <div
      style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        width: "320px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Calculadora IMC</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>Peso (kg)</label>
        <input
          type="number"
          value={peso} 
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ex: 70"
          style={{ width: "100%", padding: "6px",  borderRadius: "8px"}}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Altura (m)</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ex: 1.75"
          style={{ width: "100%", padding: "6px",  borderRadius: "8px" }}
        />
      </div>

      <button
        onClick={calcularIMC}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "10px",
          cursor: "pointer",
           borderRadius: "8px"
        }}
      >
        Calcular IMC
      </button>

      <p style={{ marginTop: "15px", textAlign: "center", borderRadius: "8px" }}>{resultado}</p>
    </div>
  </div>
);

}

export default App;
