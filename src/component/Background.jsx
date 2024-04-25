import { motion } from "framer-motion";
import { ImArrowRight } from "react-icons/im";
import { BiSolidDownArrow } from "react-icons/bi";
function Background() {
  const education = [
    {
      grade: "Primary",
      course: "N/A",
      name: "Pusok Elementary School",
      year: "N/A",
    },
    {
      grade: "Secondary",
      course: "N/A",
      name: "Matumbo Pusok School",
      year: "2009-2013",
    },
    {
      grade: "Tertiary",
      course: "Information Technology",
      name: "Datames Inst. of Computer Tech.",
      year: "2014-2016",
    },
  ];
  return (
    <div className="h-screen dark:bg-slate-900 dark:text-white">
      <div className="h-[10vh] flex items-center justify-center overflow-hidden">
        <motion.h2 
       initial={{y:50,opacity:0}}
       whileInView={{y:0,opacity:1,transition:{delay:0.1,duration:0.5, ease:"easeIn"}}}
       viewport={{once:true}}
        className="text-3xl font-bold decoration underline tracking-widest">Education</motion.h2>
      </div>
      <div className="h-[90vh] grid grid-cols-5">
        <div className="flex items-center justify-center overflow-hidden col-span-1">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { type: "spring", stiffness: 20 },
            }}
            viewport={{once:true, amount:0.5}}
            className="h-3/4 w-[2px] bg-orange-500"
          ></motion.span>
          <div className="h-3/4 flex flex-col justify-between text-5xl ml-2 text-green-500 ">
            <motion.i
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { type: "spring", stiffness: 50, delay: 0.2 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <ImArrowRight />
            </motion.i>
            <motion.i
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { type: "spring", stiffness: 50, delay: 0.2 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <ImArrowRight />
            </motion.i>
            <motion.i
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { type: "spring", stiffness: 50, delay: 0.2 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <ImArrowRight />
            </motion.i>
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-around">
          {education.map((list, key) => {
            return (
              <motion.div
                key={key}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 50, delay: 0.4 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="border rounded-2xl p-2 shadow-2xl"
              >
                <h2>
                  <span className="font-bold">Grade:</span>{" "}
                  <span className="font-semibold">{list.grade}</span>
                </h2>
                <h2>
                  <span className="font-bold">Course:</span>{" "}
                  <span className="font-semibold">{list.course}</span>
                </h2>
                <h2>
                  <span className="font-bold">Address:</span>{" "}
                  <span className="font-semibold">{list.name}</span>
                </h2>
                <h2>
                  <span className="font-bold">Year:</span>{" "}
                  <span className="font-semibold">{list.year}</span>
                </h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Background;