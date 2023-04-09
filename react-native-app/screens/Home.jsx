import React from "react";
import {
  Alert,
  Text,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import { getArticles } from "../API/articles";

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [articles, setArticles] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    getArticles()
      .then(async (articles) => setArticles(await articles.json()))
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={articles}
        renderItem={({ item: article }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: article.id,
                title: article.title,
              })
            }
          >
            <Post
              title={article.title}
              articleImage={article.articleImage}
              createdAt={article.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
