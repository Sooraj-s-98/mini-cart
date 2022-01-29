import React from 'react';
import ProductItem from './ProductItem';
import { useProducts } from '../../hooks/useProducts';
import styles from './ProductsGrid.module.scss';

const ProductsGrid = () => {
    const { products} = useProducts()
    return ( 
        <div className={styles.p__container}>
            <div className={styles.p__toolbar}>
                <div>
                {products.length}Products
                </div>
                <div>
                    <div className="form-group">
                        <input type="text" name="" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>
            {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;