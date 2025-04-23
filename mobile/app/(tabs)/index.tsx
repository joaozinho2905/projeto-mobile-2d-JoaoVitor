import { Image, StyleSheet, Platform, Pressable, colorScheme, Text } from 'react-native';

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
        <ThemedText type="subtitle">Saldo em Conta</ThemedText>
        <ThemedText>R$129,89
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Área do dinheiro</ThemedText>
      </ThemedView>
      <ThemedView style={styles.espacobotao}>
      <ThemedView style={styles.botaoContainer}>
       <Pressable style={styles.botao} onPress={() => alert('')}>
        <Image
         source={require('@/assets/images/logopix.png')} 
         style={styles.botaoimagem}
        />
       </Pressable>
       <Text style={[styles.botaolegenda, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Pix</Text>
      </ThemedView>
      <ThemedView style={styles.botaoContainer}>
       <Pressable style={styles.botao} onPress={() => alert('')}>
        <Image
         source={require('@/assets/images/logodinheiro2.png')} 
         style={styles.botaoimagem}
        />
       </Pressable>
       <Text style={[styles.botaolegenda, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Transferir</Text>
      </ThemedView>
      <ThemedView style={styles.botaoContainer}>
       <Pressable style={styles.botao} onPress={() => alert('')}>
        <Image
         source={require('@/assets/images/logodinheiro.png')} 
         style={styles.botaoimagem}
        />
       </Pressable>
       <Text style={[styles.botaolegenda, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>Depositar</Text>
      </ThemedView>
      </ThemedView>
      <Pressable style={styles.botaoretangular} onPress={() => alert('')}>
       <Text style={styles.textobotaoretangular}>Meus cartões</Text>
      </Pressable>
      <Pressable style={styles.botaoretangular} onPress={() => alert('')}>
       <Text style={styles.textobotaoretangular}>Caixona</Text>
      </Pressable>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Novidades</ThemedText>
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
  espacobotao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 16,
    marginVertical: 20,
  },
  botaoContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  botao: {
    backgroundColor: '#51484F',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoimagem: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  botaolegenda: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  botaoretangular: {
    width: "100%",
    backgroundColor: '#808080', 
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    alignSelf: 'center',
  },
  textobotaoretangular: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
