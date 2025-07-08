<div align="center">
  <img src="https://github.com/user-attachments/assets/a217a45d-d3ef-43ba-9e7e-a3dfeaa5b3bb">
  <h1>Crypto Vue</h1>
  <p>Una aplicación moderna para cotizar criptomonedas en tiempo real.</p>

  <p>
    <a href="https://www.notion.so/Criptomonedas-2145592c6f7e8009a454f1be79910392?source=copy_link" target="_blank">
      <img src="https://img.shields.io/badge/Documentación_en_Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Documentation">
    </a>
    </p>
</div>

---

## 🌟 Acerca del Proyecto

**Crypto Vue** es una aplicación dinámica y fácil de usar diseñada para **monitorizar y cotizar criptomonedas en tiempo real**. Utilizando la potente API de **CryptoCompare**, este proyecto ofrece una visión instantánea de los precios y la información relevante de tus activos digitales favoritos.

Este proyecto ha sido desarrollado con un enfoque en:
* El consumo y manejo eficiente de **APIs externas** en aplicaciones **Vue.js**.
* La presentación clara y reactiva de datos en tiempo real.
* La exploración de las capacidades de Vue para interactuar con servicios de terceros.

---

## 🚀 Características Principales

* **Cotizaciones en Tiempo Real:** Obtén los precios más actualizados de diversas criptomonedas.
* **Integración con CryptoCompare API:** Uso robusto de una API líder en el mercado de criptomonedas.
* **Interfaz de Usuario Intuitiva:** Desarrollada con Vue.js para una experiencia de usuario fluida y reactiva.
* **Diseño Responsivo:** Disfruta de la aplicación en diferentes dispositivos. (Si aplica, si no, puedes quitarlo).

---

## 🛠️ Tecnologías Utilizadas

* **Vue.js:** Framework progresivo para la construcción de interfaces de usuario.
* **JavaScript (ES6+):** Lenguaje de programación principal.
* **HTML5 & CSS3:** Para la estructura y el estilo visual.
* **CryptoCompare API:** Fuente de datos para las cotizaciones de criptomonedas.
* **Node.js & npm:** Entorno de ejecución y gestor de paquetes.

---

## ⚙️ Configuración y Ejecución Local

Sigue estos pasos para poner en marcha Crypto Vue en tu máquina local:

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

* **Node.js** (versión recomendada: 14.x o superior)
* **npm** (viene incluido con Node.js)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/crypto-vue.git](https://github.com/tu-usuario/crypto-vue.git)
    cd crypto-vue
    ```
    (Asegúrate de reemplazar `tu-usuario/crypto-vue.git` por la URL real de tu repositorio)

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

### Configuración de la API (¡Importante!)

* Para obtener datos de CryptoCompare, necesitarás una **clave de API**. Regístrate en [CryptoCompare](https://min-api.cryptocompare.com/) para obtener una.
* Una vez que tengas tu clave, crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de la siguiente manera:
    ```
    VUE_APP_CRYPTOCOMPARE_API_KEY=tu_clave_api_aqui
    ```
    (Asegúrate de que tu aplicación Vue esté configurada para leer variables de entorno con `VUE_APP_` o el prefijo que uses)

### Ejecución

1.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run serve
    ```
2.  La aplicación estará disponible en tu navegador en `http://localhost:8080` (o el puerto que se indique en la consola).

### Compilación para Producción

Para generar una versión optimizada de la aplicación para producción:

```bash
npm run build
