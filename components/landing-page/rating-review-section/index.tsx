
import ReviewsSlider from "./ReviewsSlider";
import DownloadAppSection from "./DownloadAppSection";
import SectionLabel from "./SectionLabel";
import RatingSummaryCard from "./RatingSummaryCard";

export default function RatingAndReviewsSection() {
  return (
    <section className="py-20 px-4 my-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* ── Top heading ─────────────────────────────────── */}
        <div className="text-center flex flex-col gap-3">
          <SectionLabel text="Customer Reviews" />
          <h2 className="text-4xl md:text-[40px] font-extrabold text-gray-900 leading-tight">
            Hear What Our{" "}
            <span className="text-primary italic">
              Customer Says
              <span className="not-italic"> 🌿</span>
            </span>
          </h2>
        </div>

        {/* ── Rating + Reviews row ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 items-stretch">
          {/* Left: purple rating summary */}
          <RatingSummaryCard />

          {/* Right: review slider */}
          <ReviewsSlider />
        </div>
      </div>
    </section>
  );
}