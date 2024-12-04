import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Como o App Funciona</ThemedText>
        <ThemedText>
          Este aplicativo permite que os usuários pesquisem personagens do universo Harry Potter.
          Ao digitar o primeiro nome de um personagem, o app busca dados de uma API pública e exibe
          informações relevantes, como espécie, gênero, casa, data de nascimento e detalhes da varinha.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre a API</ThemedText>
        <ThemedText>
          Os dados são obtidos da API do Harry Potter disponível em{' '}
          <ThemedText type="defaultSemiBold">https://hp-api.onrender.com/api/characters/students</ThemedText>.
          Esta API fornece informações sobre vários personagens da série Harry Potter,
          incluindo seus atributos e informações de fundo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 1: Experimente</ThemedText>
        <ThemedText>
          Edite <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> para ver as mudanças.
          Pressione{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          para abrir as ferramentas de desenvolvedor.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 2: Explore</ThemedText>
        <ThemedText>
          Toque na aba Explorar para aprender mais sobre o que está incluído neste app inicial.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Passo 3: Comece do zero</ThemedText>
        <ThemedText>
          Quando estiver pronto, execute{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> para obter um novo{' '}
          <ThemedText type="defaultSemiBold">diretório de app</ThemedText>. Isso moverá o atual{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> para{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});