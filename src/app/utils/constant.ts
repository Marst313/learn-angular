import { IAllAlbum, IListTypeCategory, IMusicPlaylist } from './type';

export const PlaylistMusic: IMusicPlaylist[] = [
  {
    name: 'yestoheaven',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYXhXaegDnAZSfWHMYCai6WGII3uGtsnGzg&s',
    title: 'Yes To Heaven',
    singer: 'Lana Del Rey',
    fileName: 'yestoheaven.mp3',
  },
  {
    name: 'thunder',
    image:
      'https://www.pluggedin.com/wp-content/uploads/2020/01/Imagine_Dragons__Thunder__Large.jpg-1024x587.jpeg',
    singer: 'Imagine Dragons',
    title: 'Thunder',
    fileName: 'Imagine Dragons - Thunder.mp3',
  },
];

export const ListTypeCategory: IListTypeCategory[] = [
  {
    name: 'all',
    no: 1,
  },
  {
    name: 'music',
    no: 2,
  },
  {
    name: 'podcasts',
    no: 3,
  },
];

export const allMusic: IAllAlbum[] = [
  {
    number: 1,
    type: 'music',
    name: 'steven coconut treez',
    title: 'Lagu Santai',
    image: 'https://i.scdn.co/image/ab67616d00001e0263b199c21941c0a2edd291df',
  },
  {
    number: 2,
    type: 'music',
    name: 'steven coconut treez',
    title: 'Kembali',
    image: 'https://i.ytimg.com/vi/hlKjZbzMc8w/maxresdefault.jpg',
  },
  {
    number: 3,
    type: 'music',
    name: 'steven coconut treez',
    title: 'Bebas Merdeka',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cb/21/f2/cb21f2b9-40be-1fb4-fb16-44fe356c4098/cover.jpg/1200x1200bf-60.jpg',
  },
  {
    number: 4,
    type: 'music',
    name: 'John Mayer',
    title: 'New Light',
    image: 'https://i.scdn.co/image/ab67616d0000b27321f02a52720857a42bba5417',
  },
  {
    number: 5,
    type: 'music',
    name: 'Ed Sheeran',
    title: 'Shape of You',
    image: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96',
  },
  {
    number: 6,
    type: 'music',
    name: 'Coldplay',
    title: 'Fix You',
    image:
      'https://upload.wikimedia.org/wikipedia/en/b/b1/Coldplay_-_Fix_You.jpg',
  },
  {
    number: 7,
    type: 'music',
    name: 'Maroon 5',
    title: 'Memories',
    image: 'https://i.scdn.co/image/ab67616d0000b27329133644b285f9014b4b3402',
  },
  {
    number: 8,
    type: 'podcasts',
    name: 'TED Talks Daily',
    title: 'The Science of Happiness',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/0b/ea/af/0beaaf0e-6f94-997a-b595-686844ea208a/mza_714436907127715928.jpg/1200x1200bf-60.jpg',
  },
  {
    number: 9,
    type: 'podcasts',
    name: 'The Joe Rogan Experience',
    title: 'Elon Musk Interview',
    image: 'https://i.scdn.co/image/ab6765630000ba8ac78127c49f76022559ef3527',
  },
  {
    number: 10,
    type: 'podcasts',
    name: 'The Daily',
    title: 'Understanding the Economy',
    image:
      'https://www.investopedia.com/thmb/F0ESJtmxPJpxD9Ub_FCCKJqdlEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economy.asp-ADD-SOURCE-9f40b23c92a743cc9c08fa5d17043fe2.jpg',
  },
  {
    number: 11,
    type: 'podcasts',
    name: 'Stuff You Should Know',
    title: 'The History of Coffee',
    image: 'https://i.scdn.co/image/ab6765630000ba8a863cc2d69ef7958af5cca4b5',
  },
  {
    number: 12,
    type: 'podcasts',
    name: 'Freakonomics Radio',
    title: 'The Hidden Side of Everything',
    image: 'https://i.scdn.co/image/ab6765630000ba8ad8cbc1b0e35fb151ae472695',
  },
  {
    number: 13,
    type: 'podcasts',
    name: '99% Invisible',
    title: 'The Pruitt-Igoe Myth',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfRed7ibxkS2M1lS2u8RQkWh4Vu51liXK4Q&s',
  },
  {
    number: 14,
    type: 'podcasts',
    name: 'How I Built This',
    title: 'Airbnb: Joe Gebbia',
    image: 'https://i.scdn.co/image/ab67656300005f1f7766e182b12fd85537d3b776',
  },
  {
    number: 15,
    type: 'podcasts',
    name: 'Radiolab',
    title: 'The Wonder of Animals',
    image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Radiolab_logo.jpg',
  },
  {
    number: 16,
    type: 'podcasts',
    name: 'The Moth',
    title: 'True Stories Told Live',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_HpZJz8Y08qShWE5h-H2BM5e5U53x9WTxKZjbcps7KF5oBq8-cp-EDYZ82BrWz9YOA4A&usqp=CAU',
  },
  {
    number: 17,
    type: 'podcasts',
    name: 'Planet Money',
    title: 'How To Start A Startup',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/4a/70/18/4a7018be-cad8-6440-e1ac-04f6355844a7/mza_17773332374488416462.jpg/1200x1200bf-60.jpg',
  },
];
