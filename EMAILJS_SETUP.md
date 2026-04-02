# Configuración de EmailJS

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Crear un servicio de email
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el Service ID** (lo necesitarás después)

### 3. Crear una plantilla de email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura la plantilla con estos campos:
   - **To Email**: Tu dirección de email
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `{{subject}}`
   - **Content**: 
     ```
     Nombre: {{from_name}}
     Email: {{from_email}}
     Asunto: {{subject}}
     
     Mensaje:
     {{message}}
     ```
4. **Copia el Template ID** (lo necesitarás después)

### 4. Obtener tu Public Key
1. Ve a **Account** > **General**
2. **Copia tu Public Key**

### 5. Configurar en el código
Abre `src/pages/Contacto.tsx` y reemplaza estos valores en la función `handleSubmit`:

```typescript
const serviceId = 'YOUR_SERVICE_ID'      // Reemplaza con tu Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Reemplaza con tu Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Reemplaza con tu Public Key
```

### 6. Actualizar información de contacto
En el mismo archivo, actualiza la información de contacto en el array `contactInfo`:
- Email
- LinkedIn
- GitHub

## Notas importantes
- El plan gratuito de EmailJS permite 200 emails por mes
- Los emails se envían directamente desde el navegador (no necesitas backend)
- Asegúrate de que tu Public Key esté configurada correctamente

