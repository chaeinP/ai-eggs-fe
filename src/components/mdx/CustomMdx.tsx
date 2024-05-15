import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

const components = {
  ul: (props: any) => <ul {...props} />,
};

export function CustomMDX(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
