# 🎉 Click to Copy Discord Emojis

Una web moderna, minimalista y rápida para subir, ver y copiar emotes/emoji personalizados para usar en Discord.  
Ideal para compartir tus emotes favoritos con un solo clic.

---

## ✨ Características

- 💾 **Carga optimizada de imágenes** (estáticos y animados).
- 📋 **Clic izquierdo**: copia la URL directa del emote.
- 🔍 **Buscador integrado** con Fuse.js para encontrar emotes fácilmente.
- 🖱️ **Clic derecho**: amplía el emote en una vista previa.
- 🧠 **GIFs estáticos por defecto** (solo se animan al pasar el cursor, mejora rendimiento).
- 🏷️ **Etiqueta “GIF”** en emotes ANIMADOS.
- 📝 **Modal de ayuda/información**.
- 🔓 **Código abierto** — contribuí con nuevos emotes o mejoras vía Pull Request.

---

## 🚀 Cómo iniciar localmente

1. **Clonar el repositorio**:

```bash
git clone https://github.com/Nicolhetti/CtC-DS.git
cd CtC-DS
````

2. **Instalar dependencias**:

```bash
npm install
```

3. **Ejecutar en desarrollo**:

```bash
npm run dev
```

4. **Agregar tus emotes** en la carpeta:

```
public/emotes/
```

5. **Generar previews + listado**:

```bash
node generate-emotes-with-previews.js
```

---

## 🤝 Contribuir

¡Gracias por tu interés en colaborar!

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b agregar-mi-emote`
3. Coloca tu emote en `public/emotes/`.
4. Ejecuta `node generate-emotes-with-previews.js`
5. Haz un commit y un PR.

> 💡 Los emotes deben tener nombres descriptivos, sin espacios ni caracteres especiales.

---

## ⚠️ Aviso

> **Este proyecto NO está afiliado ni respaldado por Discord Inc.**
> Es una herramienta comunitaria sin fines de lucro para facilitar el uso y distribución de emotes personalizados.

---

## 📄 Licencia

MIT © [Nicolhetti](https://github.com/Nicolhetti)
