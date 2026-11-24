
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import { PRODUTOS } from '../data/produtosFallback';
import ProdutoCard from '../components/ProdutoCard';

export default function VitrineScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vitrine Tech</Text>

      <Text style={styles.subtitulo}>
        Encontre os melhores produtos para você!
      </Text>

      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <ProdutoCard
            produto={item}
            onPress={() =>
              navigation.navigate('DetalhesProduto', {
                produto: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
    paddingHorizontal: 16,
  },
  subtitulo: {
    color: '#64748B',
    fontSize: 14,
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 18,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 25,
  },
});
