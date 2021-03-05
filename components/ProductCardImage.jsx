import Link from "next/link";
import { defaultUrl } from "../utils";

export default function ProductCardImage({ product }) {
  return (
    <Link href={`/products/${product.productId}`}>
      <a aria-label={`Go to details page for ${product.title}`}>
        <img
          className="card-img-top"
          src={product.images[0].url || defaultUrl}
          alt=""
          height="250"
          role="presentation"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            maxHeight: "250px",
          }}
        />
      </a>
    </Link>
  );
}
