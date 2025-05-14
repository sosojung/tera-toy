import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

type PostProps = {
    title: string;
    content: string;
    writer: string;
    date: string;
    like: number;
    comment: number;
    onPress: () => void;
}

export default function Post() {
    return (
        <View>
            <View>
                <Text>바다와 나비</Text>
                <Text>아무도 그에게 수심을 일러준 일이 없기...</Text>
            </View>
            <View></View>
            <View>
                <Text>by 사용자1</Text>
                <Text>작성일 2025/04/07</Text>
                <Text>❤️ 3</Text>
                <Text>💬 1</Text>
            </View>
        </View>
    )
} // Post 컴포넌트가 정적이며, props 타입을 지정해두고 사용하지 않고 있습니다
