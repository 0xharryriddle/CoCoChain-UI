import * as React from 'react';

import CustomThemeContext from '../context/CustomThemeContext';

export default function useTheme() {
    const theme = React.useContext(CustomThemeContext);

    return theme;
}
