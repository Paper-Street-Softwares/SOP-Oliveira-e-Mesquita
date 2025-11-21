export default function TeamMember(props) {
  const {
    img,
    alt,
    name,
    role,
    work,
    icon1,
    link1,
    icon2,
    link2,
    icon3,
    link3,
  } = props;

  return (
    <div className="flex flex-col items-center justify-between p-[20px] w-full tablet1:w-[45%] desktop1:w-[30%] desktop2:w-[25%] text-white">
      <div className="">
        <img
          alt={alt}
          src={img}
          className="w-[215px] h-[215px] desktop1:w-auto desktop1:h-auto rounded-full mb-[24px] "
        ></img>
      </div>
      <h1 className="text-paragraph5 font-bold text-center">{name}</h1>
      <p className="text-center text-paragraphLight tablet1:w-full mb-[8px] text-paragraph2">
        {role}
      </p>
      <div className="desktop2:h-[48px] flex flex-col justify-center">
        <p className="text-center text-paragraph2 text-paragraphLight tablet1:w-[70%] m-auto">
          {work}
        </p>
      </div>
    </div>
  );
}
