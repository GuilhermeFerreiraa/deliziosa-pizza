import { clsx } from 'clsx';
import { Pressable, PressableProps, Text } from 'react-native';

type CategoryProps = PressableProps & {
 title: string;
 isSelected?: boolean;
}

export default function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
 return (
  <Pressable className={clsx('bg-primary px-4 justify-center rounded-lg h-10', isSelected && 'border-2 border-primary bg-slate-100')} {...rest}>
   <Text className={clsx('text-slate-100 font-subtitle text-sm', isSelected && 'text-primary font-heading')}>
    {title}
   </Text>
  </Pressable>
 )
}