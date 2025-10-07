import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoLinkedin, mailOutline } from 'ionicons/icons';

const developers = [
  { name: 'Evan Andrei Lising', email: 'evanandrei.lising@gmail.com', linkedin: 'https://www.linkedin.com/in/julian-lising/' },
  { name: 'Developer Two', email: 'dev.two@example.com', linkedin: 'https://www.linkedin.com' }
];

const Developers: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Developers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Developers</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList inset>
          {developers.map((dev) => (
            <IonItem key={dev.email}>
              <IonLabel>
                <h2>{dev.name}</h2>
                <p>
                  <IonIcon icon={mailOutline} />{' '}
                  <a href={`mailto:${dev.email}`}>{dev.email}</a>
                </p>
                <p>
                  <IonIcon icon={logoLinkedin} />{' '}
                  <a href={dev.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Developers;


