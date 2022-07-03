const Card = (props) => {
    const { book } = props;
    const { title, author_name, img_cover, publish_date } = book;
    return (
      <>
        <img src={img_cover} className="container-img" alt={`${title}-Cover`} />
        <h5>Title: {title}</h5>
        <h5>Published Date: {publish_date}</h5>
        <h5>Author: {author_name}</h5>
      </>
    );
  };
  
  export default Card;