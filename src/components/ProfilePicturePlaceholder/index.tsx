import React from "react";

const COLORS = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-light",
];

const ProfilePicturePlaceholder = ({
  name,
  initials,
  color,
}: {
  name?: string;
  initials?: string;
  color?: string;
}) => {
  let colorClass;
  if (color && color in COLORS) {
    colorClass = color;
  } else {
    colorClass = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  let nameInitials = "";
  if (initials) {
    nameInitials = initials;
  } else if (name) {
    nameInitials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
  }

  return (
    <span className={`rounded-circle p-2 ${colorClass}`}>{nameInitials}</span>
  );
};
export default ProfilePicturePlaceholder;
