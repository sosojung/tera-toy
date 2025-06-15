import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import BackButton from "../components/common/backButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import commonStyles, { buttonStyles } from "../styles/common";
import UserPost from "../components/UserPost";

export default function Write() {
    const router = useRouter();
    const context = useContext(PostContext);
    const { id } = useLocalSearchParams();

    const { posts } = context;
    const post = posts.find((post) => post.id === post.id);
  
    if (!post) {
        return <Text>게시물을 찾을 수 없습니다.</Text>;
    }
  
    const currentUserId = "사용자1";
    const userPosts = posts.filter((post) => post.userId === currentUserId);

    return (
        <SafeAreaView style={commonStyles.container}>
          <View style={commonStyles.wrapper}>
            <View style={commonStyles.writeWrap1}>
              <BackButton />
            </View>
            <View style={styles.profileArea}>
              <Image 
                source={require('@/app/assets/teraLogo.png')}
                alt="User 1"
                style={{ width: 80, height: 80, borderRadius: 100 }}
              />
              <View style={styles.userName}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{currentUserId}</Text>
              </View>
            </View>
            <View style={styles.menue}>
              <Text style={{fontSize:15, fontWeight:'bold', borderBottomWidth: 1, paddingBottom: 4}}>
                작성글
              </Text>
              <TouchableOpacity
                style={buttonStyles.button}
                onPress={()=> router.push("/write")}
              >
                <Text style={buttonStyles.buttonText}>새 글 작성</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contents}>
              {userPosts.map((post) => (
                <UserPost key={post.id} post={post} />
              ))}
            </View>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profileArea: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 24,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    userName: {
      padding: 4,
      marginTop: 8,
    },
    menue: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    contents: {
      paddingTop: 48,
      gap: 48,
    },
})
  