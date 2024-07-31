import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      ref={dropdownRef}
      animate={open ? "open" : "closed"}
      className="relative"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-end items-center gap-2 px-3 py-2 rounded-md font-Sofia bg-transparent"
      >
        <div>Product Features</div>
        <FiChevronDown
          className={`text-3xl transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        animate={open ? "open" : "closed"}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-accent shadow-xl absolute top-[120%] -right-24 w-48 overflow-hidden"
      >
        <Link to="/discover">
          <Option setOpen={setOpen} text="Discover" />
        </Link>
        <Link to="/connect">
          <Option setOpen={setOpen} text="Connect" />
        </Link>
        <Link to="/analytics">
          <Option setOpen={setOpen} text="Analytics" />
        </Link>
        <Link to="/payments">
          <Option setOpen={setOpen} text="Payments* (Beta)" />
        </Link>
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 font-bold whitespace-nowrap rounded-md hover:bg-black/80 text-slate-700 hover:text-white transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default NavDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
