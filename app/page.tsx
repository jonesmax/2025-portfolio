"use client";
import { useState } from "react";
import styles from "./page.module.css";

// Color variables
const PINK_ACCENT = "#f655a2";

// Configurable variables
const PROFILE_NAME = "Vicki Valiant";
const TWITCH_CHANNEL = "vickivaliant";
const PROFILE_BANNER =
  "https://static-cdn.jtvnw.net/jtv_user_pictures/039e0cd0-aade-4f5e-9189-dc998f400673-profile_banner-480.png";
const TAB_CONFIG = [
  {
    label: "About",
    icon: "https://deadbydaylight.wiki.gg/images/1/10/IconPerks_corruptIntervention.png",
    paragraph: `Welcome to Vicki Valiant's hub page! Vicki is a passionate streamer who loves sharing her adventures, laughs, and gaming moments with her community. Whether you're here for Dead by Daylight tips, fun conversations, or just to hang out, you're in the right place. Visit the channel, make some friends, and enjoy the show!`,
  },
  {
    label: "DBD Info",
    icon: "https://deadbydaylight.wiki.gg/images/1/10/IconPerks_corruptIntervention.png",
    items: ["Giraffe", "Hippo", "Iguana", "Jaguar", "Kangaroo", "Lion"],
  },
  {
    label: "Other",
    icon: "https://deadbydaylight.wiki.gg/images/1/10/IconPerks_corruptIntervention.png",
    items: ["sdfe", "Hippo", "Iguana", "Jaguar", "Kangaroo", "Lion"],
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

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            height: "250px",
            backgroundImage: `url('${PROFILE_BANNER}')`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            borderBottom: `6px solid ${PINK_ACCENT}`,
          }}
        >
          {/* Profile Image Circle */}
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/ade7eb68-f401-4261-9b09-8b7edae3a226-profile_image-300x300.png"
            alt="Profile"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "65px",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "5px solid white",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              objectFit: "cover",
              zIndex: 2,
            }}
          />
          <div
            style={{
              width: "100%",
              background: "rgba(0, 0, 0, 0.53)",
              padding: "16px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 0,
              left: 0,              height:'45px',
              zIndex: 1,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: "2rem",
                fontWeight: "bold",
                letterSpacing: "2px",
  
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                marginLeft: "80px",
                marginRight: "80px",
                width: "100%",
                textAlign: "center",
              }}
            >
              {PROFILE_NAME}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.63)",
          paddingBottom: "48px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
          flex: "1 1 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "36px",
            paddingBottom: "26px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "700px",
              aspectRatio: "16 / 9",
              margin: "15px",
              boxShadow: `0 0 0 4px ${PINK_ACCENT}, 0 0 24px 8px ${PINK_ACCENT}`, // pink glow stroke
              borderRadius: "5px",
              padding: "2px",
              background: "#000", // optional: helps with padding edge
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <iframe
              src={`https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=localhost`}
              allowFullScreen={true}
              frameBorder={0}
              scrolling="no"
              style={{
                borderRadius: "2px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
            ></iframe>
          </div>
        </div>

        <div style={{ paddingTop: "5px", flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {TAB_CONFIG.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={styles.tabButton}
                type="button"
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderBottom:
                    activeTab === idx
                      ? "2px solid rgb(152, 152, 152)"
                      : "2px solid transparent",
                  background: "none",
                  fontWeight: activeTab === idx ? "bold" : "normal",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "white",
                  cursor: "pointer",
                }}
                aria-selected={activeTab === idx}
                tabIndex={0}
              >
                <img
                  src={tab.icon}
                  alt={`Tab ${idx + 1} Icon`}
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
                {tab.label}
              </button>
            ))}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "24px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              justifyContent: "flex-start",
              flex: "1 1 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              {activeTab === 0 ? (
                <div
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.71)",
                    padding: "18px",
                    borderRadius: "8px",
                    boxSizing: "border-box",
                    color: "#222",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    textAlign: "left",
                  }}
                >
                  {TAB_CONFIG[0].paragraph}
                </div>
              ) : (
                TAB_CONFIG[activeTab]?.items?.map((item) => (
                  <div
                    key={item}
                    style={{
                      flex: "1 1 45%",
                      minWidth: "300px",
                      maxWidth: "400px",
                      background: "#f0f0f0",
                      padding: "16px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <footer
        style={{
          width: "100%",
          textAlign: "center",
          background: "#222",
          color: "white",
          flexShrink: 0,
          borderTop: `6px solid ${PINK_ACCENT}`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  minWidth: "110px",
                  marginBottom: "8px",
                  flex: "0 1 auto",
                  cursor: "pointer",
                }}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  style={{
                    width: "22px",
                    height: "22px",
                    filter:
                      "invert(56%) sepia(91%) saturate(7492%) hue-rotate(299deg) brightness(97%) contrast(101%)",
                    display: "inline-block",
                    verticalAlign: "middle",
                    cursor: "pointer",
                  }}
                />
                <span style={{ color: "white", cursor: "pointer" }}>
                  {social.label}
                </span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: "0", color: "white", lineHeight: "1.5" }}>
            This page provider invites you to support and donate to {" "}
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
          <div style={{ marginTop: "0", color: "white", lineHeight: "1.5" }}>
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
    </div>
  );
}
