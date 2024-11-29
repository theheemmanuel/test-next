import { Skeleton } from "./ui/skeleton";

export function Loading() {
  return <div></div>;
}
export function SkeletonCircle() {
  return (
    <div>
      <Skeleton className="h-20 w-20 rounded-full bg-zinc-400" />
    </div>
  );
}
export function SkeletonLine() {
  return <div></div>;
}
