import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia
          ante ipsum, et tempor nibh faucibus et. Donec pretium nunc quam, at
          egestas libero lobortis et. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Morbi lacinia ante ipsum, et tempor nibh faucibus et.
          Donec pretium nunc quam, at egestas libero lobortis et.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
