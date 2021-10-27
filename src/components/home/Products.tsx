import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductSkeleton from 'skeleton/ProductSkeleton';
import { IProduct } from 'types';


interface IProps{
  products: IProduct[] | null,
  isLoading: boolean
}

const Products = ({products, isLoading }: IProps) => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Latest Products</h2>
      {
        isLoading && <ProductSkeleton/>
      }
      {
        !isLoading && (<Row className="">
        {products?.map((product: IProduct) => ( 
         <Product key={product._id} product={product}/>
        ))}
       
      </Row>
        )
      }
    </Container>
  );
};

export default Products;
