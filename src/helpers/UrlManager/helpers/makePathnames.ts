type tParamMakePathName = {
  prefix: string;
  namespace: string;
  pathnames: string | string[];
};
export default function makePathnames(params: tParamMakePathName) {
  const { namespace, pathnames, prefix } = params;
  const joiner = "/";
  const joinedPath =
    typeof pathnames === "string" ? pathnames : pathnames.join(joiner);

  return [prefix, namespace, joinedPath].join(joiner);
}
