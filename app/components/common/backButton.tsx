import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
    const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{flexDirection:'row', alignItems:'center'}} {/* 이와 같은 컴포넌트에서는 유지보수의 편의를 위해 stylesheet로 빼주는 것이 더 좋을 것 같습니다 */}
    >
      <Text style={{fontSize:15, fontWeight:'bold'}}>←나가기</Text> {/* 정적인 텍스트보다 label 같은 props를 통해 받는 것이 좋을 것 같습니다 또한 이 역시 공통 스타일로 분리시키는게 좋을 것 같습니다*/}
    </TouchableOpacity>
  );
} // 커스텀이 부가적으로 되지 않는 컴포넌트라서 확장성이 아쉬운 것 같습니다