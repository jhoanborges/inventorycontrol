# Inventory Control

Aplicación web para el control de inventario, construida con **Next.js (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

## Stack

| Área              | Herramienta                                   |
| ----------------- | --------------------------------------------- |
| Framework         | [Next.js 16](https://nextjs.org) (App Router) |
| UI                | React 19 + Tailwind CSS 4                     |
| Lenguaje          | TypeScript 5                                  |
| Lint / formato    | [Biome](https://biomejs.dev)                  |
| Gestor de paquetes| Yarn 4 (Berry) vía Corepack                   |
| Deploy            | [Vercel](https://vercel.com)                  |

## Requisitos

- **Node.js** 20 o superior (recomendado: la versión LTS actual)
- **Corepack** activado (viene incluido con Node):

  ```bash
  corepack enable
  ```

  Corepack lee el campo `packageManager` de `package.json` y usa automáticamente la versión exacta de Yarn del proyecto (`yarn@4.18.1`). No hace falta instalar Yarn de forma global.

## Primeros pasos

```bash
# 1. Instalar dependencias
yarn install

# 2. Levantar el servidor de desarrollo
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000). La página se recarga al editar archivos dentro de `app/`.

## Scripts

| Comando       | Descripción                                        |
| ------------- | -------------------------------------------------- |
| `yarn dev`    | Servidor de desarrollo con recarga en caliente     |
| `yarn build`  | Build de producción                                |
| `yarn start`  | Sirve el build de producción (requiere `build`)    |
| `yarn lint`   | Revisa lint y formato con Biome                    |
| `yarn format` | Formatea el código con Biome                       |

## Estructura del proyecto

```
.
├── app/              # Rutas, layouts y estilos globales (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/           # Archivos estáticos servidos desde la raíz
├── desing/           # Referencias de diseño (mockups)
├── biome.json        # Configuración de Biome
├── next.config.ts    # Configuración de Next.js
├── vercel.json       # Configuración de despliegue en Vercel
└── .yarnrc.yml       # Configuración de Yarn (nodeLinker: node-modules)
```

## Configuración de Yarn

El proyecto usa Yarn 4 con `nodeLinker: node-modules` (ver `.yarnrc.yml`), así que las dependencias se instalan en `node_modules` como con npm, sin Plug'n'Play. Esto mantiene la compatibilidad con Next.js y el tooling del editor sin configuración extra.

Siempre commitea `yarn.lock` junto con cualquier cambio en `package.json`.

## Deploy en Vercel

El archivo `vercel.json` ya deja a Vercel configurado para usar Yarn 4:

- `installCommand`: `corepack enable && yarn install --immutable`. Activa Corepack para respetar la versión de `packageManager` y falla si `yarn.lock` no está sincronizado.
- `buildCommand`: `yarn build`

Pasos:

1. Importa el repositorio en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Next.js y usa `vercel.json`, así que no hay que cambiar nada en la configuración del proyecto.
3. Haz push a `main` para desplegar a producción; cada PR genera un preview deploy.

> Si el build falla con un error de versión de Yarn, agrega la variable de entorno `ENABLE_EXPERIMENTAL_COREPACK=1` en **Project Settings → Environment Variables** y vuelve a desplegar.

## Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Yarn 4](https://yarnpkg.com)
- [Biome](https://biomejs.dev/guides/getting-started/)
- [Vercel: gestores de paquetes](https://vercel.com/docs/package-managers)
