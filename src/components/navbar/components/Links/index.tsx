import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GAStoreActions,
  GoogleAnalyticsEvents,
} from 'interface/GoogleAnalytics';
import useGATracking from 'Hooks/useGATracking';
import { SortingType } from 'context/Product/constants';

import arrow from 'assets/arrowLeft.svg';
import styles from './styles.module.scss';
import { SORT_TYPE } from 'screens/ProductIndex/constants';
import NavItem from '../NavItem';

interface Props {
  onClose: () => void;
}

function Links({ onClose }: Props) {
  const [currentSelected, setCurrentSelected] = useState(SortingType.All);

  const gaTracking = useGATracking(GoogleAnalyticsEvents.Store);

  const navigate = useNavigate();

  const handleLink = (id: number) => {
    navigate(`/productcategory/${id}`);
    gaTracking(GAStoreActions.Filtered, SortingType[id]);
    setCurrentSelected(id);
  };

  const handleAbout = () => {
    navigate(`/AboutUs`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.arrow}>
          <img src={arrow} alt="volver" onClick={onClose} /> <p>Navegacion</p>
        </div>
        <div className={styles.about}>
          <div>
            {SORT_TYPE.map((sort, index) => (
              <div onClick={onClose} key={sort.id}>
                <NavItem
                  onClick={() => handleLink(sort.id)}
                  label={sort.name}
                  isActive={currentSelected === sort.id}
                />
              </div>
            ))}
          </div>
          <div onClick={onClose}>
            <NavItem onClick={handleAbout} label={'Sobre Nosotros'} />
            <NavItem onClick={() => console.log('help')} label={'help'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
