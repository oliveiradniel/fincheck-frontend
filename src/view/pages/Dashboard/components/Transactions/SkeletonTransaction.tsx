export function SkeletonTransaction() {
  return (
    <div className="relative h-20 overflow-hidden rounded-2xl bg-gray-500/6">
      <div className="absolute top-0 h-full w-32 skew-12 animate-skeleton bg-white/20 blur-xl" />
    </div>
  );
}
