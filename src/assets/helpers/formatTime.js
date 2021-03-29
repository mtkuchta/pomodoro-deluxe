export const formatTime = (miliseconds) => {
  const minutes = Math.floor(miliseconds / (1000 * 60));
  const seconds = miliseconds / 1000 - minutes * 60;
  // const time = `${(minutes >= 10 ? minutes : '0' + minutes) + '<span>:</span>' + (seconds >= 10 ? seconds : '0' + seconds)}`;

  return (
    <div>
      {minutes >= 10 ? minutes : '0' + minutes}
      <span>:</span>
      {seconds >= 10 ? seconds : '0' + seconds}
    </div>
  );
};
