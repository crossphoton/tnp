import "../SASS/_display.scss";

export default function Display(props) {
  const { collection } = props;

  return (
    <div className="display-flexbox">
      {collection.map((item, id) => {
        return (
          <a key={id} target="_blank" rel="noreferrer" href={item.url}>
            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={item.image}
              alt={item.name}
            />
          </a>
        );
      })}
    </div>
  );
}
