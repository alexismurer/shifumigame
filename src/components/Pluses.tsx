const Pluses = () => {
  return (
    <div className="absolute w-screen h-screen grid grid-cols-5 gap-4">
      {Array.from({ length: 20 }, (_, index) => {
        return (
          <div
            key={index}
            className="text-white p-4 flex text-5xl font-thin items-center justify-center opacity-5 hover:opacity-30 ease-in-out duration-[850ms] cursor-default"
          >
            +
          </div>
        );
      })}
    </div>
  );
};

export default Pluses;
