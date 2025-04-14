import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Extrato</ThemedText>
      </ThemedView>
      <ThemedText>Ultimas transferências.</ThemedText>
      <Collapsible title="10/04/2025">
        <ThemedText>
          Para: JOSEFINA DE SOUZA MENDES
        </ThemedText>
        <ThemedText>
          Valor: R$31,00
        </ThemedText>
      </Collapsible>
      <Collapsible title="08/04/2025">
        <ThemedText>
          Para: VALDIR DE PAULA DE SOUZA   
        </ThemedText>
        <ThemedText>
          Valor: R$21,98
        </ThemedText>
      </Collapsible>
      <Collapsible title="05/04/2025">
        <ThemedText>
          Para: JOAO VITOR ANHAIA DOS SANTOS
          </ThemedText>
          <ThemedText>
            Valor:R$45,90
            </ThemedText> 
      </Collapsible>
      <Collapsible title="01/04/2025">
        <ThemedText>
          Para: JUREMA DOS SANTOS
          </ThemedText>
          <ThemedText>
            Valor: R$7,60
          </ThemedText>
      </Collapsible>
      <Collapsible title="27/03/2025">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="01/03/2025">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
