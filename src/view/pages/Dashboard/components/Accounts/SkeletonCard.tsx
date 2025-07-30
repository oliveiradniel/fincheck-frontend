export function SkeletonCard() {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-2xl bg-white/20 p-4">
      <div className="absolute top-0 h-full w-18 skew-12 animate-skeleton bg-white/20 blur-xl" />
    </div>
  );
}
