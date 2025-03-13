export const Footer = () => {
  return (
    <div className="bg-brand-500 text-white h-16 px-4 text-center flex items-center justify-center">
      <span className="text-sm">
        &copy; {new Date().getFullYear()} Meu Primeiro Projeto
      </span>
    </div>
  );
};