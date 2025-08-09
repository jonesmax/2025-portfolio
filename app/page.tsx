"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import dbdData from "./perks_killers_survivors.json";

type Perk = { name: string; description?: string; image?: string };
type Killer = { name: string; image?: string };
type DbdData = { perks?: Perk[]; killers?: Killer[] };

const typedData = dbdData as unknown as DbdData;

const PERK_DATA_BY_NAME = new Map(
  (typedData?.perks ?? []).map((p) => [String(p.name).toLowerCase(), p])
);

const KILLER_IMAGE_BY_NAME = new Map(
  (typedData?.killers ?? []).map((k) => [String(k.name).toLowerCase(), k.image])
);

// Configurable variables
const PROFILE_NAME = "Farrah Moan";
const TWITCH_CHANNEL = "farrahrized";
const PROFILE_PIC = "https://static-cdn.jtvnw.net/jtv_user_pictures/e2d25766-8d05-4a9e-a077-9091fd1d0604-profile_image-300x300.png"
const PROFILE_BANNER = "https://static-cdn.jtvnw.net/jtv_user_pictures/4e24494c-846c-4caf-88b1-a62f28797f0a-profile_banner-480.png";

// About section content
const ABOUT_SECTION = `hiiii Divas! The highlight of S9, Farrah Moan, is now on Twitch! She/her. Reality Tv personality, Makeup artist, Entertainer extraordinaire! Some might call me a professional loop queen on Dead By Daylight (haha) Welcome to my Twitch Channel! Thank you for being here :) booking@FarrahMoan.com`;

// Select 3 popular killers with 2 builds each (perk names only)
const SELECTED_KILLER_BUILDS = [
  {
    name: "Nurse",
    builds: [
      {
        name: "Gen Regression",
        perks: [
          "Pop Goes the Weasel",
          "Scourge Hook: Pain Resonance",
          "Deadlock",
          "Corrupt Intervention",
        ],
      },
      {
        name: "Info & Snowball",
        perks: ["Lethal Pursuer", "Tinkerer", "No Way Out", "Bamboozle"],
      },
    ],
  },
  {
    name: "Wraith",
    builds: [
      {
        name: "Stealth & Chase",
        perks: [
          "Lethal Pursuer",
          "Bamboozle",
          "Save the Best for Last",
          "No Way Out",
        ],
      },
      {
        name: "Regression",
        perks: ["Pop Goes the Weasel", "Deadlock", "Surge", "Corrupt Intervention"],
      },
    ],
  },
  {
    name: "Trapper",
    builds: [
      {
        name: "Control & Carry",
        perks: ["Agitation", "Brutal Strength", "Corrupt Intervention", "Deadlock"],
      },
      {
        name: "Tracking",
        perks: [
          "Barbecue &amp; Chilli",
          "Surge",
          "Thanatophobia",
          "Sloppy Butcher",
        ],
      },
    ],
  },
];

const ALL_KILLERS_BY_NAME = new Map(
  (typedData?.killers ?? []).map((k) => [String(k.name).toLowerCase(), k])
);

const KILLER_STATS = SELECTED_KILLER_BUILDS.filter((k) =>
  ALL_KILLERS_BY_NAME.has(k.name.toLowerCase())
);

const TAB_CONFIG = [
  {
    label: "DBD Stats",
    icon: "https://deadbydaylight.wiki.gg/images/1/10/IconPerks_corruptIntervention.png",
    type: "killers",
  },
  {
    label: "Other",
    icon: "https://deadbydaylight.wiki.gg/images/1/10/IconPerks_corruptIntervention.png",
    items: ["Stream Info", "Gaming Setup", "Schedule", "Community", "Highlights", "VODs"],
  },
];

