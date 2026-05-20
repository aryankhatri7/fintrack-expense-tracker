import {
  createContext,
  useState,
  useEffect,
} from "react"

export const ThemeContext =
  createContext()

function ThemeProvider({
  children,
}) {

  const [theme, setTheme] =
    useState(() => {

      const savedTheme =
        localStorage.getItem("theme")

      return savedTheme || "dark"

    })

  // Apply Theme
  useEffect(() => {

    localStorage.setItem(
      "theme",
      theme
    )

    if (theme === "dark") {

      document.documentElement.classList.add(
        "dark"
      )

    } else {

      document.documentElement.classList.remove(
        "dark"
      )

    }

  }, [theme])

  // Toggle Theme
  const toggleTheme = () => {

    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    )

  }

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  )
}

export default ThemeProvider