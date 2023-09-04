import MeansButton from "@/UI/MeansButton";

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Welcome to a sneaker collector</h1>
      <p>
        This tool not only lets you showcase your prized sneaker collection but
        also provides you with the tools to curate, organize, and catalogue your
        sneakers like never before.
      </p>
      <MeansButton.Link path="collection">
        Start your new collection
      </MeansButton.Link>
    </div>
  );
};

export default MainContent;
