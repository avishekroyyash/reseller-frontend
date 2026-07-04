import ProductDetailsCard from '@/Component/ProductsComponent/ProductDetailsCard';
import ProductOrderCard from '@/Component/ProductsComponent/ProductOrderCard';
import ProductReview from '@/Component/ProductsComponent/ProductReview';
import { GetproductById } from '@/lib/apiGetCall/GetProductById';
import { getUserData } from '@/lib/mainFunction/session';
import React from 'react';

const ProductDetails = async({params}) => {
    const user = await getUserData()
    console.log(user,'USER');
    const {id} = await params
     console.log(id,'PRODUCT ID ');
    const ProductInfo = await GetproductById(id)
    // console.log(ProductInfo);
    return (
       <div className="container mx-auto px-4 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    <div className="lg:col-span-2 space-y-8">
      <ProductDetailsCard product={ProductInfo} />
      <ProductReview
        productId={id}
        reviews={[]}
        user={user}
      />
    </div>

    <div>
      <ProductOrderCard product={ProductInfo} />
    </div>

  </div>
</div>
    );
};

export default ProductDetails;