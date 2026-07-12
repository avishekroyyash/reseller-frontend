
export default function SearchFilter({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 mb-8">

      <div className="grid lg:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Search by product, buyer name or email..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option>All</option>
          <option>pending</option>
          <option>accepted</option>
          <option>processing</option>
          <option>shipped</option>
          <option>delivered</option>
          <option>rejected</option>
        </select>

      </div>

    </div>
  );
}