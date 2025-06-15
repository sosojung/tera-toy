import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { buttonStyles } from "../styles/common";
import { Post } from "@/app/types/Post";

type UserPostProps = {
  post: Post;
};

export default function UserPost({ post }: UserPostProps) {
    const router = useRouter();

    return (
        <View style={styles.object}>
            <View style={styles.buttonArea}>
                <TouchableOpacity
                    style={buttonStyles.button}
                    onPress={() => {
                        console.log("post.id", post.id)
                        router.push(`/update/${post.id}`)}
                    }
                >
                    <Text style={buttonStyles.buttonText}>수정</Text>
                </TouchableOpacity>
                <TouchableOpacity style={buttonStyles.button}>
                    <Text style={buttonStyles.buttonText}>삭제</Text>
                </TouchableOpacity>
            </View>
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
    )
}

const styles = StyleSheet.create({
    object: {
      flexDirection: 'column',
      paddingHorizontal: 12,
      paddingBottom: 12,
      gap: 8,
      borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
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
  