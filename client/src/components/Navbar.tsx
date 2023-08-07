import { HStack, Image, Link } from "@chakra-ui/react";
import netflix from "../assets/ntfl.png";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack
      width={"100vw"}
      backgroundColor={"#000000"}
      justifyContent={"space-between"}
    >
      <Image src={netflix} height={"70px"} marginX={5}></Image>
      <HStack className="links" gap={5}>
        <Link>Home</Link>
        <Link>Series</Link>
        <Link>Films</Link>
        <Link>New & Popular</Link>
        <Link>My List</Link>
        <Link>Browse by Languages</Link>
      </HStack>
      <SearchInput></SearchInput>
    </HStack>
  );
};

export default Navbar;
