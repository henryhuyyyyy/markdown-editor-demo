import TitleBar from "../title-bar/bar";
import ReactMarkdown from 'react-markdown';
import { useMarkdown } from "../../providers/markdown";
import './preview.css';


// "Preview" section implementation
const Preview = () => {
    const [markdown] = useMarkdown();

    return (
        <div className="preview">
            <TitleBar title="Preview" />
            <div className="preview-scroll">
                <ReactMarkdown>{ markdown }</ReactMarkdown>
            </div>
        </div>
    );
}

export default Preview;