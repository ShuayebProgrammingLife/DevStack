# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a browser-based tool that helps developers explore frontend, backend,
database, and tooling options, then assemble their own personal "stack" by adding
technologies to a live sidebar — much like a shopping cart, but for software tools.

## 🛠️ Built With

- **React 18** + **TypeScript**
- **Vite** — dev server & build tool
- **Tailwind CSS** — utility-first styling
- **React-Toastify** — toast notifications
- **JSON** — local technology dataset

## ✨ Features

1. **Interactive stack builder** — browse 14 technologies across 7 categories, add any
   of them to "Your Stack" with one click, and see the sidebar update instantly.
2. **Duplicate & empty-state handling** — attempting to add the same technology twice
   shows a warning toast instead of creating duplicates, and an empty stack shows a
   friendly placeholder message guiding the user to add something.
3. **One-gradient theming** — the brand gradient (orange → pink → violet) is defined
   in a single place (`tailwind.config.js`) and reused for the logo, hero headline,
   and every primary button, so the whole site can be re-themed by editing one value.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

---

## 📘 React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside
JavaScript/TypeScript files. React uses it because it makes describing what the UI
should look like much more readable than calling `React.createElement(...)` by hand —
under the hood, JSX is compiled into those function calls.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — they're read-only from the
child's perspective. State is data a component manages *internally* and can update
itself, usually with `useState`. Props flow down; state lives and changes locally.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a functional component hold a value that persists between renders and
triggers a re-render whenever it changes. In this project it's used for the list of
technologies (`technologies`), the loading flag (`loading`), the selected stack array
(`stack`), and whether the mobile menu is open (`open` in `Navbar`).

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects (things outside of pure rendering, like data fetching or
timers) after a component renders. Loading the technology data is a side effect — it
shouldn't happen during render — so it's wrapped in `useEffect` with an empty
dependency array so it only runs once, when the app first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items apart between renders so it can efficiently figure
out which items were added, removed, or reordered, instead of re-rendering the whole
list. Without stable unique keys, React can mismatch items and cause bugs or lost
component state.

**6. What is conditional rendering? Show one place you used it (example: the empty
stack message).**
Conditional rendering means showing different UI depending on some condition, using
things like `if`, ternaries, or `&&`. For example, in `YourStack.tsx`:

```tsx
{count === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <ul>
  {/* ...list of stack items... */}
  </ul>
)}
```

**7. How do you pass data from a parent component to a child component, and how does a
child send something back to the parent?**
A parent passes data down as props, e.g. `<TechCard tech={tech} />`. To send
information back up, the parent passes a *function* as a prop (e.g. `onAdd`), and the
child calls that function with the relevant data when something happens (like a
button click). This is exactly how `TechCard` reports an "Add to Stack" click back up
to `App`.
