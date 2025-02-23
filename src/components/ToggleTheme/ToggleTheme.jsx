import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") /* Se o usuário tiver um tema definido, ele será carregado. Caso contrário, o tema será definido com base nas configurações do sistema. */
  );

  useEffect(() => { /* O tema é salvo no localStorage e a classe dark é adicionada ao elemento HTML. */
    if (theme === "dark") { /* Se o tema for escuro, a classe dark é adicionada ao elemento HTML e o tema é salvo no localStorage. */
      document.documentElement.classList.add("dark");/* Adiciona a classe dark ao elemento HTML. */
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");/* Remove a classe dark do elemento HTML. */
      localStorage.setItem("theme", "light");/* Salva o tema no localStorage. */
    }
  }, [theme]);

  return (
    <button /* O botão de alternância de tema é criado. */
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")} /* Quando o botão é clicado, o tema é alternado. */
    className="p-2 border rounded-md bg-white dark:bg-black text-black dark:text-white" 
  >
  
      {theme === "dark" ? (
        <MoonIcon className="h-6 w-6 text-white" /> /* Se o tema for escuro, o ícone da lua é exibido. */
      ) : (
        <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-100" /> /* Se o tema for claro, o ícone do sol é exibido. */
      )}
    </button>
  );
}
