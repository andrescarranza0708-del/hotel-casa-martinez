import { useState, useEffect } from "react";
import logo from "./imagenes/logo.png.png";
import recepcion from "./imagenes/recepcion.jpg";
import diamante from "./imagenes/diamante.jpg";
import zafiro from "./imagenes/zafiro.jpg";
import esmeralda from "./imagenes/esmeralda.jpg";
import aguamarina from "./imagenes/aguamarina.jpg";
import rubi from "./imagenes/rubi.jpg";
import amatista from "./imagenes/amatista.jpg";
import cuarzo from "./imagenes/cuarzo.jpg";
import onix from "./imagenes/onix.jpg";
import topacio from "./imagenes/topacio.jpg";
import turquesa from "./imagenes/turquesa.jpg";

function App() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

  const [nombreHuesped, setNombreHuesped] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [cantidadHuespedes, setCantidadHuespedes] = useState("");
  const [precio, setPrecio] = useState(0);
  const [precioManual, setPrecioManual] = useState("");


  const [ocupaciones, setOcupaciones] = useState(() => {
    const datos = localStorage.getItem("ocupaciones");
    return datos ? JSON.parse(datos) : {};
  });

  useEffect(() => {

  const cargarHabitaciones = async () => {

    try {

      const respuesta = await fetch(
        "https://script.google.com/macros/s/AKfycbzIvIRXM7G21AXgcgOoQ_30OmES5OThuG2hBu2UvWqNokyfPO-_dANDz7LjHdGGAy5KPw/exec"
      );

      const datos = await respuesta.json();

      console.log(datos);

    } catch (error) {

      console.log(error);

    }

  };

  cargarHabitaciones();

}, []);

  const habitaciones = [
    { nombre: "Diamante", foto: diamante },
    { nombre: "Zafiro", foto: zafiro },
    { nombre: "Esmeralda", foto: esmeralda },
    { nombre: "Aguamarina", foto: aguamarina },
    { nombre: "Rubí", foto: rubi },
    { nombre: "Amatista", foto: amatista },
    { nombre: "Cuarzo", foto: cuarzo },
    { nombre: "Ónix", foto: onix },
    { nombre: "Topacio", foto: topacio },
    { nombre: "Turquesa", foto: turquesa },
  ];

const disponibles =
  habitaciones.length -
  Object.keys(ocupaciones).length;

