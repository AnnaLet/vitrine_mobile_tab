
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function DetalhesProdutoScreen({
  route,
  navigation,
  onAdicionarCarrinho,
  carrinho,
}) {
  const { produto } = route.params;

  const jaAdicionado = carrinho.some(
    (item) => item.id === produto.id
  );

  function adicionar() {
    onAdicionarCarrinho(produto);

    Alert.alert(
      'Sucesso!',
      'Produto adicionado ao carrinho.'
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.categoria}>
        {produto.categoria}
      </Text>

      <Text style={styles.titulo}>
        {produto.nome}
      </Text>

      <Text style={styles.descricao}>
        {produto.descricao}
      </Text>

      <Text style={styles.preco}>
        R$ {produto.preco.toFixed(2).replace('.', ',')}
      </Text>

      <TouchableOpacity
        style={[
          styles.botao,
          jaAdicionado && styles.botaoAdicionado,
        ]}
        onPress={adicionar}
      >
        <Text style={styles.botaoTexto}>
          {jaAdicionado
            ? 'Adicionar mais uma unidade'
            : 'Adicionar ao Carrinho'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>
          Voltar para a Vitrine
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 22,
  },
  categoria: {
    color: '#2563EB',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 20,
  },
  preco: {
    fontSize: 26,
    color: '#059669',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  botao: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  botaoAdicionado: {
    backgroundColor: '#1D4ED8',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botaoVoltar: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textoVoltar: {
    color: '#334155',
    fontWeight: 'bold',
  },
});
