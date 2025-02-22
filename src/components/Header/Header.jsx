import ThemeToggle from "../ToggleTheme/ToggleTheme";

const Header = () => {
  return (
    <div className="flex h-20 bg-slate-500 dark:bg-slate-800 text-black dark:text-white justify-between items-center px-5 sm:rounded-xl sm:m-5 transition-colors duration-300 border border-gray-300">
      
      <span className="text-black dark:text-white">Olá, Usuário</span>
      <h1 className="text-black dark:text-white">Alura Newsletter</h1>

      <ThemeToggle /> {/* Alternância de tema com ícones */}
    </div>
  );
};

export default Header;
