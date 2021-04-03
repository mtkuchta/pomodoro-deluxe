export const formatTime = (time) => {
  const seconds = (time / 1000) % 60;
  const minutes = Math.floor(time / (1000 * 60));
  return (
    <div>
      {minutes >= 10 ? minutes : '0' + minutes}
      <span>:</span>
      {seconds >= 10 ? seconds : '0' + seconds}
    </div>
  );
};
