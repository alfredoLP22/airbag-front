const TitleSection = ({ title }: { title: string }) => {
  return (
    <>
      <span className="w-3 h-3 bg-cod-gray-950 rounded-full ring-2 ring-cod-gray-900"></span>
      <h3 className="font-bold text-2xl text-cod-gray-950">
        {title}
      </h3>
    </>
  );
};

export default TitleSection;
