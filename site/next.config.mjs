import { withContentlayer } from "next-contentlayer";

const redirects = [
  {
    source: '/manifesto',
    destination: '/blog/2015/11/01/manifesto',
    permanent: true,
  },
  {
    source: '/27aout',
    destination: '/blog/2022/07/15/art-eco-spirituality-aug-2022',
    permanent: true,
  },
  {
    source: '/sunflower-school',
    destination: '/blog/2021/11/12/sunflower-school-ecole-des-tournesols',
    permanent: true,
  },
  {
    source: '/mindfulness',
    destination: '/blog/2020/06/29/mindfulness-an-introduction',
    permanent: true,
  },
  {
    source: '/bergerac-build',
    destination: '/blog/2020/07/09/bergerac-build-festival-2020-gathering-builders-diggers-and-dreamers',
    permanent: true,
  },
  {
    source: '/imaginary-society',
    destination: '/blog/2021/09/09/the-imaginary-society-series',
    permanent: true,
  },
  {
    source: '/institute/compassionate-mental-health',
    destination: '/blog/2021/05/14/compassionate-mental-health/',
    permanent: true,
  },
  {
    source: '/community-projects',
    destination: '/blog/2021/03/18/berlin-hub-community-projects',
    permanent: true,
  },
  {
    // regex matches slugs starting with the date format YYYY/mm/dd
    source: '/:slug(\\d{4}\/(?:0?[1-9]|1[012])\/(?:0?[1-9]|[12][0-9]|3[01])\/.*)',
    destination: '/blog/:slug',
    permanent: false,
  },
]

export default withContentlayer({
  async redirects() {
    return redirects
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
});
