import "~/styles/index.scss";

const Index = () => (
    <div>
        <h1>This is a H1 Block</h1>
        <h2>This is a H2 Block</h2>
        <h3>This is a H3 Block</h3>
        <p>This is a standard paragraph.</p>
        <br/>
        <h1 className='font-dark'>This is a H1 Block Dark</h1>
        <h2 className='font-dark'>This is a H2 Block Dark</h2>
        <h3 className='font-dark'>This is a H3 Block Dark</h3>
        <p>This is a standard paragraph with dark font.</p>
        <br/>
        <h1 className='highlight-red'>This is a H1 Block Highlighted</h1>
        <h2 className='highlight-red'>This is a H2 Block Highlighted</h2>
        <h3 className='highlight-red'>This is a H3 Block Highlighted</h3>
        <p>This is a <span className='highlight-red'>standard paragraph</span> with highlighted font.</p>
    </div>
);

export default Index;