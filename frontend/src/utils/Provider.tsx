import { ColorModeProvider } from "@/components/ui/color-mode";
import theme from "@/config/fontsConfig";
import { ChakraProvider } from "@chakra-ui/react";

function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

export default Provider;
