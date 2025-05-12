import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import BackButton from "../components/common/backButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import {PostContext} from '@/app/context/PostContext'

export default function Write() {
  const [inputHeight, setInputHeight] = useState(0);

  const router = useRouter(); // 페이지 이동에 사용
  const context = useContext(PostContext);
  if (!context) return null;

  const { posts, setPosts } = context;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("1");

  const handlePost = () => {
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      userId,
    };

    setPosts([...posts, newPost]);

    setTitle("");
    setContent("");

    router.push("/home");
  }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.writeWrap1}>
                  <BackButton />
                  <TouchableOpacity style={styles.button} onPress={handlePost}>
                      <Text style={styles.buttonText}>게시</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.contents}>
                <View style={styles.writeWrap2}>
                    <TouchableOpacity style={styles.addImageButton}>
                        <Ionicons name="image-outline" size={25} color="#6C67FF" />
                        <Text style={styles.addImageText}>이미지 첨부</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                      style={styles.title}
                      placeholder="제목 입력"
                      value={title}
                      onChangeText={setTitle}
                    />
                    <TextInput
                      style={[styles.content, {height: Math.max(40, inputHeight)}]}
                      value={content}
                      placeholder="내용 입력"
                      multiline
                      onChangeText={setContent}
                      onContentSizeChange={(e) =>
                        setInputHeight(e.nativeEvent.contentSize.height)
                      }
                    />
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
  writeWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
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
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#6C67FF',
    gap: 10,
  },
  addImageText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6C67FF',
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    paddingVertical: 12,
    paddingLeft: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#BFBFBF',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#808080',
  },
  content: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#808080',
  },
  contents: {
    paddingTop: 8,
  }
})
