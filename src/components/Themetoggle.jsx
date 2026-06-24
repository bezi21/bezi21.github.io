import React from 'react';
import { useTheme } from '../context/useTheme.js'; // <-- IMPORTANT: This must point to useTheme.js

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}