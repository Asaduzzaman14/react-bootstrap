import React from 'react';
import Card2 from '../Cart/Card2';

const CardGroup = () => {
    const products = [
        { id: 101, name: 'laptop', price: 1200 },
        { id: 102, name: 'laptop', price: 1200 },
        { id: 103, name: 'mobile', price: 1200 },
    ]

    return (
        <div>
            {
                products.map(product =>
                    <Card2
                        key={product.id}
                        product={product}

                    > </Card2>)
            }


        </div>
    );
};

export default CardGroup;