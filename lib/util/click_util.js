export const getCursorXPos = (event, rect) => {
  const x = (event.clientX - rect.left) / (rect.right - rect.left) * event.currentTarget.width;
  return x;
};

export const getCursorYPos = (event, rect) => {
  const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * event.currentTarget.height;
  return y;
};