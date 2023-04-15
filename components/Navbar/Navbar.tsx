import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Dropdown } from "@nextui-org/react";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>
          <Dropdown>
            <Dropdown.Button flat color="secondary">
              Menu
            </Dropdown.Button>
            <Dropdown.Menu
              color="secondary"
              aria-label="Actions"
              css={{ $$dropdownMenuWidth: "280px" }}
            >
              <Dropdown.Section title="Discover">
                <Dropdown.Item>
                  <Link href="/buy" className={styles.link}>
                    Collection
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/sell" className={styles.link}>
                    Sell
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/earn" className={styles.link}>
                    Earn
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className={styles.link} href={`/profile/${address}`}>
                    Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/embed" className={styles.link}>
                    revoke.cash
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="https://twitter.com/AuraExchange" className={styles.link} target="_blank">
                    Twitter
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="https://comms.auraexchange.org/" className={styles.link} target="_blank">
                    Comms 🛰️
                  </Link>
                </Dropdown.Item>
              </Dropdown.Section>
            </Dropdown.Menu>
          </Dropdown>
          <div className={styles.navMiddle}>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
