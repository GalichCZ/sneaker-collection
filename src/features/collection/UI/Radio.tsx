import { FC, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Calendar, Dollar, Interval } from "@/UI/Icons";
import RadioButton from "./RadioButton";

interface Props {
  className?: string;
}

const Radio: FC<Props> = ({ className }) => {
  const sorts = [
    { icon: <Calendar />, label: "Oldest Year" },
    { icon: <Interval />, label: "Smallest Size" },
    { icon: <Dollar />, label: "Lowest Price" },
  ];
  const [sort, setSort] = useState(sorts[0]);

  console.log(sort);

  return (
    <RadioGroup value={sort} onChange={setSort}>
      <div className="collection-radio">
        <RadioGroup.Label>Sort by:</RadioGroup.Label>
        <RadioGroup.Option value={sorts[0]}>
          {({ active, checked }) => (
            <RadioButton
              className={`${active ? "checked" : ""} collection-button`}
              label={sorts[0].label}
              icon={sorts[0].icon}
            />
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value={sorts[1]}>
          {({ active, checked }) => (
            <RadioButton
              className={`${active ? "checked" : ""} collection-button`}
              label={sorts[1].label}
              icon={sorts[1].icon}
            />
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value={sorts[2]}>
          {({ active, checked }) => (
            <RadioButton
              className={`${active ? "checked" : ""} collection-button`}
              label={sorts[2].label}
              icon={sorts[2].icon}
            />
          )}
        </RadioGroup.Option>
      </div>
    </RadioGroup>
  );
};

export default Radio;
