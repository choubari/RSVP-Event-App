import ContentLoader from "react-content-loader";
export default function Loading() {
  return (
    <ContentLoader
      speed={2}
      width={1500}
      height={500}
      viewBox="0 0 1000 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="20" rx="2" ry="2" width="100%" height="40" />
      <rect x="0" y="90" rx="2" ry="4" width="100%" height="100%" />
    </ContentLoader>
  );
}

// export default function Loading() {
//   return (
//     <p>Loading...</p>
//   );
// }
