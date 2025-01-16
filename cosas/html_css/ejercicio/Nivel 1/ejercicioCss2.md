## Instrucciones

1. **Crea un archivo `styles.css`** y vincúlalo a tu archivo HTML utilizando la etiqueta `<link>` en la sección `<head>`.

2. Aplica las siguientes reglas de CSS:

### 1. Selector de Clase para Contenedor con Padding  
   - Crea una clase que modifique el `padding-top` del contenedor a `20px` y el `padding-left` a `40px`.

### 2. Selector de Clase para Contenedor con Margin  
   - Crea una clase que establezca el `margin-top` y `margin-bottom` en `40px`, y `margin-left` y `margin-right` en `20px`.

### 3. Selector de Clase para Borde del Contenedor  
   - Crea una clase que aplique un borde de `3px`, sólido y de color negro (`#000`).

### 4. Selector Global para Reset Básico  
   - Aplica un selector global (`*`) para eliminar los márgenes y el padding predeterminados de todos los elementos (`margin: 0; padding: 0`).

### 5. Selector de Clase para Tamaño de Contenedor  
   - Crea una clase que establezca el ancho del contenedor al `50%` del ancho del viewport (`vw`) y una altura máxima de `400px`.

### 6. Selector de Clase con `font-family` y Unidades Relativas  
   - Crea una clase que modifique la fuente a `Arial, sans-serif`, el tamaño de fuente a `1.2em` y el color del texto a `#333`.

### 7. Selector de Clase para `position`  
   - Crea clases para los siguientes tipos de posición:  
     - **Static**: Coloca un elemento con posición estática.  
     - **Relative**: Coloca un elemento con posición relativa y desplázalo `10px` hacia abajo.  
     - **Absolute**: Posiciona un elemento con `top: 0` y `left: 0`.  
     - **Fixed**: Fija un elemento en la parte superior derecha de la ventana (`top: 0; right: 0`).  
     - **Sticky**: Crea un elemento que se mantenga fijo al hacer scroll cuando alcanza la parte superior de la pantalla.

### 8. Selector Global para el Body  
   - Aplica una imagen de fondo al `body`, que no se repita y esté centrada con `background-size: cover`.

## Objetivo

Practicar la aplicación de selectores globales, de clase e ID, y trabajar con propiedades avanzadas de CSS como `padding`, `margin`, `border`, `position`, `font-family`, y medidas como `%`, `em`, `rem`, `vw`, y `vh`.