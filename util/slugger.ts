import GitHubSlugger from 'github-slugger';

const createGitHubSlugger = () => {
  const slugger = new GitHubSlugger();

  return (text: string) => slugger.slug(text);
};

export default createGitHubSlugger;
