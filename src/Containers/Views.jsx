import ViewCard from "../Components/ViewCard";
import { motion } from "framer-motion";
import { FadeIn } from "../Constants/framer";
import Error404 from "../Pages/Error404";
import { useContext } from "react";
import { HomeContext } from "../Pages/Home";
const Views = () => {
  const { views } = useContext(HomeContext);
  if (views === undefined)
    return (
      <section id="views">
        <Error404 message="Something went wrong!" link="/" linkText="Go Back" />
      </section>
    );
  return (
    <section
      id="views"
      className="relative flex min-h-[100vh] flex-col items-center justify-center gap-16 p-6 text-white"
    >
      <h1 className="mt-10 text-4xl font-bold md:text-6xl">{views.title}</h1>
      <motion.div
        initial="rest"
        animate="slideIn"
        exit="hide"
        className="flex flex-wrap items-start justify-center gap-4 md:gap-10"
      >
        {views.cards.map((card, index) => (
          <ViewCard key={card.name} data={card} delayIndex={index} />
        ))}
      </motion.div>
      {/* BG IMAGE */}
      <div className="absolute inset-0 -z-50 overflow-hidden">
        <motion.img
          key={views.bgImage}
          initial={FadeIn.initial}
          animate={FadeIn.animate}
          exit={FadeIn.exit}
          className="h-full w-full object-cover"
          src={views.bgImage}
          alt="states-bg"
        />
      </div>
      <div className="absolute inset-0 -z-40 bg-black bg-opacity-50"></div>
    </section>
  );
};

export default Views;
