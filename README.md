# 🚀 Student Learning Dashboard

A modern and responsive Student Learning Dashboard built using **Next.js App Router**, **Supabase**, **Tailwind CSS**, and **Framer Motion**.

## 🌟 Features

* Responsive Bento Grid Layout
* Dark Mode UI
* Server Component Data Fetching
* Supabase PostgreSQL Integration
* Dynamic Course Cards
* Dynamic Lucide Icons
* Animated Progress Bars
* Activity Visualization Chart
* Loading Skeletons
* Error Handling
* Mobile Bottom Navigation
* Framer Motion Hover Animations

---

## 🛠 Tech Stack

* Next.js 16 (App Router)
* React
* Supabase
* PostgreSQL
* Tailwind CSS
* Framer Motion
* Lucide React

---

## 📂 Project Structure

```text
app/
├── layout.js
├── page.js
├── loading.js
├── error.js
├── globals.css

components/
├── Sidebar.jsx
├── MobileNav.jsx
├── HeroCard.jsx
├── CourseCard.jsx
├── ActivityCard.jsx

lib/
├── supabase.js
```

---

## 🗄 Database Schema

### courses

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

---

## ⚡ Architecture

The application uses **Next.js Server Components** to fetch course data directly from Supabase before rendering the page.

### Benefits

* Better performance
* Reduced client-side JavaScript
* Faster initial page load
* Cleaner data flow
* Secure database communication

---

## 🎨 Animations

Implemented using Framer Motion:

* Card Hover Effects
* Animated Progress Bars
* Smooth Entrance Animations
* Spring-Based Interactions
* Interactive Navigation Elements

---

## 📱 Responsive Design

### Desktop (>1024px)

* Full Sidebar Navigation
* Multi-column Bento Grid Layout

### Tablet (768px–1024px)

* Optimized Grid Layout
* Responsive Card Arrangement

### Mobile (<768px)

* Bottom Navigation Bar
* Single Column Layout
* Touch Friendly UI

---

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Create a `.env.example` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## ▶️ Run Locally

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🚀 Deployment

The application is deployed using **Vercel**.

Before deployment:

1. Add environment variables in Vercel.
2. Connect your GitHub repository.
3. Deploy automatically.

---

## 🌐 Live Demo

https://your-vercel-link.vercel.app

---

## 📂 GitHub Repository

https://github.com/praveen-maurya1/student-learning-dashboard

---

## 📸 Preview

Add your project screenshot here after deployment.

---

## 🎯 Assignment Highlights

* Next.js App Router
* Server Components
* Supabase Integration
* Responsive Bento Grid Layout
* Framer Motion Animations
* Dynamic Course Rendering
* Loading Skeletons
* Error Boundaries
* Mobile Navigation
* Modern Dark UI

---

## 👨‍💻 Author

**Praveen Maurya**

* GitHub: https://github.com/praveen-maurya1
* LinkedIn: Add your LinkedIn profile here

Built as part of a Frontend Intern Challenge using Next.js, Supabase, Tailwind CSS, and Framer Motion.

⭐ If you found this project useful, consider giving it a star.
