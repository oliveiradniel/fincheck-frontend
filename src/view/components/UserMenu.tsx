import { useAuthContext } from "@/app/hooks/useAuthContext";

export function UserMenu() {
  const { loggedUser } = useAuthContext();

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 bg-teal-50">
      <p className="text-sm font-medium tracking-[-0.5px] text-moss-green">
        {loggedUser.name[0]}
      </p>
    </div>
  );
}
