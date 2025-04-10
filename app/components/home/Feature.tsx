import Image from "next/image";

const Feature = ({ text }: { text: string }) => {
  return (
    <li className="mt-4 flex items-start gap-2 font-figtree">
      <Image
        src={"/sprinkle.svg"}
        width={20}
        height={20}
        alt="sprinkle emoji"
      />
      <p>{text}</p>
    </li>
  );
};

export default Feature;
