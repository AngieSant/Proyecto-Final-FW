# 👟 Piedi - Sistema de Gestión de Calzado

**Donde cada paso cuenta. Explora la comodidad con estilo.**

Piedi es un sistema web completo para la gestión de inventario de calzado que permite registrar, visualizar y filtrar productos de manera intuitiva y eficiente.

## 🚀 Características Principales

- **Registro de Productos**: Formulario completo con validaciones para agregar nuevos zapatos
- **Visualización Dinámica**: Vista en tarjetas con paginación para mejor navegación
- **Sistema de Filtros**: Búsqueda por nombre, categoría y precio máximo
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- **Persistencia de Datos**: Almacenamiento local usando localStorage
- **Validaciones Robustas**: Control de calidad en el registro de productos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con gradientes y animaciones
- **JavaScript (ES6+)**: Lógica de aplicación y manipulación del DOM
- **LocalStorage**: Persistencia de datos en el navegador
- **Flexbox/Grid**: Layout responsivo

## 📋 Estructura del Proyecto

```
piedi/
├── index.html              # Página principal con instrucciones
├── html/
│   ├── registro.html       # Formulario de registro de productos
│   └── productos.html      # Vista de productos con filtros
├── css/
│   ├── inicio.css         # Estilos de la página principal
│   ├── registro.css       # Estilos del formulario
│   └── view.css          # Estilos de la vista de productos
├── js/
│   └── script.js         # Lógica principal de la aplicación
└── img/
    ├── logo.png          # Logo de la aplicación
    └── img1.jpg - img10.jpg  # Imágenes de productos
```

## 🎯 Funcionalidades Detalladas

### Registro de Productos
- **Validación de Nombre**: Máximo 20 caracteres
- **Selección de Género**: Hombre, Mujer, Niño/a
- **Categorías Disponibles**: Deportivo, Casual, Elegante, Botas, Trabajo/Industriales
- **Código Único**: Mínimo 8 caracteres con al menos una mayúscula, una minúscula y dos números
- **Gestión de Imágenes**: Selección de 10 imágenes predefinidas
- **Validación de Precio**: Solo números, mostrado en formato de pesos

### Visualización de Productos
- **Vista en Tarjetas**: Diseño atractivo con información completa
- **Paginación**: 12 productos por página para mejor rendimiento
- **Vista de Tabla**: Alternativa para filtros aplicados
- **Información Completa**: Nombre, género, categoría, precio, código y talla

### Sistema de Filtros
- **Búsqueda por Nombre**: Filtro de texto en tiempo real
- **Filtro por Categoría**: Dropdown con todas las categorías disponibles
- **Filtro por Precio**: Precio máximo numérico
- **Limpieza de Filtros**: Botón para resetear todos los filtros

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para evitar restricciones CORS)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/piedi.git
   cd piedi
   ```

2. **Abrir en navegador**
   - Opción 1: Abrir `index.html` directamente

3. **Acceder a la aplicación**
   - Navegador directo: `file:///ruta/al/proyecto/index.html`

## 📱 Guía de Uso

### 1. Registro de Nuevo Producto

1. Desde la página principal, hacer clic en **"Registrar Zapato"**
2. Completar todos los campos del formulario:
   - **Nombre**: Hasta 20 caracteres
   - **Género**: Seleccionar del dropdown
   - **Categoría**: Elegir categoría apropiada
   - **Imagen**: Seleccionar imagen de muestra
   - **Código**: Mínimo 8 caracteres (1 mayúscula, 1 minúscula, 2 números)
   - **Precio**: Solo números
   - **Talla**: Seleccionar del dropdown
3. Hacer clic en **"Registrar"**
4. El sistema redirigirá automáticamente a la vista de productos

### 2. Visualización de Productos

1. Desde la página principal, hacer clic en **"Ver Productos"**
2. Navegar entre páginas usando los botones **"Anterior"** y **"Siguiente"**
3. Ver información detallada de cada producto en las tarjetas

### 3. Filtrado de Productos

1. En la vista de productos, usar los campos de filtro:
   - **Buscar por nombre**: Escribir texto parcial
   - **Filtrar por categoría**: Seleccionar del dropdown
   - **Precio máximo**: Ingresar valor numérico
2. Hacer clic en **"Filtrar"** para aplicar
3. Los resultados se mostrarán en formato tabla
4. Usar **"Limpiar"** para resetear filtros y volver a la vista de tarjetas

## 🎨 Ejemplo de Producto Válido

```javascript
{
  nombre: "Chanel Caballero",
  genero: "Hombre",
  categoria: "Elegante",
  imagen: "img1.jpg",
  codigo: "Chan1238",
  precio: 500000,
  talla: 40
}
```

## ⚠️ Validaciones Implementadas

- **Nombre**: No vacío, máximo 20 caracteres
- **Código**: Mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula, 2 números
- **Precio**: Solo números válidos
- **Campos requeridos**: Todos los campos deben estar completos

## 🔧 Personalización

### Agregar Nuevas Categorías
Editar en `registro.html` y `productos.html`:
```html
<option value="Nueva Categoria">Nueva Categoria</option>
```

### Modificar Imágenes Disponibles
1. Agregar imágenes a la carpeta `/img/`
2. Actualizar el dropdown en `registro.html`
3. Seguir la nomenclatura `imgX.jpg`

### Cambiar Productos por Página
En `script.js`, modificar:
```javascript
const productosPorPagina = 12; // Cambiar este valor
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

