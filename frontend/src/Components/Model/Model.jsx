import React from "react";

import "./Model.css";

function Model() {
    return (
        <div className="model-initial-conainer">
            <div className="model-container">
                <div className="model-header">
                    <div className="model-title">
                        The AI Engineer Course 2025: <br /> Complete AI Engineer Bootcamp
                    </div>

                </div>
                <div className="model-subheader">
                    <span className="bestseller-badge">Bestseller</span>
                    <div className="model-subtext">Updated <b className="date">November 2025</b></div>
                </div>


                <div className="model-info">29.5 total hours • All Levels • Subtitles</div>

                <div className="model-desc">
                    Complete AI Engineer Training: Python, NLP,<br /> Transformers, LLMs,
                    LangChain, Hugging Face,<br /> APIs
                </div>
                <div className="list-heading">
                    ✓ <div className="list-desc">The course provides the entire toolbox you<br/> need to become an AI Engineer</div>
                    ✓<div className="list-desc"> The course provides the entire toolbox you<br/> need to become an AI Engineer</div>
                    ✓<div className="list-desc"> The course provides the entire toolbox you<br/> need to become an AI Engineer</div>
                

                </div>



                <button className="add-to-cart">
                    <div className="addtocart">Add to cart</div></button>
            </div>

        </div>

    );
}

export default Model;
