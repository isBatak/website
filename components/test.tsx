import { DrawerRoot, DrawerRootProps, SlotRecipeProps } from '@chakra-ui/react';
import { Dialog as ArkDialog } from '@ark-ui/react/dialog';
import type { Assign } from '@ark-ui/react';

type Slot = SlotRecipeProps<'drawer'>;
type Test = Assign<ArkDialog.RootBaseProps, SlotRecipeProps<'drawer'>>;
//    ^?

type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };

type T = Resolve<Slot>;
//   ^?

export function Test({ children, defaultOpen, ...rest }: DrawerRootProps) {
  return <DrawerRoot {...rest}>{children}</DrawerRoot>;
}
