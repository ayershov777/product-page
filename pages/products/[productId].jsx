import { useState } from "react";
import Slider from "react-slick";
import ButtonGroup from "../../components/ButtonGroup";
import DropDown from "../../components/DropDown";
import useWindowSize from "../../hooks/useWindowSize";

import { getProducts } from '../../services/products-service';
import { BOOTSTRAP_LG, defaultAlt, defaultUrl } from "../../utils";

export async function getServerSideProps(context) {
  try {
    const { productId } = context.params;
    const products = await getProducts();
    const product = products.find((product) => product.productId === productId);
    return { props: { product }};
  }
  catch(error) {
    console.log(error);
    return { props: { error: "internal server error" }};
  }
}

export default function ProductPage({ product }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const windowSize = useWindowSize();
  const isWindowMd = windowSize.width && windowSize.width <= BOOTSTRAP_LG;
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col col-12 col-md-6">
          <Slider
            // focusOnSelect={true}
            infinite={false}
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
            className="border"
          >
            {product.images.map((image, idx) => (
              <div style={{ height: "100%", textAlign: "center" }}>
                <img
                  key={`img-${idx}`}
                  className="d-block m-auto py-1 px-2"
                  src={image.url || defaultUrl}
                  alt={image.alt || defaultAlt}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "contain",
                    border: idx === selectedImg ? "1px dotted black" : 0,
                  }}
                  onClick={() => setSelectedImg(idx)}
                />
              </div>
            ))}
          </Slider>
          <div className="p-2 border">
            <img
              className="d-block mx-auto mb-2"
              src={product.images[selectedImg].url}
              alt={product.images[selectedImg].alt}
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          {isWindowMd && <ProductHeader product={product} />}
        </div>
        <div className="col col-12 col-md-6 pl-5">
          {!isWindowMd && <ProductHeader product={product} />}
          {product.options.map((option) => {
            switch(option.style) {
              case "dropdown": return <DropDown option={option} />;
              case "button group": return <ButtonGroup option={option} />;
            }
          })}
          <button className="btn btn-success btn-lg w-100 mb-3">Buy Now</button>
          <ul>
            {product.details.map((bullet, idx) => (
              <li key={`bullet=${idx}`}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductHeader({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.about}</p>
    </div>
  );
}