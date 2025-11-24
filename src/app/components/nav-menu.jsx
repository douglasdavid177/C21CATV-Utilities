import { AnimatePresence, motion } from "motion/react";
// import { Link } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import { useTransitionRouter } from "next-view-transitions";
import {
  AiFillCalendar,
  AiFillHome,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { NavMenuLink } from "./buttons";
import { useEffect, useRef } from "react";
// import { NavMenuLink } from "./buttons";

export default function NavMenu(props) {
  let path = usePathname();
  let tRouter = useTransitionRouter();

  const scrollContainer = useRef(null);
  useEffect(() => {
    if (!scrollContainer.current || !props.openMenu) {
      return;
    }
    const cur = scrollContainer.current;
    cur.scrollTo({ top: 0, behavior: "instant" });
  }, [props.openMenu]);
  return (
    <div
      style={
        {
          // viewTransitionName: "nav-menu",
        }
      }
    >
      <AnimatePresence>
        {props.openMenu && (
          <motion.div
            key={"bg"}
            className="fixed inset-0"
            style={{
              background: "rgb(0 0 0/0.5)",
              viewTransitionName: "nav-menu-bg",
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.35, opacity: { duration: 0.35 } }}
            onClick={() => {
              if (!props.openMenu) return;
              props.setOpenMenu(false);
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {
        <motion.div
          key={"panel"}
          className=" fixed //inset-[20vh] top-0 bottom-0 //top-[50%] //max-h-[75vh] //left-[50%] //p-8 //rounded-2xl backdrop-blur-sm"
          style={{
            //width: "min(75vw, 45rem)",
            width: "min(75vw, 24rem)",
            // backdropFilter: "blur(0.7rem)",
            // background: "rgb(18 18 18/0.75)",
            //translate: "-50% -50%",
            // viewTransitionName: "nav-menu-panel",
            z: 10,
          }}
          // initial={{ scale: "150%", y: "20%", opacity: 0 }}
          // animate={{ scale: "100%", y: "0%", opacity: 1 }}
          // exit={{ scale: "120%", y: "10%", opacity: 0 }}

          initial={{ x: "-100%", opacity: 0.99 }}
          // animate={{ x: "0%", opacity: 1 }}
          // exit={{ x: "-100%", opacity: 0.99 }}
          animate={{
            x: props.openMenu ? "0%" : "-100%",
          }}
          transition={{
            duration: 1.5,
            ease: [0.3, 1, 0.4, 1],
            x: {
              duration: props.openMenu ? 0.5 : 0.5,
              ease: [0.3, 1, 0.4, 1],
            },
          }}
          onClick={(e) => {
            // Without this, clicking anywhere inside the nav panel would also register on the overlay behind it,
            // therefore closing the nav panel prematurely
            e.stopPropagation();
          }}
        >
          {/* <div className="absolute inset-0 backdrop-blur-sm -z-10"></div> */}
          <div
            ref={scrollContainer}
            className="h-full w-full p-8 //backdrop-blur-sm flex flex-col overflow-y-auto overflow-x-hidden scroll-smooth"
            style={{
              background: "rgb(18 18 18/0.75)",

              viewTransitionName: "nav-menu-panel-content",
            }}
          >
            Menu
            <hr />
            <div className="flex flex-col items-start mt-8 mb-8 gap-0">
              <NavMenuLink text={"Home"} icon={<AiFillHome />} url={"/"} />

              <NavMenuLink
                text={"Floor Schedule"}
                icon={<AiFillCalendar />}
                url={"/floor-schedule"}
              />
              <NavMenuLink
                text={"About"}
                icon={<AiFillQuestionCircle />}
                url={"/about-page"}
              />
            </div>
            <div className="//h-full mt-auto grid grid-cols-[1fr_max-content] grid-rows-[max-content_max-content_max-content_max-content] gap-3 items-center justify-end overflow-x-visible mb-4">
              <div className="row-start-1 col-span-2 mb-8">
                Contact Office
                <hr className="" />
              </div>
              <p className="col-start-1 row-start-2">
                150 Pinellas Bayway S, St. Petersburg, FL, 33715{" "}
              </p>
              <Link
                className="text-main-gold col-start-2 row-start-2"
                href={
                  "https://www.google.com/maps/place/Century+21+Coastal+Alliance/@27.6904439,-82.7230879,17z/data=!3m1!4b1!4m6!3m5!1s0x88c31db2a5e63301:0x735a49c72ee75b8e!8m2!3d27.6904392!4d-82.720513!16s%2Fg%2F11vsbr0ysm!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                }
                target="_blank"
              >
                Map
              </Link>
              <p className="col-start-1 row-start-3">727-867-8633 </p>
              <a
                className="text-main-gold col-start-2 row-start-3"
                href="tel:+1-727-867-8633"
              >
                Call
              </a>
              <p className="row-start-4 col-start-1">
                <span>c21coastalalliancetv</span>
                <br />
                <span>@gmail.com</span>
              </p>

              <a
                href="mailto:c21coastalalliancetv@gmail.com"
                target="_blank"
                className="row-start-4 col-start-2 text-main-gold"
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
}
