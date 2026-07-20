import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { UserOrderPost } from "@/lib/action/OrderPost";
import { UserPaymentPost } from "@/lib/action/PaymentPost";
import SuccessCard from "./SuccessCard";


export default async function SuccessPage({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const {
    status,
    metadata,
    customer_details: { email: customerEmail },
  } = session;

  if (status === "open") {
    return redirect("/");
  }

  if (session.status === "complete") {
    const order = {
      buyerInfo: {
        userId: metadata.buyerId,
        name: metadata.buyerName,
        email: metadata.buyerEmail,
      },

      sellerInfo: {
        userId: metadata.sellerId,
        name: metadata.sellerName,
        email: metadata.sellerEmail,
      },

      productInfo: {
        productTitle: metadata.title,
        productId: metadata.productId,
        productImage: metadata.image,
        productPrice: metadata.price,
      },

      paymentStatus: "paid",
      orderStatus: "pending",

      stripeSessionId: session.id,
      paymentIntentId: session.payment_intent.id,
    };

    await UserOrderPost(order);

    const payment = {
      userId: metadata.buyerId,
      name: metadata.buyerName,
      email: metadata.buyerEmail,

      orderId: session.payment_intent.payment_details.order_reference,
      transactionId: session.payment_intent.id,
      amount: session.amount_total / 100,

      paymentStatus: "success",
    };

    await UserPaymentPost(payment);

    return (
      <SuccessCard
        customerEmail={customerEmail}
        amount={session.amount_total / 100}
      />
    );
  }
}