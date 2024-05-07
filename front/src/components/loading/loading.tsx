export function Loading({}: LoadingProps) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="text-xl">Loading...</div>
    </div>
  );
}

type LoadingProps = {};
