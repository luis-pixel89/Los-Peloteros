# Los Peloteros — Taller Mundialista 🌍⚽

Proyecto colaborativo desarrollado con GitHub para el Mundial 2026.

---

## 📁 Estructura del Proyecto

```
Los_Peloteros/
│
├── index.html              ← Página principal (Paso 4)
├── miembros.txt            ← Lista del equipo (Paso 1)
├── README.md               ← Este archivo
│
├── Grupo_A/                ← Santiago Mosquera
│   ├── paginas/
│   │   ├── grupoA.html
│   │   ├── grupoA.css
│   │   └── grupoA.js
│   └── img/
│       └── banderaEcuador.png
│
├── Grupo_B/                ← María Fernández
├── Grupo_C/                ← Carlos Quispe
├── Grupo_D/                ← Ana Lucía Torres
├── Grupo_E/                ← Diego Salazar
└── Grupo_F/                ← Luisa Mendoza
```

---

## 🚀 Guía de Comandos Git (paso a paso)

### PASO 1 — Configuración inicial (solo una vez)

```bash
# Configura tu nombre e email en Git
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Clona el repositorio del equipo
git clone https://github.com/TU_USUARIO/Los_Peloteros.git
cd Los_Peloteros
```

### PASO 2 — Crear y cambiarse a la rama dev

```bash
# Ver en qué rama estás
git branch

# Crear la rama dev y cambiarte a ella
git checkout -b dev

# Si la rama dev ya existe en el repositorio remoto
git checkout dev
git pull origin dev
```

### PASO 3 — Flujo de trabajo diario

```bash
# ANTES de comenzar a trabajar: actualiza tu rama
git pull origin dev

# Trabaja en tus archivos...
# (edita grupoA.html, grupoA.css, grupoA.js)

# Agrega tus cambios al staging
git add .

# Crea un commit descriptivo
git commit -m "feat: agrega estadísticas del Grupo A"

# Sube tus cambios
git push origin dev
```

### Mensajes de commit recomendados

```
feat: nueva funcionalidad
fix: corrección de error
style: cambios de diseño
docs: actualización de documentación
```

---

## 👥 Equipo

| Nombre             | GitHub          | Grupo    | Rol    |
|--------------------|-----------------|----------|--------|
| Santiago Mosquera  | @zantycb89      | Grupo A  | Líder  |
| María Fernández    | @mfernandez22   | Grupo B  |        |
| Carlos Quispe      | @cquispe_dev    | Grupo C  |        |
| Ana Lucía Torres   | @aluciatorres   | Grupo D  |        |
| Diego Salazar      | @dsalazar_gh    | Grupo E  |        |
| Luisa Mendoza      | @lmendoza99     | Grupo F  |        |

---

## 🌐 Deploy en Vercel

1. Ingresa a [vercel.com](https://vercel.com) y conecta tu cuenta GitHub.
2. Importa el repositorio `Los_Peloteros`.
3. Deja la configuración por defecto (proyecto HTML estático).
4. Haz clic en **Deploy**.
5. Comparte el enlace generado en el grupo de WhatsApp.
