export const initialState = {
  products: {
    data: {
      id: 1,
      title: 'Neon Cloud',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 1200,
      image: [
        '/images/products/neon-cloud',
        '/images/products/neon-cloud-1',
        '/images/products/neon-cloud-2',
      ],
    },
    loading: {
      active: false,
      error: false,
    },
  },
};
