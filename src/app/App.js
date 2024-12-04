import Editor from "./components/editor/editor";
import MainLayout from "./components/main-layout/layout";
import Preview from './components/preview/preview';
import MarkdownProvider from "./providers/markdown";

const App = () => (
    <MarkdownProvider>
      <MainLayout>
        <MainLayout.Column>
          <Editor />
        </MainLayout.Column>
        <MainLayout.Column>
          <Preview />
        </MainLayout.Column>
      </MainLayout>
    </MarkdownProvider>
);

export default App;