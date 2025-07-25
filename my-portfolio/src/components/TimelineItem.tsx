import React from "react";

export interface TimelineItemProps {
  icon: React.ReactNode;
  description: React.ReactNode;
  extraContent?: React.ReactNode;
  iconType?: "avatar" | "filled" | "faded";
  extraSpacing?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  description,
  extraContent,
  // iconType = "faded",
  extraSpacing = true,
}) => (
  <li className={`relative left-[-60px] flex items-start gap- ${extraSpacing ? "mt-12" : "mt-6"} timeline-item`}>
    {/* Icon */}
    <span
      className={`absolute flex my-auto items-center justify-center w-14 h-14 rounded-full bg-white
        `}
    >
      {icon}
    </span>
    {/* Content */}
    <div className="ml-14 pl-4">{description}</div>
    {extraContent && <div className="mt-4">{extraContent}</div>}
  </li>
);

export default TimelineItem;