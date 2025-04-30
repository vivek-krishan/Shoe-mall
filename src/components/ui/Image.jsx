function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Image({ src, alt, fill, className, priority = "eager" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "object-cover",
        fill && "absolute inset-0 w-full h-full",
        className
      )}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

export default Image;
