import Link from 'next/link';
import useWindowSize from '../hooks/useWindowSize';
import { BOOTSTRAP_XS, removeTrailingSpace } from '../utils';

export default function ProductCardBody({ product }) {
  const windowSize = useWindowSize();
  const isWindowXs = windowSize.width && windowSize.width <= BOOTSTRAP_XS;

  if(isWindowXs) {
    return (
      <div className="card-body card-img-overlay text-center">
        <h3>
          <a className="card-title h3 font-weight-normal">{product.title}</a>
        </h3>
      </div>
    );
  }

  return (
    <div className="card-body">
      <Link href="/products/[productId]" as={`/products/${product.productId}`}>
        <a
          className="card-title"
          aria-label={`Go to details page for ${product.title}`}
        >
          <h3 className="h4 font-weight-normal">
            {product.title}
          </h3>
        </a>
      </Link>
      <ProductCardAbout product={product} />
    </div>
  );
}

function ProductCardAbout({ product }) {
  if(!product.about || !product.about.length) {
    return null;
  }
  
  if(product.about.length > 128) {
    const shortText = product.about.substring(0, 115);
    const displayText =  removeTrailingSpace(shortText);
    return (
      <Link href={`/products/${product.productId}`}>
        <a className="text-decoration-none text-dark">
          {`${displayText}... `}
          <span className="sr-only">Read more about {product.title}</span>
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/products/${product.productId}`}>
      <a className="text-decoration-none text-dark">
        {product.about}
        <span className="sr-only">Go to details page for {product.title}</span>
      </a>
    </Link>
  );
}
