import React from "react";
import ReactDOM from "react-dom";
import "./style.css";


const App = () => {
    return (
            <><nav>
            <a href="#">Home</a>
            <a href="https://www.linkedin.com/in/cristian-gonzalez-495188136/">LinkedIn Profile</a>
            <a href="#">Portfolio</a>
            <a href="https://bootcampspot.com/login">Work History</a>
        </nav><header>
                <h1 class="title">Cristian's Portfolio</h1>
            </header><main>
                <ul class="gallery">
                    <li class="box-1">
                        <h1 class="card-header">Repos...</h1>
                        <div>Use these three properties to create a Flexbox row layout</div>
                        <pre>
                            <a href="https://github.com/Y0ungyG0nz98?tab=repositories" class="w3-btn w3-black">Link Button</a>
                        </pre>
                    </li>
                    <li class="box-2">
                        <h1 class="card-header">Photos...</h1>
                        <div>Use these three properties to create a Flexbox row layout</div>
                        <pre>
                            <a href="https://www.w3schools.com" class="w3-btn w3-black">Link Button</a>
                        </pre>
                    </li>
                    <li class="box-2">
                        <h1 class="card-header">Reviews...</h1>
                        <div>Use these three properties to create a Flexbox row layout</div>
                        <pre>
                            <a href="https://www.w3schools.com" class="w3-btn w3-black">Link Button</a>
                        </pre>
                    </li>
                </ul>
            </main></>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
