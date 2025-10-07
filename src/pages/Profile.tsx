import React from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList inset>
          <IonItem>
            <IonLabel>
              <h2>Evan Andrei Lising</h2>
              <p>evanandrei.lising@gmail.com</p>
            </IonLabel>
            <IonButton slot="end" color="secondary" fill="outline">Edit</IonButton>
          </IonItem>
          <IonItem button detail>Addresses</IonItem>
          <IonItem button detail>Payment Methods</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;


