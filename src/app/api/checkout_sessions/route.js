import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";


export async function POST(req) {

    try {

        const { product, quantity, buyer } = await req.json();
        //   console.log(product,' product ROUTE.JS FORM CHEACKOUT_SESSTION'); 
        //   console.log(quantity,'quantity ROUTE.JS FORM CHEACKOUT_SESSTION'); 
        //   console.log(buyer,'buyer ROUTE.JS FORM CHEACKOUT_SESSTION'); 
        const session = await stripe.checkout.sessions.create({

            mode: "payment",

            payment_method_types: ["card"],

            line_items: [

                {

                    price_data: {

                        currency: "usd",

                        product_data: {

                            name: product.title,

                            description: product.description,

                            images: [product.image],

                        },

                        unit_amount: product.price * 100,

                    },

                    quantity,

                },

            ],

           metadata: {
    productId: product._id,

    buyerId: buyer?.userId,
    buyerName: buyer?.name,
    buyerEmail: buyer?.email,

    sellerId: product?.sellerId,
    sellerName: product?.sellerName,
    sellerEmail: product?.sellerEmail,

    quantity: quantity.toString(),
},
            success_url:
                "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",

            cancel_url:
                "http://localhost:3000/cancel",

        });
    

        return NextResponse.json({

            url: session.url,

        });

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );

    }

}






// import { NextResponse } from 'next/server'
// import { headers } from 'next/headers'

// import { stripe } from '../../../lib/stripe'

// export async function POST() {
//   try {
//     const headersList = await headers()
//     const origin = headersList.get('origin')

//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, price_1234) of the product you want to sell
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//     });
//     return NextResponse.redirect(session.url, 303)
//   } catch (err) {
//     return NextResponse.json(
//       { error: err.message },
//       { status: err.statusCode || 500 }
//     )
//   }
// }