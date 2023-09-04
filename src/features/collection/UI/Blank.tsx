import blankImage from "@/assets/svgs/blank.svg";

const Blank = () => {
  return (
    <div className="collection-blank">
      <img src={blankImage} alt="blank_image" />
      <p>
        Seem’s like you still didn’t add <br /> any new sneaker to your
        collection
      </p>
    </div>
  );
};

export default Blank;
