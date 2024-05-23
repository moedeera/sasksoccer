const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  buttonColor = "black",
  children,
}) => {
  return (
    <div
      className={` p-6 rounded-lg shadow-md`}
      style={{ backgroundColor: backgroundColor }}
    >
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block  text-white rounded-lg px-4 py-2 hover:opacity-80`}
        style={{ backgroundColor: buttonColor }}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};
export default InfoBox;
