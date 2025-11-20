import { View, Text, FlatList, Image } from "react-native";
import { useFavoritos } from "../context/FavoritesContext";

export default function FavScreen() {
  const { favoritos } = useFavoritos();
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Tus Helados Favoritos</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Image source={{ uri: item.image }} style={{ width: 70, height: 70, marginRight: 10 }} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}