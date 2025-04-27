type VisuallyHiddenProps = {
  children: React.ReactNode;
};

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  //NOTE: I normally don't use inline styles, using it here for simplicity
  //
  return (
    <span
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        border: 0,
      }}
    >
      {children}
    </span>
  );
}
