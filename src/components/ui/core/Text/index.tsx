import { NativeText, NativeTextProps } from '@/libs'

interface TextProps extends NativeTextProps {
  children: string
}

export function Text(props: TextProps) {
  return <NativeText {...props}>{props.children}</NativeText>
}