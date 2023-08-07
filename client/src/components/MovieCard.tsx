import { Badge, Card, CardBody, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  image: string;
  vote_average: number;
}

const MovieCard = ({ title, image, vote_average }: Props) => {
  let color = vote_average > 7 ? "green" : vote_average > 5 ? "yellow" : "red";
  return (
    <Card boxSize={250} padding={0} columnGap={0} borderRadius={10}>
      <Image src={image} borderTopRadius={"10"}></Image>
      <CardBody>
        <Text fontSize={"lg"}>{title}</Text>
        <Badge
          colorScheme={color}
          fontSize={"14px"}
          borderRadius={"4px"}
          position={"absolute"}
          bottom={3}
          right={3}
        >
          {Math.round(vote_average)}
        </Badge>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
