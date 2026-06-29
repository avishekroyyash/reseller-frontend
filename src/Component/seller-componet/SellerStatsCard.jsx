// export default function SellerStatsCards({ stats }) {
//   const cards = [
//     {
//       title: "Total Products",
//       value: stats.totalProducts,
//       icon: <FaBoxOpen />,
//     },
//     {
//       title: "Total Sales",
//       value: stats.totalSales,
//       icon: <FaShoppingCart />,
//     },
//     {
//       title: "Total Revenue",
//       value: `$${stats.totalRevenue}`,
//       icon: <FaDollarSign />,
//     },
//     {
//       title: "Pending Orders",
//       value: stats.pendingOrders,
//       icon: <FaClock />,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//       {cards.map((item, index) => (
//         <div
//           key={index}
//           className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
//         >
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-500">{item.title}</p>
//               <h2 className="mt-2 text-3xl font-bold text-gray-800">
//                 {item.value}
//               </h2>
//             </div>

//             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-600">
//               {item.icon}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }