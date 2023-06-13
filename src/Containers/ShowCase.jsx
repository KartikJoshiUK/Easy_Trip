import React, { useContext } from "react";
import PackageCard from "../Components/PackageCard";
import { PackageContext } from "../Pages/Package";

const ShowCase = ({ keyName }) => {
  const { packageData } = useContext(PackageContext);
  return (
    <div className="group relative flex h-full w-full max-w-[1000px] items-center justify-center gap-2 overflow-hidden p-6 [&>*]:flex-1">
      <PackageCard
        key={packageData?.details?.[keyName]?.[0]?.name}
        link={keyName}
        data={packageData?.details?.[keyName]?.[0]}
      />
      <PackageCard
        key={packageData?.details?.[keyName]?.[1]?.name}
        link={keyName}
        data={packageData?.details?.[keyName]?.[1]}
      />
      <PackageCard
        key={packageData?.details?.[keyName]?.[2]?.name}
        link={keyName}
        data={packageData?.details?.[keyName]?.[2]}
      />
    </div>
  );
};

export default ShowCase;
