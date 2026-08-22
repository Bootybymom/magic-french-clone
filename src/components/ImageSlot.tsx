type ImageSlotProps = {
  label?: string;
  className?: string;
  ratio?: string;
};

/** Emplacement d'image vide — sera remplacé par les visuels fournis. */
export function ImageSlot({ label = "Image", className = "", ratio = "1 / 1" }: ImageSlotProps) {
  return (
    <div
      className={`img-slot flex w-full items-center justify-center overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="px-3 text-center text-xs font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
