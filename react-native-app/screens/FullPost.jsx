import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";
import { getArticlesById } from "../API/articles";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [acticle, setArticle] = React.useState();
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });
    getArticlesById(id)
      .then(async (data) => {
        setArticle(await data.json());
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: acticle.articleImage }} />
      <PostText>{acticle.text}</PostText>
    </View>
  );
};
