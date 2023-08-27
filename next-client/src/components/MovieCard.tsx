import Image from "next/image";
interface Props {
  movie: any;
}
export default function MovieCard(props: Props) {
  return (
    <div className="flex flex-col">
      <Image
        src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
        alt="Netflix logo"
        className="inline ml-3"
        width={125}
        height={50}
      />
      title {props.movie.title}
    </div>
  );
}
