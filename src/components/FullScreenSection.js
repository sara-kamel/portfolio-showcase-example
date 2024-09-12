import * as React from "react";
import { Container, VStack } from "@chakra-ui/react";


const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="700px" {...boxProps} >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
