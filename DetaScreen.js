import { View, Text, Image, Animated, Button } from "react-native";
import { useRef, useEffect } from "react";
import { useFavoritos } from "../context/FavoritesContext";

export default function DetailScreen({ route }) {
  const { toggleFavorito } = useFavoritos();
  const fade = useRef(new Animated.Value(0)).current;
  const producto = route.params;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  return (
    <Animated.View style={{ flex: 1, padding: 20, opacity: fade }}>
      <Image source={{ uri: producto.image }} style={{ width: "100%", height: 250, marginBottom: 15 }} />
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{producto.title}</Text>
      <Text style={{ marginVertical: 10 }}>{producto.description}</Text>
      <Text style={{ fontSize: 20 }}>💵 ${producto.price}</Text>
      <Button title="⭐ Agregar a Favoritos" onPress={() => toggleFavorito(producto)} />
    </Animated.View>
  );
}