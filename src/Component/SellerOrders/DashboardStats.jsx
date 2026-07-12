

export default function DashboardStats({ orders }) {
  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (o) => o.orderStatus === "pending"
  ).length;

  const processingOrders = orders.filter(
    (o) => o.orderStatus === "processing"
  ).length;

  const deliveredOrders = orders.filter(
    (o) => o.orderStatus === "delivered"
  );

  const totalRevenue = deliveredOrders.reduce(
    (sum, item) =>
      sum + Number(item.productInfo.productPrice),
    0
  );

  const cards = [
    {
      title: "Total Orders",
      value: totalOrders,
      color: "text-orange-600",
      bg: "bg-orange-100",
      icon: "📦",
    },
    {
      title: "Pending",
      value: pendingOrders,
      color: "text-red-600",
      bg: "bg-red-100",
      icon: "⏳",
    },
    {
      title: "Processing",
      value: processingOrders,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      icon: "🚚",
    },
    {
      title: "Revenue",
      value: `$${totalRevenue}`,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: "💰",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                {card.title}
              </p>

              <h2
                className={`text-4xl font-bold mt-3 ${card.color}`}
              >
                {card.value}
              </h2>

            </div>

            <div
              className={`${card.bg} w-16 h-16 rounded-full flex items-center justify-center text-3xl`}
            >
              {card.icon}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}