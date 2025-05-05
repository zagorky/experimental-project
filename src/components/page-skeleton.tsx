import { Skeleton } from '~components/ui/skeleton.tsx';

export const PageSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className=" w-full h-300 rounded-xl" />
    </div>
  );
};
