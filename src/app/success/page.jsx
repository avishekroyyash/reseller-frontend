import { redirect } from 'next/navigation'
import Link from "next/link";
import { FaCheckCircle, FaHome, FaBoxOpen } from "react-icons/fa";
import { stripe } from '../../lib/stripe'
import { UserOrderPost } from '@/lib/action/OrderPost';
import { UserPaymentPost } from '@/lib/action/PaymentPost';


export default async function SuccessPage({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail },
    metadata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (session.status === 'complete') {
    // console.log(metadata,'META-DATA');

const order = {

    buyerInfo:{

        userId:metadata.buyerId,

        name:metadata.buyerName,

        email:metadata.buyerEmail

    },

    sellerInfo:{

        userId:metadata.sellerId,

        name:metadata.sellerName,

        email:metadata.sellerEmail

    },

    productId:metadata.productId,

    paymentStatus:"paid",

    orderStatus:"processing",

    stripeSessionId:session.id,

    paymentIntentId:session.payment_intent.id,


};
// console.log(order,'ORDER-STRIPE')
const userOrder =await UserOrderPost(order)

const payment = {

     orderId: session.payment_intent.payment_details.order_reference,
    //id order_reference
      transactionId:session.payment_intent.id,
    //  transactionId:session.id,
    amount:session.amount_total / 100,

    paymentStatus:"success",


};
// console.log(payment,'PAYMENT-HISTORY');
const userPayment = await UserPaymentPost(payment)

     return (
       
    <main className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-orange-100">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
            <FaCheckCircle className="text-6xl text-orange-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-center text-3xl font-bold text-gray-800">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="mt-4 text-center text-gray-600 leading-7">
          Thank you for your purchase! Your payment has been verified
          successfully, and your order has been placed. You can now track your
          order status from your account.
        </p>

        {/* Status Box */}
        <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <div className="flex items-start gap-3">
            <FaBoxOpen className="mt-1 text-xl text-orange-500" />
            <div>
              <h3 className="font-semibold text-gray-800">
                Your order is confirmed
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                We'll send you updates about your order as it is processed and
                shipped.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-orange-500 px-6 py-3 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            <FaHome />
            Home
          </Link>

          <Link
            href="/my-orders"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600"
          >
            <FaBoxOpen />
            My Orders
          </Link>
        </div>
      </div>
    </main>
  );
  }
}



// import { VerifyPayment } from "@/lib/action/VerifyPament";


// export default async function SuccessPage({ searchParams }) {
//  const params = await searchParams;
//   const sessionId = params.session_id;
//   console.log(sessionId,'STRIPE-SESSION-ID');
// //    const {
// //     status,
// //     customer_details: { email: customerEmail }
// //   } = await stripe.checkout.sessions.retrieve(sessionId, {
// //     expand: ['line_items', 'payment_intent']
// //   })
 
// const session = await stripe.checkout.sessions.retrieve(sessionId, {
//     expand: ['line_items', 'payment_intent']
//   })
//   console.log(session,'Stripe - session ');

// //   if (sessionId) {
// //     await VerifyPayment(sessionId);

// //   }
 
// }





