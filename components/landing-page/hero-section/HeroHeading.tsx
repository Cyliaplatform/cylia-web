// HeroHeading.tsx

export function HeroHeading() {
  return (
    <div className="text-center">
      <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight lg:text-7xl">
        The Ultimate{" "}
        <span className="italic text-primary">
          Food Delivery Experience!
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
        Discover your favorite meals, order effortlessly,
        and enjoy fast delivery right to your doorstep.
      </p>
    </div>
  );
}