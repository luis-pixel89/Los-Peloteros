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

## ⚠️ Resolución de Conflictos de Merge

Cuando dos personas editan el **mismo archivo** (ej. `index.html` o `integrantes.html`), Git puede mostrar algo así:

```html
<<<<<<< HEAD
<div class="integrante-card">
  <p>María Fernández</p>
</div>
=======
<div class="integrante-card">
  <p>Carlos Quispe</p>
</div>
>>>>>>> origin/dev
```

### Cómo resolverlo:

1. Abre el archivo en conflicto — verás las marcas `<<<<<<<`, `=======`, `>>>>>>>`.
2. Decide qué contenido conservar. En `integrantes.html`, normalmente **se conservan ambos bloques** (cada uno es la tarjeta de una persona distinta).
3. Borra las líneas `<<<<<<<`, `=======`, `>>>>>>>` manualmente.
4. Guarda el archivo.
5. Marca el conflicto como resuelto:
   ```bash
   git add integrantes.html
   git commit -m "fix: resuelve conflicto de merge en integrantes.html"
   git push origin dev
   ```

### Para minimizar conflictos:

- En `integrantes.html`, cada persona edita **solo su bloque**, delimitado por comentarios `<!-- INTEGRANTE: Nombre -->` ... `<!-- FIN INTEGRANTE: Nombre -->`.
- Haz `git pull` con frecuencia, antes de empezar a trabajar.
- Haz commits pequeños y frecuentes, no un solo commit gigante al final.

---

1. Ingresa a [vercel.com](https://vercel.com) y conecta tu cuenta GitHub.
2. Importa el repositorio `Los_Peloteros`.
3. Deja la configuración por defecto (proyecto HTML estático).
4. Haz clic en **Deploy**.
5. Comparte el enlace generado en el grupo de WhatsApp.
