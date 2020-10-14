import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home() {

    const url = `https://5f86219fc8a16a0016e6ab2a.mockapi.io/api/v1/Products/`;
    
    let products = useAxiosGet(url);

    let content = null;

    if(products.error) {
        content = <p>There was an error. Please refresh or try again later.</p>
    }

    if(products.loading) {
        content = <Loader></Loader>
    }

    if(products.data) {
        content = 
        products.data.map((product, key) => 
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        );
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            {content}
        </div>
    )
}

export default Home;