import React from 'react';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { cartOutline, cartSharp, personOutline, personSharp, wineOutline, wineSharp, listOutline, listSharp, informationCircleOutline, informationCircleSharp, peopleOutline, peopleSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  { title: 'Browse Wines', url: '/browse', iosIcon: wineOutline, mdIcon: wineSharp },
  { title: 'Cart', url: '/cart', iosIcon: cartOutline, mdIcon: cartSharp },
  { title: 'Orders', url: '/orders', iosIcon: listOutline, mdIcon: listSharp },
  { title: 'Profile', url: '/profile', iosIcon: personOutline, mdIcon: personSharp },
  { title: 'About the App', url: '/about', iosIcon: informationCircleOutline, mdIcon: informationCircleSharp },
  { title: 'Developers', url: '/developers', iosIcon: peopleOutline, mdIcon: peopleSharp }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>LisingLasing</IonListHeader>
          <IonNote>Elegance in every pour</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
