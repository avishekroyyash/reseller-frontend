export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Skeleton */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="h-8 w-36 animate-pulse rounded-lg bg-gray-200"></div>

          <div className="hidden gap-6 md:flex">
            <div className="h-5 w-16 animate-pulse rounded bg-gray-200"></div>
            <div className="h-5 w-16 animate-pulse rounded bg-gray-200"></div>
            <div className="h-5 w-16 animate-pulse rounded bg-gray-200"></div>
            <div className="h-5 w-16 animate-pulse rounded bg-gray-200"></div>
          </div>

          <div className="h-10 w-28 animate-pulse rounded-xl bg-gray-200"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Hero Skeleton */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 h-12 w-3/4 animate-pulse rounded bg-gray-200"></div>

            <div className="mb-3 h-5 w-full animate-pulse rounded bg-gray-200"></div>
            <div className="mb-3 h-5 w-11/12 animate-pulse rounded bg-gray-200"></div>
            <div className="mb-8 h-5 w-9/12 animate-pulse rounded bg-gray-200"></div>

            <div className="flex gap-4">
              <div className="h-12 w-40 animate-pulse rounded-xl bg-gray-200"></div>
              <div className="h-12 w-40 animate-pulse rounded-xl bg-gray-200"></div>
            </div>
          </div>

          <div className="h-[420px] animate-pulse rounded-3xl bg-gray-200"></div>
        </div>

        {/* Section Title */}
        <div className="mt-20 mb-10">
          <div className="mx-auto h-10 w-60 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Product Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border bg-white p-4 shadow-sm"
            >
              <div className="mb-4 h-56 animate-pulse rounded-xl bg-gray-200"></div>

              <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>

              <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200"></div>

              <div className="mb-5 h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>

              <div className="flex items-center justify-between">
                <div className="h-7 w-20 animate-pulse rounded bg-gray-200"></div>

                <div className="h-10 w-28 animate-pulse rounded-xl bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}