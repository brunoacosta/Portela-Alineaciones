# Information Folder

Esta carpeta contiene archivos de datos para facilitar la edición del contenido del sitio web sin necesidad de modificar el código de los componentes.

## Archivos Disponibles

### `servicesData.js`

Contiene la información de todos los servicios que se muestran en la página web.

#### Estructura de cada servicio:

```javascript
{
    id: 1,                              // ID único del servicio
    title: "Nombre del Servicio",      // Título corto
    description: "Descripción breve",   // Descripción para la tarjeta
    fullDescription: "Descripción completa...", // Descripción detallada para el modal
    image: "/images/services/imagen.jpg",      // Ruta a la imagen del servicio
    features: [                         // Lista de características incluidas
        "Característica 1",
        "Característica 2",
        // ...
    ],
    benefits: [                         // Lista de beneficios
        "Beneficio 1",
        "Beneficio 2",
        // ...
    ]
}
```

## Cómo Editar los Servicios

### Para agregar un nuevo servicio:

1. Abre el archivo `servicesData.js`
2. Copia un servicio existente como plantilla
3. Modifica los valores (id, title, description, etc.)
4. Sube la imagen correspondiente a `/public/images/services/`
5. Guarda el archivo

### Para modificar un servicio existente:

1. Abre el archivo `servicesData.js`
2. Busca el servicio por su título o id
3. Modifica los campos que necesites
4. Guarda el archivo

### Para eliminar un servicio:

1. Abre el archivo `servicesData.js`
2. Elimina todo el objeto del servicio (desde `{` hasta `}`, incluyendo la coma)
3. Guarda el archivo

## Campos Editables

### Campos de texto:
- **title**: Nombre del servicio (máximo recomendado: 40 caracteres)
- **description**: Descripción breve para la tarjeta (máximo recomendado: 120 caracteres)
- **fullDescription**: Descripción completa para el modal (sin límite, pero recomendado 2-3 párrafos)

### Listas (arrays):
- **features**: Lista de características o lo que incluye el servicio
  - Cada item debe estar entre comillas
  - Separar items con comas
  - Recomendado: 3-6 items

- **benefits**: Lista de beneficios del servicio
  - Cada item debe estar entre comillas
  - Separar items con comas
  - Recomendado: 3-5 items

### Imagen:
- **image**: Ruta relativa a la imagen
  - Formato: `"/images/services/nombre-imagen.jpg"`
  - La imagen debe existir en `/public/images/services/`
  - Formatos soportados: JPG, PNG, WebP

## Consejos

1. **Mantén el formato**: No elimines las comillas, comas o llaves
2. **IDs únicos**: Cada servicio debe tener un ID diferente (1, 2, 3, 4, etc.)
3. **Textos claros**: Usa lenguaje sencillo y directo
4. **Imágenes optimizadas**: Las imágenes deben ser profesionales y estar optimizadas para web
5. **Prueba los cambios**: Después de editar, revisa la página web para verificar que todo se vea correcto

## Ejemplos de Edición

### Cambiar el título de un servicio:

**Antes:**
```javascript
title: "Alineación 3D Computarizada",
```

**Después:**
```javascript
title: "Alineación Láser 3D",
```

### Agregar una nueva característica:

**Antes:**
```javascript
features: [
    "Diagnóstico computarizado",
    "Ajuste preciso"
],
```

**Después:**
```javascript
features: [
    "Diagnóstico computarizado",
    "Ajuste preciso",
    "Garantía extendida de 60 días"
],
```

## Notas Importantes

- Los cambios se verán reflejados automáticamente al recargar la página
- Si algo no funciona, verifica que no hayas eliminado comas o comillas por error
- Mantén siempre una copia de respaldo antes de hacer cambios grandes
- El orden de los servicios en el array es el orden en que aparecerán en la página web

