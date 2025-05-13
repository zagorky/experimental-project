import { Skeleton } from '~components/ui/skeleton.tsx';

export const AsyncRaceSkeleton = () => {
  return (
    <div className={'w-full, h-full flex flex-col gap-4'}>
      <Skeleton className={''} />
    </div>
  );
};
