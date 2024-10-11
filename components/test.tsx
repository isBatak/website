import { DrawerRoot, DrawerRootProps } from '@chakra-ui/react';

export function Test({ children, onOpenChange, ...rest }: DrawerRootProps) {
  return (
    <DrawerRoot onOpenChange={onOpenChange} {...rest}>
      {children}
    </DrawerRoot>
  );
}
