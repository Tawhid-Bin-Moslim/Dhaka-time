let Current_time = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  return (
    <p className="lead">
      This is the current time of Dhaka: {time} and today is: {date}
    </p>
  );
};
export default Current_time;
