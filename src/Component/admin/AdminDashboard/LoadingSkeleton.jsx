"use client";

export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 animate-pulse">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-orange-100 p-6">

        <div className="h-8 w-64 bg-orange-100 rounded"></div>

        <div className="mt-4 h-4 w-96 bg-gray-200 rounded"></div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="bg-white rounded-2xl h-40 border border-gray-100"
          />
        ))}

      </div>

      {/* Tables */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-2xl h-[420px] border border-gray-100"/>

        <div className="bg-white rounded-2xl h-[420px] border border-gray-100"/>

      </div>

      {/* Quick Action */}

      <div className="bg-white rounded-2xl h-[240px] mt-8 border border-gray-100"/>

    </div>
  );
}