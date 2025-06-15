import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent } from 'react-native';
import { textStyles } from '@/app/styles/common';

type BackButtonProps = {
  label?: string;
  onPress?: (event: GestureResponderEvent) => void;
  textStyle?: object;
  containerStyle?: object;
};

export default function BackButton({
  label = '←나가기',
  onPress,
  textStyle = {},
  containerStyle = {},
}: BackButtonProps) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={onPress || (() => navigation.goBack())}
      style={[textStyles.container, containerStyle]}
    >
      <Text style={[textStyles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}