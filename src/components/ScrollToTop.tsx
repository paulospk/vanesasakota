import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    // Temporarily disable smooth scrolling so route changes jump to top instantly,
    // regardless of how far down the previous page the user was.
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    // Restore smooth scrolling for in-page anchor navigation on the next tick.
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousBehavior;
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

