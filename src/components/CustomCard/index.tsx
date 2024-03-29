import { useNavigate } from 'react-router-dom';
import parse from "html-react-parser";
import { notify } from 'react-notify-toast';
import {
  GAProductActions,
  GoogleAnalyticsEvents,
} from 'interface/GoogleAnalytics';
import useGATracking from 'Hooks/useGATracking';
import { Product } from 'interface/Products';

import styles from './styles.module.scss';

function CustomCard({ image, name, price, description, _id, stock }: Product) {
  const navigate = useNavigate();
  const gaTracking = useGATracking(GoogleAnalyticsEvents.Product);

  const handleViewProduct = () => {
    navigate(`/product/${_id}`);
    gaTracking(GAProductActions.Entered, name);
  };

  const handleNoStock = () => notify.show('Sin Stock', 'warning');
  return (
    <div
      className={`${styles.stock} ${styles.glow} ${
        stock <= 0 ? styles.noStock : ''
      }`}
      onClick={stock <= 0 ? handleNoStock : handleViewProduct}
      role='contentinfo'
    >
      <div className={styles.container}>
        <img
          className={styles.img}
          src={image[0]}
          alt={name}
          onClick={handleViewProduct}
        />
        <div className={styles.text}>
          <h4>{name}</h4>
          <div className={styles.description}> {parse(description || "")}</div>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
