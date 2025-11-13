const Subtitle = ({text}:any) => {
  return (
    <div className="flex items-center sm:gap-8 gap-6">
      <div className="lg:w-[72px] sm:w-14 w-10 h-0.5 bg-[rgb(251,215,132)]"></div>
      <div className="uppercase text-[rgb(251,215,132)] font-gilroy sm:text-lg text-xs font-bold sm:tracking-[6px] tracking-widest">{text}</div>
    </div>
  );
};

export default Subtitle;
