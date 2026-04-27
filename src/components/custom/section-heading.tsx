export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-muted-foreground/70 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
