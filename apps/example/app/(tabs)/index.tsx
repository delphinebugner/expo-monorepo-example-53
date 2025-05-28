import { Button, ContextMenu } from '@expo/ui/swift-ui';
import { Image, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText type="subtitle">Webview Test ❌</ThemedText>
      <WebView source={{ uri: 'https://www.appjs.co' }} style={{ height: 150 }} />
      <ThemedText type="subtitle">Expo UI Button Test ✅</ThemedText>
      <Button
        systemImage="person.crop.circle.badge.xmark"
        onPress={() => console.log('Pressed1')}
        variant="bordered"
      >
        Working Great Button
      </Button>
      <ThemedText type="subtitle">Context Menu Test ❌</ThemedText>
      <ContextMenu style={{ width: 150, height: 50 }}>
        <ContextMenu.Items>
          <Button
            systemImage="person.crop.circle.badge.xmark"
            onPress={() => console.log('Pressed1')}
          >
            Hello
          </Button>
          <Button variant="bordered" systemImage="heart" onPress={() => console.log('Pressed2')}>
            Love it
          </Button>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button variant="bordered" style={{ width: 150, height: 50 }}>
            Show Menu
          </Button>
        </ContextMenu.Trigger>
      </ContextMenu>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
