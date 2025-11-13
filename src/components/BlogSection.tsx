import Blog from "./Blog";
import blogImg1 from "../../public/img/01-2.png";
import blogImg2 from "../../public/img/01-1.png";
import blogImg3 from "../../public/img/01.png";

const BlogSection = () => {
  return (
    <section className="relative sm:mt-96 mt-72 lg:mt-[620px] 2xl:mt-[580px]">
      <div className="container px-3 mx-auto flex flex-col md:gap-[200px] sm:gap-32 gap-20">
        <Blog
          blogImg={blogImg1}
          num="01"
          left={true}
          subTitle="GEt Started"
          title="What level of  hiker are you?"
          des="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? "
        ></Blog>
        <Blog
          blogImg={blogImg2}
          num="02"
          left={false}
          subTitle="Hiking Essentials"
          title="Picking the right Hiking Gear!"
          des="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. "
        ></Blog>
        <Blog
          blogImg={blogImg3}
          num="03"
          left={true}
          subTitle="where you go is the key"
          title="Understand Your Map & Timing"
          des="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.. "
        ></Blog>
      </div>
    </section>
  );
};

export default BlogSection;