const ocupadas =
  Object.keys(ocupaciones).length;
  useEffect(() => {
  if (!habitacionSeleccionada) return;

  let nuevoPrecio = 0;
  const cantidad = Number(cantidadHuespedes);
if (habitacionSeleccionada.nombre === "Rubí") {
  if (cantidad < 3) {
    nuevoPrecio = 0;
  } else if (cantidad === 3) {
    nuevoPrecio = 150000;
  } else if (cantidad === 4) {
    nuevoPrecio = 200000;
  } else if (cantidad >= 5) {
    nuevoPrecio = 250000;
  }
} else {
  if (cantidad === 1) {
    nuevoPrecio = 80000;
  } else if (cantidad === 2) {
    nuevoPrecio = 95000;
  } else if (cantidad === 3) {
    nuevoPrecio = 120000;
  }
}
  setPrecio(nuevoPrecio);
}, [cantidadHuespedes, habitacionSeleccionada]);
  return (
    <div
      style={{
        padding: "30px",
        background: "#f8f3ed",
        minHeight: "100vh",
      }}
    >
      <div
  style={{
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: "30px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  }}
>
  <img
    src={recepcion}
    alt="Recepción Hotel Casa Martínez"
    style={{
      width: "100%",
      height: "350px",
      objectFit: "cover",
    }}
  />

  <div
    style={{
      padding: "25px",
      textAlign: "center",
    }}
  >
    <img
      src={logo}
      alt="Logo Hotel Casa Martínez"
      style={{
        width: "120px",
        marginBottom: "15px",
      }}
    />

    <h1
      style={{
        color: "#8B1E3F",
        margin: "0",
      }}
    >
      Hotel Casa Martínez
    </h1>

    <h3
      style={{
        color: "#666",
        fontWeight: "normal",
      }}
    >
      Sistema de Control de Habitaciones
    </h3>

    <p
      style={{
        color: "#777",
      }}
    >
      Puerto Berrío - Antioquia
    </p>
  </div>
</div>

      <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "25px",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      background: "white",
      padding: "15px",
      borderRadius: "10px",
    }}
  >
    🟢 Disponibles: {disponibles}
  </div>

  <div
    style={{
      background: "white",
      padding: "15px",
      borderRadius: "10px",
    }}
  >
    🔴 Ocupadas: {ocupadas}
  </div>
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {habitaciones.map((hab) => (
          <div
            key={hab.nombre}
            onClick={() => {
              setHabitacionSeleccionada(hab);

              const datos =
                ocupaciones[hab.nombre];

              if (datos) {
                setNombreHuesped(
                  datos.nombreHuesped
                );
                setTelefono(datos.telefono);
                setEmpresa(datos.empresa);
                setFechaEntrada(
                  datos.fechaEntrada
                );
                setFechaSalida(
                  datos.fechaSalida
                );
              } else {
                setNombreHuesped("");
                setTelefono("");
                setEmpresa("");
                setFechaEntrada("");
                setFechaSalida("");
              }
            }}
           style={{
  background: "white",
  borderRadius: "20px",
  padding: "20px",
  border: "3px solid #8B1E3F",
  boxShadow:
    "0 8px 20px rgba(0,0,0,0.15)",
  cursor: "pointer",
  transition: "0.3s",
}}
          >
            <img
              src={hab.foto}
              alt={hab.nombre}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

           <h3
  style={{
    color: "#8B1E3F",
    textAlign: "center",
    fontSize: "24px",
  }}
>
  {hab.nombre}
</h3>

            <p>
              {ocupaciones[hab.nombre]
                ? "🔴 Ocupada"
                : "🟢 Disponible"}
            </p>

           {ocupaciones[hab.nombre] && (
  <div>
    <strong>
      {ocupaciones[hab.nombre].nombreHuesped}
    </strong>

    <br />

    👥 {ocupaciones[hab.nombre].cantidadHuespedes}

    <br />

    💰 $
    {Number(
      ocupaciones[hab.nombre].precioFinal || 0
    ).toLocaleString()}

    <br />

    🏢 {ocupaciones[hab.nombre].empresa}
  </div>
)}

          </div>
        ))}
      </div>

      {habitacionSeleccionada && (
        <div
          style={{
            marginTop: "40px",
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>
            Habitación:{" "}
            {habitacionSeleccionada.nombre}
          </h2>

          <input
            type="text"
            placeholder="Nombre huésped"
            value={nombreHuesped}
            onChange={(e) =>
              setNombreHuesped(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) =>
              setTelefono(e.target.value)
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
  type="text"
  placeholder="Empresa"
  value={empresa}
  onChange={(e) =>
    setEmpresa(e.target.value)
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  }}
/>

<input
  type="number"
  placeholder="Cantidad de huéspedes"
  value={cantidadHuespedes}
  onChange={(e) =>
    setCantidadHuespedes(e.target.value)
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  }}
/>
<input
  type="number"
  placeholder="Precio manual (opcional)"
  value={precioManual}
  onChange={(e) =>
    setPrecioManual(e.target.value)
  }
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  }}
/>

<label>Fecha Entrada</label>

          <input
            type="date"
            value={fechaEntrada}
            onChange={(e) =>
              setFechaEntrada(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <label>Fecha Salida</label>

          <input
            type="date"
            value={fechaSalida}
            onChange={(e) =>
              setFechaSalida(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
            }}
          />
          <h3
  style={{
    color: "green",
    marginBottom: "20px",
  }}
>
  {habitacionSeleccionada.nombre === "Rubí" &&
Number(cantidadHuespedes) < 3
  ? "⚠️ Rubí solo se alquila para 3 o más huéspedes"
  : `Precio: $${Number(precioManual || precio).toLocaleString()}`}
</h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={async () => {

  const datos = {
    habitacion: habitacionSeleccionada.nombre,
    nombre: nombreHuesped,
    telefono,
    empresa,
    cantidadHuespedes,
    precio: Number(precioManual || precio),
    fechaEntrada,
    fechaSalida,
  };

  setOcupaciones({
    ...ocupaciones,
    [habitacionSeleccionada.nombre]: {
      nombreHuesped,
      telefono,
      empresa,
      cantidadHuespedes,
      precioFinal: Number(precioManual || precio),
      fechaEntrada,
      fechaSalida,
    },
  });

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzIvIRXM7G21AXgcgOoQ_30OmES5OThuG2hBu2UvWqNokyfPO-_dANDz7LjHdGGAy5KPw/exec",
      {
        method: "POST",
        body: JSON.stringify(datos),
      }
    );

    alert("Huésped guardado correctamente");

  } catch (error) {

    alert(
      "Se guardó localmente pero falló Google Sheets"
    );

    console.log(error);
  }
}}
              style={{
                background: "#8B1E3F",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              💾 Guardar
            </button>

            <button
              onClick={() => {
                const nuevas =
                  { ...ocupaciones };

                delete nuevas[
                  habitacionSeleccionada
                    .nombre
                ];

                setOcupaciones(nuevas);

                setNombreHuesped("");
                setTelefono("");
                setEmpresa("");
                setFechaEntrada("");
                setFechaSalida("");

                alert(
                  "Habitación liberada"
                );
              }}
              style={{
                background: "#c0392b",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              🚪 Check-Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
