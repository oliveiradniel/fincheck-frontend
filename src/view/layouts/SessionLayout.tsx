import { Link } from "react-router-dom";

interface SessionLayoutProps {
  children: React.ReactNode;
  type: "login" | "register";
}

export function SessionLayout({ children, type }: SessionLayoutProps) {
  const ariaId = "session";

  const title = type === "login" ? "Entre em sua conta" : "Crie sua conta";
  const subtitle = type === "login" ? "Novo por aqui?" : "Já possui uma conta?";
  const linkText = type === "login" ? "Crie uma conta" : "Fazer login";
  const linkHref = type === "login" ? "/register" : "/login";

  return (
    <section aria-labelledby={ariaId}>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1
          id={ariaId}
          className="text-2xl font-bold tracking-[-1px] text-gray-900"
        >
          {title}
        </h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">{subtitle}</span>
          <Link to={linkHref} className="font-medium text-moss-green">
            {linkText}
          </Link>
        </p>
      </header>

      {children}
    </section>
  );
}
