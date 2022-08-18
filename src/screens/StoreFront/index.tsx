import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGATracking from "Hooks/useGATracking";
import {
  GAStoreActions,
  GoogleAnalyticsEvents,
} from "interface/GoogleAnalytics";

import { SortingType } from "context/Product/constants";
import { SORT_TYPE } from "./constants";

import styles from "./styles.module.scss";
import Item from "./components/Item";

function StoreFront() {
  const [currentSelected, setCurrentSelected] = useState(SortingType.All);

  const gaTracking = useGATracking(GoogleAnalyticsEvents.Store);
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    navigate(`/productcategory/${id}`);
    gaTracking(GAStoreActions.Filtered, SortingType[id]);
    setCurrentSelected(id);
  };

  return (
    <div className={styles.container}>
      {SORT_TYPE.map((sort, index) => (
        <div key={sort.id}>
          <Item
            onClick={() => handleSelect(sort.id)}
            name={sort.name}
            isSelected={currentSelected === sort.id}
            img={sort.img}
          />
          {index !== SORT_TYPE.length - 1 && (
            <span className={styles.separator}>|</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default StoreFront;
