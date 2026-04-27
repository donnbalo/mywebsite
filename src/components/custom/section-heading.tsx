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
      className={`mb-14 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-gradient-animated">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 gradient-line max-w-[80px] rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
        style={{ height: "2px" }}
      />
    </div>
  );
}
