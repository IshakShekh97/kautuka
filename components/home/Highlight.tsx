const Highlight = () => {
  return (
    <div className="flex items-center max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-3 mt-10">
      <div className="flex-1 font-sans text-2xl font-black tracking-widest max-md:text-center">
        <p>
          We Provide best
          <br />
          Customer Experience
        </p>
      </div>
      <div className="w-1 h-20 bg-black dark:bg-white max-md:hidden"></div>
      <p className="px-5 text-muted-foreground text-center">
        We ensure our customer have the best sopping experience{" "}
      </p>
    </div>
  );
};

export default Highlight;
