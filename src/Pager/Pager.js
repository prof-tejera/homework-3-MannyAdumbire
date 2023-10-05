import Button from "components/Button/Button";
import "./Pager.css";

const Pager = ({ numpages = 10, ...pagerprops }) => {

  // Destructure the pagerprops
  const { onClick, active, text, type, disabled, id } = pagerprops;

  // Create an array of page numbers based on numpages
  const pages = [...Array(numpages).keys()].map(i => i + 1);

  console.info(active)

  return (
    <div className="pager">
      {pages.map(page => (
        <Button
          key={page}
          type={type || "button"}
          disabled={disabled}
          id={id ? `${id}-${page}` : undefined}
          active={active === page}
          onClick={() => onClick && onClick(page)}
          text={text ? text(page) : String(page)}
        />
      ))}
    </div>
  );
};

export default Pager;