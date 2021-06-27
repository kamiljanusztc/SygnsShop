export const initialState = {
  products: {
    data: [
      {
        id: 1,
        title: 'CLOUD 9',
        content: 'Cloud 9 is part of the series “Le Petit Prince” that draws graphical and lyrical inspiration from the same book by Antoine de Saint-Exupéry.',
        price: 350,
        image: [
          '/images/products/neon-cloud.jpg',
          '/images/products/neon-cloud-1.jpg',
          '/images/products/neon-cloud-2.jpg',
        ],
        quantity: 1,
      },
      {
        id: 2,
        title: 'BOOM',
        content: 'The neon writings in this series are specifically made in memory of Roy Lichtenstein, who based his style on an important pillar of mass communication: comics.',
        price: 495,
        image: [
          '/images/products/boom.jpg',
          '/images/products/boom-1.jpg',
          '/images/products/boom-2.jpg',
        ],
        quantity: 1,
      },
      {
        id: 3,
        title: 'LETTER EDITION',
        content: 'With our Letter Edition you can throw together your message in neon by ordering separate neon letters.',
        price: 65,
        image: [
          '/images/products/letter-edition.jpg',
          '/images/products/letter-edition-1.jpg',
          '/images/products/letter-edition-2.jpg',
        ],
        quantity: 1,
      },
      {
        id: 4,
        title: 'COSMIC II',
        content: 'Cosmic II is part of the series “Le Petit Prince” that draws graphical and lyrical inspiration from the same book by Antoine de Saint-Exupéry.',
        price: 1200,
        image: [
          '/images/products/cosmic.jpg',
          '/images/products/cosmic-1.jpg',
          '/images/products/cosmic-2.jpg',
        ],
        quantity: 1,
      },
      {
        id: 5,
        title: 'ROCK ON!',
        content: 'Our hands are a homage to the most famous cartoon figure in the world: the Mickey Mouse! With it`s black ears, red pants and white hands, it has three simple characteristics that make it unmistakably.',
        price: 250,
        image: [
          '/images/products/rock-on.jpg',
          '/images/products/rock-on-1.jpg',
          '/images/products/rock-on-2.jpg',
        ],
        quantity: 1,
      },
      {
        id: 6,
        title: 'VOUCHER',
        content: 'If you are still looking for a personal and special gift, this is the right place. From now on, you can give away individual neon letters and symbols with our sygns gift voucher, without having to decide in advance.',
        price: 1200,
        image: [
          '/images/products/voucher.jpg',
          '/images/products/voucher-1.jpg',
          '/images/products/voucher-2.jpg',
        ],
        quantity: 1,
      },
      {
        id: 7,
        title: 'CONVERTER',
        content: 'This Neon power supply can be used in conjunction with our glass neons in any colour and diameter.',
        price: 69,
        image: [
          '/images/products/converter.jpg',
          '/images/products/converter-1.jpg',
          '/images/products/converter-2.jpg',
        ],
        quantity: 1,
      },
      {
        id: 8,
        title: 'FLAMINGO',
        content: 'A souvenir from summer time which we`re not quite ready yet to give up! Our flamingo is handmade from pink glass, and placed into an acrylic 360° glass box.',
        price: 296,
        image: [
          '/images/products/flamingo.jpg',
          '/images/products/flamingo-1.jpg',
          '/images/products/flamingo-2.jpg',
        ],
        quantity: 1,
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
