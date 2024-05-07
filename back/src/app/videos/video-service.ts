export class VideoService {
  private data = [
    {
      id: 1,
      url: "video1.mp4",
      thumbnail: "img1.png",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, officia.",
    },
    {
      id: 2,
      url: "video2.mp4",
      thumbnail: "img2.png",
      title: "Consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, officia.",
    },
    {
      id: 3,
      url: "video3.mp4",
      thumbnail: "img3.png",
      title: "Vitae, officia",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, officia.",
    },
    {
      id: 4,
      url: "video4.mp4",
      thumbnail: "img4.png",
      title: "Dolor sit",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, officia.",
    },
    {
      id: 5,
      url: "video5.mp4",
      thumbnail: "img5.png",
      title: "Amet consectetur",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, officia.",
    },
  ];
  constructor() {}

  find = () => {
    return this.data;
  };

  findByUrl = (url: string) => {
    return this.data.find((item) => item.url === url);
  };
}
