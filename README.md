# Actividad Sistema de Inventario

## Estudiante
- **Nombre:** Elisnel Vásquez 
- **CI:** 25.302.915 
- **Materia:** Ingeniería de la Programación Backend 
- **Profesor:** Roberto Di Michelle

## Descripción
Este proyecto es un sistema de inventario desarrollado en Node.js con MySQL, utilizando EJS como motor de plantillas para la interfaz de usuario. El sistema permite gestionar productos del inventario y los empleados del negocio, además de un sistema de autenticación para proteger las rutas mediante roles (admin y editor) y autenticación con tokens JWT.

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
4. Configurar un archivo `.env` en la raíz del proyecto para definir variables de entorno (detalladas más adelante).
5. Ejecutar `node migrations/init.js` para realizar las migraciones iniciales en la base de datos.
6. Iniciar el servidor con `npm run dev`.

## Configuración de Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```plaintext
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=sistema_inventario
JWT_SECRET=secret_jwt
PORT=3000
```

## Funcionalidades

### Gestión de Inventario
- **Productos**: Crear, listar, editar y eliminar productos.
- **Trabajadores**: Crear, listar, editar y eliminar trabajadores.
- **Detalles**: Visualización de detalles individuales de productos y trabajadores.

### Autenticación y Autorización
- **Registro y Login**: Formulario de registro y login, con encriptación de contraseñas utilizando `bcryptjs`.
- **Roles de Usuario**: Se definen dos roles: **admin** (acceso completo al sistema) y **editor** (acceso limitado).
- **Token JWT**: Al iniciar sesión, se genera un token JWT para el usuario, el cual se almacena en la sesión y se usa para autenticar las solicitudes posteriores.
- **Rutas Protegidas**: Rutas privadas (dashboard, gestión de inventario y empleados) que requieren autenticación, y rutas públicas (login, registro).

## Tecnologías
- **Node.js**: Servidor y lógica de backend.
- **Express**: Framework de backend para manejo de rutas y controladores.
- **MySQL**: Base de datos para almacenar los datos de inventario y usuarios.
- **EJS**: Motor de plantillas para la interfaz de usuario.
- **bcryptjs**: Encriptación de contraseñas.
- **jsonwebtoken**: Generación y verificación de tokens JWT.
- **dotenv**: Gestión de variables de entorno.


## Migraciones de Base de Datos
El script `migrations/init.js` realiza las migraciones iniciales en la base de datos. Asegúrate de tener configurada la conexión MySQL en tu archivo `.env`. Para ejecutar el script de migraciones, usa el siguiente comando:

```bash
node migrations/init.js
```

## Instrucciones de Uso

1. **Inicio de Sesión**: Acceder a `http://localhost:3000/` para iniciar sesión.
2. **Gestión de Inventario**: Una vez autenticado como **admin** o **editor**, accede a las funciones de gestión de productos y empleados desde el dashboard.
3. **Roles y Permisos**:
   - **Admin**: Acceso completo a la administración del sistema.
   - **Editor**: Acceso limitado, sin permisos para eliminar o modificar usuarios.

## Explicación Técnica

### Autenticación con JWT
- En el inicio de sesión, se genera un token JWT que contiene la información del usuario y su rol. Este token se almacena en la sesión para autenticar las solicitudes posteriores.
- Las rutas protegidas verifican la validez del token y los permisos según el rol del usuario.

### Encriptación de Contraseñas
- Las contraseñas se encriptan utilizando `bcryptjs` al momento del registro. 
- Durante el login, la contraseña ingresada se compara con la encriptada en la base de datos para garantizar seguridad en la autenticación.

### Protección de Rutas
- Las rutas se dividen en **públicas** y **privadas**:
  - **Públicas**: Páginas de registro y login, accesibles sin autenticación.
  - **Privadas**: Dashboard y páginas de gestión de inventario, que requieren autenticación.
