import { View, Text } from 'react-native';

interface SkillCardProps {
  emoji: string;
  name: string;
}

export function SkillCard({ emoji, name }: SkillCardProps) {
  return (
    <View className="flex-row items-center bg-white p-4 mb-3 rounded-xl border border-gray-200">
      <Text className="text-2xl mr-3">{emoji}</Text>
      <Text className="text-base text-gray-900 font-medium">{name}</Text>
    </View>
  );
}