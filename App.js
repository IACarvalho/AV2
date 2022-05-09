import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Routes from './src/routes'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#025E33',
    accent: '#9FEF86',
  },
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  )
}

export default App