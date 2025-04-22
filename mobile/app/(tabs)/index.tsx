import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#808080', dark: '#808080' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-image-removebg.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo, João!</ThemedText>
     
    </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Conta</ThemedText>
        <ThemedText>R$129,89
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pix</ThemedText>
      </ThemedView>
      <ThemedText style={styles.buttOn}>
      <button> oi</button>
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cartão de crédito</ThemedText>
        <ThemedText>
          R$1.389,56
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
