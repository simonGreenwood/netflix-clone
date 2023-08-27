import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <Image
        src="/netflix.png"
        alt="Netflix logo"
        className="inline ml-3"
        width={125}
        height={50}
        priority
      />
      {
        // now add the actual navbar where you can go to other places etc.
      }
      <div className="inline">
        <ul className="inline">
          <li className="inline pl-5">Home</li>
          <li className="inline pl-5">Series</li>
          <li className="inline pl-5">Films</li>
          <li className="inline pl-5">New and Popular</li>
          <li className="inline pl-5">My List</li>
          <li className="inline pl-5">Browse by Languages</li>
        </ul>
      </div>
    </div>
  );
}
