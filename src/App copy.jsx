import { useState, useEffect } from "react";

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


  const [ocupaciones, setOcupaciones] = useState(() => {
    const datos = localStorage.getItem("ocupaciones");
    return datos ? JSON.parse(datos) : {};
  });

  useEffect(() => {
    localStorage.setItem(
      "ocupaciones",
      JSON.stringify(ocupaciones)
    );
  }, [ocupaciones]);

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
  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🏨 Hotel Casa Martínez
      </h1>

      <h2 style={{ textAlign: "center" }}>
        Control de Habitaciones y Huéspedes
      </h2>

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
              borderRadius: "15px",
              padding: "20px",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src={hab.foto}
              alt={hab.nombre}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{hab.nombre}</h3>

            <p>
              {ocupaciones[hab.nombre]
                ? "🔴 Ocupada"
                : "🟢 Disponible"}
            </p>

            {ocupaciones[hab.nombre] && (
              <div>
                <strong>
                  {
                    ocupaciones[hab.nombre]
                      .nombreHuesped
                  }
                </strong>
                <br />
                🏢{" "}
                {
                  ocupaciones[hab.nombre]
                    .empresa
                }
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
          </h2><h2>
  Habitación: {habitacionSeleccionada.nombre}
</h2>

<p>PRUEBA</p>

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

<label>Fecha Entrada</label>

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

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => {
                setOcupaciones({
                  ...ocupaciones,
                  [habitacionSeleccionada.nombre]:
                    {
                      nombreHuesped,
                      telefono,
                      empresa,
                      fechaEntrada,
                      fechaSalida,
                    },
                });

                alert(
                  "Huésped guardado correctamente"
                );
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