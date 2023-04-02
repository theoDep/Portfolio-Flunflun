export default function Carousel({ children }) {
  return (
    <div className="h-[100vh] w-full carousel carousel-vertical">
      {children}
    </div>
  );
}
