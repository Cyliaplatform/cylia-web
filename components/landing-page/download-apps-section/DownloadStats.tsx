const stats = [
  {
    value: '2 Million',
    suffix: '+',
    label: 'Active Users',
  },
  {
    value: '1600',
    suffix: '+',
    label: 'Restaurants',
  },
  {
    value: '120',
    suffix: '+',
    label: 'Cities Served',
  },
];

export function DownloadStats() {
  return (
   <div className="mt-10 flex justify-center 2xl:justify-start  items-start gap-10 lg:gap-14">
      {stats.map((item, index) => (
        <div
          key={item.label}
          className="
            flex
            items-start
           gap-10
          "
        >
          <div>
            <div className="flex items-center justify-center">
              <span
                className="
                text-2xl
                  md:text-3xl
                  font-bold
                  text-dark
                "
              >
                {item.value}
              </span>

              <span
                className="
                  ml-1
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-primary
                "
              >
                {item.suffix}
              </span>
            </div>

            <p
              className="
                mt-2
                text-[16px]
                md:text-lg
                text-gray-500
              "
            >
              {item.label}
            </p>
          </div>

          {index !== stats.length - 1 && (
            <div
              className="
                hidden
                h-22
                w-px
                bg-gray-300
                lg:block
              "
            />
          )}
        </div>
      ))}
    </div>
  );
}