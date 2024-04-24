import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { wrap } from "framer-motion";

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: 4,
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef();
  const [hide, setHide] = useState(0);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      console.log("smooth");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
const HeaderStyles ={
  backgroundColor:"#18181b",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
}

  return (
    <Box
    style={HeaderStyles}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={headerRef}
     
    >
      <Box color="white" maxWidth="90%" margin="0 auto">
        <Stack
        direction="row"
        flexWrap="wrap"
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          width= "100%"
        >
            <HStack>
              {socials.map((link) => (
                <a key={link.id} href={link.url}>
                  <FontAwesomeIcon icon={link.icon} size="2x" />
                </a>
              ))}
            </HStack>
      
      
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          
        </Stack>
      </Box>
    </Box>
   
  );
};
export default Header;
