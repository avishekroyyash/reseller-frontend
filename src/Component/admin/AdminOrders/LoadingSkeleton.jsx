"use client";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">

      <div className="h-10 w-72 bg-gray-200 rounded-lg" />

      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="grid md:grid-cols-4 gap-4">

          {[1,2,3,4].map((item)=>(
            <div
              key={item}
              className="h-12 bg-gray-200 rounded-lg"
            />
          ))}

        </div>
      </div>

      <div className="grid lg:grid-cols-6 gap-5">

        {[1,2,3,4,5,6].map((item)=>(
          <div
            key={item}
            className="h-32 bg-gray-200 rounded-2xl"
          />
        ))}

      </div>

      <div className="bg-white rounded-2xl p-6 shadow">

        {[1,2,3,4,5].map((item)=>(
          <div
            key={item}
            className="h-16 bg-gray-100 rounded mb-4"
          />
        ))}

      </div>

    </div>
  );
}