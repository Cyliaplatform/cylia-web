// CuisineTypes.tsx

const cuisineRows = [
  [
    { label: 'Italian', variant: 'dark' },
    { label: 'American', variant: 'purple' },
  ],
  [
    { label: 'Japanese', variant: 'dark' },
    { label: 'Thai', variant: 'dark' },
  ],
  [
    { label: 'Mexican', variant: 'purple' },
    { label: 'Indian', variant: 'dark' },
  ],
];

export function CuisineTypes() {
  return (
    <div className="absolute right-[2%] top-[68%] hidden -translate-y-1/2 xl:block">
      <div className="flex flex-col gap-3">
        {cuisineRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-3"
          >
            {row.map((item) => (
              <span
                key={item.label}
                className={`
                  w-fit
                  rounded-full
                  px-5
                  py-2.5
                  text-center
                  text-sm
                  font-medium
                  text-white
                  transition-all

                  ${
                    item.variant === 'purple'
                      ? 'bg-primary-purple'
                      : 'bg-dark'
                  }
                `}
              >
                {item.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}