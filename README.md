# 🎉 Click to Copy Discord Emojis

A modern, minimalist, and fast web app to upload, view, and copy custom emotes/emojis for Discord.  
Perfect for sharing your favorite emotes with a single click.

<p align="center">
  <a href="/README_es.md">Español</a>
</p>

---

## ✨ Features

- 💾 **Optimized image loading** (static and animated).
- 📋 **Left click**: copies the direct URL of the emote.
- 🔍 **Built-in search** powered by Fuse.js for easy filtering.
- 🖱️ **Right click**: opens a preview of the emote.
- 🧠 **GIFs are static by default** (they only animate on hover to improve performance).
- 🏷️ **“GIF” label** on animated emotes.
- 📝 **Help/info modal** included.
- 🔓 **Open source** — contribute new emotes or improvements via Pull Request.

---

## 🚀 Getting Started Locally

1. **Clone the repository**:

```bash
git clone https://github.com/Nicolhetti/CtC-DS.git
cd CtC-DS
````

2. **Install dependencies**:

```bash
npm install
```

3. **Run in development mode**:

```bash
npm run dev
```

4. **Add your emotes** to the folder:

```
public/emotes/
```

5. **Generate previews + list**:

```bash
node generate-emotes-with-previews.js
```

---

## 🤝 Contributing

Thanks for your interest in contributing!

1. Fork the repository.
2. Create a new branch: `git checkout -b add-my-emote`
3. Place your emote in `public/emotes/`.
4. Run `node generate-emotes-with-previews.js`
5. Commit your changes and submit a Pull Request.

> 💡 Emote filenames should be descriptive, lowercase, and use no spaces or special characters.

---

## ⚠️ Disclaimer

> **This project is NOT affiliated with or endorsed by Discord Inc.**
> It is a community-driven tool with no commercial intent, created to simplify sharing custom emotes.

---

## 📄 License

MIT © [Nicolhetti](https://github.com/Nicolhetti)
