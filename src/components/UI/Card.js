const Card = (props) => {
  const classes = props.classes;
  const allClasses = classes + " shadow-2xl bg-white rounded-xl p-8";
  return <div className={allClasses}>{props.children}</div>;
};

export default Card;
