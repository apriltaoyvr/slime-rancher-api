import { Text } from "@radix-ui/themes";

export default function QueryDetails({name, type}: {name: string, type: string}) {
  return (
    <Text size='2' >
      {name}: <Text color='gray'>{type}</Text>
    </Text>
  );
}