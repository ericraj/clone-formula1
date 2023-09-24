export interface Link {
  label: string;
}

export interface LinkProps extends Link {
  sup?: string;
  isActive?: boolean;
  isExpandable?: boolean;
}

export interface PropsWithClassName {
  className?: string;
}
