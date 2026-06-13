// =============================================
//  grupoA.js — Datos del Grupo A · Mundial 2026
// =============================================

// 1. DATOS ESTÁTICOS DE LOS EQUIPOS
const equipos = [
  {
    nombre: "Ecuador",
    bandera: "🇪🇨",
    confederacion: "CONMEBOL",
    rankingFIFA: 44,
    mundiales: 4,
    color: "#FFDD00"
  },
  {
    nombre: "Qatar",
    bandera: "🇶🇦",
    confederacion: "AFC",
    rankingFIFA: 48,
    mundiales: 2,
    color: "#8B1A4A"
  },
  {
    nombre: "Senegal",
    bandera: "🇸🇳",
    confederacion: "CAF",
    rankingFIFA: 18,
    mundiales: 3,
    color: "#00853F"
  },
  {
    nombre: "Países Bajos",
    bandera: "🇳🇱",
    confederacion: "UEFA",
    rankingFIFA: 7,
    mundiales: 11,
    color: "#FF6600"
  }
];

// 2. RENDERIZAR LAS TARJETAS DE EQUIPOS
function renderEquipos() {
  const container = document.getElementById("equipos");

  equipos.forEach(equipo => {
    const card = document.createElement("div");
    card.className = "equipo-card";

    // Barra de color del equipo (acento visual)
    card.style.borderTop = `3px solid ${equipo.color}`;

    card.innerHTML = `
      <div class="equipo-flag">${equipo.bandera}</div>
      <p class="equipo-nombre">${equipo.nombre}</p>
      <p class="equipo-conf">${equipo.confederacion}</p>
      <span class="equipo-ranking">FIFA #${equipo.rankingFIFA}</span>
      <p style="font-size:12px; color:#666; margin-top:4px;">
        ${equipo.mundiales} Mundial${equipo.mundiales > 1 ? "es" : ""}
      </p>
    `;

    container.appendChild(card);
  });
}

// 3. EJECUTAR AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", renderEquipos);
