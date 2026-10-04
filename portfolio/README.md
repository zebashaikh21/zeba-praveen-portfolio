# Zeba Praveen – Portfolio

React (Vite) + Tailwind CSS + Lucide icons. No backend.

## Run locally in VS Code
1. Install Node.js 18 or newer from https://nodejs.org
2. In VS Code: File > Open Folder > select this folder
3. Open the terminal (Ctrl + `) and run:
   ```
   npm install
   npm run dev
   ```
4. Open the address shown (usually http://localhost:5173)

Build for deployment: `npm run build` (output in `dist/`; deploy to Netlify, Vercel or GitHub Pages).

## Update your content
Everything lives in **src/data/portfolioData.js**:
- `personal.github`: add your GitHub profile URL (GitHub icons appear automatically once set)
- `projects[].repo` / `live` / `image`: add repository links, demo links and screenshots
  (put images in `public/screenshots/` and use `asset('screenshots/name.png')`)
- `experience[].points`: add short bullets about what you built or learned
- Replace the resume by overwriting `public/Zeba_Praveen_Resume.pdf` (keep the same file name)

## Contact form
The form validates input but is a frontend demo. After a valid submit it shows a button that opens
your email app with the message pre-filled. To receive messages directly, connect a service such as
Formspree or EmailJS in `src/components/Contact.jsx`.
