export default function DashboardSkeleton() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="h-10 w-60 rounded bg-gray-200 animate-pulse mb-8"></div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="rounded-2xl bg-white p-6 shadow"
          >
            <div className="h-5 bg-gray-200 rounded animate-pulse mb-4"></div>

            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}

      </div>

    </div>
  );
}