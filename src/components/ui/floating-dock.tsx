import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  orientation = "horizontal",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} orientation={orientation} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("block md:hidden", className)}>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
        <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-900/90 backdrop-blur-lg border border-slate-700/40 px-4 py-3 shadow-lg">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:bg-blue-600/40 hover:text-blue-300 transition-colors touch-manipulation"
            >
              <div className="h-6 w-6">{item.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  orientation = "horizontal",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);
  
  const isVertical = orientation === "vertical";
  
  return (
    <motion.div
      onMouseMove={(e) => {
        if (isVertical) {
          mouseY.set(e.clientY);
        } else {
          mouseX.set(e.clientX);
        }
      }}
      onMouseLeave={() => {
        if (isVertical) {
          mouseY.set(Infinity);
        } else {
          mouseX.set(Infinity);
        }
      }}
      className={cn(
        isVertical 
          ? "fixed top-1/2 right-5 -translate-y-1/2 z-[100] w-16 flex-col items-center gap-4 rounded-2xl bg-slate-900/90 backdrop-blur-lg border border-slate-700/40 py-4 px-3 hidden md:flex shadow-lg"
          : "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-slate-900/90 backdrop-blur-lg border border-slate-700/40 px-4 pb-3 md:flex shadow-lg",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer 
          mouseX={mouseX} 
          mouseY={mouseY}
          orientation={orientation}
          key={item.title} 
          {...item} 
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  mouseY,
  title,
  icon,
  href,
  orientation = "horizontal",
}: {
  mouseX: MotionValue;
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  orientation?: "horizontal" | "vertical";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVertical = orientation === "vertical";

  const distance = useTransform(isVertical ? mouseY : mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
    return isVertical 
      ? val - bounds.y - bounds.height / 2
      : val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:bg-blue-600/40 hover:text-blue-300 transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ 
                opacity: 0, 
                y: isVertical ? 0 : 10, 
                x: isVertical ? 10 : "-50%" 
              }}
              animate={{ 
                opacity: 1, 
                y: isVertical ? 0 : 0, 
                x: isVertical ? 0 : "-50%" 
              }}
              exit={{ 
                opacity: 0, 
                y: isVertical ? 0 : 2, 
                x: isVertical ? 2 : "-50%" 
              }}
              className={cn(
                "absolute w-fit rounded-md border border-slate-700/50 bg-slate-900/95 backdrop-blur-sm px-2 py-0.5 text-xs whitespace-pre text-slate-300",
                isVertical 
                  ? "-left-16 top-1/2 -translate-y-1/2" 
                  : "-top-8 left-1/2"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
