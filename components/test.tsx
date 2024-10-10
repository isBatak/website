import { DrawerRoot, DrawerRootProps } from '@chakra-ui/react';

export function Test({ children, defaultOpen, ...rest }: DrawerRootProps) {
  return (
    <DrawerRoot defaultOpen={defaultOpen} {...rest}>
      {children}
    </DrawerRoot>
  );
}
