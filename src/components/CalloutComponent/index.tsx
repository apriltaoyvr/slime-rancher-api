'use client'
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Callout, Strong } from '@radix-ui/themes';

export default function CalloutComponent() {
  return (
    <Callout.Root>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        Currently only contains <Strong>Slime Rancher 1</Strong> information.
      </Callout.Text>
    </Callout.Root>
  );
}
