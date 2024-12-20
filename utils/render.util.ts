import { Colors } from "@/constants/Colors";
import { Icons } from "@/constants/Icons";
import { RouteName } from "./types.util";

export function renderIcon(routeName: string, focused: boolean) {
  const color = focused ? Colors.light.primary : Colors.gray[400];

  if (routeName in Icons) {
    return Icons[routeName as RouteName]({
      color,
      focused,
      name: routeName as any,
    });
  }

  return null; // Return a default icon or handle the error as needed
}
