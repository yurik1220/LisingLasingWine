import React from 'react';
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Cart: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cart</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList inset>
          <IonItem>
            <IonLabel>
              <h2>No items yet</h2>
              <IonText color="medium">Start by adding your favorite wines.</IonText>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Cart;


