import ProductCard from '@/Component/ProductsComponent/ProductCard';
import { GetAllProducts } from '@/lib/apiGetCall/GetAllProducts';
import React from 'react';

const AllProductPage = async () => {
    const products = await GetAllProducts()
    // console.log(products,'PRODUCTS DATA');
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProductPage;