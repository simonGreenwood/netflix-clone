import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input
          _focus={{
            borderColor: "#db0000",
          }}
          borderRadius={20}
          placeholder="Titles, people, genres"
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
