import Image from "next/image";

export default function Home() {
  const animals = [
    {
      id: 1,
      name: "elefante",
      img: "https://images.pexels.com/photos/3739327/pexels-photo-3739327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "arara",
      img: "https://images.pexels.com/photos/1004517/pexels-photo-1004517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "leão",
      img: "https://images.pexels.com/photos/6056019/pexels-photo-6056019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "macaco",
      img: "https://images.pexels.com/photos/3162755/pexels-photo-3162755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "gato",
      img: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "cachorro",
      img: "https://images.pexels.com/photos/5255202/pexels-photo-5255202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      name: "cavalo",
      img: "https://images.pexels.com/photos/19009610/pexels-photo-19009610/free-photo-of-fotografia-animal-fotografia-de-animais-castanho-marrom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const orderAnimals = animals.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Boas-vindas ao Reels 4 Kids!
        </p>
      </div>

      <div className="grid text-center">
        {orderAnimals.map((animal) => (
          <a
            href="/"
            className="w-screen group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            key={animal.id}
          >
            <Image
              src={animal.img}
              alt={animal.name}
              height={500}
              width={500}
              priority
              className="rounded"
            />
            <h2 className={`text-2xl font-semibold capitalize`}>
              {animal.name}
            </h2>
          </a>
        ))}
      </div>
    </main>
  );
}
