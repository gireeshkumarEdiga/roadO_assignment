import { Link } from "react-router-dom";
import "./Home.css";
// import './App.css';

export const Home = () => {
    return (
        <div id="main">
            <p>Vocab</p>
            <div id="words">
                <h3>Words List</h3>
                <hr />
                <Link id="inquisition" to="/inquisition"><h3>Inquisition</h3></Link>
                <p>(noun) a period of prolonged and intensive questioning</p>
                <hr />
                <Link id="candid" to="/candid"><h3>candid</h3></Link>
                <p>(adjective) truthful and straightforward : frank</p>
                <hr />
                <Link id="rhetorical" to="/rhetorical"><h3>rhetorical</h3></Link>
                <p>(adjective) relating to or concerned with the art of rhetoric.</p>
                <hr />
                <Link id="melodrama" to="/melodrama"><h3>melodrama</h3></Link>
                <p>(noun) a sensational dramatic piece with exaggerated characters and exciting events intended to appeal to the emotions</p>
                <hr />
                <Link id="piecemeal" to="/piecemeal"><h3>piecemeal</h3></Link>
                <p>(adjective) characterized by unsystamatic partial measures taken over a period of time.</p>
                <p>(adverb) in an unsystematic way. through partial measures taken over a period of time.</p>
                <hr />
                <Link id="through" to="/through"><h3>through</h3></Link>
                <p>(adjective) complete with regard to every details: not superficial or partial</p>
                <hr />
                <Link id="beautiful" to="/beautiful"><h3>beautiful</h3></Link>
                <p>(adjective) pleasing the senses or mind aesthetically</p>
                <hr />
                <Link id="resource" to="/resource"><h3>resource</h3></Link>
                <p>(noun) a stock or supply of money, materials, staff, and other assets that can be drwan on by a person or organization in order to function effectively</p>
                <p>(verb) provide with resources</p>
            </div>
        </div>
    )
}