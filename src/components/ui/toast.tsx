export type ToastProps = {
  title?: string;
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export type ToastActionElement = React.ReactElement | null;

export default {} as unknown as Record<string, unknown>;
