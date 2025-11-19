import { Card, Skeleton } from "@heroui/react";

export default function LoadingProfile() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen pt-4">
      <div className="container space-y-6">

        {/* Cover Photo Skeleton */}
        <Card className="w-full h-60 shadow-2xl shadow-cyan-100 p-0" radius="lg">
          <Skeleton className="w-full h-full rounded-lg" />
        </Card>

        {/* Profile Image + Name + Buttons */}
        <Card className="w-full p-6 shadow-2xl shadow-cyan-100 space-y-5" radius="lg">

          {/* Profile Image Row */}
          <div className="flex items-center gap-4">
            <Skeleton className="w-20 h-20 rounded-full" />

            <div className="w-full flex flex-col gap-3">
              <Skeleton className="h-4 w-2/5 rounded-lg" />
              <Skeleton className="h-4 w-3/5 rounded-lg" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-10 w-28 rounded-lg" />
          </div>
        </Card>

        {/* Menu Skeleton */}
        <Card className="w-full p-4 shadow-2xl shadow-cyan-100" radius="lg">
          <div className="flex items-center gap-6">
            {[1,2,3,4,5].map((i) => (
              <Skeleton key={i} className="h-4 w-16 rounded-lg" />
            ))}
          </div>
        </Card>

        <div className="flex gap-5">

          {/* Left Intro Card */}
          <Card className="w-1/3 space-y-4 p-4 shadow-2xl shadow-cyan-100" radius="lg">
            <Skeleton className="h-4 w-32 rounded-lg" />
            <Skeleton className="h-3 w-40 rounded-lg" />
            <Skeleton className="h-3 w-36 rounded-lg" />
            <Skeleton className="h-3 w-44 rounded-lg" />
          </Card>

          {/* Posts Section */}
          <div className="flex-1 space-y-6">

            {/* Create Post Skeleton */}
            <Card className="p-4 space-y-4 shadow-2xl shadow-cyan-100" radius="lg">
              <Skeleton className="h-4 w-1/3 rounded-lg" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </Card>

            {/* Post Cards Skeleton (3) */}
            {[1,2,3].map((i) => (
              <Card
                key={i}
                className="p-4 space-y-5 shadow-2xl shadow-cyan-100"
                radius="lg"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-full" />

                  <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </div>
                </div>

                {/* Text lines */}
                <div className="space-y-3">
                  <Skeleton className="h-3 w-3/5 rounded-lg" />
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>

                {/* Image */}
                <Skeleton className="h-40 w-full rounded-lg" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
