export interface Link {
  label: string;
  type?: "text" | "img";
  imgSrc?: string;
  imgWidth?: number;
  imgHeight?: number;
  animationDelayIndex?: number;
}

export interface LinkProps extends Link {
  sup?: string;
  isActive?: boolean;
  isExpandable?: boolean;
}

export interface PropsWithClassName {
  className?: string;
}
