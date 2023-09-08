'use client';
import { Callout } from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';

const CalloutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Callout.Root color='blue'>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
};

export default CalloutComponent;
