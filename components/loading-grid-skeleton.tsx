import ContentLoader from "react-content-loader";

export default function LoadingSkeleton() {
  return (
    <ContentLoader
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      width={2000}
      height={775}
      interval={0.02}
      viewBox="0 0 2000 775"
    >
      <rect x="0" y="0" rx="2" ry="2" width="320" height="210" />
      <rect x="340" y="0" rx="2" ry="2" width="320" height="210" />
      <rect x="680" y="0" rx="2" ry="2" width="320" height="210" />
      <rect x="0" y="230" rx="2" ry="2" width="320" height="210" />
      <rect x="340" y="230" rx="2" ry="2" width="320" height="210" />
      <rect x="680" y="230" rx="2" ry="2" width="320" height="210" />
      <rect x="0" y="460" rx="2" ry="2" width="320" height="210" />
      <rect x="340" y="460" rx="2" ry="2" width="320" height="210" />
      <rect x="680" y="460" rx="2" ry="2" width="320" height="210" />
    </ContentLoader>
  );
}
