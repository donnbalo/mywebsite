"use client";

import { useEffect, useState, useCallback } from "react";

const roles = [
  "Electronics Engineer",
  "AI Engineer",
  "Test Product Engineer",
  "Prompt Engineer",
];

export function Typewriter({
  className = "",
}: {
  className?: string;
}) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting) {
      // Typing
      setDisplayText(currentRole.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentRole.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      // Deleting
      setDisplayText(currentRole.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [currentRoleIndex, displayText, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className={className}>
      {displayText}
      <span
        className="inline-block w-[3px] h-[1em] ml-1 align-middle"
        style={{
          background: "oklch(0.72 0.19 150)",
          animation: "typewriter-cursor 0.8s step-end infinite",
        }}
      />
    </span>
  );
}
