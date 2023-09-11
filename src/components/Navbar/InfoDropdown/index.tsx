'use client'
import { DropdownMenu, Button, Text } from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function InfoDropdown({pathname}: {pathname: string}) {
  const isInfoRoute = pathname === '/info';

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger color={isInfoRoute ? 'crimson' : 'gray'}>
        <Button variant='ghost'>
          <Text size='2' weight='medium'>
            Info
          </Text>
          <CaretDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item asChild>
          <Link href='/info'>Home</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item asChild>
          <Link href='/info/slime'>Slimes</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild>
          <Link href='/info/food'>Food</Link>
        </DropdownMenu.Item>
        {/* <DropdownMenu.Item asChild>
          <Link href='/location'>Locations</Link>
        </DropdownMenu.Item> */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}