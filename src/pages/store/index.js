import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-2">
                    <h1>Store</h1>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;