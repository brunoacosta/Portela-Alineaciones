# Deploy de Vite (React) en Vercel — Guía Express

Esta guía te deja el proyecto **listo para deploy** en Vercel, con SPA routing, headers y caché óptimos.

---

## 1) Requisitos
- Node 18+
- Proyecto Vite (React) con `package.json` y script `build`
- Repo en GitHub / GitLab / Bitbucket (recomendado)

**`.gitignore` sugerido**
```
node_modules/
dist/
build/
.env
```

---

## 2) Configuración del proyecto

### 2.1 SPA routing (React Router)
Incluí el archivo **`vercel.json`** (ya generado) en la raíz del repo. Esto evita 404 en rutas profundas y hace fallback a `/`:

```json
{
  "version": 2,
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

> El archivo que te dejamos también agrega **headers de seguridad** y **cacheo fuerte** para `/assets/*` (los archivos con hash del build).

### 2.2 Vite en subcarpeta (opcional)
Si vas a servir en una subruta (p. ej., `midominio.com/app/`), agrega en `vite.config.ts`:
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/app/"
});
```

---

## 3) Deploy con Dashboard (recomendado)

1. Subí/actualizá tu repo en GitHub.
2. Entrá a **Vercel → New Project → Import** tu repo.
3. Confirmá la detección de **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Deploy.** Vercel crea una URL `https://<tu-proyecto>.vercel.app` con HTTPS automático.
5. Cada push a `main` redeploya Producción. Otras branches generan **Preview Deployments**.

**Variables de entorno (si las hubiera)** → *Project → Settings → Environment Variables*.

---

## 4) Deploy con CLI (alternativa)

```bash
npm i -g vercel
npm run build        # genera ./dist
vercel               # hace un Preview deploy (elige "dist" si pregunta output)
vercel --prod        # sube a Producción
```

---

## 5) URLs, dominio y certificado

- **Sin dominio propio:** quedás online en `https://<tu-proyecto>.vercel.app` (incluye **HTTPS** por defecto).
- **Con dominio propio:** en el Dashboard → *Project → Settings → Domains* → **Add** tu dominio y seguí los pasos DNS.
  - Vercel emite y renueva **SSL (Let's Encrypt)** automáticamente.
- **Ambientes:** cada PR/branch crea una URL de **Preview** única; `main` apunta a Producción.

---

## 6) Caché y rendimiento

- Los assets con hash en `/assets/*` se sirven con `Cache-Control: public, max-age=31536000, immutable`.
- HTML se sirve sin cacheo agresivo para que veas cambios al instante.
- Puedes ajustar estos headers en `vercel.json` si lo necesitás.

---

## 7) PWA (opcional)

- Asegurate de incluir `manifest.json` y tu service worker (Workbox o el plugin PWA de Vite).
- Vercel sirve tu sitio en HTTPS, requisito para PWA.

---

## 8) Troubleshooting

- **Rutas 404 en React Router:** confirmá que `vercel.json` esté en la **raíz** del repo y tenga el bloque `rewrites`.
- **Build falla:** revisá la versión de Node en *Project → Settings → Build & Development*. Alineala con la de tu local.
- **CORS/API externas:** si consumís APIs de terceros, revisá CORS en el servidor destino o usa un proxy si es necesario.
- **Base path roto:** si publicás bajo subruta, ajustá `base` en `vite.config.ts`.

---

## 9) Qué archivos te incluimos

- **`vercel.json`**: rewrites para SPA, headers de seguridad y caché de assets, `cleanUrls` y `trailingSlash` configurados.
- **`README.md`**: esta guía con pasos completos.

¡Listo! Empujá el repo con estos archivos, conéctalo a Vercel y estás en línea.
