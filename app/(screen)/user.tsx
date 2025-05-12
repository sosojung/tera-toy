import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import BackButton from "../components/common/backButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Write() {
    const router = useRouter();
    const context = useContext(PostContext);

    if (!context) {
      return <Text>게시물을 불러올 수 없습니다. 다시 시도해 주세요.</Text>; // context가 null일 때 처리
    }

    const { posts } = context;
    const post = posts.find((post) => post.id === Number(post.id));

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.writeWrap1}>
              <BackButton />
            </View>
            <View style={styles.profileArea}>
              <Image 
                source={require('@/app/assets/teraLogo.png')}
                alt="User 1"
                style={{ width: 80, height: 80, borderRadius: 100 }}
              />
              <View style={styles.userName}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>사용자1</Text>
              </View>
            </View>
            <View style={styles.menue}>
              <Text style={{fontSize:15, fontWeight:'bold', borderBottomWidth: 1, paddingBottom: 4}}>
                작성글
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={()=> router.push("/write")}
              >
                <Text style={styles.buttonText}>새 글 작성</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contents}>
              <View style={styles.object}>
                <View style={styles.buttonArea}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.push({ pathname: "/update/[id]", params: { id: post!.id.toString() } })}
                  >
                    <Text style={styles.buttonText}>수정</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>삭제</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.contentsPreview}>
                  <View style={{flex:1, paddingVertical:20, paddingHorizontal:8, gap: 8,}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>바다와 나비</Text>
                    <Text style={{width: '100%', fontSize:12, fontWeight:'bold', color:'#808080',}} numberOfLines={1}>아무도 그에게 수심을 일러준 적이 없기에 흰나비는 도무지 바다가 무섭지 않았다</Text>
                  </View>
                  <Image 
                    source={require('@/app/assets/teraLogo.png')}
                    alt="User 1"
                    style={{ width: 84, height: 84, borderRadius: 8 }}
                  />
                  </View>
                  <View style={styles.info}>
                    <View style={styles.writeAndDate}>
                      <View style={styles.textInfo}>
                        <Text style={{fontSize: 12, fontWeight: 'bold',}}>by</Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color:'#6C67FF'}}>사용자1</Text>
                      </View>
                      <View style={styles.textInfo}>
                        <Text style={{fontSize: 12, fontWeight: 'bold',}}>작성일</Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color:'#6C67FF'}}>2025/04/07</Text>
                      </View>
                    </View>
                    <View style={styles.likeAndComment}>
                      <View style={styles.like}>
                        <AntDesign name="heart" size={14} color="#6C67FF" />
                        <Text style={{fontSize:10}}>3</Text>
                      </View>
                      <View style={styles.like}>
                        <MaterialCommunityIcons name="comment-text-outline" size={16} color="black" />
                        <Text style={{fontSize:10}}>1</Text>
                      </View>
                    </View>
                  </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // Container
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
    },
    wrapper: {
      width: "100%",
      height: "100%",
      paddingTop: 78,
      paddingHorizontal: 20,
      paddingBottom: 41,
    },
    writeWrap1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 4,
      paddingHorizontal: 12,
    },
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
    button: {
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 4,
      paddingHorizontal: 10,
      backgroundColor: '#6C67FF',
    },
    buttonText: {
      fontSize:15,
      fontWeight:'bold',
      color:'white',
    },
    contents: {
      paddingTop: 48,
    },
    object: {
      flexDirection: 'column',
      paddingHorizontal: 12,
      paddingBottom: 12,
      gap: 8,
      borderBottomWidth: 1,
    },
    buttonArea: {
      flexDirection: 'row',
      gap: 16,
    },
    contentsPreview: {
      flexDirection: 'row',
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
    },
    writeAndDate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 12,
    },
    textInfo: {
      flexDirection:'row',
      gap: 4,
    },
    likeAndComment: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
    },
    like: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    }
})
  