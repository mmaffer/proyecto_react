# Proyecto: Navegador de API con React (Ejemplo: Rick & Morty)

Este proyecto es una aplicación web de 3 páginas desarrollada con React como parte de una tarea. La aplicación consume la [API pública de Rick and Morty](https://rickandmortyapi.com/) para mostrar, filtrar y paginar personajes.

## 🚀 Deploy en Vivo

**https://proyectorickymortyreact.netlify.app/**

---

## 📸 Capturas de Pantalla

| HomePage | Página de Listado (con filtros) | Formulario de Contacto |
| :---: | :---: | :---: |
| [Imagen de la Homepage] | [Imagen de la Página de Listado] | [Imagen del Formulario de Contacto] |
| *Vista principal con sección hero y personajes destacados.* | *Grid responsivo con filtros, búsqueda y paginación.* | *Formulario con validación en tiempo real.* |

---

## 🛠️ Tecnologías Utilizadas

* **React (v18+)** (con Hooks: `useState`, `useEffect`, `useContext`, `useMemo`)
* **React Router DOM (v6)**: Para la navegación y el enrutamiento del lado del cliente.
* **Axios**: Para realizar peticiones HTTP a la API.
* **Bootstrap 5**: Para un diseño responsivo y componentes de UI (puedes sustituirlo por Tailwind CSS).
* **React Hook Form**: Para la gestión y validación avanzada del formulario de contacto.

---

## 📋 API Utilizada

Se utilizó **The Rick and Morty API**. Es una API RESTful gratuita que proporciona datos sobre personajes, ubicaciones y episodios del programa.

* **Endpoint Principal**: `https://rickandmortyapi.com/api`
* **Recurso Utilizado**: `/character` (para listar, filtrar y paginar personajes).

---

## ⚙️ Instrucciones de Instalación y Ejecución

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd tu-repositorio
    ```

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade la URL base de la API (aunque esta API es pública, es una buena práctica).

    ```.env
    VITE_API_BASE_URL=[https://rickandmortyapi.com/api](https://rickandmortyapi.com/api)
    ```

5.  **Ejecutar la aplicación:**
    ```bash
    npm run dev
    ```

6.  Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique la consola) en tu navegador.

---

## ✨ Características Principales

### 1. Funcionalidad General
* **Routing Limpio**: Navegación fluida entre las 3 páginas (`/`, `/lista`, `/contacto`) y una página `404` personalizada.
* **Navbar Persistente**: Incluye enlaces de navegación que resaltan la ruta activa.
* **Arquitectura Modular**: El código está organizado en `pages`, `components`, `services` y `hooks` para mantenibilidad.
* **Fetching de Datos**: Se utiliza Axios con una instancia base e interceptores de errores globales.
* **Manejo de Estados**: Se gestionan los estados de `loading`, `error` y `data` en todas las peticiones, mostrando spinners o mensajes de error claros.

### 2. Homepage (`/`)
* **Hero Section**: Banner principal con el título y la descripción del proyecto.
* **Sección de Destacados**: Muestra 8 personajes "populares" (obtenidos de la API) en formato de tarjeta.
* **Navegación**: Un botón "Ver todos" que dirige al usuario a la página de listado.

### 3. Listado de Entidades (`/lista`)
* **Filtros y Búsqueda**:
    * Búsqueda por nombre de personaje.
    * Filtro por categoría (ej. "Status": *Alive, Dead, Unknown*).
    * Los filtros y la búsqueda actualizan la URL con **query params** para persistir el estado.
* **Grid Responsivo**: Los personajes se muestran en una cuadrícula que se adapta a dispositivos móviles, tablets y escritorio.
* **Paginación Completa (Servidor)**:
    * Botones "Previous" y "Next" (deshabilitados cuando corresponde).
    * Indicador "Página X de Y".
    * Selector para cambiar la cantidad de ítems por página (ej. 20, 50).

### 4. Contacto (`/contacto`)
* **Formulario Controlado**: Implementado con **React Hook Form**.
* **Validación en Tiempo Real**:
    * Nombre (requerido, mín 3 caracteres).
    * Email (requerido, formato válido).
    * Asunto (requerido).
    * Mensaje (requerido, mín 10 caracteres).
* **Feedback al Usuario**: Mensajes de error claros bajo cada campo y una alerta de "Éxito" o "Error" al intentar enviar el formulario. El formulario se limpia tras un envío exitoso.

---


