"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

interface PropsNavbar {
  openOnboardingModal: () => void;
}

const Navbar = ({ openOnboardingModal }: PropsNavbar) => {
  return (
    <nav className={styles.top_navbar}>
      <ul>
        <li>
          <Link href="/">
            {/* TODO */}
            <Image
              src={"/logo.png"}
              alt="quickbet movies logo"
              width={164}
              height={42}
            />
          </Link>
        </li>
        <li>
          <Link href="/">Popular</Link>
        </li>
        <li>
          <Link href="/">Favorites</Link>
        </li>
      </ul>
      <button className={styles.btn_profile} onClick={openOnboardingModal}>
        <Image
          src={"/icons/profile.svg"}
          alt="Profile logo"
          width={32}
          height={32}
        />
      </button>
    </nav>
  );
};

export default Navbar;
