import { SafeAreaView, Text, View, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Post from "../components/home/post";
import { useRouter } from "expo-router";
import { useState, useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Home() {
  const router = useRouter();
  const context = useContext(PostContext);
  if (!context) return null;

  const { posts } = context;
  const [selected, setSelected] = useState('latest');

  const sortedPosts = [...posts].sort((a, b) =>
    selected === "latest" ? b.id - a.id : a.id - b.id
  );
  console.log("sortedPosts.length:", sortedPosts.length);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.profileArea}>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => router.push("/user")}
          >
            <View style={styles.userName}>
                <Text style={{fontSize: 15, fontWeight: 600,}}>사용자1</Text>
            </View>
            <View>
              <Image 
                source={require('@/app/assets/teraLogo.png')}
                alt="User 1"
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.menu}>
            <View style={styles.array}>
              <TouchableOpacity onPress={()=>setSelected('latest')}>
                <Text
                  style={[
                    styles.tabText,
                    selected === 'latest' ? styles.activeText : styles.inactiveText,
                  ]}
                >
                  최신순
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setSelected('oldest')}>
                <Text
                  style={[
                    styles.tabText,
                    selected === 'oldest' ? styles.activeText : styles.inactiveText,
                  ]}
                >
                  작성순
                </Text>
              </TouchableOpacity>
            </View>
              <TouchableOpacity
                onPress={()=> router.push("/write")}
                style={styles.button}
              >
                  <Text style={styles.buttonText}>새 글 작성</Text>
              </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <ScrollView>
              <View style={styles.list}>
                {sortedPosts.map((post) => (
                  <View key={post.id}>
                    <TouchableOpacity
                      style={styles.object}
                      onPress={() => router.push({ pathname: "/read/[id]", params: { id: post.id.toString() } })}
                    >
                      <View style={styles.contentsPreview}>
                        <View style={{flex:1, paddingVertical:20, paddingHorizontal:8, gap: 8,}}>
                          <Text style={{fontSize:18, fontWeight:'bold'}}>{post.title}</Text>
                          <Text style={{width: '100%', fontSize:12, fontWeight:'bold', color:'#808080',}} numberOfLines={1}>{post.content}</Text>
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
                              <Text style={{fontSize: 12, fontWeight: 'bold', color:'#6C67FF'}}>{post.userId}</Text>
                            </View>
                            <View style={styles.textInfo}>
                              <Text style={{fontSize: 12, fontWeight: 'bold',}}>작성일</Text>
                              <Text style={{fontSize: 12, fontWeight: 'bold', color:'#6C67FF'}}>{post.id}</Text>
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
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    paddingTop: 78,
    paddingHorizontal: 20,
    paddingBottom: 41,
  },
  profileArea: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'flex-end',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
    
  },
  userName: {
    padding: 4,
    marginRight: 8,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  array: {
    flexDirection: 'row',
    gap: 8,
  },
  tabText: {
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  activeText: {
    color: 'black',
    borderBottomColor: 'black',
  },
  inactiveText: {
    color: '#808080',
    borderBottomColor: '#808080',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#6C67FF',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  contentsPreview: {
    flexDirection: 'row',
  },
  object: {
      flexDirection: 'column',
      paddingHorizontal: 12,
      paddingBottom: 12,
      gap: 8,
      borderBottomWidth: 1,
    },
  list: {
    paddingTop: 48,
    gap: 48,
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
