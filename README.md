# Rick & Morty Explorer

Aplicación web construida con React que consume la API pública de **Rick and Morty** para explorar personajes del multiverso. Incluye un listado filtrable, paginación con distintos tamaños de página, página de inicio con destacados y un formulario de contacto con validación en tiempo real.

## Contenido
- [Características](#características)
- [Tecnologías](#tecnologías)
- [API Utilizada](#api-utilizada)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Consideraciones](#consideraciones)

## Características
- **Routing completo:** Home, Listado, Contacto y página 404 usando React Router DOM.
- **Integración con API pública:** Axios con interceptores para manejo global de errores.
- **Listado avanzado:** Filtros por nombre, estado y especie con persistencia en la URL.
- **Paginación versátil:** Botones Previous/Next, navegación directa y selector de 10/20/50 elementos por página.
- **Estados de UI robustos:** Indicadores de carga, mensajes de error amigables, feedback visual y diseño responsive con Bootstrap.
- **Formulario accesible:** Validación en tiempo real, mensajes de éxito/error y reseteo tras envío.

## Tecnologías
- React 18 con Hooks
- Vite 5
- React Router DOM 6
- Axios
- Bootstrap 5
- ESLint

## API Utilizada
- [The Rick and Morty API](https://rickandmortyapi.com/) – endpoint principal `https://rickandmortyapi.com/api/character`.

## Requisitos Previos
- Node.js >= 18
- npm >= 9

## Instalación
1. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre <http://localhost:5173> en tu navegador preferido.

## Scripts Disponibles
- `npm run dev`: Ejecuta la aplicación en modo desarrollo.
- `npm run build`: Genera los archivos para producción.
- `npm run preview`: Previsualiza la build de producción.
- `npm run lint`: Ejecuta las reglas de ESLint.

## Estructura de Carpetas
```
src/
├── components/
│   ├── common/
│   ├── contact/
│   ├── home/
│   └── list/
├── hooks/
├── pages/
├── services/
├── App.jsx
└── main.jsx
```

## Capturas de Pantalla
> Añade tus capturas en una carpeta `screenshots/` y actualiza las rutas si fuera necesario.

- ![Home](screenshots/home.png)
- ![Listado](screenshots/list.png)
- ![Contacto](screenshots/contact.png)

## Consideraciones
- La paginación combina la paginación nativa de la API con un selector de tamaño de página para mejorar la experiencia de usuario.
- Los filtros se sincronizan con la URL, permitiendo compartir enlaces con criterios aplicados.
- Bootstrap se carga vía CDN; si prefieres Tailwind o estilos locales puedes adaptarlo fácilmente.
