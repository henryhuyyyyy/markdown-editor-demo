import './layout.css';

const MainLayout = ({ children }) => (
    <main>
        { children }
    </main>
);

MainLayout.Column = ({ children }) => (
    <div className="mainLayout-col">
        { children }
    </div>
);

export default MainLayout;