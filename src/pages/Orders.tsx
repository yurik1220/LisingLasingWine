import React from 'react';
import { IonBadge, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Orders: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Orders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Orders</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList inset>
          <IonItem button detail>
            <IonLabel>
              <h2>Order #1024</h2>
              <p>3 items • $84.00</p>
            </IonLabel>
            <IonBadge color="secondary">Shipped</IonBadge>
            <IonNote slot="end">Aug 22</IonNote>
          </IonItem>
          <IonItem button detail>
            <IonLabel>
              <h2>Order #1023</h2>
              <p>2 items • $56.00</p>
            </IonLabel>
            <IonBadge color="tertiary">Processing</IonBadge>
            <IonNote slot="end">Aug 19</IonNote>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Orders;


