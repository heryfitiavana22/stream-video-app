export default function Component() {
  return (
    <>
      <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white shadow-md sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a className="flex items-center" href="#">
            <MountainIcon className="h-6 w-6 mr-2" />
            <span className="text-lg font-bold">Acme Video</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <a className="hover:underline" href="#">
            Home
          </a>
          <a className="hover:underline" href="#">
            Videos
          </a>
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Video Title</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Another Video</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Interesting Video</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Awesome Video</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Cool Video</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Interesting Video</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Awesome Video</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Video Thumbnail"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Cool Video</h3>
              <p className="text-gray-600">
                This is a short description of the video. It should be a few
                sentences long.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
