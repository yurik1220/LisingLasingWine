import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About the App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About the App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList inset>
          <IonItem>
            <IonIcon slot="start" icon={informationCircleOutline} color="secondary" />
            <IonLabel>
              <h2>LisingLasing</h2>
              <p>Discover, select, and order exquisite wines with an elegant experience.</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonNote>
              Designed with deep reds, gold accents, and refined typography to reflect the world of fine wine.
            </IonNote>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default About;


