import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

// Define a type to ensure correct props are passed
type TabIconProps = IconProps<ComponentProps<typeof Ionicons>['name']> & {
    focused: boolean;
    color: string;
};

export const Icons = {
    home: ({ style, focused, color, ...props }: TabIconProps) => (
        <TabBarIcon
            {...props}
            style={style}
            color={color}
            name={focused ? 'home' : 'home-outline'}
        />
    ),
    menu: ({ style, focused, color, ...props }: TabIconProps) => (
        <TabBarIcon
            {...props}
            style={style}
            color={color}
            name={focused ? 'menu' : 'menu-outline'}
        />
    ),
    scanner: ({ style, focused, color, ...props }: TabIconProps) => (
        <TabBarIcon
            {...props}
            style={style}
            color={color}
            name={focused ? 'scan' : 'scan-outline'}
        />
    ),
    notification: ({ style, focused, color, ...props }: TabIconProps) => (
        <TabBarIcon
            {...props}
            style={style}
            color={color}
            name={focused ? 'notifications' : 'notifications-outline'}
        />
    ),
    profile: ({ style, focused, color, ...props }: TabIconProps) => (
        <TabBarIcon
            {...props}
            style={style}
            color={color}
            name={focused ? 'person' : 'person-outline'}
        />
    ),
};


