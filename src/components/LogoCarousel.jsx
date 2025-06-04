import { clientsImgs } from "../constants";

const LogoCarousel = () => {
  const duplicatedImgs = clientsImgs.concat(clientsImgs);
  return (
    <div className="w-full mt-8 overflow-hidden group">
      <div className="flex w-[200%] items-center gap-16 animate-marquee group-hover:paused">
        {duplicatedImgs.map((clientsImg, index) => (
          <img
            key={index}
            src={clientsImg.imgPath}
            alt={`clientsImg-${index}`}
            className="w-[103px] h-16 object-contain transition-all duration-300 ease-in-out hover:scale-110  cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
