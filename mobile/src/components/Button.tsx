import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base"

interface ButtonProps extends IButtonProps {
  title: string
  type?: 'primary' | 'secondary'
}

export function Button({ title, type="primary", ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === "secondary" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "secondary" ? "red.500" : "yellow.500"
      }}
      _loading={{
        _spinner: { color: "black" }
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === "secondary" ? "white" : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}