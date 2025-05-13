import { Skeleton } from '~components/ui/skeleton.tsx';

export const AsyncRaceSkeleton = () => {
  return (
    <div className={'w-full, h-full flex flex-col gap-4'}>
      <Skeleton className={'w-full h-20'} />
      <AsyncRaceSkeletonElement />
      <AsyncRaceSkeletonElement />
      <AsyncRaceSkeletonElement />
      <AsyncRaceSkeletonElement />
      <AsyncRaceSkeletonElement />
      <AsyncRaceSkeletonElement />
      <AsyncRaceSkeletonElement />
    </div>
  );
};

export const AsyncRaceSkeletonElement = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 sm:w-[250px] w-[100px]" />
        <Skeleton className="h-4 sm:w-[200px] w-[100px]" />
      </div>
    </div>
  );
};
