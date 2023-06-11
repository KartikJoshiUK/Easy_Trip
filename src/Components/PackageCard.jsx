import { Link } from "react-router-dom";
const PackageCard = ({ data, width, gap, link }) => {
  return (
    <Link
      to={`/${link}/${data?.id}`}
      onClick={() => window.scrollTo(0, 0)}
      style={{
        width: width + "px",
        marginRight: gap + "px",
      }}
      className={`h-full shrink-0 cursor-pointer overflow-hidden rounded-md`}
    >
      <div className="aspect-square overflow-hidden rounded-t-md">
        <img
          src={data?.image}
          alt={data?.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-black text-white">
        <h6 className="text-center">{data?.name || data?.title}</h6>
      </div>
    </Link>
  );
};

export default PackageCard;