// Social media links and icons
const SOCIALS = [
  {
    label: "Twitch",
    url: "https://twitch.tv/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitch.svg",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg",
  },
  {
    label: "Tiktok",
    url: "https://www.tiktok.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg",
  },
  {
    label: "Discord",
    url: "https://discord.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
  },
  {
    label: "YouTube",
    url: "https://youtube.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPerk, setSelectedPerk] = useState<{name: string, description: string, icon: string} | null>(null);

  return (
    <div className={styles.pageRoot}>
      <div className={styles.centerRow}>
        <div
          className={styles.bannerCommon}
          style={{ backgroundImage: `url('${PROFILE_BANNER}')` }}
        >
          {/* Profile Image Circle */}
          <Image
            src={PROFILE_PIC}
            alt="Profile"
            width={150}
            height={150}
            className={styles.profileImage}
          />
          <div className={styles.nameOverlay}>
            <span className={styles.profileName}>{PROFILE_NAME}</span>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        {/* Twitch Player, Chat, and About Me */}
        <div className={styles.topRow}>
          <div className={`${styles.playerContainer} ${styles.accentCard}`}>
            <iframe
              className={styles.playerFrame}
              src={`https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`}
              allowFullScreen={true}
              frameBorder={0}
              scrolling="no"
            ></iframe>
          </div>
          {/* Chat Container */}
          <div className={styles.chatCol}>
            <div className={`${styles.chatCard} ${styles.accentCard}`}>
              <iframe
                className={styles.chatFrame}
                src={`https://www.twitch.tv/embed/${TWITCH_CHANNEL}/chat?darkpopout&parent=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`}
                frameBorder={0}
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Tabs and tab content with chat */}
        <div className={styles.tabsSection}>
          {/* Tabs */}
          <div className={styles.tabsNav}>
            {TAB_CONFIG.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={styles.tabButton}
                type="button"
                style={{
                  borderBottom:
                    activeTab === idx
                      ? "2px solid rgb(152, 152, 152)"
                      : "2px solid transparent",
                  fontWeight: activeTab === idx ? "bold" : "normal",
                }}
                data-selected={activeTab === idx}
                tabIndex={0}
              >
                <Image
                  src={tab.icon}
                  alt={`Tab ${idx + 1} Icon`}
                  width={24}
                  height={24}
                  style={{ objectFit: "contain", cursor: "pointer" }}
                />
                {tab.label}
              </button>
            ))}
          </div>
          {/* Two column layout: Tab content on left, Chat on right */}
          <div className={styles.twoCol}>
            {/* Tab content column - 2/3 width */}
            <div className={styles.tabCol}>
              {/* Render killer stats */}
              {TAB_CONFIG[activeTab]?.type === "killers" && (
                <div className={styles.killersGrid}>
                  {KILLER_STATS.map((killer) => (
                    <div key={killer.name} className={`${styles.killerCard} ${styles.accentCard}`}>
                      <div className={styles.killerHeader}>
                        {KILLER_IMAGE_BY_NAME.get(killer.name.toLowerCase()) ? (
                          <Image
                            src={KILLER_IMAGE_BY_NAME.get(killer.name.toLowerCase()) as string}
                            alt={killer.name}
                            width={80}
                            height={80}
                            className={styles.killerPortrait}
                          />
                        ) : null}
                        <div className={styles.killerInfo}>
                          <h3 className={styles.killerName}>{killer.name}</h3>
                        </div>
                      </div>
                      <div className={styles.buildsSection}>
                        {killer.builds.map((build) => (
                          <div key={build.name} className={`${styles.buildCard} ${styles.accentCard}`}>
                            <h4 className={styles.buildName}>{build.name}</h4>
                            <div className={styles.perksGrid}>
                              {build.perks.map((perkName) => (
                                (() => {
                                  const name = String(perkName);
                                  const perkData = PERK_DATA_BY_NAME.get(name.toLowerCase());
                                  const iconSrc = perkData?.image ?? "";
                                  const descText = perkData?.description ?? "";
                                  return (
                                    <div
                                      key={name}
                                      className={styles.perkIcon}
                                      onClick={() =>
                                        setSelectedPerk({ name, description: descText, icon: iconSrc })
                                      }
                                      title={name}
                                    >
                                      {iconSrc ? (
                                        <Image src={iconSrc} alt={name} width={60} height={60} />
                                      ) : (
                                        <span>{name}</span>
                                      )}
                                    </div>
                                  );
                                })()
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Render regular items */}
              {TAB_CONFIG[activeTab]?.items && (
                <div className={styles.tabItems}>
                  {TAB_CONFIG[activeTab].items.map((item) => (
                    <div key={item} className={`${styles.tabItemCard} ${styles.accentCard}`}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* About Me column - 1/3 width */}
            <div className={styles.aboutCol}>
              <div className={`${styles.aboutCard} ${styles.accentCard}`}>
                {ABOUT_SECTION}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.socials}>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image src={social.icon} alt={social.label} width={22} height={22} className={styles.socialIcon} />
                <span className={styles.socialLabel}>{social.label}</span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: 0, color: "var(--secendary)", lineHeight: 1.5 }}>
            This page provider invites you to support and donate to{" "}
            <a
              href="https://www.thetrevorproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff69b4", textDecoration: "underline" }}
            >
              The Trevor Project
            </a>
            .
          </div>
          <div style={{ marginTop: 0, color: "var(--secendary)", lineHeight: 1.5 }}>
            Content and images parsed from{" "}
            <a
              href={`https://twitch.tv/${TWITCH_CHANNEL}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff69b4", textDecoration: "underline" }}
            >
              @{TWITCH_CHANNEL}
            </a>
          </div>
        </div>
      </footer>
      
      {/* Perk Modal */}
      {selectedPerk && (
        <div className={styles.modalOverlay} onClick={() => setSelectedPerk(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleSection}>
                <Image src={selectedPerk.icon} alt={selectedPerk.name} width={48} height={48} className={styles.modalPerkIcon} />
                <h2>{selectedPerk.name}</h2>
              </div>
              <button 
                className={styles.modalClose}
                onClick={() => setSelectedPerk(null)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>{selectedPerk.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
