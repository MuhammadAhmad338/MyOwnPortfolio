import ProjectClient from './ProjectClient';

const projectSlugs = [
  "fooddash", "taskflow", "anzatexintl", "ghostdetector",
  "soravpn", "seelvpn", "yallavpn", "tytanvpn", "totemvpn",
  "gotovpn", "safenetvpn", "kryptonyme", "easyguard", "freeroam",
  "kestrelvpn", "rockyvpn", "gshieldvpn", "pranksounds", "pixelcount", "octavpn"
];

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ project: slug }));
}

export default ProjectClient;