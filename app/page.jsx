import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex-center flex-col w-full">
      <h1 className="head_text text-center">
        Discover and share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Open source AI Prompt Generation</p>
      <Feed />
    </section>
  );
};
export default Home;
