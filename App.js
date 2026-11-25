
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import VitrineScreen from './src/screens/VitrineScreen';
import DetalhesProdutoScreen from './src/screens/DetalhesProdutoScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Navegação da aba Vitrine
function VitrineStack({
  carrinho,
  onAdicionarCarrinho,
}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0F172A',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Vitrine"
        component={VitrineScreen}
        options={{
          title: 'Vitrine Tech',
        }}
      />

      <Stack.Screen
        name="DetalhesProduto"
        options={{
          title: 'Detalhes do Produto',
        }}
      >
        {(props) => (
          <DetalhesProdutoScreen
            {...props}
            carrinho={carrinho}
            onAdicionarCarrinho={onAdicionarCarrinho}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  // Adicionar produto ao carrinho
  function adicionarCarrinho(produto) {
    setCarrinho((listaAtual) => [
      ...listaAtual,
      produto,
    ]);
  }

  // Remover produto pelo índice
  function removerCarrinho(index) {
    setCarrinho((listaAtual) =>
      listaAtual.filter((item, i) => i !== index)
    );
  }

  // Limpar carrinho após finalizar pedido
  function finalizarCarrinho() {
    setCarrinho([]);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#64748B',

          tabBarStyle: {
            height: 62,
            paddingBottom: 8,
            paddingTop: 6,
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E2E8F0',
          },

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },

          tabBarIcon: ({
            focused,
            color,
            size,
          }) => {
            let nomeIcone;

            if (route.name === 'VitrineTab') {
              nomeIcone = focused
                ? 'storefront'
                : 'storefront-outline';
            } else {
              nomeIcone = focused
                ? 'cart'
                : 'cart-outline';
            }

            return (
              <Ionicons
                name={nomeIcone}
                size={size}
                color={color}
              />
            );
          },
        })}
      >

        {/* Primeira aba: Vitrine */}
        <Tab.Screen
          name="VitrineTab"
          options={{
            title: 'Vitrine',
            headerShown: false,
          }}
        >
          {() => (
            <VitrineStack
              carrinho={carrinho}
              onAdicionarCarrinho={adicionarCarrinho}
            />
          )}
        </Tab.Screen>

        {/* Segunda aba: Carrinho */}
        <Tab.Screen
          name="CarrinhoTab"
          options={{
            title: 'Carrinho',
            headerStyle: {
              backgroundColor: '#0F172A',
            },
            headerTintColor: '#FFFFFF',

            tabBarBadge:
              carrinho.length > 0
                ? carrinho.length
                : undefined,
          }}
        >
          {(props) => (
            <CarrinhoScreen
              {...props}
              carrinho={carrinho}
              onRemover={removerCarrinho}
              onFinalizar={finalizarCarrinho}
            />
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
