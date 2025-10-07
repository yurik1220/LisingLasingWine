import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { pricetagOutline, starOutline } from 'ionicons/icons';

const wineCategories = [
  { title: 'Red Wines', subtitle: 'Cabernet, Merlot, Malbec', image: 'https://images.unsplash.com/photo-1524593166156-312f362cada5?auto=format&fit=crop&w=1200&q=80' },
  { title: 'White Wines', subtitle: 'Chardonnay, Sauvignon Blanc', image: 'https://images.unsplash.com/photo-1514362546441-fbb9cab972b9?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Sparkling', subtitle: 'Champagne, Prosecco, Cava', image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Rosé', subtitle: 'Dry to Sweet', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80' }
];

const featuredProducts = [
  { name: 'Reserva Cabernet 2018', price: '$28', rating: '4.6', image: 'https://images.unsplash.com/photo-1430165558479-de3cf8cf1478?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Chardonnay Barrel 2020', price: '$24', rating: '4.4', image: 'https://images.unsplash.com/photo-1514362538525-5f46a8e0c6e2?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Brut Nature', price: '$32', rating: '4.7', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80' }
];

const BrowseWines: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Browse Wines</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Browse Wines</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid fixed>
          <IonRow>
            {wineCategories.map((cat) => (
              <IonCol size="12" sizeMd="6" sizeLg="6" key={cat.title}>
                <IonCard mode="md" button routerLink="/browse">
                  <IonImg src={cat.image} alt={cat.title} style={{ height: 180, objectFit: 'cover' }} />
                  <IonCardHeader>
                    <IonCardSubtitle>{cat.subtitle}</IonCardSubtitle>
                    <IonCardTitle>{cat.title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonList inset>
          {featuredProducts.map((p) => (
            <IonItem key={p.name} button>
              <IonImg style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8, marginRight: 12 }} src={p.image} alt={p.name} />
              <IonLabel>
                <h2 style={{ fontFamily: 'Playfair Display, serif', marginBottom: 2 }}>{p.name}</h2>
                <p style={{ opacity: .8 }}>Elegant and balanced</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                  <IonChip color="secondary" outline>
                    <IonIcon icon={pricetagOutline} />
                    <IonLabel>{p.price}</IonLabel>
                  </IonChip>
                  <IonChip color="tertiary" outline>
                    <IonIcon icon={starOutline} />
                    <IonLabel>{p.rating}</IonLabel>
                  </IonChip>
                </div>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Discover Terroirs</IonCardTitle>
                  <IonCardSubtitle>Curated selections from around the world</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Explore regional specialties with tasting notes and perfect pairings.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default BrowseWines;


