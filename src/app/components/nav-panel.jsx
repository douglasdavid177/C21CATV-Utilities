import { AnimatePresence, motion } from "motion/react";

export default function NavPanel(props) {
  return (
    <div>
      <AnimatePresence>
        {props.openMenu && (
          <motion.div
            key={"bg"}
            className="fixed inset-0"
            style={{
              background: "rgb(0 0 0/0.5)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => {
              if (!props.openMenu) return;
              props.setOpenMenu(false);
            }}
          ></motion.div>
        )}
        {props.openMenu && (
          <motion.div
            key={"panel"}
            className=" fixed top-0 right-0 bottom-0"
            style={{
              width: "min(72.5vw, 25rem)",
              zIndex: 10,
              backdropFilter: "blur(0.7rem)",
              background: "rgb(18 18 18/0.75)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.3, 1, 0.4, 1] }}
            onClick={(e) => {
              // Without this, clicking anywhere inside the nav panel would also register on the overlay behind it,
              // therefore closing the nav panel prematurely
              e.stopPropagation();
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
