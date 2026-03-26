#  Shop Template - Página de Producto Estática

[![Static Badge](https://img.shields.io/badge/Estado-Plantilla-blue)](https://github.com/your-repo/shop-template)
[![Static Badge](https://img.shields.io/badge/Lenguaje-HTML%2FCSS%2FJS-green)](https://developer.mozilla.org/)

##  Descripción

Este repositorio contiene una **plantilla estática** para una página de producto de una tienda en línea. Es una práctica de maquetación web inspirada en diseños modernos de e-commerce. **No es un proyecto listo para producción**, sino una base para aprender y experimentar con HTML, CSS y JavaScript.

El proyecto incluye una página responsiva con:
- Información del producto
- Galería de imágenes
- Productos relacionados
- Navegación básica

##  Características

-  **Diseño Responsivo**: Funciona en dispositivos móviles, tablets y desktop
-  **Galería de Imágenes**: Soporte para imagen principal y productos relacionados
-  **Interfaz Moderna**: Inspirada en tiendas en línea populares
-  **Ligero**: Sin dependencias externas, solo HTML/CSS/JS puro
-  **Accesible**: Estructura semántica y navegación por teclado

##  Instalación y Uso

### Requisitos Previos
- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- (Opcional) Un servidor local para evitar restricciones CORS

### Pasos para Usar

1. **Clona o descarga** este repositorio:
   `ash
   git clone https://github.com/your-username/shop-template.git
   cd shop-template
   `

2. **Añade tus imágenes**:
   - Coloca la imagen principal en images/main-product.jpg (recomendado: ~1200x1200px)
   - Añade imágenes de productos relacionados: images/related-1.jpg a images/related-6.jpg (recomendado: 800x600px)

3. **Abre la página**:
   - Abre index.html directamente en tu navegador
   - O usa un servidor local:
     `ash
     # Con Python
     python -m http.server 8000
     # Luego visita http://localhost:8000
     `

##  Estructura del Proyecto

`
shop-template/
 index.html          # Página principal del producto
 styles.css          # Estilos CSS responsivos
 script.js           # JavaScript para interactividad
 README.md           # Este archivo
 images/
     main-product.jpg    # Imagen principal del producto
     related-1.jpg       # Producto relacionado 1
     related-2.jpg       # Producto relacionado 2
     ...                 # Hasta related-6.jpg
`

##  Personalización

- **Colores**: Modifica las variables CSS en styles.css
- **Contenido**: Edita el HTML en index.html
- **Funcionalidad**: Añade más JS en script.js
- **Imágenes**: Reemplaza los archivos en la carpeta images/

##  Notas Importantes

- Este es un proyecto de **aprendizaje/práctica**, no para uso en producción
- Las imágenes deben tener los nombres exactos especificados
- Para un sitio real, considera añadir backend, base de datos y seguridad

##  Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o tienes mejoras:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
3. Commit tus cambios (git commit -m 'Add some AmazingFeature')
4. Push a la rama (git push origin feature/AmazingFeature)
5. Abre un Pull Request

##  Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

 Si te gusta este proyecto, ¡dale una estrella en GitHub!
