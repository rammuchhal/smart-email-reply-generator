# 🚀 Smart AI Reply – Email Writer Assistant

An AI-powered tool that generates professional, context-aware email replies — instantly.  
Built with **Java (Spring Boot)**, **Spring AI**, **React**, and **Google Gemini API**, this project is available as both a **Chrome Extension integrated with Gmail** and a fully responsive **web application**.

---

## ✨ Features

✅ One-click **Smart AI Reply** button inside Gmail (via Chrome Extension)  
✅ Generate replies from any email with **professional tone**  
✅ **Responsive web app** with dark and light themes  
✅ Powered by **Google Gemini LLM** via **Spring AI**  
✅ Works securely over HTTPS — ready for production use  
✅ No data stored — privacy-friendly

---

## 🔗 Live Demo

🌐 **Web App**: [https://email-writer-ui.vercel.app](https://email-writer-ui.vercel.app)  
🧩 **Chrome Extension**: [Smart AI Reply – Email Writer Assistant](https://chromewebstore.google.com/detail/smart-ai-reply-email-writ/gpanifdmoaljofjjmpngajjfbdhnjljn)

> 💡 *Note*: The first response might take a few seconds due to free-tier hosting on Render. Subsequent replies are typically generated in **2–3 seconds**.

---

## 🧠 How It Works

1. **User** opens Gmail or visits the web app.
2. They either click the **Smart AI Reply** button (in Gmail) or paste an email on the web UI.
3. The app sends the content to the **Spring Boot backend**, which calls **Google Gemini API**.
4. AI generates a smart, personalized reply and returns it to the frontend.
5. The reply is auto-inserted in Gmail or displayed on the site — ready to send!

---

## 🛠️ Tech Stack

| Layer        | Tech Used                              |
|--------------|-----------------------------------------|
| Frontend     | React, Vite, Tailwind (optional), Vercel |
| Backend      | Java 21, Spring Boot, Spring AI         |
| AI Engine    | Google Gemini API                       |
| Extension    | Chrome Extension (Manifest V3)          |
| Hosting      | Render (backend), Vercel (frontend)     |


## 🧩 Installation (Extension)

1. Install from the Chrome Web Store:  
   👉 [Smart AI Reply – Email Writer Assistant](https://chromewebstore.google.com/detail/smart-ai-reply-email-writ/gpanifdmoaljofjjmpngajjfbdhnjljn)

2. Open Gmail → Click Compose → Look for the **"Smart AI Reply"** button in the toolbar.

3. Click it to generate a reply for any received email in one click!

---

## 🧪 Local Setup (For Devs)

### Backend
```bash
cd backend
./mvnw spring-boot:run
