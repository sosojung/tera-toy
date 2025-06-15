import { SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import BackButton from "../components/common/backButton";
import Ionicons from '@expo/vector-icons/Ionicons';
import {PostContext} from '@/app/context/PostContext'
import commonStyles, { buttonStyles } from "../styles/common";
import { v4 as uuidv4 } from 'uuid';

export default function Write() {
  const [inputHeight, setInputHeight] = useState(40);

  const router = useRouter();
  const context = useContext(PostContext);

  const { posts, addPost } = context;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("1");

  const handlePost = () => {
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const newPost = {
      id: uuidv4(),
      title,
      content,
      userId,
    };

    addPost(newPost);

    setTitle("");
    setContent("");

    router.push("/home");
  }

    return (
        <SafeAreaView style={commonStyles.container}>
          <View style={commonStyles.wrapper}>
            <View style={commonStyles.writeWrap1}>
                  <BackButton />
                  <TouchableOpacity style={buttonStyles.button} onPress={handlePost}>
                      <Text style={buttonStyles.buttonText}>게시</Text>
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
                      style={[
                        styles.content,
                        {height: Math.max(40, inputHeight)}
                      ]}
                      value={content}
                      placeholder="내용 입력"
                      multiline
                      onChangeText={setContent}
                      onContentSizeChange={(e) =>
                        setInputHeight(e.nativeEvent.contentSize.height)
                      }
                      underlineColorAndroid="transparent"
                    />
                </View>
              </View>
          </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  writeWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
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
