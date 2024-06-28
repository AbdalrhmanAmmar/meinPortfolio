"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? "Dark UI" : "Light UI"}
    </button>
  );
}

export default ThemeSwitch;
