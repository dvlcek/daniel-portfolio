import { cn } from "@/app/lib/cn";

type ContainerSize = "default" | "wide" | "narrow";

const sizes: Record<ContainerSize, string> = {
  default: "max-w-[1440px]",
  wide: "max-w-[1680px]",
  narrow: "max-w-[920px]",
};

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: ContainerSize;
}) {
  return (
    <div className={cn("mx-auto w-[min(100%-2rem,100%)] px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
