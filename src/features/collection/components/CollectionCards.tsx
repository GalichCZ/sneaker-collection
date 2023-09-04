import { useGetSneakersQuery } from "@/store/api/sneakersApi";
import { ICard } from "@/Types/ICard";
import Blank from "../UI/Blank";
import Card from "../UI/Card";

const CollectionCards = () => {
  const { data, isLoading, isError } = useGetSneakersQuery({});

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return (
      <h2>
        Oops, something goes wrong...
        <br /> Try later
      </h2>
    );
  }

  if (data?.length === 0) {
    return <Blank />;
  }

  return (
    <div className="collection-grid">
      {data.map((card: ICard) => (
        <Card
          key={card._id}
          model={card.model}
          brand={card.brand}
          year={card.year}
          size={card.size}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default CollectionCards;
