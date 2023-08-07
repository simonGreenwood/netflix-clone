import { Card, CardBody, Text } from "@chakra-ui/react";

interface Props {
  title: string;
}

const MovieCard = ({ title }: Props) => {
  return (
    <Card boxSize={300} padding={0} columnGap={0}>
      <CardBody>
        <Text>{title}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
