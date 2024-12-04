import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Text, Platform } from 'react-native';
import axios from 'axios';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const [characterName, setCharacterName] = useState('');
  const [characterInfo, setCharacterInfo] = useState(null);

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(`https://hp-api.onrender.com/api/characters/students`);
      // Modificação aqui para permitir busca apenas pelo primeiro nome
      const character = response.data.find(char => char.name.split(' ')[0].toLowerCase() === characterName.toLowerCase());
      setCharacterInfo(character);
    } catch (error) {
      console.error(error);
    }
  };

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
        <ThemedText type="title">Harry Potter Characters</ThemedText>
      </ThemedView>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nome do personagem"
        value={characterName}
        onChangeText={setCharacterName}
      />
      <Button title="Buscar Personagem" onPress={fetchCharacter} />
      
      {characterInfo && (
        <View style={styles.characterInfo}>
          <Text style={styles.infoText}>Nome: {characterInfo.name}</Text>
          <Text style={styles.infoText}>Espécie: {characterInfo.species}</Text>
          <Text style={styles.infoText}>Gênero: {characterInfo.gender}</Text>
          <Text style={styles.infoText}>Casa: {characterInfo.house}</Text>
          <Text style={styles.infoText}>Data de Nascimento: {characterInfo.dateOfBirth}</Text>
          <Text style={styles.infoText}>Ancestralidade: {characterInfo.ancestry}</Text>
          <Text style={styles.infoText}>Cor dos Olhos: {characterInfo.eyeColour}</Text>
          <Text style={styles.infoText}>Cor do Cabelo: {characterInfo.hairColour}</Text>
          <Text style={styles.infoText}>Madeira da Varinha: {characterInfo.wand.wood}</Text>
          <Text style={styles.infoText}>Núcleo da Varinha: {characterInfo.wand.core}</Text>
          <Text style={styles.infoText}>Comprimento da Varinha: {characterInfo.wand.length} cm</Text>
        </View>
      )}
      
      {/* O restante do seu código permanece aqui... */}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff', // Adicionando fundo branco para contraste
    color: '#000', // Cor do texto do input para contraste
  },
  characterInfo: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
});