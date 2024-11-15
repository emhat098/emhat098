import {
  Sandpack,
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import { FC } from 'react';

export interface CodeEditorProps {
  template: SandpackPredefinedTemplate;
  files?: SandpackFiles;
  options?: {
    showConsole: boolean;
  };
}

const CodeEditor: FC<CodeEditorProps> = ({ files, template, options }) => {
  return (
    <Sandpack
      files={files}
      template={template}
      options={{
        autoReload: true,
        autorun: true,
        showLineNumbers: true,
        ...options,
      }}
    />
  );
};

export default CodeEditor;
