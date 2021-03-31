export const formatTime = (time) => {
  // const minutes = Math.floor(miliseconds / (1000 * 60));
  const minutes = Math.floor(time);
  const seconds = Math.floor((time % 1) * 60);
  // const time = `${(minutes >= 10 ? minutes : '0' + minutes) + '<span>:</span>' + (seconds >= 10 ? seconds : '0' + seconds)}`;

  return (
    <div>
      {minutes >= 10 ? minutes : '0' + minutes}
      <span>:</span>
      {seconds >= 10 ? seconds : '0' + seconds}
    </div>
  );
};
