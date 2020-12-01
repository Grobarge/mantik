import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$25', image: 'https://nb.scene7.com/is/image/NB/nm306blk_nb_02_i?$pdpflexf2$&wid=440&hei=440'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$300' , image: 'https://static.bhphoto.com/images/images2500x2500/1584552907_1553858.jpg'}
];

const Products = () => {
    const classes = useStyles();
    return( 
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;