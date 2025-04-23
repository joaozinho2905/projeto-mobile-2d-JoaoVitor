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
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
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
          Para: ROBERTO CARLOS
        </ThemedText>
        <ThemedText>
          Valor: R$9,23
        </ThemedText>
      </Collapsible>
      <Collapsible title="01/03/2025">
        <ThemedText>
          Para: PAULO DA SILVA
        </ThemedText>
        <ThemedText>
          Valor: R$12,00
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
