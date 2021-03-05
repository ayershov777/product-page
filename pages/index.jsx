import ProductCardBody from '../components/ProductCardBody';
import ProductCardImage from '../components/ProductCardImage';
import { getProducts } from '../services/products-service';

export async function getServerSideProps() {
  try {
    return { props: { products: await getProducts() }};
  }
  catch(error) {
    console.log(error);
    return { props: { error: "internal server error" }};
  }
}

export default function Home({ error, products }) {
  if(error || !products || !products.length) {
    return error || "internal server error";
  }

  return (
    <div className="container">
      <h1>Online Store</h1>
      <blockquote className="blockquote">
        <p className="font-italic">Lorem ipsum dolor sit amet, exercitation deserunt exercitation ea velit eu consequat laborum Lorem occaecat ea.</p>
      </blockquote>
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={`p-${product.productId}`} className="col-12 col-md-6 col-lg-4 my-2">
            <div className="card m-auto border-0">
              <ProductCardImage product={product} />
              <ProductCardBody product={product}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
