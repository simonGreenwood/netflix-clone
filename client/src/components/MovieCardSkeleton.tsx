import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card boxSize={250} borderRadius={10}>
      <Skeleton boxSize={250} borderRadius={10}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
