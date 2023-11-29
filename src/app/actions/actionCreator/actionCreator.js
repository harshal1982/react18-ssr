export const startActionCreator = () => ({
  type: 'rotate',
  payload: true,
});

export const stopActionCreator = () => ({
  type: 'rotate',
  payload: false,
});
