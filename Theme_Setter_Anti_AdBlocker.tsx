import { useEffect, useState } from "react";

offlineMode = false; // Bypass the adblocker for offline testing purposes
export default function App() {
  // Theme Setter
  const Light = "rgb(245, 245, 245)";
  const Dark = "rgb(65, 65, 65)";
  const Darker = "rgb(25, 25, 25)";
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme || (userPrefersDark ? "dark" : "light");
  });
  useEffect(() => {
    const background = (() => {
      switch (theme) {
        case "light":
          return Light;
        case "dark":
          return Dark;
        case "darker":
          return Darker;
        default:
          return Light;
      }
    })();
    document.body.style.background = background;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    switch(theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("darker");
        break;
      case "darker":
        setTheme("light");
        break;
      default:
        setTheme("light");
    }
  };

  // Anti-Adblocker
  const [isAdBlockerEnabled, setIsAdBlockerEnabled] = useState<boolean>(false);
  useEffect(() => {
    const testAdBlocker = () => {
      const adScript = document.createElement('script');
      adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      adScript.async = true;
      adScript.onload = () => {
        setIsAdBlockerEnabled(false);
      };
      adScript.onerror = () => {
        setIsAdBlockerEnabled(true);
      };
      document.body.appendChild(adScript);
      return () => {
        if (document.body.contains(adScript)) {
          document.body.removeChild(adScript);
        }
      };
    };
    testAdBlocker();
  }, []);

  // CSS Area
  const themeColor = (() => {
    switch (theme) {
      case "light":
        return {color: Dark};
      case "dark":
        return {color: Light};
      case "darker":
        return {color: Light};
      default:
        return {color: Dark};
    }
  })();
  const themeBGColor = (() => {
    switch (theme) {
      case "light":
        return {background: Light};
      case "dark":
        return {background: Dark};
      case "darker":
        return {background: Darker};
      default:
        return {background: Light};
    }
  })();
  const disableMessageStyle: React.CSSProperties = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
return (
  <>
    {(!isAdBlockerEnabled || offlineMode) ? (
      <div style={themeColor}>
        <p>This text can change the color depending on the background</p>
        <button onClick={toggleTheme}>Change Theme</button>
        <br />
        <p>(Light / Dark / Darker)</p>
      </div>
    ) : (
      <div style={{ ...disableMessageStyle, ...themeColor }}>
        <h4>
          Please disable your ad blocker to access this website. <br />
          We depend on ads to keep this service free for you.
        </h4>
      </div>
    )}
  </>
);
}