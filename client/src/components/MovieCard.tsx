import { Card, CardBody, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  image: string;
}

const MovieCard = ({ title, image }: Props) => {
  return (
    <Card boxSize={250} padding={0} columnGap={0} borderRadius={10}>
      <Image src={image} borderTopRadius={"10"}></Image>
      <CardBody>
        <Text fontSize={"lg"}>{title}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
