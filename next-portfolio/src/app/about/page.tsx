import Image from 'next/image';

export default function About() {
  const musicItems = [
    {
      title: 'Eternal Groove',
      artist: 'Android52',
      image: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/5a/16/c8/5a16c8de-5582-4320-363f-a18405fdc134/artwork.jpg/500x500bb.webp'
    },
    {
      title: 'Montero',
      artist: 'Lil Nas X',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Lil_Nas_X_-_Montero.png'
    },
    {
      title: 'Pharmacy',
      artist: 'Galantis',
      image: 'https://i.imgur.com/DUgS3xY.jpg'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="relative w-full aspect-[4/5]">
            <Image 
              src="/img/portrait-large.jpg" 
              alt="Javan Wang" 
              fill
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Hey! I'm Javan, a Toronto-based product designer.</h1>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Born in Beijing, my family moved to Toronto when I was 10 years old. I have been practicing UX and product design since early 2014.
            </p>
            <p>
              I have a passion for solving complex systems and problems, with a strong focus on business strategy. My approach to human-centered design is informed by my background in HCI and engineering.
            </p>
            <p>
              When I'm not designing, I enjoy experimenting with different homecooking recipes, storytelling as a Dungeons & Dragons DM, and listening to City Funk, Hip Hop, and EDM.
              <a href="mailto:javan.z.wang@gmail.com" className="text-blue-600 hover:text-blue-800 underline ml-1">
                Let's chat!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Currently tuning into</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {musicItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                <Image 
                  src={item.image} 
                  alt={`${item.title} by ${item.artist}`} 
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-2 text-center text-gray-700">
                {item.title} by {item.artist}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 