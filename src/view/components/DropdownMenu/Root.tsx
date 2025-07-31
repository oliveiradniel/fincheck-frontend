import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";

interface RootProps extends RdxDropdownMenu.DropdownMenuProps {
  children: React.ReactNode;
}

export function Root({ children, ...props }: RootProps) {
  return <RdxDropdownMenu.Root {...props}>{children}</RdxDropdownMenu.Root>;
}
