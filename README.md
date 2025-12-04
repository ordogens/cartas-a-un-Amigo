# Cartas a un amigo

Aplicación web que presenta una correspondencia filosófica entre dos
autores: **Ordogen** y **Jean Pierre**, mediante un diseño
visual inspirado en manuscritos antiguos, pergaminos y ambientes
clásicos de estudio.

------------------------------------------------------------------------

## 📘 ¿Qué es este proyecto?

**Cartas a un amigo** es una interfaz interactiva donde el usuario
puede navegar entre diferentes cartas filosóficas y ver las respuestas
correspondientes.\
Está diseñado para ofrecer una experiencia inmersiva, evocando el
intercambio epistolar clásico dentro de un entorno visualmente
atractivo.

------------------------------------------------------------------------

## 🎯 Objetivo del proyecto

El propósito de este proyecto es:

-   Presentar textos filosóficos de forma elegante y narrativa.
-   Simular una correspondencia antigua entre dos pensadores.
-   Usar componentes modernos (acordeones interactivos) con un diseño
    temático.
-   Crear una experiencia visual estética sin perder funcionalidad.

------------------------------------------------------------------------

## 🛠️ Tecnologías utilizadas

Este proyecto fue construido usando:

-   **React**\
-   **Vite**\
-   **TypeScript (TSX)**\
-   **Tailwind CSS**

Se seleccionaron estas tecnologías por su rapidez, rendimiento,
modularidad y la facilidad que ofrecen para crear interfaces modernas y
estilizadas en entornos web.

------------------------------------------------------------------------

## 📂 Estructura general del proyecto

    src/
     ├── components/
     │    ├── Accordion.tsx
     │    ├── cuerpo.css
     │    ├── Cuerpo.tsx
     │    ├── header.css
     │    └── Header.tsx
     ├── data/
     │    ├── jean.ts
     │    └── ordogen.ts
     ├── assets/
     ├── app.css
     ├── App.tsx
     ├── main.tsx
     └── index.css

------------------------------------------------------------------------

## 🚀 Cómo ejecutar el proyecto

Sigue estos pasos:

### 1️⃣ Clonar el repositorio

``` bash
git clone https://github.com/ordogens/cartas-a-un-Amigo.git
cd cartas-a-un-Amigo
```

### 2️⃣ Instalar dependencias

``` bash
pnpm install
# o
npm install
# o
yarn install
```

### 3️⃣ Iniciar el servidor de desarrollo

``` bash
pnpm dev
# o
npm run dev
# o
yarn dev
```

### 4️⃣ Abrir en el navegador

Generalmente Vite corre en:

    http://localhost:5173

------------------------------------------------------------------------

## 🖼️ Diseño y estilo

El diseño está basado en:

-   Texturas de pergamino y papel antiguo.
-   Tarjetas en tonos aterciopelados.
-   Fuentes serif que evocan manuscritos clásicos.
-   Efectos de acordeón en ambas columnas para imitar el flujo
    epistolar.

Tailwind CSS permitió desarrollar un estilo altamente personalizado sin
necesidad de escribir CSS manual excesivo.

------------------------------------------------------------------------

## 📄 Licencia

Este proyecto es de uso personal y educativo.\
Puede extenderse, modificarse y adaptarse libremente según tus
necesidades.

------------------------------------------------------------------------

## ✨ Autor

Proyecto realizado por **Ordogen Arcila García**.
