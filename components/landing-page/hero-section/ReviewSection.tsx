import Image from "next/image";
// ReviewsSection.tsx
import user1 from "@/public/images/review-users/user1.png";
import user2 from "@/public/images/review-users/user2.png";
import user3 from "@/public/images/review-users/user3.png";

const userImages = [user1, user2, user3, user3];

export function ReviewsSection() {
  return (
    <div className="absolute left-6 top-20 hidden xl:block">
      <div className="space-y-2">
        {/* Overlapping Avatar Stack */}
        <div className="flex items-center mb-3">
          {userImages.map((src, index) => (
            <div
              key={index}
              style={{
                width: 48,
                height: 48,

                marginLeft: index === 0 ? 0 : -12,
                position: "relative",
                zIndex: userImages.length - index,
                overflow: "hidden",
                opacity: 1,
                flexShrink: 0,
              }}
            >
              <Image
                src={src}
                alt={`User ${index + 1}`}
                fill
                sizes="48px"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <h3 className="text-2xl font-bold text-primary-purple">
          50k+ Reviews{" "}
          <span className="text-2xl text-dark">{"( 4.9 of 5 )"}</span>
        </h3>

        <p className="text-gray-500">Reviews from Our Users</p>
      </div>
    </div>
  );
}
