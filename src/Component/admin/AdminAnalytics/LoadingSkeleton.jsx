"use client";

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl p-6 border border-orange-100">

        <div className="h-8 w-60 bg-orange-100 rounded mb-4"></div>

        <div className="h-4 w-96 bg-gray-200 rounded"></div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5">

        {[1,2,3,4,5,6].map((item)=>(
          <div
            key={item}
            className="bg-white rounded-2xl h-40 border border-gray-100"
          />
        ))}

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="bg-white rounded-2xl h-96 border border-gray-100"
          />
        ))}

      </div>

    </div>
  );
}