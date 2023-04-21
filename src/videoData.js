const videoList = [
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          type: "video/mp4"
        }
      ],
      poster: "https://www.rt.com/static/img/og-logo-rt.png"
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
          type: "video/mp4"
        }
      ],
      poster: "http://media.w3.org/2010/05/bunny/poster.png"
    },
    {
      sources: [
        {
          src: "https://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4"
        }
      ],
      poster: "https://vjs.zencdn.net/v/oceans.png"
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/bunny/movie.mp4",
          type: "video/mp4"
        }
      ],
      poster: "http://media.w3.org/2010/05/bunny/poster.png"
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4"
        }
      ],
      poster: "http://media.w3.org/2010/05/video/poster.png"
    }
  ];

export const videoUrls = videoList.map((video) => video.sources[0].src);
