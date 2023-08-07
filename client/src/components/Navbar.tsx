import { HStack, Image } from "@chakra-ui/react";
import netflix from "./assets/netflix.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={netflix}></Image>
    </HStack>
  );
};

export default Navbar;
