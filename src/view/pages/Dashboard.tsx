import { Logo } from "../components/Logo";
import { UserMenu } from "../components/UserMenu";

export function Dashboard() {
  return (
    <div className="flex h-screen w-screen flex-col px-8 pt-6 pb-8">
      <header className="flex h-12 items-center justify-between">
        <Logo className="h-6 text-moss-green" />
        <UserMenu />
      </header>
      <main>Content</main>
    </div>
  );
}
